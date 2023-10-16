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
///////////////////////////////////////
class Car {
  constructor(wheels, doors, windows, brand, model) {
    this.wheels = wheels;
    this.doors = doors;
    this.windows = windows;
    this.brand = brand;
    this.model = model;
    this.on = false;
  }
  switchCar() {
    if (this.on === false) {
      this.on = true;
    } else {
      this.on = false;
    }
  }
}
const HondaCivic = new Car(4, 4, 4, "Honda", "civic");
console.log("This is my HondaCivic", HondaCivic);
console.log(typeof HondaCivic);
console.log(HondaCivic instanceof Car);
HondaCivic.switchCar();

//////////////////////////////////////

const airCon = {
  isOn: false,
  temp: 21,
  maxTemp: 28,
  minTemp: 16,
  hasFan: true,
  fanSpeed: 1,
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

///////////////////////////////////////

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

function invertSring(text) {
  let newText = "";
  for (let i = text.length - 1; i >= 0; i--) {
    newText += text[i];
  }
  return newText;
}
console.log(invertSring("Hola Mundo"));
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

// const oldest = {
//     firstName: "",
//     age: 0,
//   },
//   youngest = {
//     firstName: "",
//     age: 0,
//   };
// for (let i = 0; i < people.length; i++) {
//   const {
//     firstName,
//     DOB: { year },
//   } = people[i];
//   const currentAge = 2023 - year;
//   if (i === 0) {
//     youngest.firstName = firstName;
//     oldest.firstName = firstName;
//     youngest.age = currentAge;
//     oldest.age = currentAge;
//   } else {
//     if (currentAge < youngest.age) {
//       youngest.age = currentAge;
//       youngest.firstName = firstName;
//     }
//     if (currentAge > oldest.age) {
//       oldest.age = currentAge;
//       oldest.firstName = firstName;
//     }
//   }
// }
// console.log(youngest);
// console.log(oldest);
const departmentCounter = {
  Marketing: 0,
  Development: 0,
  Sales: 0,
  "Office Management": 0,
};
people.forEach((person) => {
  if (person.department === "Marketing") {
    departmentCounter.Marketing = departmentCounter.Marketing + 1;
  }
  if (person.department === "Development") {
    departmentCounter.Development = departmentCounter.Development + 1;
  }
  if (person.department === "Sales") {
    departmentCounter.Sales = departmentCounter.Sales + 1;
  }
  if (person.department === "Office Management") {
    departmentCounter["Office Management"] =
      departmentCounter["Office Management"] + 1;
  }
});
people.forEach((person) => {
  const { department } = person;
  departmentCounter[department] = departmentCounter[department] + 1;
});
console.log("This is my departamentCounter", departmentCounter);
/////////////////
// 6) What is the combined salary of all he people in the "Development" department?
// Expected: 232,000
som = 0;
people.forEach((person) => {
  if (person.department === "Development") {
    som = som + parseInt(person.salary);
  }
});
console.log(
  "This is the total salary of the people in the development department",
  som
);
////////////////
let n = 13;
let gap = [0, 1];

for (let i = 2; i < n; i++) {
  gap[i] = gap[i - 1] + gap[i - 2];
}
////////////////

console.log("This is my Sucesión de gaponacci", gap);
///////////////  WOMEWORK HARRISONG
// contructor clases
class air_conditioning {
  constructor(
    temp,
    maxTemp,
    minTemp,
    fanSpeed,
    maxFanSpeed,
    minFanSpeed,
    height,
    width,
    amperes
  ) {
    this.isOn = false;
    this.temp = temp;
    this.maxTemp = maxTemp;
    this.minTemp = minTemp;
    this.hasFan = true;
    this.fanSpeed = fanSpeed;
    this.maxFanSpeed = maxFanSpeed;
    this.minFanSpeed = minFanSpeed;
    this.height = height;
    this.width = width;
    this.amperes = amperes;
  }
  switch() {
    if (this.isOn) {
      this.isOn = false;
    } else {
      this.isOn = true;
    }
  }
  changeTemp(newTemp) {
    if (newTemp <= this.minTemp) {
      alert("as cold as possible");
      return;
    }
    if (newTemp >= this.maxTemp) {
      alert("as hot as possible in my new air");
      return;
    }
    if (newTemp !== this.temp) {
      this.temp = newTemp;
    }
  }
  changeFanSpeed(newSpeed) {
    if (newSpeed <= this.minFanSpeed) {
      alert("as slow as possible in my new air");
      return;
    }
    if (newSpeed >= this.maxFanSpeed) {
      alert("as fast as possible in my new air");
      return;
    }
    if (newSpeed !== this.fanSpeed) {
      this.fanSpeed = newSpeed;
    }
  }
}
const newair = new air_conditioning(21, 28, 16, 1, 300, 0, 30, 70, 1);
console.log("This is my newair", newair);
newair.switch();
newair.changeTemp(200);
newair.changeFanSpeed(350);
/////////////////////
// Create an object representing a person with properties: name, age, and occupation.
class person {
  constructor(name, age, occupation, email, status, gender, height) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.email = email;
    this.status = status;
    this.gender = gender;
    this.height = height;
  }
  saludar() {
    console.log("Hola mi nombre es Harrisong");
  }
  changeStatus() {
    if (this.status === "single") {
      this.status = "married";
    } else {
      this.status = "single";
    }
  }
}
const nwePerson = new person(
  "Harrisong",
  25,
  "Frontend Developer",
  "Harrisong@gmail.com",
  "single",
  "male",
  1.8
);
nwePerson.saludar();
console.log(nwePerson);
/////////////////

