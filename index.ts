#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()* 10 + 1);


const answer = await inquirer.prompt([
{
    name: "userGuessNumber",
    type: "number",
    message:"please guess a number: ",
},
]);
if(answer.userGuessNumber === randomNumber){
console.log("congratulations! you guess a right number");
}else{
    console.log("you guess wrong number");
}