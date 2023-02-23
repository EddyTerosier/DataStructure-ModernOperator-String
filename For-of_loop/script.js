"use strict";

/* L'amélioration d'objet littéraux sont un nouveau type d'expression JavaScript 
qui a été introduit avec la version 6 de ECMAScript (ES6). Ils offrent une syntaxe 
plus concise et plus intuitive que les objets traditionnels en permettant la création 
directe d'objets dont les propriétés valeur sont initialisées à partir de variables et 
expressions. Cela permet aux développeurs d'écrire du code propre et exceptionnellement 
structuré, ce qui réduit le temps et la complexité des tâches pouvant être faites avec 
les objets en JavaScript. */

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Ouvert 24h/24
        close: 24,
    },
};

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    // ES6 Amélioration des objets litéraux ( qui sont duplqués )
    openingHours,

    // Définition d'une fonction qui permet de passer commande
    order(starterIndex, mainIndex) {
        // On peut aussi écrire les méthodes dans les objets comme ca
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
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// For of loop method

for (const item of menu) {
    // On peut utiliser les continue et les break dans cette boucle
    console.log(item);
}

for (const item of menu.entries()) {
    // la méthode .entries permet de mettre dans un tableau les éléments avec son index
    console.log(`${item[0] + 1}: ${item[1]}`); // old way
}

for (const [i, el] of menu.entries()) {
    // On destructure directement le tableau en sachant que i sera l'index et el l'élément
    console.log(`${i + 1}: ${el}`); // new way
}
