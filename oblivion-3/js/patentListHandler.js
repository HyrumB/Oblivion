import {
  getPatentList,
  getFromLocalStorage,
  saveToLocalStorage,
} from "./externalServices.js";
import { NASA_API_KEY } from "./env.js";
import { showSpinner, hideSpinner } from "./ajaxSpinner.js";

if (NASA_API_KEY == null) {
  alert("NASA API KEY NOT FOUND");
}

// event listener for search
document.querySelector(".search-button").addEventListener("click", fetchPatents);

// event listener for enter
document.querySelector(".q").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    fetchPatents();
  }
});

// grabbing the text from the input query
async function fetchPatents() {
  const query = document.querySelector(".q");
  showSpinner();
  const patents = await getPatentList(NASA_API_KEY, query);
  hideSpinner();

  saveToLocalStorage("NASA_PATENTS", patents);
  saveToLocalStorage("PATENT_QUERY", query);

  injectPatentInfo(patents, query);
}

// creates a list relative to the list of patents given
function injectPatentInfo(patents, query) {
  const parentContainer = document.querySelector("#patent-list");
  parentContainer.innerHTML = "";
  
  const items = patents.results;
  const ul = document.createElement("ul");
  console.log(items)

  // injecting the patent info into the DOM
  for (const item of items) {
    const li = document.createElement("li");
    const title = document.createElement("a");

    title.href = `../patent-info/index.html?patentID=${item[0]}`;
    title.classList.add("patent-title");
    title.innerHTML = `${item[1]}: ${item[2]}`;

    li.appendChild(title);
    ul.appendChild(li);
  }

  parentContainer.appendChild(ul);
}

function loadStorage() {
  if (localStorage.getItem("NASA_PATENTS") !== null) {
    try {
      // Attempt to parse the JSON data
      const localData = getFromLocalStorage("NASA_PATENTS");
      injectPatentInfo(localData);
    } catch (error) {
      console.log(error);
    }
  }
}

loadStorage();



