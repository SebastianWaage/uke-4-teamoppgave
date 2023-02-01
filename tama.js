// model

// view
const app = document.getElementById("app");

updateView();

function updateView() {
  document.getElementById("app").innerHTML = /*html*/ `
     <div class = "header"></div>
     <div class = "dynamiskBenji"></div>
     <div class = "tracker">
     <div id = "progressbar1">innerhtml<div>
     <div id = "progressbar2">innerhtml<div>
     <div id = "progressbar3">innerhtml<div>
     <button id = "btn1">Snacks</button>
     <button id = "btn2">Spille Gitar</button>
     <button id = "btn3">Sove</button>
     </div>
     `;
}

// controller

function update() {
  var element = document.getElementById("progressbar1");
  var width = 100;
  var identity = setInterval(scene, 100);

  function scene() {
    if (width < 1) {
      clearInterval(identity);
    } else {
      width--;
      element.style.width = width + "%";
      element.innerHTML = width * 1 + "%";
    }
  }
}