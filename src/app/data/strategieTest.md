# Liste vide:
* Notre stratégie consiste à tester différents cas des deux premiers paramètres(les deux listes), et pour chacun on traite plusieurs fonctions (Troisième paramètre)
  
* Normalement dans ces cas quoique ce soit la fonction on renvois toujours la liste elle même
  
* Première liste vide 
  * Addition
``` javascript 
    expect(pcf([], [1, 2], (a, b) => a + b)).toEqual([1, 2]);
```
  * Soustraction
``` javascript 
    expect(pcf([], [1, 2], (a, b) => a - b)).toEqual([1, 2]);
```

  * ParseFloat
``` javascript
  expect(pcf([], [2, 3], (a, b) => parseFloat(`${a}${b}`) )).toEqual[2, 3];
```

  * Multiplication
``` javascript
  expect(pcf([], [2, 3], (a, b) => a*b )).toEqual[2, 3];
```

* Deuxième liste vide (pareil que le premier cas sauf que c'est la deuxième liste qui es vide)
  
   * Addition
  ``` javascript 
    expect(pcf([5, 17, 2], [], (a, b) => a + b)).toEqual([5, 17, 2]);
  ```

  * Soustraction
  ``` javascript 
    expect(pcf([5, 17, 2], [], (a, b) => a - b)).toEqual([5, 17, 2]);
  ```

  * Division
  ``` javascript 
    expect(pcf([17, 2], [], (a, b) => a / b)).toEqual([17, 2]);
  ```

  # Listes non vides:

  # Même Taille 
  * Addition
  ``` javascript 
    expect(pcf([4,5], [1, 2], (a, b) => a + b)).toEqual([5,7]);
  ```
  
  * Division
  ``` javascript
    expect(pcf([4,6], [0, 2], (a, b) => a / b)).toEqual([Infinity,3]);
  ```
 
   * ParseFloat
  ``` javascript
    expect(pcf([5,6], [2, 3], (a, b) => parseFloat(`${a}${b}`) )).toEqual[52, 63];
  ```


  # Taille L1 > L2
  * Division
  ``` javascript
    expect(pcf([4, 6, 6], [1, 2], (a, b) => a / b)).toEqual([4,3]);
  ```
 
   * ParseFloat
  ``` javascript
    expect(pcf([5, 6, 17], [2], (a, b) => parseFloat(`${a}${b}`) )).toEqual[52];
  ```

  # Taille L2 > L1
  * Division
  ``` javascript
    expect(pcf([4,6], [1, 2, 8], (a, b) => a / b)).toEqual([4,3,8]);
  ```

   * ParseFloat
  ``` javascript
    expect(pcf([8, 9], [2, 9, 5], (a, b) => parseFloat(`${a}${b}`) )).toEqual[82, 99, 5];
  ```

  * Addition
  ``` javascript
    expect(pcf([4,6], [1, 2, 8], (a, b) => a + b)).toEqual([5,8,8]);
  ```

