const nomi = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
var nomi2 = []
let text = "";

nomi.forEach(extract);

function extract(item, index) {
    if ( index >= 2 && index <= 4){
        nomi2.push(item)
}
return nomi2
}

console.log(nomi2)

document.getElementById("nomi").innerHTML += "Il nuovo array con il ForEach è: " + nomi2