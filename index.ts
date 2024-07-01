#! /usr//bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";

// A colourful welcome message.
console.log(chalk.bold.cyanBright("\n\t\t Ehsan Ali word-counter project"));
console.log(" =".repeat(60));

// Prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);

// Trimming the sentence and splitting it into words based on spaces
let words = answers.sentence?.trim().split(" ");

// Analysis of user input sentence
console.log("= ".repeat(65));
console.log(chalk.bold("- Sentence words: "));
console.log(words);
console.log(chalk.bold(`\n - word-counter: ${chalk.bold.redBright(words.length)}`));
console.log("= ".repeat(62));