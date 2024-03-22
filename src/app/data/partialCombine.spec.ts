import { pcf1 } from "./partialCombine.implem.1";
import { FctPartialCombine } from "./partialCombine.interface";

testPartialCombine("pcf1", pcf1);

function testPartialCombine(label: string, pcf: FctPartialCombine) {
    describe(`${label} - Combinaison avec des listes vides`, () => {
        it("Deux listes vides se combinent en une liste vide", () => {
            expect(pcf([], [], (a, b) => a + b)).toEqual([]);
        });
    });

    // describe(`${label} - à vous de voir`, () => {
    // });
}