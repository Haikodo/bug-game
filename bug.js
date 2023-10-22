const biomassSpan = document.getElementById('biomassCount');
const biomassButton = document.getElementById('biomass-Button');
const optionsButton = document.getElementById('option-Button');
const optionsDiv = document.getElementById('optionsScreen');
const save = document.getElementById('save-button');
const load = document.getElementById('load-button');

let biomassCount = 0;

window.addEventListener('load', loadGame);

function saveGame() {
    const gameData = {
        biomassCount: biomassCount,
    };
    localStorage.setItem('gameData', JSON.stringify(gameData));
}

function loadGame() {
    const savedData = localStorage.getItem('gameData');
    if (savedData) {
        const gameData = JSON.parse(saveData);
        biomassCount = gameData.biomassCount;
        
        updateDisplay();
    }
}

function collectBiomass() {
    biomassCount += 1;
    biomassSpan.textContent = biomassCount;
}


function updateDisplay() {
    biomassSpan.textContent = biomassCount
}

function toggleOptions() {
    if (optionsDiv.style.display === 'none') {
        optionsDiv.style.display = "block";
    } else {
        optionsDiv.style.display = 'none';
    }
}

biomassButton.addEventListener('click', collectBiomass);
optionsButton.addEventListener('click', toggleOptions);
save.addEventListener('click', saveGame);
load.addEventListener('click', loadGame)