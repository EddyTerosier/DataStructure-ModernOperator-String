"use strict";

// Data needed for first part of the section
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    // Function to order food from the menu
    order: function (starterIndex, mainIndex) {
        // Returns an array with the requested food items
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

// Array of numbers
const arr = [1, 2, 3];

// Old version to get info from an array
const a = arr[0];
const b = arr[1];
const c = arr[2];

// With array destructuring, we destructure the right array "arr" into three variables "x,y,z" that look like an array but are not 
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// Destructuring two values from a function and storing them in two variables
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching values with array destructuring is easier than the old way which took at least a third variable
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Destructuring an array into another array
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k); 

// Assigning default values 
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);


/* Le code ci-dessus illustre plusieurs caractéristiques importantes du destructuring en JavaScript, notamment :

Destruction d'un tableau pour créer de nouvelles variables à partir de ses éléments ;
Permutation de valeurs entre deux variables sans avoir besoin d'une variable temporaire;
Affectation des valeurs par défaut à des variables si elles ne peuvent pas être assignées à un élément dans le tableau. */