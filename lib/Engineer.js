const Employee = require('./Employee');

// Extends Employee class. Adds gitHubUN to constructor parameters
class Engineer extends Employee {
    constructor(name, id, email, gitHubUN) {
        super (name, id, email);
        this.gitHubUN = gitHubUN;
    }

    // New method getGithub
    getGithub() {
        return this.gitHubUN;
    }

    // Override getRole method - returns Engineer instead of Employee
    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;