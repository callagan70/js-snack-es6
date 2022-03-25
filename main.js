
var l = 0
var pesante = 0
const bici = [
{
    'nombre' : 'Chester',
    'peso' : 5.6,
},
{
    'nombre' : 'XXlite EVO',
    'peso' : 4.3,
},
{
    'nombre' : 'Marin',
    'peso' : 3.2,
}
]

console.log(bici)

for (i = 0; i <= bici.length; i++){
     l++
    document.getElementById("bike").innerHTML +=  
    `
    <div>La ${l}° bicicletta si chiama: ${bici[i]['nombre']}: </div>
    <div>Pesa: ${bici[i]['peso']} kg</div>
    `
    if (bici[i]['peso'] > bici[l]['peso'] ){
        
    } 
}





// const bici2 []
// for ( i= 0; i <= bici.length; i++){
// [bici[i]["nombre"], ]



// }