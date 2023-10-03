function manejador(elEvento) {
  var evento = elEvento || window.event;
  console.log(
    "[" + evento.type + "] El código de la tecla pulsada es " + evento.keyCode
  );
}
document.onkeyup = manejador;
document.onkeydown = manejador;
//
const ourMusic = [
  {
    artist: "Daft Punk",
    title: "Homework",
    release_year: 1997,
    formats: ["CD", "Cassette", "LP"],
    gold: true,
  },
];

console.log("This is my Array ourMusic..", ourMusic);
// Here in this case we are able to change the type of data that the variable contains
let message = "hola";
console.log("this is the varavle message", message);
message = 123456;
console.log("this is the varavle message", message);

// The Number 10 is converted to
// string '10' and then '+'
// concatenates both strings
var x = 10 + "20";
var y = "20" + 10;

// The Boolean value true is converted
// to string 'true' and then '+'
// concatenates both the strings
var z = true + "10";

console.log(x);
console.log(y);
console.log(z);

const airCon = {
  isOn: false,
  temp: 21,
  maxTemp: 28,
  minTemp: 16,
  hasFan: true,
  fanSpeed: 1,
  maxFanSpeed: 5,
  minFanSpeed: 1,
  maxFanSpeed: 300,
  minFanSpeed: 0,
  height: 30,
  width: 70,
  amperes: 1,
  switch: function () {
    if (this.isOn) {
      this.isOn = false;
    } else {
      this.isOn = true;
    }
  },
  changeTemp: function (newTemp) {
    // Retorno temprano
    // Early return
    if (newTemp <= this.minTemp) {
      alert("as cold as possible");
      return;
    }
    if (newTemp >= this.maxTemp) {
      alert("as hot as possible");
      return;
    }
    if (newTemp !== this.temp) {
      this.temp = newTemp;
    }
  },
  changeFanSpeed: function (newSpeed) {
    if (newSpeed <= this.minFanSpeed) {
      alert("as slow as possible");
      return;
    }
    if (newSpeed >= this.maxFanSpeed) {
      alert("as fast as possible");
      return;
    }
    if (newSpeed !== this.fanSpeed) {
      this.fanSpeed = newSpeed;
    }
  },
};

const computer = {
  screen: "Full HD",
  isOn: false,
  keyboard: "wireless and latest generation",
  RAM: "8TB",
  operativeSistem: "UBUNTU",
  switch: function () {
    if (this.isOn) {
      this.isOn = false;
    } else {
      this.isOn = true;
    }
  },
  changeComputerSystem: function (newCompuerSystem) {
    if (newCompuerSystem !== this.newCompuerSystem) {
      this.operativeSistem = newCompuerSystem;
    }
  },
};

// Create an object representing a person with properties: name, age, and occupation.
const person = {
  name: "Harrisong",
  age: 25,
  occupation: "Frontend Developer",
};

function invertSring(text) {
  let newText = "";
  for (let i = text.length - 1; i >= 0; i--) {
    newText += text[i];
  }
  return newText;
}
console.log(invertSring("Hola Mundo"));
// Write a program that accesses and prints the value of a specific property from the person object created in the previous question.
console.log("This is the ocupation", person.occupation);
// Create an object representing a car with properties: make, model, and year.
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2022,
};
// Write a program that changes the value of the "year" property in the car object to update it to a new year.
car.model = "Chevrolete";
// Create an object representing a book with properties: title, author, and number of pages.
const book = {
  title: "JavaScript for Beginners",
  author: "Jane Smith",
  pages: 350,
};
if (book.pages > 500) {
  console.log("This book has more than 500 pages.");
} else {
  console.log("This book has more than 500 pages.");
}
// Create an object representing a student with properties: name, age, and an array of subjects they are studying.
const student = {
  name: "Platon",
  age: 20,
  subjects: ["Mathematics", "Science", "English"],
};
//
const tech = [
  {
    name: "React",
    desc: "UI library",
    experience: 7,
    usage: "Frontend",
  },

  {
    name: "Vue",
    desc: "UI library",
    experience: 3,
    usage: "Frontend",
  },

  {
    name: "jQuery",
    desc: "UI library",
    experience: 8,
    usage: "Frontend",
  },
  {
    name: "Angular",
    desc: "UI library",
    experience: 2,
    usage: "Frontend",
  },
  {
    name: "C++",
    desc: "Programming Language",
    experience: 2,
    usage: "Backend",
  },
  {
    name: "Node",
    desc: "JS based server",
    experience: 3,
    usage: "Backend",
  },

  {
    name: "JavaScript",
    desc: "Programming language",
    experience: 8,
    usage: "Fullstack",
  },

  {
    name: "Ruby",
    desc: "Programming language",
    experience: 1,
    usage: "Backend",
  },

  {
    name: "Python",
    desc: "Programming language",
    experience: 1,
    usage: "Backend",
  },

  {
    name: "Java",
    desc: "Programming language",
    experience: 3,
    usage: "Backend",
  },
];
//
for (let i = 0; i < tech.length; i++) {
  console.log("This isArray tech normal", tech[i]);
}

for (let i = tech.length - 1; i >= 0; i--) {
  console.log("This isArray tech in reverse", tech[i]);
}

tech.forEach((item) => {
  let timeOfExperience = item.experience;
  if (timeOfExperience > 5) {
    console.log("properties greater than 5", item);
  }
});
///////////////////////////// freecodeCamp
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Cambia solo el código debajo de esta línea
    newArr.push([...arr]);
    // Cambia solo el código encima de esta línea
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
//
function spreadOut() {
  let fragment = ["to", "code"];
  return ["learning", ...fragment, "is", "fun"]; // Cambia esta línea
}
console.log(spreadOut());
///////
function quickCheck(arr, elem) {
  // Cambia solo el código debajo de esta línea
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
  // Cambia solo el código encima de esta línea
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
//////
function filteredArray(arr, elem) {
  let newArr = [];
  // Cambia solo el código debajo de esta línea
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  // Cambia solo el código encima de esta línea
  return newArr;
}

console.log(
  "This is the response to  filteredArray",
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);
///////
let myNestedArray = [
  // Cambia solo el código debajo de esta línea
  ["unshift", false, 1, 2, 3, "complex", "nested"],

  ["loop", "shift", 6, 7, 1000, "method"],

  ["concat", false, true, "spread", "array", ["deep"]],

  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],

  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]],

  // Cambia solo el código encima de esta línea
];

// myNestedArray[0]
myNestedArray[0][6];

console.log("This is my  Nested Array", myNestedArray);
/////////
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};
const food = "bananas";
foods[food] = 13;
const grap = "grapes";
foods[grap] = 35;
const strawberrie = "strawberries";
foods[strawberrie] = 27;

console.log(foods);
////////////---///

let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};

// Cambia solo el código debajo de esta línea
userActivity.data.online = 45;
console.log(userActivity);
// Cambia solo el código encima de esta línea
console.log("This is my userActivity", userActivity);
/////
let comida = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  // Cambia solo el código debajo de esta línea
  return comida[scannedItem];
  // Cambia solo el código encima de esta línea
}
///////
let foods_ = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

// Cambia solo el código debajo de esta línea
delete foods_.oranges;
delete foods_.plums;
delete foods_.strawberries;
// Cambia solo el código encima de esta línea

console.log("This are my foods", foods_);
///////
let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  // Cambia solo el código debajo de esta línea
  return (
    userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan")
  );
  // Cambia solo el código encima de esta línea
}

console.log("EveryOne is Here", isEveryoneHere(users));

console.log("This is my checkInventory funtion ", checkInventory("oranges"));
///////////////
const users_ = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(allUsers) {
  // Cambia solo el código debajo de esta línea
  let result = 0;
  for (let user in users_) {
    if (allUsers[user].online === true) {
      result++;
    }
  }
  return result;
  // Cambia solo el código encima de esta línea
}

console.log("Users overhere", countOnline(users_));
/////////////
let users__ = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  // Cambia solo el código debajo de esta línea
  return Object.keys(obj);
  // Cambia solo el código encima de esta línea
}

console.log(getArrayOfUsers(users__));

const numberList = [1, 7, 1998];

const stage1 = numberList[0];
const stage2 = numberList[1];
const stage3 = numberList[2];
console.log(stage1, stage2, stage3);
/////

