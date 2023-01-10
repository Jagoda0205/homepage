console.log("Cześć!");


let signature = document.querySelector(".js-header__signature");
let heading = document.querySelector(".js-header__heading");
let button = document.querySelector(".js-header__button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");




signature.addEventListener("click", () => {
  heading.remove();
 });

 button.addEventListener("click", () => {
    body.classList.toggle("dark");
  
    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
  });







