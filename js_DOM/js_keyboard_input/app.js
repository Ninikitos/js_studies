const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');
// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);

// Keyup
// taskInput.addEventListener('keyup', runEvent);

// Keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// Cut 
// taskInput.addEventListener('cut', runEvent);

// Paste
// taskInput.addEventListener('paste', runEvent);

// Change 
select.addEventListener('change', runEvent);

// Input (anyinput)
taskInput.addEventListener('input', runEvent);




function runEvent(e) {

    console.log(`EVENT TYPE ${e.type}`);

    heading.innerText = e.target.value;
    // Get Input value
    console.log(select.value);

    // e.preventDefault();
}