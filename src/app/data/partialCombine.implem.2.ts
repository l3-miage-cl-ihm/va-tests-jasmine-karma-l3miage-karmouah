import { FctPartialCombine } from "./partialCombine.interface";

export const pcf2: FctPartialCombine = (L1, L2, f) => {
    const L = [];
    for (let i = 0; i < Math.max(L1.length, L2.length); i++) {
        L.push(f(L1[i], L2[i]));
    }
    
    return L.concat(L1.slice(L.length), L2.slice(L.length));
}
