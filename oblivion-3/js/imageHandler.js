import { getAPOD } from "./externalServices.js";
import { getToday } from "./dateHandler.js";

// html elements
const heroImage = document.querySelector("#hero-img");
const heroContainer = document.querySelector("#hero-box");
const title = document.querySelector("#apod-title");
const description = document.querySelector("#apod-description");
const newDate = document.querySelector("#date");
const changeAPODBtn = document.querySelector("#change-apod");
const spinner = document.querySelector(".spinner");

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight

let today = getToday();

let key = "e5E3axyZePX2lbsyxitYnkdGzgVbc9WIopyOyxS7";

changeAPODBtn.addEventListener("click", () => {
  changeAPOD(key, newDate.value);
});

// ajax spinner functions
function showSpinner() {
  spinner.style.display = "block";
  heroImage.style.display = "none";
}
function hideSpinner() {
  spinner.style.display = "none";
  heroImage.style.display = "block";
}




function changeAPOD(key, today) {
  showSpinner();
  getAPOD(key, today).then((data) => {
    hideSpinner();
    

    // detects if image is portrait and if it is
    // it then rotates the image
    const img = new Image();
    img.onload = function () {

      if (this.width < this.height) {
        console.log("portrait");
        heroImage.style.transform = "rotate(90deg)";
        heroContainer.classList.toggle("portrait-container");
        
      }
    };

    //detects if image or video and responds correctly
    if (data.media_type === "image") {
      img.src = data.url;
      heroImage.src = data.hdurl;
      heroImage.alt = "todays's Astronomical picture from nasa";
      title.innerHTML = `Title: ${data.title}`;
      description.innerHTML = data.explanation;

    } else if (data.media_type === "video") {
      alert('sorry, the "image" for this date is a Video');
      console.log("video");
      title.innerHTML = `Title: ${data.title}`;
      description.innerHTML = data.explanation;
    }
  });
}

changeAPOD(key, today);
