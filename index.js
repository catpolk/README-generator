// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

// const generateREADME = 


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please enter a disription of your project",
        name: "Discription"
    },
    {
        type: "input",
        massage: "Please provide installation instructuins",
        name: "Installation"
    },
    {
        type: "input",
        massage: "Please provide usage information",
        name: "Usage"
    },
    {
        type: "input",
        massage: "Please provide contribution guidelines",
        name: "License"
    },
    {
        type: "input",
        massage: "Please provide test instructions",
        name: "Test"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
