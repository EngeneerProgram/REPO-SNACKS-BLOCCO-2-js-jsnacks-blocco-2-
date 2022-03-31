/*

SNACK 1 Il software deve chiedere per 5 volte all’utente di inserire un numero. 
Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while. 
*/


//implementazione ciclo for
console.log("Implementazione ciclo for");
let somma= 0;
for(let i = 0; i<5; i++){
    let num = parseInt(prompt("Inserisci un numero (ciclo-for) "));
    somma += num;

}

console.log(`La somma dei numeri è ${somma}`);




let sum = 0;
let contatore = 0;
while(contatore < 5){
    let numero = parseInt(prompt("Inserisci nuero (ciclo-while) "));
    contatore++;
    sum +=numero;
}

console.log(`La somma dei numeri è ${sum}`);
