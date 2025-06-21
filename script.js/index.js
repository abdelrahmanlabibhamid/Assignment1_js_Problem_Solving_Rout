// 1- Write a program that allows the user to enter a number then print it.
// Ex: if the user enter 5 as a number ⇒ should log a 5
// Ex: if the user enter 2 as a number ⇒ should log a 2

// var number = prompt("enter a number");
// console.log(number);

// ------------------------------------------------------------------------------

// 2- Write a program that takes a number from the user then print yes if that
// number can divide by 3 and 4 at the same time, otherwise print no.
// Ex: if the user enters 12 as a number ⇒ should log a yes.
// Ex: if the user enters 19 as a number ⇒ should log a no.

// var number= prompt("enter a number");
// if( number % 4 === 0 && number % 3 === 0 )
//     { console.log("yes");}
// else{console.log("no");}

// ------------------------------------------------------------------------------

// 3- Write a program that allows the user to insert 2 integers then print the
// max.
// Ex: if the user enters 5 and 7 as numbers ⇒ should log a 7.
// Ex: if the user enters 2 and 0 as numbers ⇒ should log a 2.

// var number1 = prompt("num1");
// var number2 = prompt("num2");

// if(number1>number2){console.log(number1);}
// else{console.log(number2);}

// -------------------------------------------------------------------------------

// 4- Write a program that allows the user to insert an integer then print
// negative if it is negative number, otherwise print positive.
// Ex: if the user enters 5 as a number ⇒ should log a Positive.
// Ex: if the user enters -2 as a number ⇒ should log a Negative.

// var number = prompt("enter an number");
// if(number>0){console.log("positive");}
// else{console.log("negative");}

// --------------------------------------------------------------------------------

// 5- Write a program that takes 3 integers from the user then prints the max
// element and the min element.
// Ex: if the user enters 5 and 6 and 1 as numbers ⇒ should log a 6 is
// the max and 1 is the min
// Ex: if the user enters 10 and 10 and -1 as numbers ⇒ should log a 10
// is the max and -1 is the min

// var num1 = +prompt("num1");
// var num2 = +prompt("num2");
// var num3 = +prompt("num3");

// var max = num1;
// var min = num1;

// if (num2 > max) max = num2;
// if (num3 > max) max = num3;
// if (num2 < min) min = num2;
// if (num3 < min) min = num3;

// console.log(`${max} is the max and ${min} is the min`);

// ---------------------------------------------------------------------------------

// 6- Write a program that allows the user to insert an integer number then
// check If a number is even or odd.
// Ex: if the user enters 5 as a number ⇒ should log an Odd.
// Ex: if the user enters 6 as a number ⇒ should log an Even.

// var number = +prompt("enter a number")
// if(number %2 === 0 ){ console.log("Even")}
// else{console.log("odd")}

// --------------------------------------------------------------------------------

// 7- Write a program that take character from user then if it is vowel chars
// (a,e,I,o,u) then print vowel otherwise print consonant
// Note: lowercase and uppercase are important.

// Ex: if the user enters a or A as a character ⇒ should log Vowel.
// Ex: if the user enters s or S as a character ⇒ should log Consonant.

// var char = prompt( "enter a chars" );
// if(char=="a" || char== "A" || char== "e"|| char== "E" || char== "o" || char=="O" || char== "u" || char=="U" || char=='I'||char=='i')
//     {console.log(`7-${char} Is Vowel` );}

// -----------------------------------------------------------------------------------

// 8- Write a program that allows the user to enter a number then print all the
// numbers starting from 1 to the user entered number.
// Ex: if the user enter 5 as a number ⇒ should log a 1,2,3,4,5
// Ex: if the user enter 7 as a number ⇒ should log a 1,2,3,4,5,6,7

// var num = +prompt("enter a Number")
// if (num<1){console.log("Please enter a positive integer greater than 0")}
// else{for ( var counter = 1 ;counter<=num ;counter++){
//     console.log(counter)}}

// ------------------------------------------------------------------------------------

// 9- Write a program that allows the user to insert an integer then print a
// multiplication table up to 12.
// Ex: if the user enters 5 as a number ⇒ should log 5,10,15,20,25.
// Ex: if the user enters 3 as a number ⇒ should log 3,6,9,12,15,18,21.

