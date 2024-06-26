const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("hide");
});

const expandDesc = document.querySelector("#expand-desc");
const apodDescription = document.querySelector("#apod-description");

expandDesc.addEventListener("click", () => {
  apodDescription.classList.toggle("hide");
});

function checkScreenSize() {
  const windowWidth = window.innerWidth;
  const threshold = 768;

  if (windowWidth <= threshold) {
    menu.classList.add("hide"); // Add the class 'small-screen'
    apodDescription.classList.add("hide");
    console.log("Small screen");
  } else {
    console.log("Large screen");
  }
}

checkScreenSize();
