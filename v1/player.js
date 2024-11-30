debugger

let playerNameForm = document.getElementById("playerNameForm")

playerNameForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let enteredPlayerName = document.getElementById("playerName");

    if (enteredPlayerName.value == "") {
        alert("you done fucked up")
    } else {
        document.getElementById("enteredPlayerName").innerHTML = enteredPlayerName
        alert("yippee")
        console.log(enteredPlayerName)
    }
});