# JavaScript DSA Practice Questions

## Table of Contents

- [Basic Problems (Q1–Q6)](#basic-problems)
- [Loop Problems (Q7–Q13)](#loop-problems)
- [Pattern Problems (Q14–Q21)](#pattern-problems)
- [Array Problems (Q22–Q25)](#array-problems)

---

# Basic Problems

## Q1. Swap Two Numbers Using a Third Variable

**Question:**
Do numbers `a` aur `b` diye gaye hain. Inki values ko ek third variable `c` ka use karke swap karo.

**Answer:**

```js
let a = 10;
let b = 20;

let c = a; // c = 10
a = b;     // a = 20
b = c;     // b = 10

console.log(a, b); // 20 10
```

---

## Q2. Swap Two Numbers Without Using a Third Variable

**Question:**
Do numbers `a` aur `b` ko bina third variable ke swap karo.

**Answer:**

```js
let a = 10;
let b = 20;

a = a + b; // a = 30
b = a - b; // b = 10
a = a - b; // a = 20

console.log(a, b); // 20 10
```

---

## Q3. Swap Two Numbers Using Array Destructuring

**Question:**
JavaScript mein array destructuring ka use karke do variables ki values swap karo.

**Answer:**

```js
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a, b); // 20 10
```

---

## Q4. Calculate Discount Based on Amount

**Question:**
User se amount input lo aur following discount rules ke according payable amount calculate karo:

- `0–4999` → 0% discount
- `5000–7999` → 5% discount
- `8000–9999` → 10% discount
- Otherwise → invalid amount

**Answer:**

```js
let amount = Number(prompt("Enter amount"));

if (amount > 0 && amount < 5000) {
    console.log(`You got 0% discount. Your payable amount is ${amount}`);

} else if (amount >= 5000 && amount < 8000) {
    let payable = amount - (amount * 5 / 100);
    console.log(`You got 5% discount. Your payable amount is ${payable}`);

} else if (amount >= 8000 && amount < 10000) {
    let payable = amount - (amount * 10 / 100);
    console.log(`You got 10% discount. Your payable amount is ${payable}`);

} else {
    console.log("Invalid amount");
}
```

---

## Q5. Calculate Electricity Bill

**Question:**
Electricity units ke basis par bill calculate karo:

- First 100 units → ₹4/unit
- 101–200 units → ₹6/unit
- 201–400 units → ₹8/unit
- Above 400 units → ₹13/unit

**Answer:**

```js
let unit = Number(prompt("Enter units"));

let amount = 0;

if (unit > 400) {
    amount = (unit - 400) * 13;
    unit = 400;
}

if (unit <= 400 && unit >= 200) {
    amount += (unit - 200) * 8;
    unit = 200;
}

if (unit <= 200 && unit >= 100) {
    amount += (unit - 100) * 6;
    unit = 100;
}

amount += unit * 4;

console.log(amount);
```

---

## Q6. Calculate Number of Notes

**Question:**
Given amount ko ₹500, ₹200 aur ₹100 ke notes mein represent karo aur required notes ki quantity print karo.

**Answer:**

```js
let amount = Number(prompt("put your amount"));

let n500 = Math.floor(amount / 500);
amount = amount % 500;

let n200 = Math.floor(amount / 200);
amount = amount % 200;

let n100 = Math.floor(amount / 100);
amount = amount % 100;

console.log(`500 * ${n500}`);
console.log(`200 * ${n200}`);
console.log(`100 * ${n100}`);

if (amount > 0) {
    console.log(`Remaining: ${amount}`);
}
```

**Example:**

```text
Input: 1800
500 * 3
200 * 1
100 * 1
```

---

# Loop Problems

## Q7. Find Sum of First N Natural Numbers

**Question:**
User se `n` input lo aur `1` se `n` tak ke numbers ka sum `for` loop ka use karke calculate karo.

**Answer:**

```js
let n = Number(prompt("put your number ?"));

if (n > 0) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    console.log(sum);
}
```

**Example:**

`n = 5`

```text
1 + 2 + 3 + 4 + 5 = 15
```

---

## Q8. Find Factorial of a Number

**Question:**
User se `n` input lo aur `for` loop ka use karke `n!` calculate karo.

**Answer:**

```js
let n = Number(prompt("put your number ?"));

if (n > 0) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    console.log(fact);
}
```

**Example:**

```text
5! = 5 × 4 × 3 × 2 × 1 = 120
```

---

## Q9. Find All Divisors of a Number

**Question:**
User se ek number input lo aur uske saare divisors print karo.

**Answer:**

```js
let n = Number(prompt("put your number ?"));

if (n > 0) {
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            console.log(i);
        }
    }
}
```

**Example:**

`n = 12`

```text
1
2
3
4
6
12
```

---

## Q10. Check Whether a Number is Prime or Non-Prime

**Question:**
Ek number input lo aur determine karo ki number prime hai ya non-prime.

**Answer:**

```js
let n = Number(prompt("put your number ?"));

function isPrime(n) {
    if (n < 2) {
        return console.log("neither prime nor non-prime");
    }

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return console.log("non-prime");
        }
    }

    console.log("prime");
}

isPrime(n);
```

**Example:**

```text
7  → prime
12 → non-prime
```

---

## Q11. Find Sum of Digits Using While Loop

**Question:**
User se ek number input lo aur `while` loop ka use karke uske digits ka sum calculate karo.

**Answer:**

```js
let n = Number(prompt("put your number"));

let sum = 0;

while (n > 0) {
    let rem = n % 10;

    sum = sum + rem;

    n = Math.floor(n / 10);
}

console.log(sum);
```

**Example:**

```text
1234
1 + 2 + 3 + 4 = 10
```

---

## Q12. Reverse a Number

**Question:**
User se ek number input lo aur `while` loop ka use karke us number ko reverse karo.

**Answer:**

```js
let n = Number(prompt());

let rev = 0;

while (n > 0) {
    let rem = n % 10;

    rev = rev * 10 + rem;

    n = Math.floor(n / 10);
}

console.log(rev);
```

**Example:**

```text
Input: 12345
Output: 54321
```

---

## Q13. Number Guessing Game

**Question:**
Computer `1` se `100` ke beech ek random number generate kare. User ko number guess karna hai.

Rules:

- Invalid input → `"sahi number dalde 1-100 ke andar"`
- Guess greater than random number → `"too high"`
- Guess smaller than random number → `"too small"`
- Correct guess → congratulation message

**Answer:**

```js
let random = Math.floor(Math.random() * 100) + 1;

let guess = -1;

while (guess !== random) {

    guess = Number(prompt("put your number here"));

    if (isNaN(guess) || guess < 1 || guess > 100) {
        console.log("sahi number dalde 1-100 ke andar");
        continue;

    } else if (guess > random) {
        console.log("too high");

    } else if (guess < random) {
        console.log("too small");

    } else {
        console.log("congratulation you got it, the number was", guess);
    }
}
```

---

# Pattern Problems

## Q14. Square Pattern

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
let n = 5;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        process.stdout.write("* ");
    }
    console.log();
}
```

---

## Q15. Increasing Triangle Pattern

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
let n = 5;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }
    console.log();
}
```

---

## Q16. Decreasing Triangle Pattern

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
let n = 5;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
        process.stdout.write("* ");
    }
    console.log();
}
```

---

## Q17. Number Triangle

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
let n = 5;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`${j}`);
    }
    console.log();
}
```

