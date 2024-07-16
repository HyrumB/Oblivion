import { getAPOD } from "./externalServices.js";
import { getToday } from "./dateHandler.js";
import { NASA_API_KEY } from "./env.js";
import { hideSpinner, showSpinner } from "./ajaxSpinner.js";

if ((NASA_API_KEY == null)) {
  alert("NASA API KEY NOT FOUND");
}

// html elements
const heroImage = document.querySelector("#hero-img");
const heroContainer = document.querySelector("#hero-box");
const title = document.querySelector("#apod-title");
const description = document.querySelector("#apod-description");
const newDate = document.querySelector("#date");
const changeAPODBtn = document.querySelector("#change-apod");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

let today = getToday();

const key = NASA_API_KEY;

changeAPODBtn.addEventListener("click", () => {
  changeAPOD(key, newDate.value);
});

function changeAPOD(key, today) {
  showSpinner();
  heroImage.style.display = "none";
  getAPOD(key, today).then((data) => {
    hideSpinner();
    heroImage.style.display = "block";

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
