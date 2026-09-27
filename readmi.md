# JavaScript DSA Practice Questions

## Q1. Square Pattern

**Question:**
User se `n` input lo aur `n × n` stars ka square pattern print karo.

**Example (`n = 5`):**

```text
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
```

**Answer:**

```js
for (i = 0; i <= n; i++) {
    for (j = 0; j <= n; j++) {
        process.stdout.write("* ");
    }
    console.log();
}
```

---

## Q2. Increasing Triangle Pattern

**Question:**
User se `n` input lo aur increasing star triangle print karo.

**Example (`n = 5`):**

```text
*
* *
* * *
* * * *
* * * * *
```

**Answer:**

```js
for (i = 0; i <= n; i++) {
    for (c = 0; c <= i; c++) {
        process.stdout.write("* ");
    }
    console.log();
}
```

---

## Q3. Decreasing Triangle Pattern

**Question:**
User se `n` input lo aur decreasing/inverted star triangle print karo.

**Example (`n = 5`):**

```text
* * * * *
* * * *
* * *
* *
*
```

**Answer:**

```js
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n - i + 1; j++) {
        process.stdout.write("* ");
    }
    console.log();
}
```

---

## Q4. Number Triangle

**Question:**
User se `n` input lo aur numbers ka triangle print karo, jisme har row `1` se start ho aur row number tak numbers print hon.

**Example (`n = 5`):**

```text
1
12
123
1234
12345
```

**Answer:**

```js
for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        process.stdout.write(`${j}`);
    }
    console.log();
}
```

---

## Q5. Alphabet Triangle

**Question:**
Numbers ki jagah alphabets `A, B, C...` use karke triangle pattern print karo.

**Example:**

```text
A
AB
ABC
ABCD
ABCDE
```

**Answer:**

```js
for (i = 0; i <= n; i++) {
    let ascii = 65;

    for (j = 0; j <= i; j++) {
        process.stdout.write(String.fromCharCode(ascii + ""));
        ascii++;
    }

    console.log();
}
```

---

## Q6. Mirror Triangle

**Question:**
User se `n` input lo aur right-side/mirror star triangle print karo.

**Example:**

```text
    *
   **
  ***
 ****
*****
```

**Answer:**

```js
for (let i = 0; i <= n; i++) {

    for (j = 1; j <= n - i + 1; j++) {
        process.stdout.write(" ");
    }

    for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
    }

    console.log();
}
```

---

## Q7. Hollow/Diagonal Triangle Pattern

**Question:**
Nested loops का इस्तेमाल करके ऐसा pattern print करो जिसमें stars diagonal/hollow structure में दिखाई दें।

**Target pattern:**

```text
        *
      * *
     *   *
    *     *
   *       *
```

**Answer:**

```js
// Homework
// Solve using nested loops and conditions.
```

---

## Q8. X Pattern

**Question:**
`n × n` matrix में stars का X pattern print करो।

**Example (`n = 5`):**

```text
*   *
 * *
  *
 * *
*   *
```

**Answer:**

```js
for (let i = 0; i < n; i++) {

    for (let j = 0; j < n; j++) {

        if (j === i || j === n - 1 - i) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }

    }

    console.log();
}
```

---

# Array Problems

## Q9. Sum of Array Elements

**Question:**
Given an array, उसके सभी elements का sum निकालो।

**Example:**

```js
[10, 20, 30, 40, 50]
```

Expected output:

```text
150
```

**Answer:**

```js
let arrey = [10, 20, 30, 40, 50, 60, 70];
let sum = 0;

for (let i = 0; i < arrey.length; i++) {
    sum = sum + ar
```


## Q10. Reverse an Array Using Extra Space

Question:
Given an array, usko reverse karo using an extra array.

Answer:

let arrey = [10,20,30,40,50];

let temp = new Array(arrey.length);

let j = 0;

for(i = arrey.length - 1; i >= 0; i--){

    temp[j] = arrey[i];

    j++;
}

console.log(temp);
 ## Q11. Reverse an Array Without Extra Space 

Question:
Given an array ko reverse karo without creating another array.

Answer:

let arrey = [10,20,30,40,50,60];

let i = 0, j = arrey.length - 1;

while(i < j){

    let temp = arrey[i];

    arrey[i] = arrey[j];

    arrey[j] = temp;

    i++;
    j--;
}

console.log(arrey);
## Q12. Move All Zeroes to Left and Ones to Right

Question:
Given an array containing only 0 and 1, array ko rearrange karo taki saare 0 left side mein aur saare 1 right side mein aa jaayein.

Answer:

let arrey = [0,1,1,0,1,0,0,1,0,1,1,1,1,0];

let i = 0, j = 0;

for(i; i < arrey.length;){

    if(arrey[i] == 0){

        let temp = arrey[j];

        arrey[j] = arrey[i];

        arrey[i] = temp;

        j++;
    }

    i++;
}

console.log(arrey);