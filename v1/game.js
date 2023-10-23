
let biomassCount = 0;
let biomassPerSecond = 0;
let upgradeCost = 10;

function updateDisplay() {
    document.getElementById("biomassCount").textContent = biomassCount;
    document.getElementById("biomassPerSecond").textContent = biomassPerSecond;
}


function clickBiomass() {
    biomassCount++;
    updateDisplay();
}


function buyUpgrade() {
    if (biomassCount >= upgradeCost) {
        biomassCount -= upgradeCost;
        biomassPerSecond++;
        upgradeCost *= 2;
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
