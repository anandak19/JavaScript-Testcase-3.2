console.log('Calculating the sum,average, largest number and smallest number');
let numbers = [12, 8, 4, 1, 45, 3, 24];
let sum = 0;
let avarage = 0;
let largestNumber = numbers[0];
let smallestNumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    // calculating sum of numbers
    sum += numbers[i];
    
    // find largestNumber 
    if(numbers[i] >  largestNumber){
        largestNumber = numbers[i]
    }

    // find smallestNumber 
    if (numbers[i] < smallestNumber) {
        try {
            console.log('The smallest number is: ', smallNumber);
        } catch {
            smallestNumber = numbers[i] 
        }
        
    }

    
}

console.log('Sum of the given numbers is',sum);
console.log('Avarage of the given numbers is',sum / numbers.length);
console.log("The largest number is:", largestNumber);
console.log("The smallest number is:", smallestNumber);