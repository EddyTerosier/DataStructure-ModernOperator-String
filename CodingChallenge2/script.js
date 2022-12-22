"use strict";

const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// DECLARATION

const goals = Object.keys(game.scored);
// console.log(goals);
const players = Object.values(game.scored);
// console.log(players);
const entriesPlayer = Object.entries(game.scored);
// console.log(entriesPlayer);

const oddsKeys = Object.keys(game.odds);
// console.log(oddsKeys);
const oddsValues = Object.values(game.odds);
// console.log(oddsValues);
const entriesOdds = Object.entries(game.odds);
// console.log(entriesOdds);

const team1Name = game.team1;
// console.log(team1Name);
const team2Name = game.team2;
// console.log(team2Name);

// 1.

// Boucle
for (let [goal, player] of entriesPlayer) {
    goal++;
    console.log(`Goal ${goal}: ${player}`);
}

// 2.

for (let keys of entriesOdds) {
    console.log(keys);
}

// 3.

let string = `Odd of Victory ${game.oddsKeys}`;
console.log(string);
for (let keys of oddsValues) {
    console.log(`${oddsKeys[0]}: ${keys}`);
}