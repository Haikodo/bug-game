
let biomassCount = 0;
let biomassPerSecond = 0;
const baseUpgradeCost = 10;
let passiveBiomassCollectors = 0;
let passiveBiomassCollection = 0;
let newUpgradeCost = 10

function updateDisplay() {
    document.getElementById("biomassCount").textContent = parseInt(biomassCount);
    document.getElementById("biomassPerSecond").textContent = biomassPerSecond;
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


setInterval(() => {
    biomassCount += biomassPerSecond;
    updateDisplay();
}, 1000);


document.getElementById("clickBiomass").addEventListener("click", clickBiomass);
document.getElementById("buyUpgrade").addEventListener("click", buyUpgrade);


updateDisplay();
