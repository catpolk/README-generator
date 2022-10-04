// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require(`./utils/generateMarkdown`);


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
    {
        type: "input",
        message: "Enter a disription of your project",
        name: "Discription"
    },
    {
        type: "input",
        massage: "Provide installation instructuins",
        name: "Installation"
    },
    {
        type: "input",
        massage: "Provide usage information for your project",
        name: "Usage"
    },
    {
        type: "input",
        massage: "Provide contribution guidelines",
        name: "Contribution"
    },
    {
        type: "list",
        message: "Choose a license for your project?",
        name: "License",
        choices: ["None", "MIT License", "Apache License 2.0", "GNU General Public License v3.0" ],
      },
    {
        type: "input",
        massage: "Please provide test instructions",
        name: "Test"
    },
    
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${data.name.toLowerCase().split(' ').join('')}.json`)
    
    fs.writeFile(fileName, JSON.stringify(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(response) {
        console.log(response)
        var fileContent = generateMarkdown(response);
        writeToFile(fileContent)
    });
}

// Function call to initialize app
init();