/////////////////////////////  THIS IS THE TEST  ///////
// 1. Cuales son los tipos de datos manejados por Javascript?
// R= booleano, string, number, NAN, indefinido, null, infinity ,

// 3. Cuales de los siguientes valores son truthy? Marca con una x al final de la linea
// a) "false" X
// b) 0
// c) -1 X
// d) Un objeto vacío {} X
// e) Un arreglo vacío [] X
// f) 5 X

// 4. Sin ejecutar estos fragmentos de código, responde, cual será el resultado de cada uno:

// Por ejemplo: console.log(1 + 1); // Respuesta: 2
// a) console.log(1 + "1");   // Respuesta: 11
// b) console.log(1 + true);  // Respuesta: 2
// c) console.log(!!"hola");  // Respuesta: true

// --- Ejercicios ---
// Usando el siguiente objeto, realiza los siguientes ejercicios:
// 5. Agrega al objeto una función calculateProfit, la cual se encargará de calcular y retornar cuanto dinero se obtendría
// si se vendieran todas las unidades del product.

const product = {
  name: "Apples",
  quantity: 10,
  price: 10.99,
  category: "Food",
  calculateProfit: function () {
    let Price = product.price;
    let Quantity = product.quantity;
    const totalOfSells = Price * Quantity;
    return Math.round(totalOfSells);
  },
  sell: function (unit) {
    if (unit <= this.quantity) {
      this.quantity -= unit;
      return Math.round(unit * this.price);
    } else {
      return 0;
    }
  },
  checkAttribute: function (attributeName) {
    if (this.hasOwnProperty(attributeName)) {
      return `The product ${attributeName} is ${this[attributeName]}`;
    } else {
      return `The product does not have an attribute named ${attributeName}`;
    }
  },
};
console.log(product);
console.log("total units sold =", product.calculateProfit());
console.log("Sell funtion", product.sell(3));
console.log("checkAttribute funtion", product.checkAttribute("Apples"));
// 6. Agrega una función sell. La función sell se encargará de vender una cantidad variable de unidades del item, debe
// reducir la cantidad de items existente del producto, y debe retornar cuanto dinero produjo la venta. Si no se puede
// realizar la venta, la función deberá devolver 0.

