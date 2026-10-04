const prompt = require(`prompt-sync`)();
let input = prompt("enter your string  ");

// let n = prompt("Enter your name: ");

// let a = 10
// let b = 20

// let c = a // c = 10
// a = b // a = 20
// b = c  // b = 10

// //////////////////////////////////

// let a = 10
// let b = 20

// a = b - a // a = 10
// b = a + b // b = 20

// /////////////////////////////////////

// [a,b] = [b,a]

// let amount = Number(prompt());

// if(amount > 0 && amount < 5000){
//     console.log(`you got 0% discount your paybale amount ia ${amount}`);

// }else if(amount > 5000 && amount <= 8000) {
//     console.log(`you got 5% discount your paybale amount ia ${amount*5/100}`)
// }else if(amount > 8000 && amount <= 10000){
//     console.log(`you got 10% discount your paybale amount ia ${amount*10/100}`)
// }else{
//     console.log("lawda pakad");

// }

// let amount = Number(prompt());

// if (amount > 0 && amount < 5000) {
//     console.log(`You got 0% discount. Your payable amount is ${amount}`);

// } else if (amount >= 5000 && amount < 8000) {
//     let payable = amount - (amount * 5 / 100);
//     console.log(`You got 5% discount. Your payable amount is ${payable}`);

// } else if (amount >= 8000 && amount < 10000) {
//     let payable = amount - (amount * 10 / 100);
//     console.log(`You got 10% discount. Your payable amount is ${payable}`);

// } else {
//     console.log("lawda pakad");
// }

// problematic unforgotable

// let unit = Number(prompt());

// let amount = 0;

// if (unit > 400) {
//   amount = (unit - 400) * 13;
//   unit = 400;
// }
// if (unit <= 400 && unit >= 200) {
//   amount += (unit - 200) * 8;
//   unit = 200;
// }
// if (unit <= 200 && unit >= 100) {
//   amount += (unit - 100) * 6;
//   unit = 100;
// }

// amount += unit * 4

// console.log(amount);

// decent solve kr lye the

// let amount = Number(prompt("put your amount"));

// if(amount >= 500){
//    let a =  amount / 500
//    console.log(`500 * ${Math.floor(a)}`);
//    amount = 200;
// }if(amount <= 200 && amount >= 100){
//     let b = amount / 200
//     console.log(`200 * ${Math.floor(b)}`)
//     amount = 100
// }if(amount <= 100){
//     let c = amount / 100
//     console.log(`100 * ${Math.floor(c)}`);

// }

// let n = Number(prompt("put your number ?"));

// if(n > 0){
//     var sum = 0;
//     for(i=0; i<=n; i++){
//         sum = sum + i
//     }
//     console.log(sum);

// }

// factorial]]

// let n = Number(prompt("put your number ?"));

// if(n > 0){
//     var fact = 1;
//     for(i=1; i<=n; i++){
//         fact = fact * i;
//     }
//     console.log(fact);

// }

// konse number kisi number ko pura divide krte hai ?

// let n = Number(prompt("put your number ?"));

// if(n > 0){

//     for(i=1; i<=n; i++){
//         if(n%i === 0){
//             console.log(i);

//         }
//     }

// }

// prime or non-prime number idenatification

// let n = Number(prompt("put your number ?"));

// function Isprime (n){
//     if(n === 0) return console.log("it was not a prime or non-prime");
//     if(n%2 === 0) return console.log("non-prime");
//     if()
// }

// Isprime(n);

// hey there we are talking a asum of any element by a do while loop ?

// let n  = Number(prompt("put your number that you wanted to do sun"));

// var sum = 0;
// while(n > 0){
//     let rem = n%10
//      sum = sum + rem
//      n = Math.floor(n/10);
// }

// console.log(sum);

// let n = Number(prompt())

// let rev = 0;
// while(n > 0){

//     let rem = n%10

//     rev = rev*10 + rem
//     n = Math.floor((n/10));
// }
// console.log(rev);

// let rendom = Math.floor(Math.random() * 100) + 1
// let gauss  = -1;

// while(gauss !== rendom){
//     gauss = Number(prompt("put your number here"));

//     if(isNaN(gauss) || gauss < 1 || gauss > 100 ){
//         console.log("sahi number dalde 1-100 ke andar");
//         continue
//     }else if(gauss > rendom) {
//         console.log("too high");

//     }else if(gauss < rendom){
//         console.log("too small");

//     }else{
//         console.log("congratulation you got it the number was", gauss);

//     }

// }

// for (i=0; i<=n; i++){
//     for(j=0; j<=n; j++){
//          process.stdout.write("* ");
//     }
//     console.log();

// }

// triangle
// for(i=0; i<=n; i++){
//     for(c=0; c<=i; c++){
//        process.stdout.write(`* `);
//     }
//     console.log();

// }

// deciment triangale
// for (i=1; i<=n; i++){
//     for(j=1; j<=n-i+1; j++){
//         process.stdout.write("* ");
//     }
//     console.log();

// }

// print numbers in triangle

