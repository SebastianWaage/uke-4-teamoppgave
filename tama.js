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
    <div id = "dynamiskBenji"><img id="img1" src="assets/alivePic.jpg"></div>
    <div id = "tracker"></div>  
    `;
}

function updateBars() {
  document.getElementById("tracker").innerHTML = `
  <div id = "prg1">
    <div class = "progBar" id="progressbar1" style="width:${
      (progressbar1 / 100) * 300
    }px">${progressbar1}%</div>
    </div>
      <!-- capper størelse på progressbaren med (style="width:${
        (progressbar1 / 100) * 300
      }px") til 300px. -->
      <div id = "prg2">
      <div class = "progBar"  id = "progressbar2" style = "width:${
        (progressbar2 / 100) * 300
      }px">${progressbar2}%</div>
      </div>
      <div id = "prg3">
      <div class = "progBar"  id = "progressbar3" style="width:${
        (progressbar3 / 100) * 300
      }px">${progressbar3}%</div>
      </div>
      <button id = "btn1" onclick = "eat()"></button>
      <button id = "btn2" onclick = "guitar()"></button>
      <button id = "btn3" onclick = "sleep()"></button>`;
}

// -------------------- CONTROLLER --------------------
//animasjon til progressbar1
function updateProgressbar1() {
  //trekker fra 1 tall per 1,5 sekund fra progressbar1
  if (progressbar1 > 0) {
    //setter nedre grense på 0%, den stopper å fjerne 1% ved 0%
    progressbar1--; //fjerner 1%
    updateBars(); //oppdaterer siden
    setTimeout(updateProgressbar1, 1000); //setter refresh på 1,5 sekund
  } else {
    document.getElementById("img1").src = "assets/lossPic.jpg";
  }
}

function updateProgressbar2() {
  if (progressbar2 > 0) {
    progressbar2--;
    updateBars();
    setTimeout(updateProgressbar2, 1500);
  } else {
    document.getElementById("img1").src = "assets/lossPic.jpg";
  }
}

function updateProgressbar3() {
  if (progressbar3 > 0) {
    progressbar3--;
    updateBars();
    setTimeout(updateProgressbar3, 2000);
  } else {
    document.getElementById("img1").src = "assets/lossPic.jpg";
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
  document.getElementById("img1").src = "assets/Burgermannen.jpg";
  updateBars();
}

function guitar() {
  if (progressbar2 < 90) {
    progressbar2 = progressbar2 + 10;
  } else {
    progressbar2 = 100;
  }
  document.getElementById("img1").src = "assets/guitarbenji.png";
  updateBars();
}

function sleep() {
  if (progressbar3 < 90) {
    progressbar3 = progressbar3 + 10;
  } else {
    progressbar3 = 100;
  }
  document.getElementById("img1").src = "assets/Sovemannen.jpg";
  updateBars();
}
