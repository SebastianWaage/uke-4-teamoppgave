// model
const app = document.getElementById("app");

// view
updateView();
function updateView() {
  document.getElementById("app").innerHTML = /*html*/ `
     <div class = "header"></div>
     <div class = "dynamiskBenji"></div>
     <div class = "tracker">
     <div id = "progressbar1"><div>
     <button id = "btn1"></button>
     <button id = "btn2"></button>
     <button id = "btn3"></button>
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
kyhgfkhjgfvjhgvhjgcvjhgcvhngvhjgv;
