"use strict";

// Data needed for a later exercise
const flights =
    "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const weekdays = [
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
    "dimanche",
];

const openingHour = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHour,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({
        starterIndex = 1,
        mainIndex = 0,
        time = "20:00",
        address = "Undefined",
    }) {
        console.log(
            `Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
        );
    },

    orderPizza(mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(...otherIng);
    },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}:${el}`);
}

// const rest1 = {
//     name: "Capri",
//     numGuests: 0,
// };
// const rest2 = {
//     name: "La Piazza",
//     owner: "Giovanni Rossi",
// };

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10; // égale a "rest1.numGuests = rest1.numGuests || 10;"
// rest2.numGuests ||= 10;

// Nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner &&= "<ANONYMOUS>"
// rest2.owner &&= "<ANONYMOUS>"

// console.log(rest1);
// console.log(rest2);

// Nullish: null or undefined ( NOT 0 or "")

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// // OR Operator
// console.log("-----OR-----");
// // Use any data type, return any data type, short-circuiting
// // Si la premiere valeur est vraie il affichera forcement cette valeur
// console.log(3 || "Jonas");
// console.log("" || "Jonas");
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || "" || "Hello" || 23 || null);

// restaurant.numGuests = 42;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// console.log(restaurant.numGuests || 10);

// // AND Operator
// // C'est l'inverse de OR

// console.log("-----AND-----");

// console.log(0 && "Jonas");
// console.log(7 && "Jonas");

// console.log("Hello" && 23 && null && "Jonas");

// // Practical Example
// if (restaurant.orderPizza) {
//     restaurant.orderPizza("shroom", "spinach");
// }
// restaurant.orderPizza && restaurant.orderPizza("shroom", "spinach");

// // 1. DESTRUCTURING

// // SPREAD, Because on RIGHT side of "="

// const arr = [1, 2, ...[3, 4]];

// // REST, Because on LEFT side of "="
// // REST Collecte les elements non-utilisés et les stock dans un tableau ici "others"

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, ...others);

// const [pizza, , Risotto, ...otherFood] = [
//     ...restaurant.mainMenu,
//     ...restaurant.starterMenu,
// ];

// console.log(pizza, Risotto, ...otherFood);

// // Objects

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2.  FUNCTIONS

// // REST ARGUMENTS
// const add = function (...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//     console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("shroom","onion","olives","spinach")
// restaurant.orderPizza("Shroom");

// restaurant.orderDelivery({
//     time: "22:30",
//     address: "Via del Sole,21",
//     mainIndex: 2,
//     starterIndex: 2,
// });
// restaurant.orderDelivery({});

// Spread Operator

// const arr = [7, 8, 9];
// const newArray = [1, 2, ...arr];
// console.log(newArray);

// console.log(...newArray);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// Copy Array

// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 Arrays

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(...menu);

// // Iterables: arrays,strings,maps,sets. NOT objects
// const str = "Jonas";
// const letters = [...str, "", "s."];
// console.log(letters);
// console.log(...str);

//Real world Experiment

// const ingredients = [
//     prompt("Let's make pasta !\nIngredient 1?"),
//     prompt("Ingredient 2?"),
//     prompt("Ingredient 3?"),
// // ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Objects

// const newRestaurant = { foundedIn: 1995, ...restaurant, founder: "Giuseppe" };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested Object

// const {
//     fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
