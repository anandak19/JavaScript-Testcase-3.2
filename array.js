let names = ['Anu', 'Manu', 'Suresh', 'Raju', 'Manju'];
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Printing Array of values : 

// Using for loop
console.log("Using for loop:");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Using while loop
console.log("\nUsing while loop:");
let j = 0;
while (j < names.length) {
    console.log(names[j]);
    j++;
}

// Using do-while loop
console.log("\nUsing do-while loop:");
let k = 0;
do {
    console.log(names[k]);
    k++;
} while (k < names.length);

// Using for loop with break and continue
console.log("\nUsing for loop with break and continue:");
for (let x = 0; x < values.length; x++) {

    if (values[x] % 2 === 0) {
        continue;
    }
    else if (values[x] === 7) {
        break;
    }
    else{
        console.log(values[x]);
    }
}
