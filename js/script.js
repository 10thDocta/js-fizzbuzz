var list = document.getElementById("list");
var inner = "";
var i = 1;

// ciclo 100 volte
// while (i <= 100) {

//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(`FizzBuzz (${i})`);
//     } else if (i % 3 == 0) {
//         console.log(`Fizz (${i})`);
//     } else if (i % 5 == 0) {
//         console.log(`Buzz (${i})`);
//     } else {
//         console.log(i);
//     }

//     i++;
// }

// console.log("*** Inizio ciclo for ***")

// for (let index = 1; index <= 100; index++) {
//     if (index % 3 == 0 && index % 5 == 0) {
//         console.log(`FizzBuzz (${index})`);
//     } else if (index % 3 == 0) {
//         console.log(`Fizz (${index})`);
//     } else if (index % 5 == 0) {
//         console.log(`Buzz (${index})`);
//     } else {
//         console.log(index);
//     }

// }


// while (i <= 100) {

//     if (i % 3 == 0 && i % 5 == 0) {
//         inner += `<li> FizzBuzz (${i}) </li>`;
//     } else if (i % 3 == 0) {
//         inner += `<li> Fizz (${i}) </li>`;
//     } else if (i % 5 == 0) {
//         inner += `<li> Buzz (${i}) </li>`;
//     } else {
//         inner += `<li> ${i} </li>`;
//     }

//     i++;
// }

//list.innerHTML = `<ul class="list">${inner}</ul>`;


/* -------
    test 
    ------- */


i = 1;
var listTest = document.getElementById("list").innerHTML;


while (i <= 100) {



    if (i % 3 == 0 && i % 5 == 0) {
        listTest += `<li> FizzBuzz (${i}) </li>`;
    } else if (i % 3 == 0) {
        listTest += `<li> Fizz (${i}) </li>`;
    } else if (i % 5 == 0) {
        listTest += `<li> Buzz (${i}) </li>`;
    } else {
        listTest += `<li> ${i} </li>`;
    }


    document.getElementById("list").innerHTML = `${listTest}`;

    i++;

}