// Para probar que la función está bien, llama a la función en los siguientes escenarios:
//     6.1) tuFuncion(3) -- Deberá retornar un valor de 32.97
//     6.2) tuFuncion(1) -- Deberá retornar un valor de 10.99
//     6.3) tuFuncion(15) - Deberá retornar un valor de 0
// 7. Agrega una funcion checkAttribute al producto, esta función deberá recibir como parámetro el nombre del atributo del producto
// que se desea consultar, y deberá retornar un texto con el siguiente mensaje: "The product [NOMBRE DEL ATRIBUTO] is [VALOR DEL ATRIBUTO]";
// Por ejemplo: checkAttribute("name") debería retornar: "The product name is Apples";
// ---
// Usando el siguiente arreglo, realiza los siguientes ejercicios:
const inventory = [
  {
    name: "Apple",
    quantity: 100,
    price: 10.99,
    category: "Food",
  },
  {
    name: "Keyboard",
    quantity: 20,
    price: 35.5,
    category: "Electronics",
  },
  {
    name: "Raptor",
    quantity: 150,
    price: 3.99,
    category: "Drinks",
  },
  {
    name: "Carrot",
    quantity: 22,
    price: 7.99,
    category: "Food",
  },
  {
    name: "Speakers",
    quantity: 5,
    price: 55.35,
    category: "Electronics",
  },
  {
    name: "Water",
    quantity: 189,
    price: 2.99,
    category: "Drinks",
  },
  {
    name: "Tomato",
    quantity: 82,
    price: 7.29,
    category: "Food",
  },
  {
    name: "USB Hub",
    quantity: 42,
    price: 17.99,
    category: "Electronics",
  },
  {
    name: "Coca Cola",
    quantity: 200,
    price: 4.99,
    category: "Drinks",
  },
  {
    name: "Potato",
    quantity: 102,
    price: 8.5,
    category: "Food",
  },
  {
    name: "Car Alarm",
    quantity: 4,
    price: 79.99,
    category: "Electronics",
  },
  {
    name: "Red Bull",
    quantity: 200,
    price: 9.5,
    category: "Drinks",
  },
];
// 8. Imprime el nombre y precio de todos los productos de la categoría Drinks.

inventory.forEach((product) => {
  if (product.category === "Drinks") {
    console.log("product Name=", product.name, "product Price=", product.price);
  }
});

// 9. Encuentra e imprime toda la información del producto con el mayor precio
const more_expensive = {
  name: "",
  quantity: 0,
  price: 0,
  category: "",
};

for (let i = 0; i < inventory.length; i++) {
  const { name, price, category, quantity } = inventory[i];
  const currentprice = price;
  if (i === 0) {
    more_expensive.name = name;
    more_expensive.quantity = quantity;
    more_expensive.price = currentprice;
    more_expensive.category = category;
  } else {
    if (currentprice > more_expensive.price) {
      more_expensive.name = name;
      more_expensive.quantity = quantity;
      more_expensive.price = currentprice;
      more_expensive.category = category;
    }
  }
}
console.log("this is the more expensive", more_expensive);
// 10. Por cada item de la categoríaaN "Electronics", imprime cuanto dinero se obtendría si se vendiera
// toda la cantidad de ese item.
// Por ejemplo: si se vendiera toda la cantidad del productor "Keyboard", se obtendría 710.
inventory.forEach((product) => {
  if (product.category === "Electronics") {
    let total = product.price * product.quantity;
    console.log(total);
  }
});
// 11. Imprime la cantidad total de items que hay en la categoría "Food"
// // Resultado esperado: 306
let sumatoria = 0;
for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].category === "Food") {
    sumatoria = inventory[i].quantity + sumatoria;
  }
}
console.log("total number of items in the 'Food' category", sumatoria);

// 12. Encuentra e imprime toda la información del producto con la menor cantidad disponible.
const least_amount = {
  name: "",
  quantity: 0,
  price: 0,
  category: "",
};

for (let i = 0; i < inventory.length; i++) {
  const { name, price, category, quantity } = inventory[i];

  const currentamount = price;
  if (i === 0) {
    least_amount.name = name;
    least_amount.quantity = quantity;
    least_amount.price = currentamount;
    least_amount.category = category;
  } else {
    if (currentamount < least_amount.quantity) {
      least_amount.name = name;
      least_amount.quantity = quantity;
      least_amount.price = currentamount;
      least_amount.category = category;
    }
  }
}
console.log("this is the least amount", least_amount);

