
import { getAPOD } from "./externalServices.js";
import { getToday } from "./dateHandler.js";

// html elements
const heroImage = document.querySelector('#hero-img');
const title = document.querySelector('#apod-title');
const description = document.querySelector('#apod-description');


const newDate = document.querySelector('#date');
const changeAPODBtn = document.querySelector('#change-apod');

let today = getToday();

let key = 'e5E3axyZePX2lbsyxitYnkdGzgVbc9WIopyOyxS7';

changeAPODBtn.addEventListener('click', () => {
    changeAPOD(key, newDate.value);
})

function changeAPOD( key, today){
    getAPOD(key, today).then(data => {
        console.log(data);
        heroImage.src = data.hdurl;
        title.innerHTML = data.title;
        description.innerHTML = data.explanation;
    })
}

changeAPOD(key, today);