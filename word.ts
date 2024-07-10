import inquirer from "inquirer"
console.log("Word Counter");

let userSentence = await inquirer.prompt([{
    type: "input",
    name: "sentence",
    message: "Enter a sentence: "
}])

let sentence = userSentence.sentence;
let words = sentence.split(" ");
let wordCount = words.length;

console.log(`Your sentence has ${wordCount} words`);
