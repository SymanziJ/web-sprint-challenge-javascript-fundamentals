//🚀🚀🚀  Topic #1 Closures 🚀🚀🚀//
/* 🚀🚀🚀🤓 Task 1: 🤓🚀🚀🚀 
Study the code below and explain in your own words why nested function can access the variable internal. */

console.log('-------------------\n Topic #1 Closures \n-------------------\n\nTask 1:\n');

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();



//🚀🚀🚀 ⬇️ 📝 Explanation ⬇️ 📝 🚀🚀🚀: 

/* 
This is an example of closure.
A closure happens when a function written inside of another function reaches into the outer function to access a piece of information defined there. 
Code written in JS is built in layers of accessability called scope. Defined info can only be accessed on the same scope or from the scope of an outer layer.
*/




/* 🚀🚀🚀 Task 2: Counter 🚀🚀🚀 */
/* Use summation to do the following:
    1. Receive a number 
    2. Use a counter to return the summation of that number. 
    
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. Note, you may use a for loop for this function if you wish */

function summation(number) {
  let acc = 0;
  for (let i = 1; i <= number; i++){
    acc += i;
  }
  return acc;
  }

 console.log('Task 2:\n\n' + summation(4) + '\n\n');

// 🦁🦁🦁 Topic 2: ADVANCED Array Methods 🦁🦁🦁
// Given this zoo data from around the United States, follow the instructions below. Use the specific array methods in the requests below to solve the problems.

console.log('---------------------------------\n Topic #2 ADVANCED Array Methods \n---------------------------------');

