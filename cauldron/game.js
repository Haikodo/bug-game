const actionList = [
    'Mine Metal',
    'Refine Blaze'
];

let displayList = [
    'Mine Metal',
];

function unlockButton(displayList[i]) {
    
}

function load() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  };

function save() {
    var gameSave = {

    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
};

function reset() {
    localStorage.removeItem("gameSave");
    updateDisplay();
  };

setInterval(() => {
    updateDisplay();
  }, 1000);

  setInterval(() => {
    save();
  }, 30000);

updateDisplay();