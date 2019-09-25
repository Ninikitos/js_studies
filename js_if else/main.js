// if(something){
//     do something
// } else {
//     do something else
// }

const id = 100;

// // EQUAL TO
// if (id == 100) {
//      console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// //Not EQUAL TO
// if (id != 101) {
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// //EQUAL TO VALUE & TYPE
// if (id === 100) {
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// } 

// //EQUAL TO VALUE & TYPE
// if (id !== 100) {
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// // Test if undefined
// if(typeof id !== 'undefined'){
//     console.log(`The ID ${id}`);
// } else {
//     console.log('No ID');
// }

// // Greater or less than
// if(id >= 100){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// // If else
// const color = 'orange';

// if(color === 'red'){
//     console.log('Color is red');
// } else if(color === 'blue'){
//     console.log('Color is blue');
// } else {
//     console.log('Color is not red or blue');
// }

// Logical operators
const name = 'Nick';
const age = 29;

// AND &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
    console.log(`${name} cannot run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

// Ternary operator
console.log(id === 100 ? 'Correct' : 'Incorrect');
