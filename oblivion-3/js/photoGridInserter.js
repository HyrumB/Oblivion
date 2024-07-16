import { getLibraryMedia, getUrl } from "./externalServices.js";
import { createNASALibraryQuery } from "./queryFormats.js";

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
function getMedia() {
  let params = createNASALibraryQuery();
  console.log(params);
  photoGridInserter(params);
}

// gets the images from nasa api
export async function photoGridInserter(params) {
  const data = await getLibraryMedia("search", params);
  createImageCards(data);
  // console.log(data);
}

// creates the image cards and fills them out
function createImageCards(data, imgCount = 500) {
  const parentContainer = document.querySelector("#photo-grid");

  parentContainer.innerHTML = "";

  const items = data.collection.items.slice(0, imgCount);

  let count = 0;
  for (const item of items) {
    // console.log(item);
    const card = document.createElement("div");
    card.classList.add("lib-cards");
    card.id = count;

    count++;

    const img = document.createElement("img");
    img.classList.add("lib-img");
    getUrl(item.href).then((data) => {
      img.src = data[3];
    });

    const name = document.createElement("p");
    name.classList.add("lib-title");
    name.textContent = item.data[0].title;

    card.appendChild(img);
    card.appendChild(name);

    parentContainer.appendChild(card);
  }
}

// my codes output
// https://images-api.nasa.gov/search?q=apollo+11&description=moon+landing&media_type=image

// working search from nasa docs
// https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image
