// Snack 1
/* Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */


// creare un array di oggetti

const bikes = [
    {
        bikeName: "Pinco",
        weight: 33
    },
    {
        bikeName: "Pallino",
        weight: 12
    },
    {
        bikeName: "Palla",
        weight: 14
    }
]
//Crea funzione con ciclo for per trovare la bici piu leggera
function findLighterBike (bikesArr) {
    let lighterBike = bikesArr[0];
    for (let i = 0; i < bikesArr.length; i++){
        if (bikesArr[i].weight < lighterBike.weight){
            lighterBike = bikesArr[i]
        }
    }
    
    return lighterBike  
  
}

const lighterBike = findLighterBike(bikes);
console.log("The ligher bike name is:", lighterBike)







//Snack2
/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. */


/* infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */