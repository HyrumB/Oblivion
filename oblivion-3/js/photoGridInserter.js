import {
  getFromLocalStorage,
  getLibraryMedia,
  getUrl,
  saveToLocalStorage,
} from "./externalServices.js";
import { createNASALibraryQuery } from "./queryFormats.js";
import { hideSpinner, showSpinner } from "./ajaxSpinner.js";

const submit = document.querySelector(".search-button");

submit.addEventListener("click", getMedia);

// sends input on enter key press
document.querySelector(".q").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    getMedia();
  }
});

// creates query and sends it to photoGridInserter
async function getMedia() {
  const params = createNASALibraryQuery();
  const data = await getLibraryMedia("search", params);
  saveToLocalStorage("NASA_MEDIA", data);

  showSpinner();
  createImageCards(data);
  hideSpinner();
}

// creates the image cards and fills them out
function createImageCards(data, imgCount = 500) {
  const parentContainer = document.querySelector("#photo-grid");
  parentContainer.innerHTML = "";

  const items = data.collection.items.slice(0, imgCount);

  for (const item of items) {
    const card = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("p");

    card.classList.add("lib-cards");
    img.classList.add("lib-img");
    img.loading = "lazy";
    getUrl(item.href).then((data) => {
      img.src = data[3];
    });
    name.classList.add("lib-title");
    name.textContent = item.data[0].title;

    card.appendChild(img);
    card.appendChild(name);
    parentContainer.appendChild(card);
  }
}

function loadStorage() {
  if (localStorage.getItem("NASA_MEDIA") !== null) {
    try {
      // Attempt to parse the JSON data
      const localData = getFromLocalStorage("NASA_MEDIA");
      createImageCards(localData);
    } catch (error) {
      console.log(error);
    }
  }
}

loadStorage();
