const firstName = 'Nick';
const lastName = 'Ilin';
const age = 29;
const str = 'My name is Nick';

let val;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'John '; 
val += 'Doe';

val = 'Hello my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome I cannot wait';

// Lenth
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// ToUp/Tolow
val = firstName.toLowerCase();
val = firstName.toUpperCase();

val = firstName[0];

// indexOf
val = firstName.indexOf('c');
val = firstName.lastIndexOf('N');

// charAt
val = firstName.charAt('0');

// Get last char
val = firstName.charAt(firstName.length - 1);

// Get substring
val = firstName.substring(0, 2);

// slice
val = firstName.slice(0, 3);

// split
val = str.split(' ');

// replace
val = str.replace('Nick', 'Jack');

// includes
val = str.includes('Nick');

console.log(val);