// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${data.licenseBadge}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}

  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${data.license}

  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  GitHub: [${data.github}](${data.github})
  
  Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
