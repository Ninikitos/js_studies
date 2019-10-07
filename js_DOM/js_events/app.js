// document.querySelector('.clear-tasks').addEventListener('click', 
// function(event){
//     event.preventDefault();
//     console.log('Hello');
// });

document.querySelector('.clear-tasks').addEventListener('click', onclick);

function onclick(event){
    //console.log('Clicked');
    let val;
    val = event;

    // Event target element
    val = event.target;
    val = event.target.id;
    val = event.target.className;
    val = event.target.classList;

    event.target.innerText = 'Hello';

    // Event type
    val = event.type;

    // Timestamp
    val = event.timeStamp;

    // Coordinates relative to Window
    val = event.clientY;
    val = event.clientX;

    // Coordinates relative to element it self
    val = event.offsetY;
    val = event.offsetX;



    console.log(val);
}