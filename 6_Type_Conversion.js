/*
-------------------------------------------------------------------------------------------
                                Chapter 6 : Type Conversion
-------------------------------------------------------------------------------------------
*/

/*---------------------------------- Data Type Conversion--------------------------------------*/

// => 1 String To Number 

// will convert to number
// if string is not real number than it will return NaN
let stringType = "15";
let numberType = Number(stringType);
console.log(numberType, typeof (numberType));


// => 2 Number To String 
let numberType2 = 58;
let stringType2 = String(numberType2);
console.log(stringType2, typeof (stringType2));

// => 3 Number and string to boolean

let age = 30; // If Number is 0 than false else true
let ageInBoolean = Boolean(age);
console.log(`Age in Boolean from number => ${ageInBoolean}`);


// => 4 Number and string to boolean

let age2 = "Devendra"; // If String is empty than false else true
let age2InBoolean = Boolean(age2);
console.log(`Age in Boolean from number => ${age2InBoolean}`);

/*------------------------------------------------------------------------------------------*/ 