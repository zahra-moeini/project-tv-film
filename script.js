let tabs = document.querySelector(".tabs");
let tabHeader = tabs.querySelector(".tab-heder");
let tabBody = tabs.querySelector(".tab-body");
let tabHeaderElements = tabs.querySelectorAll(".tab-heder > div");
let tabBodyElements = tabs.querySelectorAll(".tab-body > div");

for(let i=0;i<tabHeaderElements.length;i++){
    tabHeaderElements[i].addEventListener("click",function(){
    tabHeader.querySelector(".active").classList.remove("active");
    tabHeaderElements[i].classList.add("active");
    tabBody.querySelector(".active").classList.remove("active");
    tabBodyElements[i].classList.add("active");
    });
}