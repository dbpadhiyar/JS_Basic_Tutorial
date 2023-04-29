/*
-------------------------------------------------------------------------------------------
                                Chapter 3 : Data Type

7 Data Type
    1 => Numbers
    2 => string
    3 => Boolean
    4 => Null  //Intentionally absense of value
    5 => Undefined // If we not initialize value
    6 => OBJECT
    7 => symbol
-------------------------------------------------------------------------------------------
*/

// 1 Numbers
let number = 10;
let floatNumber = 25.25;
console.log(`Value Of Simple Number is => ${number} and Floating Number is => ${floatNumber}`);

/*------------------------------------------------------------------------------------------*/


//2 String
let fName = 'Devendra';
let lName = 'Padhiyar';
console.log(`Your Full Name is ${fName} ${lName}`);
/*------------------------------------------------------------------------------------------*/


//3 Boolean
let areYouFootballer = false;
console.log(`Are you footballer ${areYouFootballer}`);
/*------------------------------------------------------------------------------------------*/



//4 Null
let salary = null;
console.log(`Your Salary is => ${salary}`);
/*------------------------------------------------------------------------------------------*/

//5 Undefined
let age;
console.log(`Your Age is ${age}`);
/*------------------------------------------------------------------------------------------*/



//6 OBJECT
let Information = {
    name: fName.concat(lName),
    city: 'Kodinar',
    job: 'Software Engineer',
    salary: 600000
}
console.log(Information) // To Print Whole Object
console.log(Information.city); // To Print Single Value From Object
/*------------------------------------------------------------------------------------------*/