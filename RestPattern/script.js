"use strict";

/* Le code montre comment utiliser l'opérateur spread (...) 
pour copier des tableaux, lier des tableaux multiples et même passer 
des variables comme arguments. Cela fonctionnera également sur des objets, 
même s'ils ne sont pas itérables. Enfin, cela nous montre comment créer des 
copies d'objets, attribuer de nouvelles valeurs et comparer les anciennes valeurs 
aux nouvelles. */

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
};

// Appel de la fonction orderDelivery de l'objet restaurant avec un objet en argument
restaurant.orderDelivery({
    adress: "Via del Sol,21",
});

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodArr = [1, 2, ...arr]; // Ca prend tout les éléments du tableau et les sort individuellement ici ca les place dans le tableau
console.log(goodArr);
console.log(...goodArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"]; // On récupere les elements du tableau puis on ajoute 'gnocci'
console.log(newMenu);

// Créer des copies de tableau

const mainMenuCopy = [...restaurant.mainMenu];

// Lié deux tableaux ou plus

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Les itérables : tableaux, chaines, maps, sets mais pas des objets

const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);

console.log(...str);
// console.log(`${...str} Scmedtmann`); Ne marche pas ! impossible sur les objets

// Depuis ES6 Ca marche sur les objets meme s'ils ne sont pas itérable

const newRestaurant = { ...restaurant, founder: "Guiseppe", foundedIn: 1998 };
console.log(newRestaurant);

// On fait une copie du tableau pour pouvoir modifié les propriétés du tableau sans toucher à l'original

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';

console.log(restaurantCopy.name);
console.log(restaurant.name);