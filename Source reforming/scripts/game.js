let biomassCount = 0;
let biomassPerSecond = 0;
const baseUpgradeCost = 10;
let passiveBiomassCollectors = 0;
let passiveBiomassCollection = 0;
let newUpgradeCost = 10;
let facehuggerCount = 0;
let hostsCount = 0;
let xenomorphCount = 0;

function updateDisplay() {
  document.getElementById("biomassCount").textContent = parseInt(biomassCount);
  document.getElementById("biomassPerSecond").textContent = biomassPerSecond.toFixed(1);
  document.getElementById("upgradeCost").textContent = parseInt(newUpgradeCost);
  newUpgradeCost = baseUpgradeCost * 1.05 ** passiveBiomassCollectors
};

function clickBiomass() {
  biomassCount++;
  updateDisplay();
};

function buyUpgrade() {
  if (biomassCount >= newUpgradeCost) {
    biomassCount -= newUpgradeCost;
    biomassPerSecond += 0.1;
    passiveBiomassCollectors++;
    updateDisplay();
  }
};

function load() {
  savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.biomassCount !== "undefined") biomassCount = savedGame.biomassCount;
  if (typeof savedGame.biomassPerSecond !== "undefined") biomassPerSecond = savedGame.biomassPerSecond;
  if (typeof savedGame.passiveBiomassCollectors !== "undefined") passiveBiomassCollectors = savedGame.passiveBiomassCollectors;
  if (typeof savedGame.passiveBiomassCollection !== "undefined") passiveBiomassCollection = savedGame.passiveBiomassCollection;
};

function save() {
  gameSave = {
    biomassCount: biomassCount,
    biomassPerSecond: biomassPerSecond,
    passiveBiomassCollectors: passiveBiomassCollectors,
    passiveBiomassCollection: passiveBiomassCollection
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
};

function reset() {
  localStorage.removeItem("gameSave");
  location.reload();
  updateDisplay();
};

setInterval(() => {
  biomassCount += biomassPerSecond;
  updateDisplay();
}, 1000);

setInterval(() => {
  save();
}, 30000);

window.onload = function () {
  load();
  updateDisplay();
  document.getElementById("biomassCount").textContent = parseInt(biomassCount);
  document.getElementById("biomassPerSecond").textContent = parseInt(biomassPerSecond);
  document.getElementById("upgradeCost").textContent = parseInt(newUpgradeCost);
};

document.getElementById("clickBiomass").addEventListener("click", clickBiomass);
document.getElementById("buyUpgrade").addEventListener("click", buyUpgrade);
document.getElementById("save").addEventListener("click", save);
document.getElementById("load").addEventListener("click", load);
document.getElementById("restart").addEventListener("click", reset);

updateDisplay();
