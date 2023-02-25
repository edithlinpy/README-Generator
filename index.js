const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please provide a description of your project:',
        name: 'description',
      },
      {
        type: 'editor',
        message: 'What are the steps required to install your project?',
        name: 'installation',
      },
      {
        type: 'editor',
        message: 'Please provide instructions and examples for use:',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'Please choose a license for your project:',
        name: 'license',
        choices: ["None", "Apache License 2.0", "MIT License",
            "BSD 2-Clause License", "BSD 3-Clause License", 
            "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0", "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",  "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0", "The Unlicense"]
      },
      {
        type: 'input',
        message: 'How can users contribute to your project?',
        name: 'Contributing',
      },
      {
        type: 'input',
        message: 'Please provide examples on how to run your project:',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email',
      },        
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
      console.log(response)
    });
}

// function call to initialize program
init();
