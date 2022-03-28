var soccer = [
    {
        'nombre' : 'Custerlengo',
        'punti' : 0,
        'falli' : 0,
    },
    {
        'nombre' : 'Abbiategrasso',
        'punti' : 0,
        'falli' : 0,
    }
]

const bici = [
{
    'nombre' : 'Chester',
    'peso' : 1.2,
},
{
    'nombre' : 'XXlite EVO',
    'peso' : 4.3,
},
{
    'nombre' : 'Marin',
    'peso' : 3.2,
},
{
    'nombre' : 'Pippo',
    'peso' : 7.9,
},
{
    'nombre' : 'Pluto',
    'peso' : 5.2,
},
{
    'nombre' : 'Paperino',
    'peso' : 0.7,
}
]

var k = 0
var n = 0
var w = 0

for (i = 0; i < bici.length; i++){
    k = bici[i]['peso']

    if (bici[i]['peso'] > w){
        w = bici[i]['peso']
        n = i
    }
    console.log(n)
    document.getElementById("bike").innerHTML +=  
    `
    <div>La ${i}° bicicletta si chiama: ${bici[i]['nombre']}</div>
    <div>Pesa: ${bici[i]['peso']} kg</div>
    `
}

document.getElementById("bike").innerHTML += 
`
<br>
<div>La bicicletta che si chiama: ${bici[n]['nombre']} è la più pesante</div>
`
// const {nome, peso } = bicileggera



for (i = 0; i < soccer.length; i++){
    soccer[i]['punti'] = Math.floor(Math.random () * (1 - 100) * -1)
    soccer[i]['falli'] = Math.floor(Math.random () * (1 - 100) * -1)
    console.log("Nome squadra: "  + soccer[i]['nombre'], "Falli fatti: " + soccer[i]['falli'])
    document.getElementById("squadre").innerHTML += 
`
<br>
<div>La squadra: ${soccer[i]['nombre']} ha fatto ${soccer[i]['falli']}</div>
`
}
