// DOM Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM'; // ? is a turnary operator, it essentially means if so. : means else, this is essentially an if/else statement but weird looking.

    // 12hr Format
    hour = hour % 12 || 12; // takes a percentage of the 24hr time and makes it the same percentage of 12 hour time so that it always outputs 12 hour time

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

    setTimeout(showTime, 1000);
}

// Add Zeroes
function addZero(n) { // n is a number
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
    let today = new Date();
    hour = today.getHours();
    if(hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url(../img/morning.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.color = 'white';
        document.body.style.textShadow = '2px 2px 4px black';
        greeting.textContent = 'Good Morning';
    } else if(hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url(../img/afternoon.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.color = 'white';
        document.body.style.textShadow = '2px 2px 4px black';
        greeting.textContent = 'Good Afternoon';
    } else {
        //evening
        document.body.style.backgroundImage = "url(../img/night.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.color = 'white';
        document.body.style.textShadow = '2px 2px 4px black';
        greeting.textContent = 'Good Evening';
    }
}
// Set Name
function setName(e) {
    if(e.type === 'keypress') {
        // Make sure enter is pressed
        if(e.which == 13 || e.keycode == 13) { // enter is key number 13, every key has a numeric value
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}
// Set Focus
function setFocus(e) {
    if(e.type === 'keypress') {
        // Make sure enter is pressed
        if(e.which == 13 || e.keycode == 13) { // enter is key number 13, every key has a numeric value
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}


// Get Name
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}
// Get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// Run
showTime();
setBgGreet();
getName();
getFocus();