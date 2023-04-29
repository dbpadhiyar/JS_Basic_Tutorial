/*
-------------------------------------------------------------------------------------------
                                Chapter 4 : String
-------------------------------------------------------------------------------------------
*/

/*--------------------------1 How TO Concatinate String----------------------------------*/

let firstName = "Devendra";
let lastName = "Padhiyar";

// 1 => Using Console
console.log(firstName, lastName); //Console will add space by it's self between two variable


// 2 => Using + Operator

let fullName = firstName + lastName;
console.log(fullName); //Will Not add space automatically

//3 => Using Concat() 

let fullNameConcat = firstName.concat(' ', lastName);
console.log(fullNameConcat);

//4 => Using Template Literal
let fullNameTL = `My Full Name is ${firstName} ${lastName}`;
console.log(fullNameTL);

/*--------------------------- 2 Getting String Character -------------------------------*/

console.log(`First Character Of First Name is => ${firstName[0]}`);

/*------------------------------ 3 String Methods ------------------------------------------*/

// 1 => toUpperCase
// TO Convert given string to upper case
// Will Note change original string unless it's specifically Assigned

console.log(firstName.toUpperCase());

// 2 => toLowerCase
// TO Convert given string to lower case
// Will Note change original string unless it's specifically Assigned

console.log(firstName.toLowerCase());

//3 => indexOf
// To find first index of given character if more then one it will return first appereance
// if not Found will return -1
// can pass character as well as string
// Case Sensitive
// Will Note change original string unless it's specifically Assigned

console.log(`First Index of a is => ${lastName.indexOf('a')}`);

// 4 => lastIndexOf
// To find last index of given character if more then one it will return first appereance
// if not Found will return -1
// can pass character as well as string
// Case Sensitive
// Will Note change original string unless it's specifically Assigned

console.log(`Last Index of a is => ${lastName.lastIndexOf('a')}`);

// 5 => trim(),trimStart(), trimEnd()
// Will remove space and return new string
// Will Note change original string unless it's specifically Assigned

let hobbies = "  Football Cricket Badminton  ";
let resultHobbies = hobbies.trim();
console.log(resultHobbies);

// 6 => Include()
// Will tell whether given string is available or not
// Case Sensitive
// Will Note change original string unless it's specifically Assigned

let isAvailable = hobbies.includes("Football");
console.log(`Is Football available in hobby => ${isAvailable}`);


// 7 => Slice()
// First Index Included, Last Index is Excluded
// if index is not given whole string return
// if Only start index given then it will return all character after starting index
// Will Note change original string unless it's specifically Assigned

let league = "Champion League";
console.log(`After giving Index of 0,8 in Slice() => ${league.slice(0, 8)}`);

// 8 => Split()
// Will separate string by separator
// Will Note change original string unless it's specifically Assigned

let players = "Messi Pedri Haland Oshimen";
let allPlayers = players.split(' ');
console.log(`After Splitting Playes With " " (space) ${allPlayers}`);


/*------------------------------ 3 String Are Immutable ------------------------------------------*/

// Immutable Means it's doesn't override previous memory
// It will create new memory while applying changes

let str = "Devendra";
str = str + " Padhiyar"; // Will create new space
console.log(str);

/*------------------------------------------------------------------------------------------*/