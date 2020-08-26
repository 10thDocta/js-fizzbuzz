// creo una funzione che stampi a video un risultato diverso a seconda se il numero è un multiplo di 3, di 5 o di entrambi

function FizzBuzz(i) {
    if (i % 3 == 0 && i % 5 == 0) {
        return console.log(`FizzBuzz (${i})`);
    }
    if (i % 3 == 0) {
        return console.log(`Fizz (${i})`);
    }
    if (i % 5 == 0) {
        return console.log(`Buzz (${i})`);
    }
    return console.log(i);
}


// ciclo la funzione per 100 volte
let i = 1;

while (i <= 100) {
    FizzBuzz(i);
    i++;
}