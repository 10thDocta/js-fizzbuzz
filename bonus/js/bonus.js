var startTime, endTime;


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
var i = 1;

// salvo il tempo iniziale prima dell'esecuzione del ciclo
startTime = performance.now();

while (i <= 100) {
    FizzBuzz(i);
    i++;
}

// salvo il tempo finale dopo l'esecuzione del ciclo
endTime = performance.now();

// stampa a video il tempo di esecuzione della funzione
var run1 = endTime - startTime;
console.log(run1);

/* ----------
    test
 -----------*/

function FizzBuzz2(i) {

    if (i % 3 == 0) {
        if (i % 5 == 0) {
            return console.log(`FizzBuzz (${i})`);
        }
        return console.log(`Fizz (${i})`);
    }

    if (i % 5 == 0) {
        return console.log(`Buzz (${i})`);
    }

    return console.log(i);
}


i = 1;

startTime = performance.now();

while (i <= 100) {
    FizzBuzz2(i);
    i++;
}

endTime = performance.now();
var run2 = endTime - startTime;
console.log(run2);


/* ----------
    test2
 -----------*/

function FizzBuzz3(i) {

    if (i % 3 != 0 && i % 5 != 0) {
        return console.log(i);
    }

    if (i % 3 == 0) {
        if (i % 5 == 0) {
            return console.log(`FizzBuzz (${i})`);
        }
        return console.log(`Fizz (${i})`);
    }

    return console.log(`Buzz (${i})`);
}


i = 1;

startTime = performance.now();

while (i <= 100) {
    FizzBuzz3(i);
    i++;
}

endTime = performance.now();
var run3 = endTime - startTime;
console.log(run3);


/* ----------
    test3
 -----------*/

function FizzBuzz4(i) {

    if (i % 3 != 0 && i % 5 != 0) {
        return console.log(i);
    }

    if (i % 5 == 0) {
        if (i % 3 == 0) {
            return console.log(`FizzBuzz (${i})`);
        }
        return console.log(`Buzz (${i})`);
    }

    return console.log(`Fizz (${i})`);
}


i = 1;

startTime = performance.now();

while (i <= 100) {
    FizzBuzz4(i);
    i++;
}

endTime = performance.now();
var run4 = endTime - startTime;
console.log(run4);

console.log(run1 + " " + run2 + " " + run3 + " " + run4);