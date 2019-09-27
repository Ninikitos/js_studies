// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);

// console.log(items[0]);

// items[3].style.color = 'red';
// items[2].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// lis[3].style.color = 'red';


// Convert HTML Collection into Array
// lis = Array.from(lis);

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index} : Hello`;
// });
// console.log(lis);

// document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');
// items.forEach(function(item, index){
//     console.log(item.className);
//     item.textContent = `${index} : Hello`;
// });

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
    li.style.background = '#ccc';
});

liEven.forEach(function(li){
    li.style.background = '#f4f4f4';
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.color = 'red';
}


// console.log(items);

