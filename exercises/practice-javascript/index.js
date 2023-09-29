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
  let sentence = ["learning", ...fragment, "is", "fun"]; // Cambia esta línea
  return sentence;
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
////////////

const numberList = [1, 7, 1998];

const stage1 = numberList[0];
const stage2 = numberList[1];
const stage3 = numberList[2];
console.log(stage1, stage2, stage3);

//
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
computer.changeComputerSystem("WINDOWS");
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