// for(i=1; i<=n; i++){ //
//     for(j=1; j<=i; j++){
//         process.stdout.write(`${j}`);
//     }
//     console.log();

// }

// print abcd in the place of 1234

// for(i=0; i<=n; i++){
//     let ascii = 65;
//     for(j=0; j<=i; j++){
//         process.stdout.write(String.fromCharCode(ascii+""));
//         ascii++
//     }
//     console.log();

// }

// mirror triangale

// for(let i=0; i<=n; i++){

//  for(j=1; j<=n-i+1; j++){
//         process.stdout.write(" ");
//     }

// for(let j=1; j<=i; j++){
//     process.stdout.write("*");
// }
// console.log();

// }

// homework

//         *
//       *  *
//      *    *
//     *      *
//    *        *

// the x pattern

// for(i=0; i<=n; i++){

// }

// arreys

// sum of elements

// let arrey = [10,20,30,40,50,60,70];
// let sum = 0;
// for(let i = 0; i < arrey.length; i++){
//     sum = sum + arrey[i]
// }
// console.log(sum);

// maximum eliment

// let max = val[0];

// for (let i = 1; i < val.length; i++) {

//     if (max < val[i]) {
//         max = val[i]
//     }
// }

// console.log(max);

// let arrey = [10, 5, 25, 65, 69, 105, 10000, 166];

// how to fincd a second max element

// let max = Math.max(arrey[0], arrey[1]);
// let smax = Math.min(arrey[0], arrey[1]);

// for(i=2; i<arrey.length; i++){
//     if(arrey[i] > max){
//         smax = max
//         max = arrey[i]
//     }else if(arrey[i] > smax){
//         smax = arrey[i]
//     }
// }

// console.log(smax);

// reverse arrey with extra space

// let arrey = [10,20,30,40,50];
// let temp = new Array(arrey.length);

// let j = 0;

// for(i=arrey.length-1; i>=0; i--){
//     temp[j] = arrey[i]
//     j++
// }

// console.log(temp);

// reverse arrey without extra space

// let arrey = [10,20,30,40,50,60];

// let i = 0 , j = arrey.length - 1  // a = i , b = j , c = temp

// while(i<j){
//     let temp = arrey[i]
//     arrey[i] = arrey[j]
//     arrey[j] = temp

//     i++
//     j--

// };

// console.log(arrey);

// put all the zero values left and one value right side of the arrey

// let arrey = [0,1,1,0,1,0,0,1,0,1,1,1,1,0];

// let i = 0 , j = 0

// for(i; i<arrey.length;){
//     if(arrey[i] == 0){
//         let temp = arrey[j];
//         arrey[j] = arrey[i];
//         arrey[i] = temp

//         j++
//     }
//     i++
// }

// console.log(arrey);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// put all the minus elemnt into the left side or all the plus element to the right side

// let arrey = [12,15,-4,-14,8,-1,-4,20,-50];

// let i = 0 , j = 0;

// while(arrey[i] < arrey.length){
//     if(arrey[i] > 0){
//         let temp = arrey[j];
//         arrey[j] = arrey[i];
//         arrey[i] = temp;

//         j++;
//     }
//     i++;
// };

// console.log(arrey);

//  arrey me elements sarkana left side

// let arr = [1,2,3,4,5];

// let j = arr[0];

// for(i=0; i<arr.length-1; i++){
//    arr[i] = arr[i+1]
// }
// arr[arr.length - 1] = j

// console.log(arr);

// right side

// let arr = [1,2,3,4,5];
// let copy = arr[arr.length-1]

// for(i=arr.length-1; i>0; i--){
//    arr[i] = arr[i-1];
// }
// arr[0] = copy

// console.log(arr);

// left right rotation by k element

// let arr = [1, 2, 3, 4, 5];

// let n = 4;
// n = n % arr.length
// for (i = 1; i <= n; i++) {
//   let a = arr[0];
//   for (j = 0; j < arr.length - 1; j++) {
//     arr[j] = arr[j + 1];
//   }
//   arr[arr.length - 1] = a;
// }

// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);

// let n = 4;
// n = n % arr.length

//  for (j = 0; j < arr.length; j++) {
//     temp[j] = arr[(j+n)%arr.length];
//   }

// console.log(temp);

// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);

// let k = 4;
// k = k % arr.length;

// for (j = 0; j < arr.length; j++) {
//   arr[(j + k) % arr.length] = arr[j];
// }

// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let k = 2

// function reverse (i,j){
//     while(i<j){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp

//         i++
//         j--
//     }
// }

// reverse(0, k-1);
// reverse(k,arr.length-1);
// reverse(0, arr.length-1)

// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let k = 2;

// function reverse(i, j) {
//     while (i < j) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;

//         i++;
//         j--;
//     }
// }

// reverse(0, arr.length - 1); // [5,4,3,2,1]
// reverse(0, k - 1);           // [4,5,3,2,1]
// reverse(k, arr.length - 1); // [4,5,1,2,3]

// console.log(arr);

// let nums = [0,0,1,1,1,2,2,3,3,4];

// let j = 1;

// for (let i = 0; i < nums.length - 1; i++) {

