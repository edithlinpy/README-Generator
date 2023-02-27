# README-Generator
A README generator helps users to create a professional README for a new project.

## Description
When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:

The title of my project

Sections entitled:
* Description
* Table of Contents
* Installation
* Usage
* License
* Contributing
* Tests
* Questions

:small_orange_diamond: When a user enters the project title then it is displayed as the title of the README

:small_orange_diamond: When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

:small_orange_diamond: When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

:small_orange_diamond: When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile

:small_orange_diamond: When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions

:small_orange_diamond: When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README

## Installation
1. To begin, [download](https://nodejs.org/en/download/) and install Node.js for your operating system.

2. Download this repository, open a terminal and use 'npm init -y' to initialize.

3. Use the folliwng commands to install 'fs' and 'inquirer' packages:

    ```console
    npm install fs
    ```

    ```console
    npm install --save inquirer@^8.0.0
    ```

4. Invoke The application by using the following command:

    ```console
    node index.js
    ```

## Usage
Follow the instructions and answer all the questions, a professional README.md file will be created in the example folder. Here is an example:

![Terminal output](https://github.com/edithlinpy/README-Generator/blob/main/images/screen.jpg?raw=true)

A sample README.md can be found in the example folder.







