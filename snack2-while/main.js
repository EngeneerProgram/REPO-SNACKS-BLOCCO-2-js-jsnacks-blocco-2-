/**
 Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.
 */

let i = 0;
let numero = parseInt(prompt("Inserisci un numero: "));

while(i<numero){
    if(numero %2 == 0 &&true){
        console.log(numero);
    }else{
        console.log(numero + 1);
    }
    i++;
}