//     if (nums[i] !== nums[i + 1]) {
//         nums[j] = nums[i + 1];
//         j++;
//     }
// }

// console.log(j);
// console.log(nums);

// let arr1 = [2,5,6]; // i
// let arr2 = [1,3,4,8]; // j

// let temp = new Array((arr1.length) + (arr2.length))

// let i = 0; j=0; k=0;
// while(i < arr1.length && j < arr2.length){
//     if(arr1[i] < arr2[j]){
//        temp[k++] = arr1[i++];
//     }else{
//         temp[k++] = arr2[j++]
//     }
// }

// while(j<arr2.length){
//     temp[k++] = arr2[j++]
// }

// while(i<arr1.length){
//     temp[k++] = arr1[i++]
// }

// console.log(temp);

// let arr1 = [2,9,4,3,15,20];
// let arr2 = [1,8,5,6,20];

// let temp = new Array(arr1.length + arr2.length);

// let i = j = k = 0;

// while(i < arr1.length && j < arr2.length){
//     if(arr1[i] < arr2[j]){
//         temp[k++] = arr1[i++];
//     }else{
//         temp[k++] = arr2[j++];
//     }
// }

// while(j<arr2.length){
//     temp[k++] = arr2[j++]
// }

// while(i<arr1.length){
//     temp[k++] = arr1[i++]
// }

// console.log(temp);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//start

// let price = [7,1,5,3,6,4];

// let min = price[0];
// let maxprofit = 0;

// for(i=1; i<price.length; i++){
//     if(price[i] < min) min  = price[i];
//     let profit = price[i] - min
//     maxprofit = Math.max(profit, maxprofit);
// }

// console.log(maxprofit);

//  let arr = [1,1,0,1,2,0,1,0,2,1,1];

//  let i = 0;
//  let j = 0;
//  let k = arr.length-1;

//  while(i<=k){
//      if(arr[i] === 0){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp
//         i++
//         j++
//     }else if(arr[i] === 2){
//         let tem = arr[i];
//         arr[i] = arr[k];
//         arr[k] = tem
//         k--
//     }else{
//         i++
//     }

//  }

//  console.log(arr);

// let nums = [-2,1,-3,4,-1,2,1,-5,4]

// let sum = 0;
// let max = -Infinity;

// for(i=0; i<nums.length; i++){
//      sum = nums[i]
//     if(max < sum){
//         max = sum

//     }else if(sum < 0) sum = 0;
// }

// console.log(sum);

// let height = [4,2,0,3,2,5];

// let left = new Array(height.length);
// let right = new Array(height.length);

// let maxleft = height[0];               // [4,0,0,0,0,0]
// let maxright = height[height.length-1];       // [0,0,0,0,0,5]

// left[0] = maxleft;
// right[height.length-1] = maxright;

// for(i=1; i<height.length; i++){
//     maxleft = Math.max(height[i], maxleft);
//     left[i] = maxleft
// };

// // [4,4,4,4,4,5]

// for(i=height.length-2; i>=0; i--){
//     maxright = Math.max(height[i], maxright);
//     right[i] = maxright
// }

// // [5,5,5,5,5,5]

// let ans = 0;
// for(i=0; i<height.length; i++){
//     ans += Math.min(left[i], right[i]) - height[i]
// }

// console.log(ans);

// let arr1 = [2,4,7];
// let arr2  = [1,3,5,6,8];

// let arr = new Array(arr1.length + arr2.length);

// let i = j = k = 0;

// while(i<arr1.length && j < arr2.length){
//     if(arr1[i] < arr2[j]){
//         arr[k++] = arr1[i++];
//     }else{
//         arr[k++] = arr2[j++]
//     }
// }

// while(j<arr2.length){
//     arr[k++] = arr2[j++]
// }

// while(i<arr1.length){
//     arr[k++] = arr1[i++]
// }
// console.log(arr);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// String

// console.log(a.slice(2,4));
// console.log(a.substring(2,4));

// console.log(a.concat(" tanwar"));

// let str = ""
// for(i=a.length; i>=0; i--){
//     str = str + a.charAt(i);
// }

// console.log(str);

// let str = ""
// for(i=a.length; i>=0; i--){
//     str = str + a.charAt(i);
// }

// if(a === str) console.log("pallindrome hai");
// else{
//     console.log("pallindrome nhi hai");

// }

// let i = 0;
// let j = input.length - 1;
// let v = true

// while ((i <= j)) {
//   if (input.charAt(i) != input.charAt(j)) {
//     v = false
//     break;
//   }

//   i++;
//   j--;
// }

// if(v)console.log("pallindrome hai");
// else{console.log("pallindrome nhi hai");
// }

let s = input
let toggle = "";
for (i = 0; i < s.length - 1; i++) {
  let ch = s.charCodeAt(i);
  if (ch >= 65 && ch <= 90) {
    toggle = toggle + String.fromCharCode(ch + 32);
  } else if (ch >= 97 && ch <= 122) {
    toggle = toggle + String.fromCharCode(ch - 32);
  }
}
console.log(toggle);
