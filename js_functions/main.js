// Function declaration

function greet(firstName = 'John', lastName = 'Doe') {
    // if(typeof firstName === 'undefined'){firstName = 'John'};
    // if(typeof lastName === 'undefined'){lastName = 'Doe'};
    return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());


// Function expresions
// const square = function(x = 3) {
//     return x * x;
// }

// console.log(square());

// // Immidiatlry invokable function expressions - IIFEs
// (function(name){
//     console.log('HEllo ' + name);
// })('Brad');

//Property methods

const todo = {
    add: function(){
        console.log('Do');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`)
    }
}

todo.delete = function(){
    console.log('delete todo');
}

todo.add();
todo.edit(22);
todo.delete();