let u;
u = "hola";
let b;
b = a;
b = {
  name: "Luis",
};
console.log("Manejo x valor:", {
  a,
  b,
});
let persona1;
persona1 = {
  name: "Jorge",
};
let persona2;
persona2 = persona1;
let persona3 = {
  ...persona1,
};
persona3.edad = 20;
persona2.name = "Luis";
console.log("Por referencia:");
console.log("persona1", persona1);
console.log("persona2", persona2);
console.log("persona3", persona3);
const saludar = (personaXRef) => {
  /* personaXRef.name = "Otra cosa" */
  const copiaPersona = {
    ...personaXRef,
  };
  copiaPersona.name = "Otra cosa";
  console.log(`Hola ${copiaPersona.name}`);
};
saludar(persona3);
console.log(persona3);
const text = "Hello, it is I";
/* expected = "I si ti ,olleH" */
// 1- iterar la cadena del final hacia al comienzo
// 2- el ultimo de la variable str sera mi primer index en mi nuevo string.
const invertString = (str) => {
  let newData = "";
  /* let dataCounter = 0; */
  for (let i = str.length - 1; i >= 0; i--) {
    newData += str[i];
    /* dataCounter++; */
  }
  return newData;
};
/* invertString(text); */
console.log(invertString(text));

const powerOf = (num, power) => {
  let math = num;
  for (let i = 1; i < power; i++) {
    math = math * num;
  }
  return math;
};
/* const numbers = []; */
const pitagorsTeorem = (catA, catB) => {
  let sumresult = powerOf(catA, 2) + powerOf(catB, 2);
  return Math.sqrt(sumresult);
};
console.log("This is the value of the hypotenuse =", pitagorsTeorem(5, 6));

console.log(powerOf(2, 4));
const personA = { name: "Jorge" };
const personB = { lastName: "Corea" };
let personC = { age: 28 };
personC = {
  ...personA,
  ...personB,
  ...personC,
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const flatline = () => {
  let flattened = [];
  for (i = 0; i < matrix.length; i++) {
    /* flattened = [...flattened, ...matrix[i]] */
    flattened = flattened.concat(matrix[i]);
  }
  return flattened;
};
//i = 1;
// j = 0;
//newFlattened = [1, 2, 3];
const flatlineFor = () => {
  let newFlattened = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      newFlattened.push(matrix[i][j]);
    }
  }
  return newFlattened;
};
console.log(flatline());
/* console.log(flatlineFor()) */
// Expected [1, 2, 3, 4, 5, 6, 7, 8, 6];

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18],
  [19, 20],
];
console.log(matriz);

const flattEarth = () => {
  let flattened_array = [];
  for (let i = 0; i < matriz.length; i++) {
    for (let h = 0; h < matriz[i].length; h++) {
      flattened_array.push(matriz[i][h]);
    }
  }
  return flattened_array;
};
console.log("This is my flattened Array", flattEarth());

var t = -1;
var MAX = 1000;
var a = Array(MAX).fill(0);

function isEmpty() {
  return t < 0;
}

function push(x) {
  if (t >= MAX - 1) {
    document.write("Stack Overflow");
    return false;
  } else {
    t += 1;
    a[t] = x;

    document.write(x + " pushed into stack<br/>");
    return true;
  }
}

function pop() {
  if (t < 0) {
    document.write("Stack Underflow");
    return 0;
  } else {
    var x = a[t];
    t -= 1;
    return x;
  }
}

function peek() {
  if (t < 0) {
    document.write("Stack Underflow");
    return 0;
  } else {
    var x = a[t];
    return x;
  }
}

function print() {
  for (i = t; i > -1; i--) {
    document.write(" " + a[i]);
  }
}

push(10);
push(20);
push(30);
document.write(pop() + " Popped from stack");
document.write("<br/>Top element is :" + peek());
document.write("<br/>Elements present in stack : ");
print();

class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count++;
    return this.count - 1;
  }
}
const stack = new Stack();

// push() para insertar un elemento en la pila
// pop() para eliminar un elemento de la pila
// top() Devuelve el elemento superior de la pila.
// isEmpty() devuelve verdadero si la pila está vacía; de lo contrario, es falso.
// size() devuelve el tamaño de la pila.

console.log(stack);
stack.push(100);
console.log(stack);
stack.push(200);
stack.push("Harrisong");
console.log(stack);
stack.push(300);
stack.push((add = () => {}));
console.log(typeof stack);
console.log(stack);

function solution(array) {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    newArray.push(array[index] * 2);
  }
  return newArray;
}
console.log(solution([1, 2, 3, 4]));

console.log("This is person", person);
console.log("This is student", student);
console.log("This is car", car);
console.log("This is Boock", book);
//////////////
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

let Harrisong = new Array();

Harrisong[0] = "Harrisong";
Harrisong[1] = "Gutierrez";
console.log("This is Harrisong", Harrisong);
