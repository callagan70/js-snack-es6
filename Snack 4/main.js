let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
];

var array_nomi = [];
var array_voto = [];
var array_id = []

var x = "";

  students.forEach((element) => {
    x = element.name.toUpperCase()
    array_nomi .push(x)
    if(element.grades >= 70 ){
        array_voto.push(element.name)
    }
        
    if(element.grades >= 70 && element.id >= 120)
        array_id.push(element.name)
  });

  for (i=0; i < array_nomi.length; i++){
    document.getElementById("nomi1").innerHTML += `<div>${array_nomi[i]}</div>`
};


for (i=0; i < array_voto.length; i++){
    document.getElementById("nomi2").innerHTML += `<div>${array_voto[i]}</div>`
};

for (i=0; i < array_id.length; i++){
    document.getElementById("nomi3").innerHTML += `<div>${array_id[i]}</div>`
};




















console.log(array_id);
console.log(array_voto);
console.log(array_nomi);