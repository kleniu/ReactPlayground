console.log("################### START ###################");

console.log("## Array methods play.");
// MAP - executes function on every element of an array
let myArray = [ 1, 2, 3 ];
let myNewArray = myArray.map( (num) => myObject = { val: num }  );
console.log(myNewArray);

// REDUCE - as map but also holds the 'state'. Useful for :
myArray = [
    { name: "Robert", date: "02/02/2023", points: 300},
    { name: "Aldred", date: "02/02/2023", points: 200},
    { name: "Chriss", date: "02/02/2023", points: 100},
    { name: "Robert", date: "02/03/2023", points: 50}
]
console.log(myArray);
// a) creating the summ of values in the table
let sum = myArray.reduce( (stateVal, val) => stateVal+val.points, 
                           0); // second parameter of reduce method = initial value of stateVal  
console.log("Sum of points :", sum);
// b) counting occurrences in the table
let occur = myArray.reduce( (stateVal, val) => newStateVal = {...stateVal, [val.name]: (stateVal[val.name] || 0) + 1 },
                            {} );
                            // it works because:
                            // you can access object myObj = { prop1: 1, prop2: 2, prop3: 100 } like this:
                            // - myObj.prop1 
                            // but also like a list
                            // - myObj["prop1"]
console.log("Name occurrences", occur);
// it returns: "Name occurrences { Robert: 2, Aldred: 1, Chriss: 1 }
// c) converting the array
let names = myArray.reduce( (stateVal, val) => [...stateVal, val.name] , 
                            [])
console.log("Names array", names);
// d) returning min/max values
let maxScore = myArray.reduce( (stateVal, val) => {
                                                        if ( stateVal === null || val.points > stateVal ) 
                                                            return val.points;
                                                        else
                                                            return stateVal;
                                                  },
                                null);
console.log("Max score is", maxScore);

// FIND or FINDINDEX - return the first element in the array by specified criteria
let firstElem = myArray.find( (element) => element.name === "Robert" );
console.log("First element where name === \"Robert\"", firstElem);

// FILTER ELEMENTS - return array of elements by specified criteria
let allRoberts = myArray.filter( (element) => element.name === "Robert");
console.log("All Roberts", allRoberts);

// SLICE - returns portion of array by specified start and end index - end index not included and can be negative number (will be counted from the end) 
let allButFirstAndLast = myArray.slice(1,-1);
console.log("All but first and last", allButFirstAndLast);

// SPLICE - removing and optionally replacing elements from array
let removed = myArray.splice(1,2, {name: "Ola", date: "02/02/2023", points: 200}, {name: "Ela", date: "02/02/2023", points: 200}, {name: "Ala", date: "02/02/2023", points: 200})
console.log("Replaced", myArray);
console.log("Removed", removed);






console.log("\n\n\n## destructing ");
[a, b] = [ 'One', 'Two', "Three", "Four"];
console.log(a, b);

let {name} = { name : "Robert", age : 26 };
console.log(name);


console.log("## rest operator ");
const myFunction = (...myArgs) => {
	console.log(myArgs);
}

myFunction("ala", 1, { tekst : "kota" });

console.log("## Classes ES7 ");
import { Cat } from './class.jsx';
let myCat = new Cat();
myCat.printName();
myCat.printStatus();


console.log("## Classes ES6");
import { Truck } from './class.jsx';
let myTruck = new Truck();
myTruck.printProducer();
myTruck.printMaxLoad();


console.log("## Default export usage");
import jakakolwiekNazwaModułu from './data.jsx';
console.log(jakakolwiekNazwaModułu.test);
console.log(jakakolwiekNazwaModułu);


console.log("## Named export usage");
import { addDot, luckyNumber } from './commons.jsx'; 
console.log(addDot("Tekst z krokpką na końcu")); 
console.log(addDot, luckyNumber); 

import { luckyNumber as myNum } from './commons.jsx';
console.log("myNum=",myNum);

import * as pakiet from './commons.jsx';
console.log(pakiet);
console.log(pakiet.addDot("Tekst z ktopką"));
