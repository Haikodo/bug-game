
let biomassCount = 0;
let biomassPerSecond = 0;
let baseUpgradeCost = 10;
let newUpgradeCost = 10;
let passiveBiomassCollecters = 0;
let passiveBiomassCollection = 0;

function updateDisplay() {
    document.getElementById("biomassCount").textContent = biomassCount;
    document.getElementById("biomassPerSecond").textContent = biomassPerSecond;
    document.getElementById("upgradeCost").textContent = newUpgradeCost;
}


function clickBiomass() {
    biomassCount++;
    updateDisplay();
}


function buyUpgrade() {
    if (biomassCount >= newUpgradeCost) {
        biomassCount -= newUpgradeCost;
        biomassPerSecond++;
        passiveBiomassCollecters++;
        newUpgradeCost = baseUpgradeCost*((1.05)^passiveBiomassCollecters);
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
