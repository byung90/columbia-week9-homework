// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Project title:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter project description:'
  },
  {
    type: 'input',
    name: 'installationInstructions',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usageInformation',
    message: 'Enter usage infomration:',
  },
  {
    type: 'input',
    name: 'contributionGuidlines',
    message: 'Enter contribution guidline:',
  },
  {
    type: 'input',
    name: 'testInstructions',
    message: 'Enter test instructions:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license do you want to use?',
    choices: ['MIT', 'Apache', 'Mozilla Public License 2.0']
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your Github username'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(fileName);
  // fs.writeFile(filename, JSON.stringify(data), err => err ? console.log(err) : console.log('ReadMe successfully created!'));
  const readMe = `
    # ${data.title}

    ## Description
    ${data.description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [Test](#tests)
    - [License](#license)
    - [Questions](#questions)

    ## Installations
    ${data.installationInstructions}

    ## Usage
    ${data.usageInformation}

    ## Credits
    ${data.contributionGuidlines}

    ## Tests
    ${data.testInstructions}

    ## License
    ${data.license}

    ## Questions
    If you have questions, please reach out here:
    Github: ${data.github}
    Email: ${data.email}
  `
  console.log(readMe);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(data => {
      writeToFile('README.md', data);
    })
}

// Function call to initialize app
init();
