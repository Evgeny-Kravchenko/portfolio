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
  }
  blocks[current].classList.remove("slider__single_hidden");
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



