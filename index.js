// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of this project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please decribe your project.",
    }, 
    {
        type: "input",
        name: "objective",
        message: "What is the project's purpose?",
    },
    {
        type: "input",
        name: "usage",
        message: "How can this project be used?",
    },
    {
        type: "input",
        name: "installation",
        message: "What dependencies are needed to run this project?",
        default: "inquirer 8.2.4",
    },
    {
        type: "input",
        name: "contributors",
        message: "Who all who contributed to this project",
    },   
    {
        type: "input",
        name: "test",
        message: "How can project be tested?",
    },
    {
        type: "list",
        message: "Select a license for this project",
        choices: [
            'Unlicense', 'Apache', 'GNU General Public License', 'MIT License'
        ],
    },
    {
        type: "input",
        name: "learn",
        message: "What has this project taught you?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
        
];

// TODO: Create a function to write README file
function writeREADME(fileName, data) {
    return fs.writeFile('README.md', fileName, data, function(err) {
        if (err) {
           return console.log(err);
        } else {
            console.log("Green Light!")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (data) {
        writeREADME("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();

// module.exports = function();