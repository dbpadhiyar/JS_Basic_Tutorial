/*
-------------------------------------------------------------------------------------------
                                Chapter 5 : Numbers
-------------------------------------------------------------------------------------------
*/

/*---------------------------------- 1 Numbers Basic---------------------------------------*/

let numbers = 50;
console.log(numbers, typeof (numbers));

console.log(numbers / 2);
console.log(numbers * 2);
console.log(numbers % 2);
console.log(numbers + 2);
console.log(numbers - 2);

//Mathematical Expression 

let result = 4 * 9 ** 2 / 4 + (9 - 7) % 3; //

//1st prioprity is  Breacket
//2nd prioprity is  ** (Power)
//3rd prioprity is / * % ( Left to right)
//4th prioprity is + - ( Left to right)

console.log(result);


/*---- 2 Loose Equality(==) VS Strict Equality Operator(===)---------------------*/

let number1 = 10;
let number2 = "10";

console.log(`is Number1 == to Number2 ?  ${number1 == number2}`);
console.log(`is Number1 === to Number2 ?  ${number1 === number2}`);


/*------------------------------------------------------------------------------------------*/ 