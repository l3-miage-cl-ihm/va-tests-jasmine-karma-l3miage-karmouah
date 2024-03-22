/**
 * Type d'une fonction combine
 * @param T type des éléments à combiner
 * @param a premier élément
 * @param b deuxième élément
 * @returns un élément de type T, résultat de la combinaison de a et b. 
 */
export type FctCombine = (a: number, b: number) => number;

/**
 * Type d'une liste immuable T
 */
export type ROList<T> = readonly T[];

/**
 * Type d'une fonction partielle de combinaison de listes.
 * La fonction combine les éléments de deux listes dont la longeur peut être différente.
 * Les éléments des listes en entrées qui ont le même indice sont combinés par la fonction f.
 * Les éléments des listes en entrées qui n'ont pas de correspondance sont copiés tels quels dans la liste de sortie.
 * @param T type des éléments à combiner
 * @param L1 première liste
 * @param L2 deuxième liste
 * @param f fonction de combinaison
 * @returns une liste L, résultat de la combinaison de L1 et L2 par f.
 *          L est une nouvelle liste, L1 et L2 restent inchangées.
 *          L.length === Math.max(L1.lentgh, L2.length)
 * Exemples
 * - fctPartialCombine([1, 2, 3], [4, 5, 6], (a, b) => a + b) => [5, 7, 9]
 * - fctPartialCombine([1, 2, 3], [4, 5], (a, b) => a + b) => [5, 7, 3]
 * - fctPartialCombine([1, 2], [4, 5, 6, 7], (a, b) => a - b) => [-3, -3, 6, 7]
 * - fctPartialCombine([1], [2, 3], (a, b) => parseFloat(`${a}${b}`) ) => [12, 3]
 */
export type FctPartialCombine = (L1: ROList<number>, L2: ROList<number>, f: FctCombine) => ROList<number>;