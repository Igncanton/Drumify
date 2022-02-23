// Pad elements from document
const drumKick = document.getElementById('drumKick');
const drumSnare = document.getElementById('drumSnare');
const drumTomRight = document.getElementById('tomRight');
const drumTomLeft = document.getElementById('tomLeft');
const drumFloorTom = document.getElementById('floorTom');
const drumUpperHiHat = document.getElementById('upperHat');
const drumLowerHiHat = document.getElementById('lowerHat');
const drumRide = document.getElementById('ride');
const drumCrashRight = document.getElementById('crashRight');
const drumCrashLeft = document.getElementById('crashLeft');

// Audio elements from document
const kick = document.getElementById('kick');
const snare = document.getElementById('snare');
const hiHat = document.getElementById('hiHat');
const openHat = document.getElementById('openHat');
const tomRight = document.getElementById('soundTomRight');
const tomLeft = document.getElementById('soundTomLeft');
const floorTom = document.getElementById('soundFloorTom');
const ride = document.getElementById('soundRide');
const crash = document.getElementById('soundCrash');

// Function to fire each sound and apply styles
function switchStatement(e) {
    switch (e) {
        // each comment includes the letter its pressed and the sound its fired
        case 90: //Z - Kick
        case 88: //X - Kick
            kick.currentTime = 0;
            kick.play();
            drumKick.classList.add('drum__active');
            break;
        case 67: //C - Snare
        case 86: //V - Snare
            snare.currentTime = 0;
            snare.play();
            drumSnare.classList.add('drum__active');
            break;
        case 70: //F - hiHat
            hiHat.currentTime = 0;
            hiHat.play();
            drumLowerHiHat.classList.add('drum__active');
            drumUpperHiHat.classList.add('closeHiHat__active');
            break;
        case 71: //G - openHat
            openHat.currentTime = 0;
            openHat.play();
            drumUpperHiHat.classList.add('hiHat__active');
            drumLowerHiHat.classList.add('closeHiHat__active');
            break;
        case 68: //D - tom right
            tomRight.currentTime = 0;
            tomRight.play();
            drumTomRight.classList.add('drum__active');
            break;
        case 83: //S - Tom Left
            tomLeft.currentTime = 0;
            tomLeft.play();
            drumTomLeft.classList.add('drum__active');
            break;
        case 65: //A - Floor Tom
            floorTom.currentTime = 0;
            floorTom.play();
            drumFloorTom.classList.add('drum__active');
            break;
        case 69: //R - ride
            ride.currentTime = 0;
            ride.play();
            drumRide.classList.add('ride__active');
            break;
        case 82: //W - crash left
            crash.currentTime = 0;
            crash.play();
            drumCrashRight.classList.add('ride__active');
            break;
        case 87: //E - crash left
            crash.currentTime = 0;
            crash.play();
            drumCrashLeft.classList.add('ride__active');
            break;
    }
}

function removeStyles(value) {
    let number = value
    switch (number) {
        // each comment includes the letter its pressed and the sound its fired
        case 90: //Z - Kick
        case 88: //X - Kick
            drumKick.classList.remove('drum__active');
            break;
        case 67: //C - Snare
        case 86: //V - Snare
            drumSnare.classList.remove('drum__active');
            break;
        case 70: //F - hiHat
            drumLowerHiHat.classList.remove('drum__active');
            drumUpperHiHat.classList.remove('closeHiHat__active');
            break;
        case 71: //G - openHat
            drumUpperHiHat.classList.remove('hiHat__active');
            drumLowerHiHat.classList.remove('closeHiHat__active');
            break;
        case 68: //D - tom
            drumTomRight.classList.remove('drum__active');
            break;
        case 83: //S - clap
            drumTomLeft.classList.remove('drum__active');
            break;
        case 65: //A - Floor Tom
            drumFloorTom.classList.remove('drum__active');
            break;
        case 69: //R - ride
            drumRide.classList.remove('ride__active');
            break;
        case 82: //W - crash left
            drumCrashRight.classList.remove('ride__active');
            break;
        case 87: //E - crash left
            drumCrashLeft.classList.remove('ride__active');
            break;
    }
}

// ****** EVENT LISTENERS ******

// ------ Keys --------
// Keydown event handler to fire each sound and apply a style to each active pad
document.addEventListener('keydown', (e) => {
    // to determine the keycode of each pressed key
    let key = e.keyCode;
    // if statement to avoid repeating sounds when key is pressed
    if (e.repeat) { return };
    switchStatement(key);
});

// Keyup event hadler to remove active syles from the pads
document.addEventListener('keyup', (e) => {
    const value = e.keyCode;
    removeStyles(value);
});


// ------ Click ------
// Click event handler to call switchStatement function to fire each sound and apply styles
document.addEventListener('click', (e) => {

    if (e.target === drumKick) {
        const number = 90
        switchStatement(number);
        setTimeout(function () {
            removeStyles(number);
        }, 100);
    }

    else if (e.target === drumSnare) {
        const number = 86
        switchStatement(number);
        setTimeout(function () {
            removeStyles(number);
        }, 100);
    }
    else if (e.target === drumLowerHiHat) {
        const number = 71
        switchStatement(number);
        setTimeout(function () {
            removeStyles(number);
        }, 100);
    }
    else if (e.target === drumUpperHiHat) {
        const number = 70
        switchStatement(number);
        setTimeout(function () {
            removeStyles(number);
        }, 100);
    }
    else if (e.target === drumTomLeft) {
        const number = 72
        switchStatement(number);
        setTimeout(function () {
            removeStyles(number);
        }, 100);
    }
    else if (e.target === drumTomRight) {
        const number = 74
        switchStatement(number);
        setTimeout(function () {
            removeStyles(number);
        }, 100);
    }
    else if (e.target === drumRide) {
        const number = 75
        switchStatement(number);
        setTimeout(function () {
            removeStyles(number);
        }, 100);
    }
    else { return };
});