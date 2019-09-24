// create arrays

const numbers = [12, 43, 554, 12, 5];
const numbers2 = new Array(123, 34, 5, 78, 43);
const fruits = ['Pear', 'Banana', 'Apple' ];
const mixed = [12, 'Apple', true, undefined, null, {a: 1, b: 2}, 
new Date()];

let val;

// How many value are in array
val = numbers.length;

// Is an object is Array
val = Array.isArray(numbers);

// Get single value
val = numbers[3];

// Insert something in array
numbers[2] = 100;

// Find index of value 
val = numbers.indexOf(5);

// ---------------
// Mutating arrays
// ---------------

// // Add number in the end 
// numbers.push(250);

// // Add number upfront
// numbers.unshift(120);

// // Take off from end
// numbers.pop();

// // Take off from the front
// numbers.shift();

// // Splice values
// numbers.splice(2, 4);

// // Reverse array
// numbers.reverse();

// // Concatenate array
// val = numbers.concat(number2);

// Sort array
val = fruits.sort();
// val = numbers2.sort();

// // Use the compare func up
// val = numbers.sort(function(a, b) {
//     return a - b;
// });

// // Use the compare func down
// val = numbers.sort(function(a, b) {
//     return b - a;
// });

// Find
function under50(num) {
    return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);