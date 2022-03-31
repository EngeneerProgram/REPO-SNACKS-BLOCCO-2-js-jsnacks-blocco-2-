/*

Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

*/

let numeri = [2, 4, 5, 6, 8, 11, 13, 18 , 19, 23, 26, 27 , 1, 3, 13, 15, 29];

let sum = 0;
let i = 0;

while(i<numeri.length){
    
    numero_dispari = numeri.length[i] %2!=0;
    if(numeri.length[i] %2 != 0){
        console.log(numero_dispari);
    }
    
    
    i++;

}

console.log(`La somma dei numeri dispari è ${sum}`);