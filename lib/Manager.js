const Employee = require('./Employee');

// Extends Employee class. Adds officeNumber to constructor parameters
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    // New method getOfficeNumber. This wasn't specified, but it seemed like good practice to have it.
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Override getRole method - returns Manager instead of Employee
    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;