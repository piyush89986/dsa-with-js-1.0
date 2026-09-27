const prompt = require(`prompt-sync`)();

// let n = prompt("Enter your name: ");





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








