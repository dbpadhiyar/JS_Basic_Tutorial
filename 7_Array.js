/*
-------------------------------------------------------------------------------------------
                                Chapter 7 : Array
-------------------------------------------------------------------------------------------
*/

/*---------------------------------- Array Basic--------------------------------------*/

let cities = ['Kodinar', 'Junagadh', 'Rajkot', 'Ahmedabad', 'Haridwar'];

// 1 => How To access array directly

console.log(`${cities[0]} is a best city in the world`);


// 2 => How to change specific array index value

cities[2] = 'Rishikesh';
console.log(`${cities[2]} is New updated city`);

/*---------------------------------- Join Array --------------------------------------*/

// To join all array element with seprator
// Immutable Method

console.log(cities.join('=>')); //here is "=>" is separator 

/*---------------------------------- indexOf Array --------------------------------------*/

//to find indexof of elemet
//return -1 if not found
// Immutable Method

console.log(cities.indexOf('Kodinar'));

/*---------------------------------- Concat Array --------------------------------------*/

//to join two array
//concated array join in last
// Immutable Method

let cities2 = ['Delhi', 'Gandhinagr', 'Jaipur', 'Udaypur'];

console.log(cities.concat(cities2));

/*---------------------------------- Length Of Array --------------------------------------*/

//to join two array
//concated array join in last

console.log(`Length of array is => ${cities.length}`);

/*---------------------------------- Push in Array --------------------------------------*/

// will add new array element in last
// return new updated array
// Muttable Method

cities.push('Chennai');

console.log(`Updated array of cities after push is => ${cities}`);

/*---------------------------------- Push in Array --------------------------------------*/

// will remove array element from last
// return new updated array
// Muttable Method

cities.pop();

console.log(`Updated array of cities after pop is => ${cities}`);

/*------------------------------------------------------------------------------------------*/ 