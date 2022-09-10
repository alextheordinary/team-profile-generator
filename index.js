// Import Inquirer and other classes
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let teamManager;

inquirer
    .prompt([
        {
            type: 'input',
            message: `What is the team manager's name?`,
            name: 'name'
        },
        {
            type: 'input',
            message: `What is the team manager's employee ID?`,
            name: 'id'
        },
        {
            type: 'input',
            message: `What is the team manager's email address?`,
            name: 'email'
        },
        {
            type: 'input',
            message: `What is the team manager's office number?`,
            name: 'officeNumber'
        },
    ])
    .then((answers) => {
        teamManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        console.log(teamManager);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });