// --------------------- MODEL --------------------------
let progressbar1 = 100;
let progressbar2 = 100;
let progressbar3 = 100;


// ------------------------ VIEW ------------------------
const app = document.getElementById("app");

updateView();
updateProgressbar1();

function updateView() {
  document.getElementById("app").innerHTML = /*html*/ `
    <div class = "header">Benjigotchi</div>
    <div class = "dynamiskBenji">bildet av benji</div>
      <div class = "tracker">
      <div id = "progressbar1">${progressbar1}<div>
      <div id = "progressbar2">${progressbar2}<div>
      <div id = "progressbar3">${progressbar3}<div>
      </div>
    <button id = "btn1" onclick = "Eat()">Popcorn</button>
    <button id = "btn2" onclick = "Guitar()">Spille Gitar</button>
    <button id = "btn3" onclick = "Sleep()">Sove</button>
    `;
}

// -------------------- CONTROLLER --------------------
function updateProgressbar1() {
  if (progressbar1 > 0) {
    progressbar1--;
    updateView();
    setTimeout(updateProgressbar1, 1000);
  }
}












//progressbar1
//function update(){
//  var element = document.getElementById("progressbar1");
//  var width = 100;
//  var identity = setInterval(scene, 100);
//
//  function scene() {
//    if (width < 1) {
//      clearInterval(identity);
//    } else {
//      width--;
//      element.style.width = width + "%";
//      element.innerHTML = width * 1 + "%";
//    }
//  }
//}