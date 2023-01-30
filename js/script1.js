{
 const welcome = () => {
  console.log("Welcome to my first page!");
 } 


const toggleBackground = () => {
const body = document.querySelector(".body");
const themeName = document.querySelector(".themeName");

body.classList.toggle("nextColorName");
themeName.innerText = body.classList.contains("nextColorName") ? "jasny" : "ciemny";
};

const init = () => {
  const button = document.querySelector(".js-header__button");
button.addEventListener("click", toggleBackground);

welcome();
}

init();
}