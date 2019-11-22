import ExpressionPanel from "./Expression-panel.js";
import Slider from "./Slider.js";
import Description from "./Description.js";

const expPanel = new ExpressionPanel();
expPanel.work();

const slider = new Slider();
slider.start();
slider.work();

const btnDescrThey = document.querySelector("#show-descr-theyalow");
const descrThey = document.querySelector("#theyalow__descr");

const descTheyalow = new Description(btnDescrThey, descrThey);
descTheyalow.work();

let btnDescrRepair = document.querySelector("#show-descr-repair");
let descrRepair = document.querySelector("#repair-design-project__descr");

const descrRepairDesign = new Description(btnDescrRepair, descrRepair);
descrRepairDesign.work();

//Go to project
// const projectShow = function() {
//   //Переменные для хранения координат touchstart и touchend
//   let startX = 0;
//   let startY = 0;
//   let endX = 0;
//   let endY = 0;
//   let page = document.querySelector("#wrapper");

//   //THEYALOW

//   let theyalow = document.querySelector("#theyalow");
//   let theyalowIframe = document.querySelector("#theyalow-iframe");
//   let switchTheyalow = document.querySelector("#switch-theyalow");
//   let backTheyalow = document.querySelector("#back-theyalow");

//   //Клик по проекту theyalow
//   theyalow.addEventListener("click", function() {
//     page.style.display = "none";
//     theyalowIframe.style.display = "block";
//     switchTheyalow.style.display = "block";
//     backTheyalow.style.display = "block";
//   });

//   //Клик по кнопке переключения Desktop/Mobile
//   switchTheyalow.addEventListener("click", function(e) {
//     theyalowIframe.classList.toggle("mobile-theyalow");
//     if (switchTheyalow.innerHTML === "Mobile") {
//       switchTheyalow.innerHTML = "Desktop";
//     } else {
//       switchTheyalow.innerHTML = "Mobile";
//     }
//   });

//   //Клик по кнопке back
//   backTheyalow.addEventListener("click", function() {
//     page.style.display = "block";
//     theyalowIframe.style.display = "none";
//     switchTheyalow.style.display = "none";
//     backTheyalow.style.display = "none";
//   });

//   //Touch по проекту theyalow
//   theyalow.addEventListener("touchstart", function(e) {
//     let touchObj = e.changedTouches[0];
//     startX = touchObj.pageX;
//     startY = touchObj.pageY;
//   });

//   theyalow.addEventListener("touchend", function(e) {
//     let touchObj = e.changedTouches[0];
//     endX = touchObj.pageX;
//     endY = touchObj.pageY;

//     if (startX === endX && startY === endY) {
//       page.style.display = "none";
//       theyalowIframe.style.display = "block";
//       backTheyalow.style.display = "block";
//       backTheyalow.style.right = "20px";
//     }
//   });

//   //REPAIR-DESIGN-PROJECT
//   let repair = document.querySelector("#repair-design-project");
//   let repairIframe = document.querySelector("#repair-iframe");
//   let switchRepair = document.querySelector("#switch-repair");
//   let backRepair = document.querySelector("#back-repair");

//   //Клик по проекту repair-design-project
//   repair.addEventListener("click", function() {
//     page.style.display = "none";
//     repairIframe.style.display = "block";
//     switchRepair.style.display = "block";
//     backRepair.style.display = "block";
//   });

//   //Клик по кнопке переключения Desktop/Mobile
//   switchRepair.addEventListener("click", function(e) {
//     repairIframe.classList.toggle("mobile-repair");
//     if (switchRepair.innerHTML === "Mobile") {
//       switchRepair.innerHTML = "Desktop";
//     } else {
//       switchRepair.innerHTML = "Mobile";
//     }
//   });

//   //Клик по кнопке back
//   backRepair.addEventListener("click", function() {
//     page.style.display = "block";
//     repairIframe.style.display = "none";
//     switchRepair.style.display = "none";
//     backRepair.style.display = "none";
//   });

//   //Touch по проекту theyalow
//   repair.addEventListener("touchstart", function(e) {
//     let touchObj = e.changedTouches[0];
//     startX = touchObj.pageX;
//     startY = touchObj.pageY;
//   });

//   repair.addEventListener("touchend", function(e) {
//     let touchObj = e.changedTouches[0];
//     endX = touchObj.pageX;
//     endY = touchObj.pageY;

//     if (startX === endX && startY === endY) {
//       page.style.display = "none";
//       repairIframe.style.display = "block";
//       backRepair.style.display = "block";
//       backRepair.style.right = "20px";
//     }
//   });
// };

// projectShow();
