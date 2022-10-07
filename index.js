//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

const generateMarkdown = require('./assets/utils/generateMarkdown');

//an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: "input",
        message: "Enter a disription of your project",
        name: "discription"
    },
    {
        type: "input",
        message: "Provide installation instructuins",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide usage information for your project",
        name: "usage"
    },
    {
        type: "input",
        message: "Provide contribution guidelines",
        name: "contribution"
    },
    {
        type: "list",
        message: "Choose a license for your project?",
        name: "license",
        choices: ["None", "MIT License", "Apache License 2.0", "GNU General Public License v3.0" ],
    },
    {
        type: "input",
        message: "Please provide test instructions",
        name: "test"
    },
    {
        type: "input",
        message: "What is your Github username: ",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email: ",
        name: "email"
    },
    {
        type: "input",
        message: "Questions: ",
        name: "questions"
    },
    
];


//function writes README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}



//function that initializes the app
function init() {
    inquirer.prompt(questions).then(function(response) {
        var fileContent = generateMarkdown(response);
        writeToFile('README.md', fileContent)
    });
}

// Function call to initialize app
init();
