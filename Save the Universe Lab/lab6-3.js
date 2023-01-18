class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  attack(target) {
    if (Math.random() < this.accuracy) {
      console.log("Engage blasters at target!");
      target.hull -= this.firepower;
      console.log(`Impact made! USS Assembly dealt ${this.firepower} damage.`);
      alert(`Impact made! USS Assembly dealt ${this.firepower} damage.`);
    } else {
      console.log("Engage blasters at target!");
      console.log("USS Assembly missed! Standby for further orders!");
      alert("USS Assembly missed! Standby for further orders!");
    }
  }
  status() {
    console.log(`USS Assembly's hull integrity is ${this.hull}`);
    alert(`USS Assembly's hull integrity is ${this.hull}`);
  }
}
class AlienShip {
  constructor(name) {
    this.name = name;
    this.hull = Math.floor(Math.random() * (7 - 3) + 3);
    this.firepower = Math.floor(Math.random() * (5 - 2) + 2);
    this.accuracy = Math.random() * (0.8 - 0.6) + 0.6;
  }
  attack(target) {
    if (Math.random() < this.accuracy) {
      target.hull -= this.firepower;
      console.log(`${this.name} dealt ${this.firepower} damage.`);
      alert(`${this.name} dealt ${this.firepower} damage.`);
    } else {
      console.log(`${this.name} missed!`);
      alert(`${this.name} missed!`);
      return `${this.name} missed! ${target.name} hull: ${target.hull}`;
    }
  }
  status() {
    console.log(`${this.name}'s hull integrity = ${this.hull}`);
    alert(`${this.name}'s hull integrity = ${this.hull}`);
  }
}

let ussAssembly = new Ship("USS Assembly", 20, 5, 0.7);
let alienShips = [];
for (let i = 0; i < 6; i++) {
  let createAlienShip = new AlienShip(`Alien ship ${i + 1}`);
  alienShips.push(createAlienShip);
}

button1.addEventListener("click", function () {
  if (ussAssembly.hull > 0 && alienShips.length > 0) {
    ussAssembly.attack(alienShips[0]);
    alienShips[0].status();
    if (alienShips[0].hull > 0) {
      console.log("The alien ship is attacking! Brace for impact!");
      alienShips[0].attack(ussAssembly);
      ussAssembly.status();
      console.log("Engage or retreat?");
      if (ussAssembly.hull <= 0) {
        let playerShip = document.querySelector("#playerShip");
        playerShip.remove(playerShip);
        console.log("GAME OVER!");
        alert("GAME OVER!");
      }
    } else {
      let htmlShips = document.querySelector("#ships");
      htmlShips.remove(htmlShips[0]);
      alienShips.shift();
      console.log(`Alien ships left: ${alienShips.length}`);
      ussAssembly.status();
      console.log("Engage or retreat?");
      if (ussAssembly.hull > 0 && alienShips.length === 0) {
        console.log("VICTORY!");
        alert("VICTORY!");
        console.log("Refresh webpage to play again.");
        alert("Refresh webpage to play again.");
      }
    }
  }
});

button2.addEventListener("click", function () {
  alert("Live to fight another day!");
  window.location.reload();
});