const name = document.getElementById("enteredPlayerName");
const playerForm = document.getElementById("playerForm");

// Name Changer
playerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const playerName = document.getElementById("playerName").value;

    const submittedName = String(playerName);

    name.innerHTML = submittedName;

    playerForm.style.display = "none";

    loreScroll();
});
