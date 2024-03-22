import { FctPartialCombine } from "./partialCombine.interface";

export const pcf1: FctPartialCombine = (L1, L2, f) => {
    const L = [];
    for (let i = 0; i < Math.min(L1.length, L2.length); i++) {
        L.push(L1[i] + L2[i]);
    }
    
    return L.concat(L1.slice(L.length), L2.slice(L.length));
}
