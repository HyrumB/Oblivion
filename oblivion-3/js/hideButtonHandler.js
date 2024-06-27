const menu = document.querySelector("#menu"); // button
const nav = document.querySelector("nav"); // thing to hide

menu.addEventListener("click", () => {
  nav.classList.toggle("hide");
});

const expandDesc = document.querySelector("#expand-desc"); // button
const apodDescription = document.querySelector("#apod-description"); // thing to hide

if (apodDescription !== null) {
  expandDesc.addEventListener("click", () => {
    apodDescription.classList.toggle("hide");
  });
}

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
