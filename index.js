#! /usr/bin/env node
import inquirer from "inquirer";
const random_num = Math.floor(Math.random() * 10);
console.log('You have three guesses ');
for (let i = 3; i > 0; i--) {
    if (i != 3) {
        console.log('\n' + i + ' guess left');
    }
    const result = await inquirer.prompt([
        {
            name: "userGuessedNumber",
            type: "number",
            message: "Please guess a number between 1-10: "
        }
    ]);
    if (result.userGuessedNumber === random_num) {
        console.log("Congraguations! you guessed the right number.");
        break;
    }
    else {
        console.log("You guessed wrong number.");
    }
    if (result.userGuessedNumber != random_num && i == 1) {
        console.log("\nYou lose!");
    }
}
