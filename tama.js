// --------------------- MODEL --------------------------
let progressbar1 = 100;
let progressbar2 = 100;
let progressbar3 = 100;

// ------------------------ VIEW ------------------------
const app = document.getElementById("app");

updateView();
updateProgressbar1();
updateProgressbar2();
updateProgressbar3();

function updateView() {
  document.getElementById("app").innerHTML = /*html*/ `
    <div id = "header">Benjigotchi</div>
    <div id = "dynamiskBenji">bildet av benji</div>
    <div id = "tracker">
      <div class = "progBar" id="progressbar1" style="width:${
        (progressbar1 / 100) * 300
      }px">${progressbar1}%</div>
      <!-- capper størelse på progressbaren med (style="width:${
        (progressbar1 / 100) * 300
      }px") til 300px. -->
      <div class = "progBar"  id = "progressbar2" style = "width:${
        (progressbar2 / 100) * 300
      }px">${progressbar2}%</div>
      <div class = "progBar"  id = "progressbar3" style="width:${
        (progressbar3 / 100) * 300
      }px">${progressbar3}%</div>
      <button id = "btn1" onclick = "eat()"></button>
      <button id = "btn2" onclick = "guitar()">Spille Gitar</button>
      <button id = "btn3" onclick = "sleep()">Sove</button>
    </div>
    `;
}

// -------------------- CONTROLLER --------------------

//animasjon til progressbar1
function updateProgressbar1() {
  //trekker fra 1 tall per 1,5 sekund fra progressbar1
  if (progressbar1 > 0) {
    //setter nedre grense på 0%, den stopper å fjerne 1% ved 0%
    progressbar1--; //fjerner 1%
    updateView(); //oppdaterer siden
    setTimeout(updateProgressbar1, 1000); //setter refresh på 1,5 sekund
  }
}

function updateProgressbar2() {
  if (progressbar2 > 0) {
    progressbar2--;
    updateView();
    setTimeout(updateProgressbar2, 1500);
  }
}

function updateProgressbar3() {
  if (progressbar3 > 0) {
    progressbar3--;
    updateView();
    setTimeout(updateProgressbar3, 2000);
  }
}

//funksjonen til btn1 "popkorn"
function eat() {
  //legger til 10% når man trykker på "popkorn"
  if (progressbar1 < 90) {
    //gjør så man ikke kan gå over 100% ved å klikke.
    progressbar1 = progressbar1 + 10; //legger til 10%
  } else {
    //vis ikke
    progressbar1 = 100; //setter grense/cap på 100%
  }
  updateView();
}

function guitar() {
  if (progressbar2 < 90) {
    progressbar2 = progressbar2 + 10;
  } else {
    progressbar2 = 100;
  }
}

function sleep() {
  if (progressbar3 < 90) {
    progressbar3 = progressbar3 + 10;
  } else {
    progressbar3 = 100;
  }
}
