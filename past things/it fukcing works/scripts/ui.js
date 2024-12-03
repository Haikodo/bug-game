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

window.onload = document.getElementById("defaultOpen").click();

const loreDiv = document.getElementById("lore");

//Lore stuff
async function loreScroll() {
    try {
        const response = await fetch("Lore.txt");
        const newText = await response.text();

        const newLoreDiv = document.createElement("div");
        newLoreDiv.textContent = newLore;

        loreDiv.prepend(newLoreDiv);
    } catch (error) {
        console.error("Error loading text:", error)
    }
}