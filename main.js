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
];
//Crea funzione con ciclo for per trovare la bici piu leggera
function findLighterBike (bikesArr) {
    let lighterBike = bikesArr[0];
    for (let i = 1; i < bikesArr.length; i++){
        if (bikesArr[i].weight < lighterBike.weight){
            lighterBike = bikesArr[i]
        }
        console.log(lighterBike)
    }
    
    return lighterBike  
  
};

const lighterBike = findLighterBike(bikes);
console.log("The ligher bike name is:", lighterBike);







//Snack2
/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. */

//array di oggetti squadre di calcio
const footballTeams = [
    {
        name: "Inter",
        point: 0,
        fall: 0
    },
    {
        name: "Juve",
        point: 0,
        fall: 0
    },
    {
        name: "Milan",
        point: 0,
        fall: 0
    }
];

// funzione per generare numeri interi random per point e fall (Math.floor(Math.random()

function randomNumberGenerator(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//funzione con ciclo for per assegnare i numeri generati ai FootballTeam
function randomNumberForPoinAndFall (teamArr){ 
 for (let i = 0; i < teamArr.length; i++){
    teamArr[i].point = randomNumberGenerator(1, 10);
    teamArr[i].fall = randomNumberGenerator(1, 10);
    console.log(teamArr[i])
 }
 return teamArr;
}




//stampare in console l'array football Teams con i punti e i falli aggiornati

const updateDataFootbalTeams = randomNumberForPoinAndFall(footballTeams)
console.log(updateDataFootbalTeams)







/* infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */


//estrare i nome e i falli e inserirli in un nuovo array da stampare in console

function extractNameAndFall (teamArr){
    let nameAndFall = [];
    for (let i = 0; i < teamArr.length; i++){
        nameAndFall.push({name: teamArr[i].name, fall: teamArr[i].fall})
    } return nameAndFall
};

const teamsNameAndFall = extractNameAndFall(footballTeams);
console.log(teamsNameAndFall)