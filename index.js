// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {generateMarkdown} = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name for the project!');
                return false;
            };
        },
    },
    {
        type: 'input',
        name: 'projectDesc',
        message: 'Please enter a description of your project. (Required)',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please add a description!');
                return false;
            };
        },
    },
    {
        type: 'confirm',
        name: 'confirmLink',
        message: 'Would you like to provide a link to the deployed application?',
        default: false,
    },
    {
        type: 'input',
        name: 'projectLink',
        message: 'Provide a link to your deployed project.',
        when: ({confirmLink}) => {
            if (confirmLink) {
                return true;
            } else {
                return false;
            };
        },
    },
    {
        type: 'input',
        name: 'install',
        message: 'Provide steps for installing your app:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for usage:',
    },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to include a screenshot of your application?',
        default: false,
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Provide a link or relative path to a screenshot of the application:',
        when: ({confirmUsage}) => {
            if (confirmUsage) {
                return true;
            } else {
                return false;
            };
        },
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'Choose a license:',
        choices: ['MIT', 'GNU General Public License v3.0', 'Other/No License'],
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Add guidelines for contributing to your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide any tests or code examples of your app:',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Add your GitHub username so users can contact you:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address so users can contact you:',
    },
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
const writeFile = fileContent => {
    return new Promise((resolve,reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
const init = () => {
    return inquirer
        .prompt(questions)
        .then(readmeData => {
            return generateMarkdown(readmeData);
        })
        .then(readmeFile => {
            return writeFile(readmeFile);
        })
        .catch(err => {
            console.log(err);
        });
};

// Function call to initialize app
init();
