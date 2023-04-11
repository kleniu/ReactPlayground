(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name2 in all)
      __defProp(target, name2, { get: all[name2], enumerable: true });
  };

  // class.jsx
  var Animal = class {
    isAlive = true;
    printStatus = () => {
      console.log("alive = ", this.isAlive);
    };
  };
  var Cat = class extends Animal {
    // notice there is no need for super() call.
    name = "Tom";
    printName = () => {
      console.log("The cat's name is ", this.name);
    };
  };
  var Car = class {
    constructor() {
      this.producer = "Volvo";
    }
    printProducer() {
      console.log(this.producer);
    }
  };
  var Truck = class extends Car {
    constructor() {
      super();
      this.maxLoad = 20;
    }
    printMaxLoad() {
      console.log(this.maxLoad);
    }
  };

  // data.jsx
  var myText = {
    test: "To jest przyk\u0142adowy tekst."
  };
  var data_default = myText;

  // commons.jsx
  var commons_exports = {};
  __export(commons_exports, {
    addDot: () => addDot,
    luckyNumber: () => luckyNumber
  });
  var addDot = (text) => text + ".";
  var luckyNumber = 13;

  // app.jsx
  console.log("################### START ###################");
  console.log("## Array methods play.");
  var myArray = [1, 2, 3];
  var myNewArray = myArray.map((num) => myObject = { val: num });
  console.log(myNewArray);
  myArray = [
    { name: "Robert", date: "02/02/2023", points: 300 },
    { name: "Aldred", date: "02/02/2023", points: 200 },
    { name: "Chriss", date: "02/02/2023", points: 100 },
    { name: "Robert", date: "02/03/2023", points: 50 }
  ];
  console.log(myArray);
  var sum = myArray.reduce(
    (stateVal, val) => stateVal + val.points,
    0
  );
  console.log("Sum of points :", sum);
  var occur = myArray.reduce(
    (stateVal, val) => newStateVal = { ...stateVal, [val.name]: (stateVal[val.name] || 0) + 1 },
    {}
  );
  console.log("Name occurrences", occur);
  var names = myArray.reduce(
    (stateVal, val) => [...stateVal, val.name],
    []
  );
  console.log("Names array", names);
  var maxScore = myArray.reduce(
    (stateVal, val) => {
      if (stateVal === null || val.points > stateVal)
        return val.points;
      else
        return stateVal;
    },
    null
  );
  console.log("Max score is", maxScore);
  var firstElem = myArray.find((element) => element.name === "Robert");
  console.log('First element where name === "Robert"', firstElem);
  var allRoberts = myArray.filter((element) => element.name === "Robert");
  console.log("All Roberts", allRoberts);
  var allButFirstAndLast = myArray.slice(1, -1);
  console.log("All but first and last", allButFirstAndLast);
  var removed = myArray.splice(1, 2, { name: "Ola", date: "02/02/2023", points: 200 }, { name: "Ela", date: "02/02/2023", points: 200 }, { name: "Ala", date: "02/02/2023", points: 200 });
  console.log("Replaced", myArray);
  console.log("Removed", removed);
  console.log("\n\n\n## destructing ");
  [a, b] = ["One", "Two", "Three", "Four"];
  console.log(a, b);
  var { name } = { name: "Robert", age: 26 };
  console.log(name);
  console.log("## rest operator ");
  var myFunction = (...myArgs) => {
    console.log(myArgs);
  };
  myFunction("ala", 1, { tekst: "kota" });
  console.log("## Classes ES7 ");
  var myCat = new Cat();
  myCat.printName();
  myCat.printStatus();
  console.log("## Classes ES6");
  var myTruck = new Truck();
  myTruck.printProducer();
  myTruck.printMaxLoad();
  console.log("## Default export usage");
  console.log(data_default.test);
  console.log(data_default);
  console.log("## Named export usage");
  console.log(addDot("Tekst z krokpk\u0105 na ko\u0144cu"));
  console.log(addDot, luckyNumber);
  console.log("myNum=", luckyNumber);
  console.log(commons_exports);
  console.log(addDot("Tekst z ktopk\u0105"));
})();
