// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
    
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions for your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage instructions for your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your usage instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please provide the names of those who contributed to your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter all contributors!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide test instructions for your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter test instructions!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your project.',
            choices: ['MIT', 'GNU GPLv3']
            
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your GitHub username.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide your email!');
                    return false;
                }
            }
        },
    ]);
};

questions();
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();