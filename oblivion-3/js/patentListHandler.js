import { getPatent } from "./externalServices.js";
import { NASA_API_KEY } from "./env.js";
import { showSpinner, hideSpinner } from "./ajaxSpinner.js";

if (NASA_API_KEY == null) {
  alert("NASA API KEY NOT FOUND");
}

// event listener for search
document
  .querySelector(".search-button")
  .addEventListener("click", searchPatent);

// event listener for enter
document.querySelector(".q").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    searchPatent();
  }
});

// grabbing the text from the input query
function searchPatent() {
  const query = document.querySelector(".q");
  injectPatentInfo(query.value);
}

// creates a list relative to the list of patents given
async function injectPatentInfo(query) {
  showSpinner();
  const patent = await getPatent(NASA_API_KEY, query);
  hideSpinner();

  const items = patent.results;
  const ul = document.createElement("ul");

  // injecting the patent info into the DOM
  for (const item of items) {
    const li = document.createElement("li");
    const title = document.createElement("a");

    title.href = `../patent-info/index.html?patentID=${item[0]}&qury=${query}`;
    title.classList.add("patent-title");
    title.innerHTML = `${item[1]}: ${item[2]}`;

    li.appendChild(title);
    ul.appendChild(li);
  }
  document.querySelector("#patent-list").appendChild(ul);
}
