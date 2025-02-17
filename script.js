$(document).ready(onReady);
console.log('hello js!');
// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let heroAP = 100;
let fungusHP = 100;


function onReady() {
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    console.log('hello jQuery!');
    // Event Listeners
        // Some issues here, dropped the attack-btn class on each
        // and then they worked.
    $('.arcane-scepter').on('click', arcaneScepter)
    $('.entangle').on('click', entangle)
    $('.dragon-blade').on('click', dragonBlade)
    $('.star-fire').on('click', starFire)
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

}

// Event Handlers

function arcaneScepter() {
    console.log('arcaneScepter clicked!');
    heroAP -= 12;
    // console.log('heroAP, should be 88:', heroAP);
    fungusHP -= 14;
    // console.log('fungusHP, should be 86:', fungusHP);
    render();
}

function entangle() {
    console.log('entangle clicked!');
    heroAP -= 23;
    fungusHP -= 9;
    render();
}

function dragonBlade() {
    console.log('dragonBlade clicked!');
    heroAP -= 38;
    fungusHP -=47;
    render();
}

function starFire() {
    console.log('starFire clicked!');
    heroAP -= 33;
    fungusHP -= 25;
    render();
}

// Render Function
function render() {
    if (heroAP < 0 ) {
        heroAP = 0
    }
    if (fungusHP < 0 ) {
        fungusHP = 0
    }

        // HP Regeneration: if freaky fungus's HP falls bellow 50, 
    // have it regenerate 1HP every second. Hint: look up the 
    // built in setInterval() function!
    if (fungusHP < 50) {
        // label with handle te set up for clearInterval()
        setInterval(hpRegeneration, 1000)
    } else {
        clearInterval()
    }
    // Not sure where to put this? If I put it into the 
    // render(), it only occurs when the function is 
    // called.

    // If hp is equal 0, replace walk class with a dead class on the freaky-fungus element
    if (fungusHP === 0) {
        // console.log('fungus should be dead');
        $('.freaky-fungus').removeClass('walk')
        $('.freaky-fungus').addClass('dead')
    }
    // if ap is equal to 0, replace walk class with a jump class on the freaky-fungus element
    if (heroAP === 0) {
    // if ap is equal to 0, give all attack buttons a disabled attribute
        // $('.attack-btn').removeClass('.attack-btn')
        // $('.attack-btn').addClass('.attack-btn[disabled]')
    // WOOF this one was tricky. had to do lots of googling
        $('.attack-btn').attr('disabled', true)

        $('.freaky-fungus').removeClass('walk')
        $('.freaky-fungus').addClass('jump')
    }
    $('.ap-text').text(heroAP).append(' AP');
    $('.hp-text').text(fungusHP).append(' HP');
}

function hpRegeneration() {
    fungusHP++
    // console.log(fungusHP);
    // log success!
    // get this to impact the DOM
    $('.hp-text').text(fungusHP).append(' HP');
}