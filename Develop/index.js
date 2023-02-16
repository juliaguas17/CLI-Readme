// TODO: Include packages needed for this application

// for writeFile() function
const fs = require('fs');
// Pass 'npm i inquirer' into terminal to download node modules
const inquirer = require('inquirer');
// require generateMarkdown
const generateMarkdown = require('./utils/generateMarkdown.js')

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
    name: 'credits',
    message: 'List any contribution credits: ',
    },
    {
    type: 'input',
    name: 'tests',
    message: 'Enter additional testing information: ',
    },
    {
    type: 'input',
    name: 'repository',
    message: 'Enter the URL of your GitHub repository: ',
    },
    {
    type: 'input',
    name: 'email',
    message: 'Enter your email address: ',
    },
    {
    type: 'list',
    name: 'license',
    message: 'Choose license: ',
    choices: ['MIT', 'Apache v2', 'GNUPL v3', 'None'],
    }
];
// TODO: Create a function to write README file
function writeToFile(data) {
    const fileName = "./tests/README.md";
    fs.writeFile(fileName, data, function (err) {
        err ? console.log(err) : console.log(fileName + " created!")
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => writeToFile(generateMarkdown(answers)))
    }

// Function call to initialize app
init();


// Flow of the Program:
// 1. questions - each question will be an object in an array 'questions'
// 2. init() - get answers to each question from CL
// 3. pass answers into the function that generates the README
// 4. pass the generated README to function that saves to file system
