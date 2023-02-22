"use strict";

/* Le rest operator (...) dans JavaScript est un opérateur qui permet de récupérer les valeurs 
restantes d'un objet iterable (comme un tableau), et de les stocker dans une nouvelle variable.
Par exemple, const [a, b, ...elements] = [1, 2, 3, 4]; permettrait de stocker les éléments 
restants du tableau (3 et 4) dans la nouvelle variable elements. */

/* Lorsqu'il est utilisé avec des objets, 
l'opérateur REST stocke les éléments non spécifiés dans un objet distinct.

L'opérateur REST peut être utilisé pour définir 
des paramètres variadiques vers des fonctions. 
Lorsque cela se produit, tous les arguments qui 
sont envoyés à une fonction seront regroupés au 
sein d'un seul tableau natif, ce qui facilite 
considérablement le traitement et la manipulation des données. */

// Définition de la variable flights qui est utilisée dans un exercice ultérieur
const flights =
    "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Définition d'un objet restaurant contenant plusieurs propriétés, des tableaux et des fonctions
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Ouvert 24h/24
            close: 24,
        },
    },

    // Définition d'une fonction qui permet de passer commande
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // Définition d'une fonction pour passer commande à livrer
    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = "20:00",
        adress,
    }) {
        console.log(
            `Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be received to ${adress} at ${time}`
        );
    },

    orderPasta: function (ing1, ing2ing3) {
        console.log(
            `Here is your delictious pasta with ${ing1}, ${ing2},${ing3}`
        );
    },

    orderPizza: function (mainIng, ...otherIngredients){
        console.log(mainIng);
        console.log(otherIngredients);
    }
};

//---------------------  1. Destructuring

// Le REST operator est l'opposé du SPREAD operator

// SPREAD est a droite du signe "="

const arr = [1, 2, ...[3, 4]];

// REST est a gauche du signe "="

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Le REST operator DOIT etre le dernier element

const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects || Les éléments seront stockés dans un objete et pas dans un tableau

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//--------------------- 2. Functions

// Voici un REST parameters

const add = function (...numbers) {
    let sum =0;
    for (let i = 0; i < numbers.length; i++) sum+= numbers[i];
    console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23,5,7];
add(...x);

restaurant.orderPizza('Shrooms', 'Oignon', 'spinach', 'olive');
restaurant.orderPizza('Shrooms')

/* Ce code montre comment utiliser l'operateur REST. 
Dans le premier morceau de code, l'opérateur REST est 
placé après [1,2] et contient des valeurs allant de 3 à 4. 
Cela permet à toutes ces valeurs d'être regroupées sous la même variable.

Le deuxième morceau de code utilise l'opérateur REST pour 
assigner plusieurs éléments avec une seule instruction. 
Cela empêche également des éléments spécifiques de passer 
inaperçu (dans le cas présent, le deuxième élément de l'array).

Le dernier exemple montre comment l'opérateur REST peut être 
combiné avec un autre opérateur: le Spread Operator. 
En l'utilisant, il est possible de passer des éléments d'un 
array arr à une fonction sans avoir à créer un corps de code 
supplémentaire pour le faire. */