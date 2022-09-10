const Employee = require('./Employee');

// Extends Employee class. Adds gitHub to constructor parameters
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super (name, id, email);
        this.gitHubUN = gitHub;
    }

    // New method getGithub
    getGithub() {
        return this.gitHub;
    }

    // Override getRole method - returns Engineer instead of Employee
    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;