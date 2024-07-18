// ajax spinner functions
// so as to make it highly portable
const spinner = document.querySelector(".spinner");

export function showSpinner() {
  spinner.style.display = "block";
}
export function hideSpinner() {
  spinner.style.display = "none";
}
