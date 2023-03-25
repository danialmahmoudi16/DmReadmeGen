// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const markdown = require('./utils/generateMarkdown')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide the project description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide the installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide the usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide the contribution guidelines:',
        name: 'guidelines',
    },
    {
        type: 'input',
        message: 'Provide the test instructions:',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Select a license for the project:',
        name: 'license',
        choices: ['MIT','Apache License 2.0','Boost Software License 1.0','N/A']
    },
    {
        type: 'input',
        message: 'Provide your Github username:',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Provide your email address:',
        name: 'email',
    }






];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();