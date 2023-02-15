// TODO: Include packages needed for this application

// Pass 'npm i inquirer' into terminal to download node modules
const inquirer = require('inquirer');

console.log('README generator running...') // Checks to make sure index.js is working

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is your project title? ',
    },
    {
    type: 'input',
    name: 'description',
    message: 'Enter your project description: ',
    },
    {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? ',
    },
    {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use: ',
    },
    {
    type: 'input',
    name: 'contribution',
    message: 'List any contribution credits: ',
    },
    {
    type: 'input',
    name: 'email',
    message: 'Enter your email: ',
    },
    {
    type: 'input',
    name: 'github',
    message: 'Enter your Github URL: ',
    },
    {
    type: 'list',
    name: 'license',
    message: 'Choose license: ',
    choices: ['MIT', 'ISC', 'GNUPLv3'],
    filter(val) {
        return val.toLowerCase();
        }
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// Flow of the Program:
// 1. Questions - each question will be an object in an array 'questions'
// 2. runQuery() - get answers to each question from CL
// 3. pass answers into the function that generates the README
// 4. pass the generated README to function that saves to file system

