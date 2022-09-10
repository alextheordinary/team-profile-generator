const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    describe("getName method", () => {
        it("returns Engineer name", () => {
            const testEngineer = new Engineer('Esteban', 1, 'esteban@steveco.com', 'estebanthesteve');
            expect(testEngineer.getName()).toBe('Esteban');
        });
    });

    describe("getId method", () => {
        it("returns Engineer ID", () => {
            const testEngineer = new Engineer('Esteban', 1, 'esteban@steveco.com', 'estebanthesteve');
            expect(testEngineer.getId()).toBe(1);
        });
    });

    describe("getEmail method", () => {
        it("returns Engineer email", () => {
            const testEngineer = new Engineer('Esteban', 1, 'esteban@steveco.com', 'estebanthesteve');
            expect(testEngineer.getEmail()).toBe('esteban@steveco.com');
        });
    });

    describe("getRole method", () => {
        it("returns Engineer name", () => {
            const testEngineer = new Engineer('Esteban', 1, 'esteban@steveco.com', 'estebanthesteve');
            expect(testEngineer.getRole()).toBe('Engineer');
        });
    });

    describe("getGithub method", () => {
        it("returns Engineer Github username", () => {
            const testEngineer = new Engineer('Esteban', 1, 'esteban@steveco.com', 'estebanthesteve');
            expect(testEngineer.getGithub()).toBe('estebanthesteve');
        });
    });
});