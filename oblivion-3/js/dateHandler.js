
let currentYear = new Date().getFullYear();
let copyright = document.querySelector("#copyright");
copyright.innerHTML = `Copyright ${currentYear} - Hyrum Bullock`;


export function getToday() {
    let day = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();

    let today = `${year}-${month}-${day}`;
    console.log(today);
    return today;
}