const zooAnimals = [
    { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
    { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
    { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
    { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
    { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
    { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
    { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
    { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
    { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
    { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
  ];
  
  /* 🦁🦁🦁 Request 1: .forEach() 🦁🦁🦁
  The zoos want to display both the scientific name and the animal name in front of the habitats. 
  Use animalNames to populate and return the displayNames array with only the animal name and scientific name of each animal. 
  displayNames will be an array of strings, and each string should follow this pattern: "name: {name}, scientific: {scientific name}"
  */

  function animalNames(array){
    let displayNames = [];
    array.forEach((items) => {
      displayNames.push(`name: ${items.animal_name}, scientific: ${items.scientific_name}`)
    });
    return displayNames;
  }
  
  console.log('\nRequest 1: .forEach()\n\n' + animalNames(zooAnimals) + '\n\n');

  /* 🦁🦁🦁 Request 2: .map() 🦁🦁🦁
  The zoo needs a list of all their animal's names converted to lower case. 
  Using lowerCaseNames use .map() to create a new array of strings with the animal's names in lowercase and return the new array. 
  For example: ['jackal, asiatic', .....]
  */

  function lowerCaseNames(array){
    const lcNameArr = array.map((items) => {
      return items.animal_name.toLowerCase();
    });
    return lcNameArr;
  }

  console.log('\nRequest 2: .map()\n\n' + lowerCaseNames(zooAnimals) + '\n\n');

  
  /* 🦁🦁🦁 Request 3: .filter() 🦁🦁🦁
  The zoo is concerned about animals with a lower population count. 
  Using lowPopulationAnimals use .filter() to create a new array of objects which contains only the animals with a population of less than 5.
  */

  function lowPopulationAnimals(array){
    const lowPopAnimalsArr = array.filter((items) => {
      return items.population < 5;
    });
    return lowPopAnimalsArr;
  }

  console.log('\nRequest 3: .filter()\n\n' + lowPopulationAnimals(zooAnimals) + '\n\n');
    

  /* 🦁🦁🦁 Request 4: .reduce() 🦁🦁🦁
  The zoo needs to know their total animal population across the United States. 
  Using USApop find the total population from the zoos array using the .reduce() method. 
  Remember the reduce method takes two arguments: a callback (which itself takes two args - the accumulator and the item), and an initial value for the count.
  */

  function USApop(array){
    const totalPopVar = array.reduce((acc, items) => {
      return acc + items.population;
    }, 0);
    return totalPopVar;
  }

  console.log('\nRequest 4: .reduce()\n\n' + USApop(zooAnimals) + '\n\n');
  
  
  // 🦁🦁🦁 Callbacks 🦁🦁🦁  

  console.log('-----------\n Callbacks \n-----------');

  /* 🦁🦁🦁 Step 1: Create a higher-order function 🦁🦁🦁
    * Use the higher-order function consume with 3 parameters: a, b and cb
    * The first two parameters can take any argument (we can pass any value as an argument)
    * The last parameter accepts a callback
    * The consume function should return the invocation of cb, passing a and b into cb as arguments
  */

  function consume(a, b, cb){
    return cb(a, b);
  }

  console.log('\nStep 1: Create a higher-order function\n\n' + consume('Yup', ', it worked!', (string1, string2) => string1 + string2) + '\n\n');

  
  /* 🦁🦁🦁 Step 2: Create several functions to callback with consume(); 🦁🦁🦁 */
 // 🦁🦁🦁 Use add to return the sum of two numbers 🦁🦁🦁
  
function add(num1, num2){
    return num1 + num2;
  }

  console.log('\nStep 2: Create several functions to callback with consume()\n\n' + 'add function: 2 + 5 = ' + add(2, 5) + '\n');


// 🦁🦁🦁 Use multiply to return the product of two numbers 🦁🦁🦁
  
function multiply(num1, num2){
    return num1 * num2;
  }

  console.log('multiply function: 4 * 2 = ' + multiply(4, 2) + '\n');


 // 🦁🦁🦁 Use greeting to accept a first and last name and return "Hello {first-name} {last-name}, nice to meet you!" 🦁🦁🦁
  
function greeting(firstName, lastName){
   return `Hello ${firstName} ${lastName}, nice to meet you!`
  }
  
  console.log('greeting function: ' + greeting('Brit', 'Hemming') + '\n\n');

  
  // 🦁🦁🦁 Step 3: Check your work by un-commenting the following calls to consume(): 🦁🦁🦁 
  // ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
   
  console.log('\nStep 3: Check your work by un-commenting the following calls to consume()\n');

  console.log(consume(2, 2, add)); // 4
  console.log(consume(10, 16, multiply)); // 160
  console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

  console.log('\n\n');


// 🐴🐴🐴 Topic 3: Prototypes 🐴🐴🐴 //

console.log('---------------------\n Topic #3 Prototypes \n---------------------');

//🐴🐴🐴 Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge. 🐴🐴🐴
/* 🐴🐴🐴 Step 1: Base Constructor 🐴🐴🐴
 Use the constructor function named CuboidMaker to accept properties for length, width, and height which can be initialized as an object
*/
function CuboidMaker(atr){
  this.length = atr.length;
  this.width = atr.width;
  this.height = atr.height;
}

console.log('\nStep 1: Base Constructor\n\n' + CuboidMaker + '\n\n');


/* 🐴🐴🐴 Step 2: Volume Method 🐴🐴🐴
  Create a method called volume using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  Formula for cuboid volume: length * width * height   */

CuboidMaker.prototype.volume = function(){
  return this.length * this.width * this.height;
}

console.log('\nStep 2: Volume Method\n\n' + CuboidMaker.prototype.volume + '\n\n');


/* 🐴🐴🐴 Step 3: Surface Area Method 🐴🐴🐴
  Create another method called surfaceArea using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  Formula for cuboid surface area of a cube: 
  2 * (length * width + length * height + width * height)  */

  CuboidMaker.prototype.surfaceArea = function(){
    return 2 * (this.length * this.width +  this.length * this.height + this.width * this.height);
  }

  console.log('\nStep 3: Surface Area Method\n\n' + CuboidMaker.prototype.surfaceArea + '\n\n');


/* 🐴🐴🐴 Step 4: Create a new object that uses CuboidMaker 🐴🐴🐴
  Create an object called cuboid that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid. */

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

console.log('\nStep 4: Create a new object that uses CuboidMaker\n\n' + cuboid + '\n\n');


// 🐴🐴🐴 Test your volume and surfaceArea methods by uncommenting the logs below: 🐴🐴🐴
// ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️

console.log('\nStep 5: Test your volume and surfaceArea methods by uncommenting the logs below:\n');

 console.log('cuboid volume: ' + cuboid.volume()); // 100
 console.log('cuboid surface area: ' + cuboid.surfaceArea()); // 130
 
 console.log('\n\n');

// 🦄🦄🦄 Topic 4: Classes 🦄🦄🦄 //

console.log('------------------\n Topic #4 Classes \n------------------');

//🦄🦄🦄 1. Take your prototypes from above and refactor into class syntax. Please rename your class CuboidMakerTwo and your object cuboidTwo 🦄🦄🦄
class CuboidMakerTwo{
  constructor(atr){
    this.length = atr.length;
    this.width = atr.width;
    this.height = atr.height;
  };

  volume (){
    return this.length * this.width * this.height;
  };

  surfaceArea (){
    return 2 * (this.length * this.width +  this.length * this.height + this.width * this.height);
  };
}


const cuboidTwo = new CuboidMakerTwo({
  length: 4,
  width: 5,
  height: 5
});

console.log('\nTake your prototypes from above and refactor into class syntax.\n');

//🦄🦄🦄 Test your volume and surfaceArea methods by uncommenting the logs below: 🦄🦄🦄
 console.log('cuboidTwo volume: ' + cuboidTwo.volume()); // 100
 console.log('cuboidTwo surface area: ' + cuboidTwo.surfaceArea()); // 130

console.log('\n');



  


  /* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
  function foo(){
    console.log('its working');
    return 'bar';
  }
  foo();
  module.exports = {
    foo,
    summation,
    animalNames,
    lowerCaseNames,
    lowPopulationAnimals,
    USApop,
    consume, 
    add,
    multiply,
    greeting,
    CuboidMaker,
    CuboidMakerTwo
  }