const workers = [
  {
    id: 456,
    firstName: "Jorge",
    lastName: "Lopez",
    weeklyHours: 44,
    hourlyRate: 15,
    age: 28,
    loyalty: 7,
  },
  {
    id: 789,
    firstName: "Harrisong",
    lastName: "Lopez",
    weeklyHours: 40,
    hourlyRate: 8,
    age: 35,
    loyalty: 1,
  },

  {
    id: 101,
    firstName: "Trapito",
    lastName: "Lopez",
    weeklyHours: 48,
    hourlyRate: 17,
    age: 24,
    loyalty: 2,
  },
  {
    id: 102,
    firstName: "Kenley",
    lastName: "Lopez",
    weeklyHours: 48,
    hourlyRate: 15,
    age: 19,
    loyalty: 7,
  },
  {
    id: 103,
    firstName: "Bluey",
    lastName: "Lopez",
    weeklyHours: 60,
    hourlyRate: 22,
    age: 6,
    loyalty: 10,
  },
];

let sum = 0;
for (let i = 0; i < workers.length; i++) {
  if (workers[i].hourlyRate) {
    sum = workers[i].hourlyRate + sum;
  }
}
console.log("exercise 1", sum / workers.length);

for (let i = 0; i < workers.length; i++) {
  let semanal = 0,
    monthly = 0;

  let { hourlyRate, weeklyHours, firstName } = workers[i];

  if (hourlyRate && weeklyHours) {
    semanal = hourlyRate * weeklyHours;
    monthly = semanal * 4;

    console.log(firstName);
    console.log("exercise 2", semanal);
    console.log("exercise 2", monthly);
  }
}
console.log("exercise 3");
for (let i = 0; i < workers.length; i++) {
  if (workers[i].loyalty < 5) {
    console.log(workers[i].firstName);
  }
}
///////////////////////
let summation = 0;
workers.forEach((worker) => {
  if (worker.hourlyRate) {
    summation += worker.hourlyRate;
  }
});
console.log("average of workers using forEach", summation / workers.length);

workers.forEach((worker) => {
  let weekly = 0,
    monthly = 0;
  let { hourlyRate, weeklyHours, firstName } = worker;
  if (hourlyRate && weeklyHours) {
    weekly = hourlyRate * weeklyHours;
    console.log(firstName);
    console.log("weekly schedule", weekly);
    console.log("monthly schedule", monthly);
  }
});

console.log("employee longevity less than five years");
workers.forEach((worker) => {
  if (worker.loyalty < 5) {
    console.log(worker.firstName);
  }
});
/////////////////////
let suma = 0;
for (const worker of workers) {
  if (worker.hourlyRate) {
    suma += worker.hourlyRate;
  }
}
console.log("average of workers using for of", suma / workers.length);

for (const worker of workers) {
  let semanal = 0,
    monthly = 0;

  const { hourlyRate, weeklyHours, firstName } = worker;

  if (hourlyRate && weeklyHours) {
    semanal = hourlyRate * weeklyHours;
    monthly = semanal * 4;

    console.log(firstName);
    console.log("weekly schedule", semanal);
    console.log("monthly schedule", monthly);
  }
}

console.log("employee longevity less than five years");
for (const worker of workers) {
  if (worker.loyalty < 5) {
    console.log(worker.firstName);
  }
}

/////////////////////
let addition = 0;
let i = 0;
while (i < workers.length) {
  if (workers[i].hourlyRate) {
    addition += workers[i].hourlyRate;
  }
  i++;
}
console.log("average of workers using forEach", addition / workers.length);

i = 0;
while (i < workers.length) {
  let semanal = 0,
    monthly = 0;

  const { hourlyRate, weeklyHours, firstName } = workers[i];

  if (hourlyRate && weeklyHours) {
    semanal = hourlyRate * weeklyHours;
    monthly = semanal * 4;

    console.log(firstName);
    console.log("weekly schedule", semanal);
    console.log("monthly schedule", monthly);
  }
  i++;
}

