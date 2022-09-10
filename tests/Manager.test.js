const Manager = require("../lib/Manager");

describe("Manager class", () => {
    describe("getName method", () => {
        it("returns Manager name", () => {
            const testManager = new Manager('Stephen', 1, 'stephen@steveco.com', 5);
            expect(testManager.getName()).toBe('Stephen');
        });
    });

    describe("getId method", () => {
        it("returns Manager ID", () => {
            const testManager = new Manager('Stephen', 1, 'stephen@steveco.com', 5);
            expect(testManager.getId()).toBe(1);
        });
    });

    describe("getEmail method", () => {
        it("returns Manager email", () => {
            const testManager = new Manager('Stephen', 1, 'stephen@steveco.com', 5);
            expect(testManager.getEmail()).toBe('stephen@steveco.com');
        });
    });

    describe("getRole method", () => {
        it("returns Manager name", () => {
            const testManager = new Manager('Stephen', 1, 'stephen@steveco.com', 5);
            expect(testManager.getRole()).toBe('Manager');
        });
    });

    describe("getOfficeNumber method", () => {
        it("returns Manager Office Number", () => {
            const testManager = new Manager('Stephen', 1, 'stephen@steveco.com', 5);
            expect(testManager.getOfficeNumber()).toBe(5);
        });
    });
});