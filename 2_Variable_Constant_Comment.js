/*
-------------------------------------------------------------------------------------------
                                Chapter 2 : Variables Constants And Comments
-------------------------------------------------------------------------------------------

1 => Single Line Comment
    // (By Adding double forward slash)   

2 => VAR Keyword
    // VAR will allow to redclare and reassign (Which is a bad Practise)
    

*/

//----------------------------------------  VAR  -------------------------------------------//

var highScore = 219;
var highScore = 264;
console.log(`Highest Score in ODI is => ${highScore}`);

//----------------------------------------  LET  -------------------------------------------//

let highestScore = 306;
//let highestScore = 319; Will not allow it with let 
highestScore = 400; //But we can change it value
console.log(`Highest Score in TEST is => ${highestScore}`);


//----------------------------------------  CONST  -------------------------------------------//

//In Const we have to assign it's value while declaration

const higherScore = 175;
//higherScore = 184; // will throw error;
console.log(`Highest Score in T20 is ${higherScore}`);




/*------------------------------------------------------------------------------------------*/
