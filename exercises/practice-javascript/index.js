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

const myArr = [10, 9, 8, 7, 6, 7, 8, 9];
const total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
  console.log("This is my Total", total);
}
