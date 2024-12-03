debugger

gameData = [
    biomass = 0,
    biomassPerSecond = 0
];

localStorage.setItem('save', 'gameData')

let save = localStorage.getItem('save')

console.log(save)
