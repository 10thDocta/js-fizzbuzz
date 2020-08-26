var i = 1;

while (i <= 100) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`FizzBuzz (${i})`);
    } else if (i % 3 == 0) {
        console.log(`Fizz (${i})`);
    } else if (i % 5 == 0) {
        console.log(`Buzz (${i})`);
    } else {
        console.log(i);
    }

    i++;
}

console.log("*** Inizio ciclo for ***")

for (let index = 1; index <= 100; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
        console.log(`FizzBuzz (${index})`);
    } else if (index % 3 == 0) {
        console.log(`Fizz (${index})`);
    } else if (index % 5 == 0) {
        console.log(`Buzz (${index})`);
    } else {
        console.log(index);
    }

}
