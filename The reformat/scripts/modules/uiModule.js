//Handles UI (tabs, lore, etc.)

//Top bar tabs
export function openTab(evt, tabName) {
    let i, tabContent, tabLinks;

    //Stuff inside the tabs
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    //Linking buttons to tabs
    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    //setting selected tab to be the only things to show
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

//Attempt at the lore scrolling
export async function loreScroll() {
    const loreDiv = document.getElementById("lore");
    try {
        const response = await fetch("Lore.txt");
        const newText = await response.text();

        const newLoreDiv = document.createElement("div");
        newLoreDiv.textContent = newText;

        loreDiv.prepend(newLoreDiv);
    } catch (error) {
        console.error("Error loading text:", error);
    }
}


//sets the tab the game opens up to
//TODO allow player to set default tab
export function setDefaultTab() {
    window.onload = document.getElementById("defaultOpen").click();
}