// var num = +prompt("enter a namber")
// for ( var counter = 1 ;counter<=12 ;counter++){
//     console.log(num*counter)}

// -------------------------------------------------------------------------------------

// 10- Write a program that allows the user to enter a number then print all the
// only evens numbers starting from 1 to the user entered number.
// Ex: if the user enters 5 as a number ⇒ should log 2,4.
// Ex: if the user enters 13 as a number ⇒ should log 2,4,6,8,10,12.

// var num = +prompt("enter a namber")
// for ( counter = 1; counter <= num; counter++)
//     {if (counter % 2 === 0) {
//     console.log(counter);}}

// ----------------------------------------------------------------------------------------

// 11- Write a program that allows the user to enter two numbers and print the
// result to make the second number power the first number.
// Ex: if the user enters 2 and 10 as a number ⇒ should log 1024.
// Ex: if the user enters 4 and 3 as a number ⇒ should log 64.

//     var exponent = +prompt("enter a namber");
// var base = +prompt("enter a namber");

// var result = exponent ** base  ;

// console.log(result);

// -------------------------------------------------------------------------------------------

// 12- Write a program to enter marks of five subjects and calculate total,
// average and percentage.
// Note: The total subject mark is from 100 and user should be able to enter 5
// numbers; each number presents a subject mark.
// Ex: enter first mark: 60
// enter second mark: 70
// enter third mark: 68
// enter fourth mark: 76
// enter fifth mark: 92
// Should log ( total : 366, average : 73.2 and percentage : 73.2%)
// Ex: enter first mark: 95
// enter second mark: 76
// enter third mark: 58
// enter fourth mark: 90
// enter fifth mark: 89
// Should log ( total : 408, average : 81.6 and percentage : 81.6%)

// let mark1 = +(prompt("Enter first mark:"));
// let mark2 = +(prompt("Enter second mark:"));
// let mark3 = +(prompt("Enter third mark:"));
// let mark4 = +(prompt("Enter fourth mark:"));
// let mark5 = +(prompt("Enter fifth mark:"));

// var total = mark1 + mark2 + mark3 + mark4 + mark5 ;
// var average= total / 5 ;
// var percentage =( total / 500 )*100;

// console.log(`total ${total}`)
// console.log(`average ${average}`)
// console.log(`percentage ${percentage}%`)

// -----------------------------------------------------------------------------

//  13- Write a program to input the month number and print the number of
// days in that month.

//  Ex: if the user enters 10 as a number ⇒ should log 31 days.
//  Ex: if the user enters 6 as a number ⇒ should log 30 days.

// var month = +prompt("num manth")

// if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
// days = 31;}
// else if (month === 4 || month === 6 || month === 9 || month === 11) {
// days = 30;}
// else if (month === 2) {
// days = 28;}
// else {
// console.log("Number not valid");}

// console.log(  `${days}days `);

// -------------------------------------------------------------------------------------

// 14- Write a program to enter marks of five subjects and find percentage
// and grade.
// Note: The total subject mark is from 100 and the grades ranges are :
// A grade from 90 to 100,
// B grade from 80 to 90,
// C grade from 70 to 80,
// D grade from 50 to 70
// F grade under 50.
//  Ex: enter first mark: 60
//    enter second mark: 70
//     enter third mark: 68
//      enter fourth mark: 76
//       enter fifth mark: 92

//   Should log enter first mark: D and 60%
//    enter second mark: C and 70%
//     enter third mark: D and 68%
//      enter fourth mark: C and 76%
//       enter fifth mark: A and 92%

// Ex: enter first mark: 95
//    enter second mark: 76
//     enter third mark: 58
//      enter fourth mark: 90
//       enter fifth mark: 89

//  Should log enter first mark: A and 95%
//    enter second mark: C and 76%
//     enter third mark: D and 58%
// enter fourth mark: A and 90%
// enter fifth mark: B and 89%

// for (let i = 1; i <= 5; i++) {
//   let mark = Number(prompt(`Enter mark ${i}:`));
//   let percentage = mark;

//   let grade;

