// Import Inquirer and other classes
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const BuildPage = require('./lib/BuildPage');
let teamMembers = []; // Array of team members to add to profile page

// Solicits information about the team manager and then creates a new manager object after validating inputs. Adds manager to team and then calls the main menu prompt
function setupManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the team manager's name?`,
                name: 'name'
            },
            {
                type: 'number',
                message: `What is the team manager's employee ID?`,
                name: 'id'
            },
            {
                type: 'input',
                message: `What is the team manager's email address?`,
                name: 'email'
            },
            {
                type: 'number',
                message: `What is the team manager's office number?`,
                name: 'officeNumber'
            },
        ])
        .then((answers) => {
            let teamManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            teamMembers.push(teamManager);
            callMenuPrompt();
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Brings up the prompt to solicit Engineer information, creates a new Engineer object, and then adds them to the team
function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: `Engineer name?`,
                name: 'name'
            },
            {
                type: 'number',
                message: `Employee ID?`,
                name: 'id'
            },
            {
                type: 'input',
                message: `Email address?`,
                name: 'email'
            },
            {
                type: 'input',
                message: `Github username?`,
                name: 'github'
            },
        ])
        .then((answers) => {
            let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamMembers.push(newEngineer);
            callMenuPrompt();
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Brings up the prompt to solicit Intern information, creates a new Intern object, and then adds them to the team
function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: `Intern name?`,
                name: 'name'
            },
            {
                type: 'number',
                message: `Employee ID?`,
                name: 'id'
            },
            {
                type: 'input',
                message: `Email address?`,
                name: 'email'
            },
            {
                type: 'input',
                message: `School name?`,
                name: 'school'
            },
        ])
        .then((answers) => {
            let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamMembers.push(newIntern);
            callMenuPrompt();
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Brings up the prompt either add an engineer, add an intern, or publish the page
function callMenuPrompt() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: `Choose action:`,
                name: 'action',
                choices: [
                    { name: "Add an engineer", value: "Engineer" },
                    { name: "Add an intern", value: "Intern" },
                    { name: "Publish HTML Page", value: "Publish" },
                ]
            },
        ])
        .then((answers) => {
            switch (answers.action) {
                case "Engineer": {
                    addEngineer();
                    break;
                }
                case "Intern": {
                    addIntern();
                    break;
                }
                case "Publish": {
                    const pageBuilder = new BuildPage();
                    pageBuilder.writeFile(teamMembers);
                    break;
                }

            }
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

setupManager();