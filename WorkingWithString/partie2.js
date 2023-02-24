"use strict";

//WORKING WITH STRINGS

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name

const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase()+passengerLower.slice(1); // Car lower et upper enlever le reste quand on spécifie un index
console.log(passengerCorrect);

const email = 'hello@jonas.io';
const logingEmail = '  Hello@Jonas.Io \n';

const lowerEmail = logingEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); // enleve les espaces au début et a la fin des chaines de caractere
console.log(trimmedEmail);

const normalizedEmail = logingEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing

const priceEUR = '288,97€';
const priceUS = priceEUR.replace('€', '$').replace(',','.'); // replace prend deux arguments le 1er est le caractere a changé et l'autre celui qui remplace
console.log(priceUS);

const announcement = "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace('door', 'gate')); // ca remplace que le premier caractere qu'il rencontre
console.log(announcement.replaceAll('door', 'gate')); // ca remplace tout les caracteres qu'il rencontrera

// Booleans

const plane1 = "Airbus A320neo";
console.log(plane1.includes('A320')); // Pour demander si ca contient la chaine de caractere renvoie TRUE
console.log(plane1.includes('Boeing')); // Renvoie FALSE
console.log(plane1.startsWith('Air')); // Pour demander si ca commmence par la chaine de caractere renvoie TRUE

if(plane1.startsWith('Airbus') && plane1.endsWith('neo')){
    console.log('Part of the NEW Airbus family');
};

// Practice exercise

const checkBaggage = function(items){
    const baggage = items.toLowerCase();
    if (baggage.includes('_') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board');
    } else {
        console.log('Welcome on board');
    }
};

checkBaggage('I have a laptop, some food and a pocket _');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a guns for protection');