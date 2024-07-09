import { getLibraryMedia, getUrl } from "./externalServices.js";
import { createNASALibraryQuery } from "./SearchHandler.js";

const submit = document.querySelector("#search-button");

submit.addEventListener("click", GetNewImages);

function GetNewImages() {
  let params = createNASALibraryQuery();
  console.log(params);
  photoGridInserter(params);
}

export async function photoGridInserter(params) {
  const data = await getLibraryMedia("search", params);
  createImageCards(data);
  console.log(data);
}

function createImageCards(data, imgCount = 500) {
  const parentContainer = document.querySelector("#photo-grid");

  parentContainer.innerHTML = "";

  const items = data.collection.items.slice(0, imgCount);

  for (const item of items) {
    const card = document.createElement("div");
    card.classList.add("lib-cards");

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
