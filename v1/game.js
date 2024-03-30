onload => localStorage.getItem("player");

function load() {
  JSON.parse(localStorage.getItem("player"));
}

function restart() {
  localStorage.removeItem("player");
}

let biomassCount = 0;
let biomassPerSecond = 0;
const baseUpgradeCost = 10;
let passiveBiomassCollectors = 0;
let passiveBiomassCollection = 0;
let newUpgradeCost = 10;

function updateDisplay() {
  document.getElementById("biomassCount").textContent = parseInt(biomassCount);
  document.getElementById("biomassPerSecond").textContent =
    parseInt(biomassPerSecond);
  document.getElementById("upgradeCost").textContent = parseInt(newUpgradeCost);
}

function clickBiomass() {
  biomassCount++;
  updateDisplay();
}

function buyUpgrade() {
  if (biomassCount >= newUpgradeCost) {
    biomassCount -= newUpgradeCost;
    biomassPerSecond++;
    passiveBiomassCollectors++;
    newUpgradeCost = baseUpgradeCost * 1.05 ** passiveBiomassCollectors;
    updateDisplay();
  }
}

function save() {
  var player = {
    biomassCount: biomassCount,
    biomassPerSecond: biomassPerSecond,
    passiveBiomassCollectors: passiveBiomassCollectors,
    passiveBiomassCollection: passiveBiomassCollection,
  };
  localStorage.setItem("player", JSON.stringify(player));
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
