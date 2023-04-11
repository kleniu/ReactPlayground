## Przypomnienie NexT-Gen Javascript

### 1. Tworzenie zmiennych za pomocą `let` i `cons`

Wszyscy znamy `var`, który jest częścią specyfikacji JS, `let` i `cons`, są częścią ES6!
Więc od tego momentu gdy pracujesz z ES6, zacznij używać tych dwóch ostatnich! PLZ
`let` to powiedzmy nowa wersja `var` - tworzysz zmienną
`const` to tworzenie stałych. I to cała magia. 
[Tutaj w JSbin](https://jsbin.com/?js,output) jest świetny playground JS. 

### 2. `Arrow functions` - to jest fajne :) 

To inny sposób tworzenia funkcji. 
zamiast pisać:
```
function myFunction() {
    ...
}
```
piszesz:
```
const myFucntion = () => {
    ...
}
```
... i wreszcie nie ma problemu z `this` :) 
A teraz kilka śmiesznych zapisów składniowych robiących dokładnie to samo. Podoba mi się ten ostatni przypadek gdzie nie ma nawiasów klamrowych i słowa `return` bo można wykorzystać je jak rodzaj makra. 
```
function multipleNumbers(num1, num2) {
    return num1*num2;
}

const multipleNumbers = (num1, num2) => {
    return num1*num2;
}

const multipleNumbers = (num1, num2) => num1*num2;
```

### 3. Pisanie modułów. Ważne!

załóżmy że mamy dwa pliki (moduły) jakie będziemy importować w naszej aplikacji JS. 

_data.js_
```
const myText = {
    test: "To jest przykładowy tekst."
}
export default myText; // default is required!
```
_commons.js_
```
export const addDot = (text) => text + '.';
export const luckyNumber = 13;
```

Jak możemy zaimportować te dwa moduły 

a) `default export` - standardowe podejście

_app.js_
```
import jakakolwiekNazwaModułu from './data.js';
console.log(jakakolwiekNazwaModułu.test); // look into default statement in data.js
``` 

b) `named export` - nowe podejście.  

Możemy używać aliasów po `as` oraz `*` i aliasu po `as` wynikiem czego stworzony będzie obiekt z `properties` odpowiadającym wszystkim wyeksportowanym obiektom w pliku importowanym.  

_app.js_
```
import { addDot, luckyNumber } from './commons.js';
console.log(addDot("Tekst z kropką na końcu"));
console.log(addDot, luckyNumber);

import { luckyNumber as myNum } from './commons.js';
console.log("myNum=",myNum);

import * as pakiet from './commons.js';
console.log(pakiet);
console.log(pakiet.addDot("to będzie text z kropką"));
```

### 3. Klasy

Nic nowego. Pamiętaj o `this`, `super()` i że co nie wyeksportowane nie jest do użycia poza modułem który jest importowany.
_class.js_
```
// ES6 version
class Car {
        constructor() {
                this.producer = 'Volvo';
        }

        printProducer() {
                console.log(this.producer);
        }
}

export class Truck extends Car {
        constructor() {
                super();
                this.maxLoad = 20;
        }

        printMaxLoad() {
                console.log(this.maxLoad);
        }
}
```
i wywołanie 
```
import { Truck } from './class.js';
let myTruck = new Truck();
myTruck.printProducer();
myTruck.printMaxLoad();
```

a teraz nowsza składnia dostępna dostępna od ES7. Zauważ, że nie ma konstruktora i nie ma wywołania `super()`

_class.js_
```
class Animal {
	isAlive = true;
	printStatus = () => {
		console.log("alive = ", this.isAlive);
	}
}

export class Cat extends Animal { // notice there is no need for super() call.
	name = "Tom"; 
	printName = () => {
		console.log("The cat's name is ", this.name)
	}
}
``` 

import i wywołanie jest analogiczne.
```
import { Cat } from './class.js';
let myCat = new Cat();
myCat.printName();
myCat.printStatus();
```

### 4. Operatory `rest` i `spread`

Tak naprawdę jest to jeden operator '3-kropki' `...`. W zależności, jak go użyjemy nazwywamy go operatorem `spread` lub `rest`

a) operator `spread`

służy do kopiowania zawartości tablicy lub obiektu z możliwością dodania nowych wartości lub pól.
_spread_
```
const newArray = [...oldArray, 100, 200, 300]; // copy the oldArray and add three new values 100, 200, 300
const newObject = { ...oldObject, newProperty: "ala" } // copy oldObject to newObject and adds new props newProperty: "ala"
```

b) operator `rest`

służy do zamiany parametrów przesyłanych do funkcji w tablicę zawartości parametrów.
_rest_
```
const myFunction = (...myArgs) => {
	console.log(myArgs);
}

myFunction("ala", 1, { tekst : "kota" });
```
wyświetli:
```
[ 'ala', 1, { tekst: 'kota' } ]
```
gdyż pamiętamy, że w JS tablica może zawierać elementy różnego typu :) 

### 5. Destructing - kolejny ciekawa składnia :) 

Działa dla tablic i obiektów - przypisanie zawartości tablicy lub obiektu do zmiennych.
```
[a, b] = [ 'One', 'Two'];
console.log(a, b);

let {name} = { name : "Robert", age : 26 };
console.log(name);
```