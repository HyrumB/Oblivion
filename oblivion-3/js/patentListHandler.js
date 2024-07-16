import { getPatent } from "./externalServices.js";
import { NASA_API_KEY } from "./env.js";
import { showSpinner, hideSpinner } from "./ajaxSpinner.js";


async function  injectPatentInfo() {
    showSpinner();
    const patent = await getPatent(NASA_API_KEY);
    hideSpinner();
    console.log(patent);

    const items = patent.results;
    const ul = document.createElement("ul"); 

    for (const item of items) {
        
        const li = document.createElement("li");
        const title = document.createElement("a");

        title.href = `../patent-info/index.html?patentID=${item[0]}`;
        title.classList.add("patent-title");
        title.innerHTML = `${item[1]}: ${item[2]}`;

        li.appendChild(title);
        ul.appendChild(li);
        
    }
    document.querySelector("#patent-list").appendChild(ul);
}

injectPatentInfo()