/*

Generatore di “nomi cognomi” casuali: 
il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati con nome e cognome.

*/

let nomi = ["Valerio" , "Rosario" , "Giovanni" , "Mirko" , "Manuele" , "Mattia", "Francesco"];
let cognomi = ["Di pasquale" , "De maria", "Rimmaudo", "Noto", "Recca", "Garufi", "Barrera"];

let i = 0;
console.log("Lista di invitati");
while(i<nomi.length && i <cognomi.length){
    
    let list_false = nomi[i] + " " + cognomi[i];
    console.log(list_false);

    i++;
}