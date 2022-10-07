// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown');

//an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your name?',
      },
    {
        type: "input",
        message: "Enter a disription of your project",
        name: "discription"
    },
    {
        type: "input",
        massage: "Provide installation instructuins",
        name: "installation"
    },
    {
        type: "input",
        massage: "Provide usage information for your project",
        name: "usage"
    },
    {
        type: "input",
        massage: "Provide contribution guidelines",
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
        massage: "Please provide test instructions",
        name: "test"
    },
    {
        type: "input",
        massage: "What is your Github username: ",
        name: "github"
    },
    {
        type: "input",
        massage: "What is your email: ",
        name: "email"
    },
    
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   // fs.writeFile(`${data.name.toLowerCase().split(' ').join('')}.json`)
    
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(response) {
        console.log(response)
        var fileContent = generateMarkdown(response);
        writeToFile('README.md', fileContent)
    });
}

// Function call to initialize app
init();
