// select all elements with class="hideIfJavaScriptEnabled"
const hideIfJavaScriptEnabled = document.getElementsByClassName(
  "hideIfJavaScriptEnabled"
);
// hide them all by setting display to "none"
Array.prototype.forEach.call(hideIfJavaScriptEnabled, function(eachElement) {
  eachElement.classList.add("is-hidden");
});

// SET FOCUS ON THE FIRST TEXT FIELD
// on page load, set focus on the first text field
const initialFocus = document.getElementById("name");
initialFocus.focus();

// "JOB ROLE" SECTION
// reveal text field 'Your Job Role' when "Other" option is selected
let jobTitle = document.getElementById("title");
jobTitle.addEventListener("change", e => {
  let jobRole = e.target.value;
  if (jobRole === "other") {
    hideIfJavaScriptEnabled[0].classList.remove("is-hidden"); // unhide the 0th element in the array, i.e. the 'Your Job Role' text field
    hideIfJavaScriptEnabled[0].id = "other-title"; // add an id attribute to the text field
    hideIfJavaScriptEnabled[0].placeholder = "Your Job Role"; // replace default placeholder with new text
    const kids = jobTitle.children;
    if (kids[4].text === "Student") {
      console.log("stuuuudent");
    }
  }
});

// "T-SHIRT INFO" SECTION
// initially hide "color" label and menu
let shirtColors = document.getElementById("colors-js-puns");
shirtColors.classList.add("is-hidden");
let colors = document.getElementById("color"); // select the <select> element with id="color"
let colorsChildren = colors.children;
let defaultColor; // for the shirt color dropdown
//
let theme = document.getElementById("design"); // select the <select> element with id="design"
let re = new RegExp("");
theme.addEventListener("change", e => {
  let themeSelected = e.target.value;
  if (themeSelected === "js puns") {
    re = /puns/i;
    defaultColor = colorsChildren[0];
    defaultColor.selected = true; // set the displayed color to the first of the "js puns" colors
    setShirtColors(re);
  } else if (themeSelected === "heart js") {
    re = /JS shirt/i;
    defaultColor = colorsChildren[3];
    defaultColor.selected = true; // set the displayed color to the first of the "heart js" colors
    setShirtColors(re);
  } else {
    shirtColors.classList.add("is-hidden"); // re-hide the "color" label and menu if is was displayed
  }
  //
  function setShirtColors(regex) {
    shirtColors.classList.remove("is-hidden"); // unhide the "color" label and menu
    // loop over the <option> elements that are the shirt colors,
    // each time unhide it, then hide it if the regex that has been passed in does not match it's text
    for (let i = 0; i < colorsChildren.length; i++) {
      colorsChildren[i].classList.remove("is-hidden");
      let childText = colorsChildren[i].text;
      if (childText.search(regex) < 0) {
        colorsChildren[i].classList.add("is-hidden");
      }
    }
  }
});
