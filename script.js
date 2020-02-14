var input = document.querySelector('input');
var totaal = document.querySelector('h2')
const pi = 3.14;

function omtrek() {    
    return input.value * pi;
}
function oppervlakte() {
    let oppervlakten = input.value
    return (oppervlakten * oppervlakten * pi * 0,25);
}

function eindtotaal() {
    totaal.innerText = "Omtrek: " +  omtrek() + " Oppervlakte: " + oppervlakte();
}