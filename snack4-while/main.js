/*

Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

*/

let numeri = [2, 5, 7, 11, 29, 90];

let sum = 0;


for(let i = 0; i<numeri.length; i++){
    
    if(i %2 != 0){
        console.log(i);
        sum += numeri[i];
    }
    
}


console.log(`La somma dei numeri dispari è ${sum}`);

