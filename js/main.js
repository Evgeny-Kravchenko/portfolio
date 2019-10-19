//Expression panel
let acc = document.getElementById("toggle");
let i;
let deg = 0;

acc.addEventListener("click", function() {
  this.classList.toggle("toggle-active");
  let blockOpen = this.nextElementSibling;
  if(blockOpen.style.display === "block") {
    blockOpen.style.display = "none";
  } else {
    blockOpen.style.display = "block";
  }

//Открывающая и закрывающая стрелочка в expression panel

  let styleElem = document.head.appendChild(document.createElement("style"));

  if(!deg) {
    styleElem.innerHTML = `.toggle::after {transform: rotate(180deg); top: 0px;}`;
  } else {
    styleElem.innerHTML = `.toggle::after {transform: rotate(0deg); top: 10px;}`;
  }

  if(deg === 180) {
    deg = 0;
  } else {
    deg = 180;
  }
});

//Slider
let blocks = document.querySelectorAll(".slider__single");
let current = 0;

function slider() {
  for(let i = 0; i < blocks.length; i++) {
    blocks[i].classList.add("slider__single_hidden");
    blocks[i].style.zIndex = "";
  }
  blocks[current].classList.remove("slider__single_hidden");
  blocks[current].style.zIndex = "5";
}

slider();

function sliderLeft() {
  if(current - 1 === -1) {
    current = blocks.length - 1;
  } else {
    current--;
  }
  slider();
}

function sliderRight() {
  if(current + 1 === blocks.length) {
    current = 0;
  } else {
    current++;
  }
  slider();
}

document.querySelector(".btn-left").onclick = sliderLeft;

document.querySelector(".btn-right").onclick = sliderRight;

//Show button

let showButtonThey = document.querySelector("#show-descr-theyalow");
let descrThey = document.querySelector(".theyalow__descr");
let swipe = document.querySelector("#swipe");

showButtonThey.addEventListener("click", function() {
  if(descrThey.style.display === "") {
    descrThey.style.display = "block";
    showButtonThey.innerHTML = "Hide description";
    showButtonThey.style.backgroundColor = "rgba(50, 160, 100, 0.5)";
    swipe.style.display = "none";
  } else {
    descrThey.style.display = "";
    showButtonThey.innerHTML = "Show description";
    showButtonThey.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    swipe.style.display = "block";
    swipe.style.display = "";
  }
});

let showButtonRepair = document.querySelector("#show-descr-repair");
let descrRepair = document.querySelector(".repair-design-project__descr");

showButtonRepair.addEventListener("click", function() {
  if(descrRepair.style.display === "") {
    descrRepair.style.display = "block";
    showButtonThey.innerHTML = "Hide description";
    showButtonRepair.style.backgroundColor = "rgba(50, 160, 100, 0.5)";
    swipe.style.display = "none";
  } else {
    descrRepair.style.display = "";
    showButtonRepair.innerHTML = "Show description";
    showButtonRepair.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    swipe.style.display = "block";
  }
});



