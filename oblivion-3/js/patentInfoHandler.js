const urlParams = new URLSearchParams(window.location.search);
import { getPatent } from "./externalServices.js";
import { NASA_API_KEY } from "./env.js";
import { hideSpinner, showSpinner } from "./ajaxSpinner.js";

if ((NASA_API_KEY == null)) {
  alert("NASA API KEY NOT FOUND");
}

const patentID = urlParams.get("patentID");
const query = urlParams.get("qury");

// injecting the patent info into the DOM
async function injectPatentInfo() {
  showSpinner();
  const patents = await getPatent(NASA_API_KEY, query);
  hideSpinner();

  const item = patents.results.find((item) => item[0] === patentID);

  document.querySelector("h1").innerHTML = `${item[1]}: ${item[2]}`;
  document.querySelector("#patent-article").innerHTML = item[3];
  document.querySelector("#patent-img").src = item[10];
  document.querySelector("#patent-number").innerHTML = item[12];
}

injectPatentInfo();