console.log("employee longevity less than five years");
i = 0;
while (i < workers.length) {
  if (workers[i].loyalty < 5) {
    console.log(workers[i].firstName);
  }
  i++;
}
///////////////  WOMEWORK HARRISONG
const people = [
  {
    firstName: "Sam",
    lastName: "Hughes",
    DOB: {
      day: 7,
      month: 7,
      year: 1978,
    },
    department: "Development",
    salary: "45000",
  },
  {
    firstName: "Terri",
    lastName: "Bishop",
    DOB: {
      day: 2,
      month: 4,
      year: 1989,
    },
    department: "Development",
    salary: "35000",
  },
  {
    firstName: "Jar",
    lastName: "Burke",
    DOB: {
      day: 11,
      month: 1,
      year: 1985,
    },
    department: "Marketing",
    salary: "38000",
  },
  {
    firstName: "Julio",
    lastName: "Miller",
    DOB: {
      day: 12,
      month: 7,
      year: 1991,
    },
    department: "Sales",
    salary: "40000",
  },
  {
    firstName: "Chester",
    lastName: "Flores",
    DOB: {
      day: 3,
      month: 15,
      year: 1988,
    },
    department: "Development",
    salary: "41000",
  },
  {
    firstName: "Madison",
    lastName: "Marshall",
    DOB: {
      day: 9,
      month: 22,
      year: 1980,
    },
    department: "Sales",
    salary: "32000",
  },
  {
    firstName: "Ava",
    lastName: "Pena",
    DOB: {
      day: 11,
      month: 2,
      year: 1986,
    },
    department: "Development",
    salary: "38000",
  },
  {
    firstName: "Gabriella",
    lastName: "Steward",
    DOB: {
      day: 8,
      month: 26,
      year: 1994,
    },
    department: "Marketing",
    salary: "46000",
  },
  {
    firstName: "Charles",
    lastName: "Campbell",
    DOB: {
      day: 9,
      month: 4,
      year: 1977,
    },
    department: "Sales",
    salary: "42000",
  },
  {
    firstName: "Tiffany",
    lastName: "Lambert",
    DOB: {
      day: 5,
      month: 11,
      year: 1990,
    },
    department: "Development",
    salary: "34000",
  },
  {
    firstName: "Antonio",
    lastName: "Gonzalez",
    DOB: {
      day: 3,
      month: 24,
      year: 1985,
    },
    department: "Office Management",
    salary: "49000",
  },
  {
    firstName: "Aaron",
    lastName: "Garrett",
    DOB: {
      day: 9,
      month: 4,
      year: 1985,
    },
    department: "Development",
    salary: "39000",
  },
];
console.log("This is my People", people);
// 1) What is the average income of all the people in the array?
let theSum = 0;
for (let i = 0; i < people.length; i++) {
  if (people[i].salary) {
    theSum = parseInt(people[i].salary) + theSum;
  }
}

console.log("percentage of salaried people", theSum / people.length);
/////////////
// 2) Who are the people that are currently older than 30?
let sumincreased = 0;
for (let i = 0; i < people.length; i++) {
  if (people[i].DOB.year > 2023 - 30) {
    console.log(
      "These people are above thirty years old.",
      people[i].firstName
    );
  }
}
/////////

///////////////  WOMEWORK HARRISONG

console.log("This is person", person);
console.log("This is student", student);
console.log("This is car", car);
console.log("This is Boock", book);
//
console.log("Computer antes", computer.isOn);
computer.switch();
console.log("Computer despues", computer.isOn);
console.log("This is my Computer", computer);
console.log("Computer System antes", computer.operativeSistem);
computer.changeComputerSystem("WINDadditionOWS");
console.log("Computer System despues", computer.operativeSistem);
console.log("antes", airCon.isOn);
airCon.switch();
console.log("despues", airCon.isOn);
console.log("antes", airCon.temp);
airCon.changeTemp(-3);
console.log("despues", airCon.temp);
console.log("antes", airCon.fanSpeed);
airCon.changeFanSpeed(3);
console.log("despues", airCon.fanSpeed);
// Break temp change
console.log("temp antes: ", airCon.temp);
// airCon.changeTemp(300);
console.log("temp despues: ", airCon.temp);
// Break fan change
console.log("fan Speed antes: ", airCon.fanSpeed);
airCon.changeFanSpeed(500);
console.log("fan Speed despues: ", airCon.fanSpeed);
