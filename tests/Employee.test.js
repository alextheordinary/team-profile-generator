const Employee = require("../lib/Employee");

describe("Employee class", () => {
    describe("getName method", () => {
        it("returns employee name", () => {
            const testEmployee = new Employee('Steve', 1, 'steve@steveco.com');
            expect(testEmployee.getName()).toBe('Steve');
        });
    });

    describe("getId method", () => {
        it("returns employee ID", () => {
            const testEmployee = new Employee('Steve', 1, 'steve@steveco.com');
            expect(testEmployee.getId()).toBe(1);
        });
    });

    describe("getEmail method", () => {
        it("returns employee email", () => {
            const testEmployee = new Employee('Steve', 1, 'steve@steveco.com');
            expect(testEmployee.getEmail()).toBe('steve@steveco.com');
        });
    });

    describe("getRole method", () => {
        it("returns employee name", () => {
            const testEmployee = new Employee('Steve', 1, 'steve@steveco.com');
            expect(testEmployee.getRole()).toBe('Employee');
        });
    });
});