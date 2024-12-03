function load() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof savedGame.lastTab !== "undefined") lastTab = savedGame.lastTab;
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
};

setInterval(() => {
    save();
}, 30000);