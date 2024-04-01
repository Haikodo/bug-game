let biomassCount = 0;
let biomassPerSecond = 0;
const baseUpgradeCost = 10;
let passiveBiomassCollectors = 0;
let passiveBiomassCollection = 0;
let newUpgradeCost = 10;

function updateDisplay() {
  document.getElementById("biomassCount").textContent = parseInt(biomassCount);
  document.getElementById("biomassPerSecond").textContent =parseInt(biomassPerSecond);
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
    biomassPerSecond++;
    passiveBiomassCollectors++;
    updateDisplay();
  }
};

function load() {
  var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.biomassCount !== "undefined") biomassCount = savedGame.biomassCount;
  if (typeof savedGame.biomassPerSecond !== "undefined") biomassPerSecond = savedGame.biomassPerSecond;
  if (typeof savedGame.passiveBiomassCollectors !== "undefined") passiveBiomassCollectors = savedGame.passiveBiomassCollectors;
  if (typeof savedGame.passiveBiomassCollection !== "undefined") passiveBiomassCollection = savedGame.passiveBiomassCollection;
};

function save() {
  var gameSave = {
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

window.onload = function() {
  load();
  updateDisplay();
  document.getElementById("biomassCount").textContent = parseInt(biomassCount);
  document.getElementById("biomassPerSecond").textContent = parseInt(biomassPerSecond);
  document.getElementById("upgradeCost").textContent = parseInt(newUpgradeCost);
}

setInterval(() => {
  biomassCount += biomassPerSecond;
  updateDisplay();
}, 1000);

setInterval(() => {
  save();
}, 30000);

document.getElementById("clickBiomass").addEventListener("click", clickBiomass);
document.getElementById("buyUpgrade").addEventListener("click", buyUpgrade);
document.getElementById("save").addEventListener("click", save);
document.getElementById("load").addEventListener("click", load);
document.getElementById("restart").addEventListener("click", restart);

updateDisplay();