---

## Q18. Alphabet Triangle

**Question:**
Numbers ki jagah alphabets `A, B, C...` use karke triangle pattern print karo.

**Example (`n = 5`):**

```text
A
AB
ABC
ABCD
ABCDE
```

**Answer:**

```js
let n = 5;

for (let i = 1; i <= n; i++) {
    let ascii = 65;

    for (let j = 1; j <= i; j++) {
        process.stdout.write(String.fromCharCode(ascii));
        ascii++;
    }

    console.log();
}
```

---

## Q19. Mirror Triangle

**Question:**
User se `n` input lo aur right-side/mirror star triangle print karo.

**Example (`n = 5`):**

```text
    *
   **
  ***
 ****
*****
```

**Answer:**

```js
let n = 5;

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(" ");
    }

    for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
    }

    console.log();
}
```

---

## Q20. Hollow/Diagonal Triangle Pattern

**Question:**
Nested loops ka use karke aisa pattern print karo jisme stars diagonal/hollow structure mein dikhein.

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

## Q21. X Pattern

**Question:**
`n × n` matrix mein stars ka X pattern print karo.

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
let n = 5;

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

## Q22. Sum of Array Elements

**Question:**
Given an array, uske saare elements ka sum nikalo.

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
let arr = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

console.log(sum);
```

---

## Q23. Reverse an Array Using Extra Space

**Question:**
Given an array ko reverse karo using an extra array.

**Answer:**

```js
let arr = [10, 20, 30, 40, 50];

let temp = new Array(arr.length);

let j = 0;

for (let i = arr.length - 1; i >= 0; i--) {
    temp[j] = arr[i];
    j++;
}

console.log(temp); // [50, 40, 30, 20, 10]
```

---

## Q24. Reverse an Array Without Extra Space

**Question:**
Given an array ko reverse karo without creating another array.

**Answer:**

```js
let arr = [10, 20, 30, 40, 50, 60];

let i = 0, j = arr.length - 1;

while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    i++;
    j--;
}

console.log(arr); // [60, 50, 40, 30, 20, 10]
```

---

## Q25. Move All Zeroes to Left and Ones to Right

**Question:**
Given an array containing only `0` and `1`, array ko rearrange karo taki saare `0` left side mein aur saare `1` right side mein aa jaayein.

**Answer:**

```js
let arr = [0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0];

let j = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;

        j++;
    }
}

console.log(arr); // [0,0,0,0,0,0,1,1,1,1,1,1,1,1]
```