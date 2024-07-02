
import { getLibraryMedia, getUrl } from "./externalServices.js";



const params = {
    q: "apollo 11",
    description: "moon landing",
    media_type: "image",
  };
  

export async function photoGridInserter() {
    const data = await getLibraryMedia("search", params);
    // console.log(data);
    createImageCards(data);
}

function createImageCards(data) {
    const parentContainer = document.querySelector("#photo-grid");
    const container = document.createElement("div");
    container.classList.add("image-card-container");
    
    const items = data.collection.items

    //item is the index not the data
    for (const item of items) {
    //   console.log(item);
      const card = document.createElement("div");
      card.classList.add("image-card");
  
      const img = document.createElement("img");
      getUrl(item.href).then((data) => {
        img.src = data[2];
      });
    //   console.log(item.href);  

      const name = document.createElement("p");
      name.textContent = item.data[0].title;
    //   console.log(item.data[0].title);

      card.appendChild(img);
      card.appendChild(name);
  
      container.appendChild(card);
      parentContainer.appendChild(container);
    };
}  


photoGridInserter()

// my codes output
// https://images-api.nasa.gov/search?q=apollo+11&description=moon+landing&media_type=image

// working search from nasa docs
// https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image