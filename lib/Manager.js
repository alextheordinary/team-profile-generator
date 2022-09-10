const Employee = require('./Employee');

// Extends Employee class. Adds officeNumber to constructor parameters
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    // New method getOfficeNumber
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Override getRole method - returns Manager instead of Employee
    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;