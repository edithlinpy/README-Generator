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
        name: 'contributing',
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

// function to return the license badge 
function getLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "BSD 2-Clause License":
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    case "BSD 3-Clause License":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt女女";
    case "Creative Commons Zero v1.0 Universal":
      return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "Eclipse Public License 2.0":
      return "[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)";
    case "GNU Affero General Public License v3.0":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    case "GNU General Public License v2.0":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "GNU Lesser General Public License v2.1":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "The Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    default:
      return "";
  }
}

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(path.join(process.cwd(), 'example', fileName), generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
      // console.log(response);
      response.licenseBadge = getLicenseBadge(response.license);
      console.log(response);
      writeToFile("README.md", response);
    });
}

// function call to initialize program
init();
