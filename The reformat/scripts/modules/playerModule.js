//Handles player-related logic (name input, etc.)

//The name setting in the beginning of the Player tab
export function setPlayerName() {

    //TTurns elements into unchangeable variables
    const name = document.getElementById("enteredPlayerName");
    const playerForm = document.getElementById("playerForm");

    //listens for the submit actions
    playerForm.addEventListener("submit", function (event) {
        //prevents the changing of the html
        event.preventDefault();

        //grabs the submitted name from the input element
        const playerName = document.getElementById("playerName").value;

        //categorizes the name value into a string
        const submittedName = String(playerName);

        //changes the tab to be the submitted name
        name.innerHTML = submittedName;

        //Hides the beginning player form
        playerForm.style.display = "none";
    });
}
