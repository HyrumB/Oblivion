const menu = document.querySelector("#menu"); // button
const nav = document.querySelector("nav"); // thing to hide

menu.addEventListener("click", () => {
  nav.classList.toggle("hide");
});

const expandDesc = document.querySelector("#expand-desc"); // button
const apodDescription = document.querySelector("#apod-description"); // thing to hide

// if the page isnt the homepage dont run this code
if (apodDescription !== null) {
  // event listener for expanding the home's description
  expandDesc.addEventListener("click", () => {
    apodDescription.classList.toggle("hide");
  });
}
// checks the size of the screen and hides the button if it is too big
function checkScreenSize() {
  const windowWidth = window.innerWidth;
  const threshold = 1250;

  if (windowWidth <= threshold) {
    menu.classList.remove("hide"); //show button
    nav.classList.add("hide");
    if (apodDescription !== null) {
      apodDescription.classList.add("hide");
    }
  } else {
    menu.classList.remove("hide");
    nav.classList.remove("hide");
    if (apodDescription !== null) {
      apodDescription.classList.add("hide");
    }
  }
}

checkScreenSize();

window.addEventListener("resize", checkScreenSize);
