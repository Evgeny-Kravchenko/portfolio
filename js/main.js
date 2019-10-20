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

showButtonThey.addEventListener("touchend", function() {
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
    showButtonRepair.innerHTML = "Hide description";
    showButtonRepair.style.backgroundColor = "rgba(50, 160, 100, 0.5)";
    swipe.style.display = "none";
  } else {
    descrRepair.style.display = "";
    showButtonRepair.innerHTML = "Show description";
    showButtonRepair.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    swipe.style.display = "block";
  }
});

showButtonRepair.addEventListener("touchend", function() {
  if(descrRepair.style.display === "") {
    descrRepair.style.display = "block";
    showButtonRepair.innerHTML = "Hide description";
    showButtonRepair.style.backgroundColor = "rgba(50, 160, 100, 0.5)";
    swipe.style.display = "none";
  } else {
    descrRepair.style.display = "";
    showButtonRepair.innerHTML = "Show description";
    showButtonRepair.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    swipe.style.display = "block";
  }
});

const swipeDetect = (el) => {
  //то, на чём делается swipe
  let surface = el;
  //Стартовая позиция по x
  let startX = 0;
  //Стартовая позиция по Y
  let startY = 0;
  //Прошедшая дистанция по X
  let distX = 0;
  //Прошедшая дистанция по Y
  let distY = 0;
  //Время, когда мы начали swipe
  let startTime = 0;
  //Время до конца swipe
  let elapsedTime = 0;
  //Дистанция с которой начинается swipe
  let threshold = 100;
  //Ограничение по оси Y (если заступает, то это не  swipe)
  let restraint = 150;
  //Длительность swipe
  let allowedTime = 1000;

  //Событие для touch
  surface.addEventListener("touchstart", function(e) {
    if(e.target.classList.contains("btn-left")) {
      sliderLeft();
    } else if(e.target.classList.contains("btn-right")) {
      sliderRight();
    }

    let touchObj = e.changedTouches[0];
    //Координаты mousedown по X
    startX = touchObj.pageX;
    //Координаты mousedown по Y
    startY = touchObj.pageY;
    //Запомнили момент времени нажатия
    startTime = new Date().getTime();
    e.preventDefault();
  });

  surface.addEventListener("touchmove", function(e) {
    e.preventDefault();
  });



  surface.addEventListener("touchend", function(e) {
    let touchObj = e.changedTouches[0];
    //Вычисляем расстояние swipe по X
    distX = touchObj.pageX - startX;
    //Координаты mousedown по Y
    distY = touchObj.pageY - startY;
    //Время за которое происходит событие
    elapsedTime = new Date().getTime() - startTime;
    //Если время между событиями больше, чем время swipe, то swipe происходить не должен
    if(elapsedTime <= allowedTime) {
      //Проверка заступов за границы swipe по оси X и Y
      if(Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        if(distX > 0) {
          sliderLeft();
        } else {
          sliderRight();
        }
      }
    }
    e.preventDefault();
  });
}

let el = document.querySelector("#slide");
swipeDetect(el);

//Go to project

const projectShow = function() {

  //Переменные для хранения координат touchstart и touchend
  let startX = 0;
  let startY = 0;
  let endX = 0;
  let endY = 0;
  let page = document.querySelector("#wrapper");

  //THEYALOW

  let theyalow = document.querySelector("#theyalow");
  let theyalowIframe = document.querySelector("#theyalow-iframe");
  let switchTheyalow = document.querySelector("#switch-theyalow");
  let backTheyalow  = document.querySelector("#back-theyalow");

  //Клик по проекту theyalow
  theyalow.addEventListener("click", function() {
    page.style.display = "none";
    theyalowIframe.style.display = "block";
    switchTheyalow.style.display = "block";
    backTheyalow.style.display = "block";
  })

  //Клик по кнопке переключения Desktop/Mobile
  switchTheyalow.addEventListener("click", function(e) {
    theyalowIframe.classList.toggle("mobile-theyalow");
    if(switchTheyalow.innerHTML === "Mobile") {
      switchTheyalow.innerHTML = "Desktop";
    } else {
      switchTheyalow.innerHTML = "Mobile";
    }
  })

  //Клик по кнопке back
  backTheyalow.addEventListener("click", function() {
    page.style.display = "block";
    theyalowIframe.style.display = "none";
    switchTheyalow.style.display = "none";
    backTheyalow.style.display = "none";
  })

  //Touch по проекту theyalow
  theyalow.addEventListener("touchstart", function(e) {
    let touchObj = e.changedTouches[0];
    startX = touchObj.pageX;
    startY = touchObj.pageY;
  })

  theyalow.addEventListener("touchend", function(e) {
    let touchObj = e.changedTouches[0];
    endX = touchObj.pageX;
    endY = touchObj.pageY;

    if(startX === endX && startY === endY) {
      page.style.display = "none";
      theyalowIframe.style.display = "block";
      backTheyalow.style.display = "block";
      backTheyalow.style.right = "20px";
    }
  })



  //REPAIR-DESIGN-PROJECT
  let repair = document.querySelector("#repair-design-project");
  let repairIframe = document.querySelector("#repair-iframe");
  let switchRepair = document.querySelector("#switch-repair");
  let backRepair = document.querySelector("#back-repair");

  //Клик по проекту repair-design-project
  repair.addEventListener("click", function() {
    page.style.display = "none";
    repairIframe.style.display = "block";
    switchRepair.style.display = "block";
    backRepair.style.display = "block";
  })

  //Клик по кнопке переключения Desktop/Mobile
  switchRepair.addEventListener("click", function(e) {
    repairIframe.classList.toggle("mobile-repair");
    if(switchRepair.innerHTML === "Mobile") {
      switchRepair.innerHTML = "Desktop";
    } else {
      switchRepair.innerHTML = "Mobile";
    }
  })

  //Клик по кнопке back
  backRepair.addEventListener("click", function() {
    page.style.display = "block";
    repairIframe.style.display = "none";
    switchRepair.style.display = "none";
    backRepair.style.display = "none";
  })

  //Touch по проекту theyalow
  repair.addEventListener("touchstart", function(e) {
    let touchObj = e.changedTouches[0];
    startX = touchObj.pageX;
    startY = touchObj.pageY;
  })

  repair.addEventListener("touchend", function(e) {
    let touchObj = e.changedTouches[0];
    endX = touchObj.pageX;
    endY = touchObj.pageY;

    if(startX === endX && startY === endY) {
      page.style.display = "none";
      repairIframe.style.display = "block";
      backRepair.style.display = "block";
      backRepair.style.right = "20px";
    }
  })
}

projectShow();





