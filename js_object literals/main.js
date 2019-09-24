const person = {
    firstName: 'Nick', 
    lastName: 'Ilin', 
    age: 29, 
    email: 'nick@gmail.com', 
    hobbies: ['music', 'sports'], 
    address: {
        city: 'Miami', 
        state: 'FL'
    }, 
    getBirthDayYear: function(){
        return 2019 - this.age;
    }
}

let val;
val = person;

// get a specific value
val = person.firstName;
val = person['firstName'];
val = person.hobbies[0];
val = person.getBirthDayYear();

console.log(val)

const people = [
    {name: 'Nick', age: 29}, 
    {name: 'Lada', age: 21},
    {name: 'Andrii', age: 29}
]