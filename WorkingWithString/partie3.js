'use strict'

console.log('a+very+nice+string'.split('+')); // sépare les éléments par les "+" et les places dans un tableau
console.log('Jonas Schmedtmann'.split(' ')); // sépare les éléments par les " "

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); // la méthode "join()" les relie par les caracteres mis en argument ici des espaces " " et les sort du tableau
console.log(newName);

const capitalizedName = function(name){
    const names = name.split(' ');
    const namesUpper = [];

    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase()+n.slice(1)) // old method
        namesUpper.push(n.replace(n[0],n[0].toUpperCase())) // new method
    }
    console.log(namesUpper.join(' '));
}

capitalizedName('jessica ann smith davis');
capitalizedName('eddy el hombre de la manana');

// Padding/Remplissage

const message = "Go to gate 23!";
console.log(message.padStart(25, '+')); // Retourne une chaine de caractere avec 25 caracteres en remplissant le début avec ce qu'on lui dit ici des "+"
console.log(message.padEnd(35, "+")); // Retourne une chaine de caractere avec 35 caracteres en remplissant la fin avec ce qu'on lui dit ici des "+"

const maskCreditCard = function(number){
    const str = number + ''; // Si on additionne avec une chaine vide ca devient une string auto
    const last = str.slice(-4);
    return last.padStart(str.length, '*')
};

console.log(maskCreditCard(433784864647384));
console.log(maskCreditCard('433784864647385'));

// Repeat

const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function(n){
    console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5);
planesInLine(4);
planesInLine(7);