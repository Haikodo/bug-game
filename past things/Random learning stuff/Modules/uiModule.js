//This is for the different tabs

function openTab(evt, tabName) {
    var i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    };

    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    };

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
};

//this makes the tab with the id of defaultOpen, be the first tab seen

window.onload = document.getElementById("defaultOpen").click();


//Code from previous game.js file
//TODO compress the onload
window.onload = function () {
  load();
  updateDisplay();
  document.getElementById("biomassCount").textContent = parseInt(biomassCount);
  document.getElementById("biomassPerSecond").textContent =
    parseInt(biomassPerSecond);
  document.getElementById("upgradeCost").textContent = parseInt(newUpgradeCost);
};

//Listeners to link buttons to their functions in their respective JS file

document.getElementById("clickBiomass").addEventListener("click", clickBiomass);
document.getElementById("buyUpgrade").addEventListener("click", buyUpgrade);
document.getElementById("save").addEventListener("click", save);
document.getElementById("load").addEventListener("click", load);
document.getElementById("restart").addEventListener("click", reset);