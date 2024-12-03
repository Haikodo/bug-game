//This is all the stuff in the back, the main frame

function save() {
  gameSave = {
    biomassCount: biomassCount,
    biomassPerSecond: biomassPerSecond,
    passiveBiomassCollectors: passiveBiomassCollectors,
    passiveBiomassCollection: passiveBiomassCollection
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
};

function load() {
  savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.biomassCount !== "undefined") biomassCount = savedGame.biomassCount;
  if (typeof savedGame.biomassPerSecond !== "undefined") biomassPerSecond = savedGame.biomassPerSecond;
  if (typeof savedGame.passiveBiomassCollectors !== "undefined") passiveBiomassCollectors = savedGame.passiveBiomassCollectors;
  if (typeof savedGame.passiveBiomassCollection !== "undefined") passiveBiomassCollection = savedGame.passiveBiomassCollection;
};

function reset() {
  localStorage.removeItem("gameSave");
  location.reload();
  updateDisplay();
};

//This is time and everything needed

//Resource ui display interval
setInterval(() => {
  biomassCount += biomassPerSecond;
  updateDisplay();
}, 1000);


//Auto save interval
setInterval(() => {
  save();
}, 30000);