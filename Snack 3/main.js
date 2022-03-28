const nomi = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
var nomi2 = []
var nomi3 = []

nomi.forEach(extractForEach);

function extractForEach(item, index) {
    if (index >= 2 && index <= 4) {
        nomi2.push(item)
    }
}

console.log(nomi2)

document.getElementById("nomi1").innerHTML += "Il nuovo array con il ForEach è: " + nomi2

nomi.filter(extractFilter);

function extractFilter(nome, index) {
    if (index >= 2 && index <= 4) {
        nomi3.push(nome)
    }
}

document.getElementById("nomi2").innerHTML += "Il nuovo array con il Filter è: " + nomi3

console.log(nomi3)