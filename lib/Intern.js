const Employee = require('./Employee');

// Extends Employee class. Adds school to constructor parameters
class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }

    // New method getGithub
    getSchool() {
        return this.gitHub;
    }

    // Override getRole method - returns Intern instead of Employee
    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;