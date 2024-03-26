#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\twellcome to codewithMR.fazee - CLI Number Guessing game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "Number",
        Message: "Enter your gusse number(Number limit from 1 to 5):",
    },
]);
if (answer.userGussedNumber === randomNumber) {
    console.log("congratulation ! you guess a correct number.");
}
else {
    console.log("soory ! you guess a worng Number");
}