//   if (percentage >= 90 && percentage <= 100) {
//     grade = "A";
//   } else if (percentage >= 80) {
//     grade = "B";
//   } else if (percentage >= 70) {
//     grade = "C";
//   } else if (percentage >= 50) {
//     grade = "D";
//   } else {
//     grade = "F";
//   }

//   console.log(`Enter mark ${i}: ${grade} and ${percentage}%`);
// }

// --------------------------------------------------------------

// 15- Write a program to input the month number and print the number of
// days in that month.
// Ex: if the user enters 10 as a number ⇒ should log 31 days.
// Ex: if the user enters 6 as a number ⇒ should log 30 days.

// let month = +prompt("enter num month");
// let days;

// if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//   days = 31;
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//   days = 30;
// } else if (month === 2) {
//   days = 28;
// } else {
//   console.log("not valid");
// }
//   console.log(days + " days");

// -----------------------------------------------------------------

// 16- Write a program that take character from user then if it is vowel chars
// (a,e,I,o,u) then print vowel otherwise print consonant
// Note: lowercase and uppercase are important.
// Ex: if the user enters a or A as a character ⇒ should log Vowel.
// Ex: if the user enters s or S as a character ⇒ should log Consonant.

//     let char = +prompt("Enter a character:");

// if (char.length === 1) {
//   let lowerChar = char.toLowerCase();

//   if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
//     console.log("Vowel");
//   } else if ((lowerChar >= 'a' && lowerChar <= 'z')) {
//     console.log("Consonant");
//   } else {
//     console.log("Not an alphabet letter");
//   }
// } else {
//   console.log("Please enter a single character only.");
// }

// ---------------------------------------------------------------------------------

// 17- Write a program that takes 2 integers from the user then prints the max
// element.
// Ex: if the user enters 5 and 6 as numbers ⇒ should log a 6 is the
// max.
// Ex: if the user enters 10 and -1 as numbers ⇒ should log a 10 is the
// max.

// var num1 = +(prompt("Enter first number:"));
// var num2 = +(prompt("Enter second number:"));

// if (num1 > num2) {
//   console.log(num1 + " is the max.");
// } else if (num2 > num1) {
//   console.log(num2 + " is the max.");
// } else {
//   console.log("Both numbers are equal: " + num1);
// }

// --------------------------------------------------------------------------------------------

// 18- Write a program that allows the user to insert an integer number then
// check If a number is even or odd.
// Ex: if the user enters 5 as a number ⇒ should log an Odd.
// Ex: if the user enters 6 as a number ⇒ should log an Even.

// var number = +(prompt("Enter an integer number:"));

// if (number % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// -----------------------------------------------------------------------------------------------

// 19- Write a program that allows the user to insert an integer then print
// negative if it is negative number, or print positive if it is a positive number or
// zero if it is zero.
// Ex: if the user enters 5 as a number ⇒ should log a Positive.
// Ex: if the user enters -2 as a number ⇒ should log a Negative.
// Ex: if the user enters 0 as a number ⇒ should log a Zero.

// var number = +(prompt("Enter an integer:"));

// if (number > 0) {
//   console.log("Positive");
// } else if (number < 0) {
//   console.log("Negative");
// } else {
//   console.log("Zero");
// }

// ------------------------------------------------------------------------------------------------

// 20- Write a program to create Simple Calculator.
// Ex: if the user enters 5 and 6 as numbers and + as character ⇒
// should log 11.
// Ex: if the user enters 10 and 2 as numbers and - as character ⇒
// should log 8.
// Ex: if the user enters 3 and 4 as numbers and * as character ⇒
// should log 12.
// Ex: if the user enters 12 and 6 as numbers and / as character ⇒
// should log 2

// var num1 = +(prompt("Enter the first number:"));
// var num2 = +(prompt("Enter the second number:"));
// var operator = prompt("Enter the operation (+, -, *, /):");

// var result;

// if (operator === "+") {
//   result = num1 + num2;
// } else if (operator === "-") {
//   result = num1 - num2;
// } else if (operator === "*") {
//   result = num1 * num2;
// } else if (operator === "/") {
//   if (num2 !== 0) {
//     result = num1 / num2;
//   } else {
//     result = "Cannot divide by zero!";
//   }
// } else {
//   result = "Invalid operator!";
// }

// console.log(result);
