


import './script.js';
import './market.js';
import {player} from './player.js';
import './combat.js';
import {listInventory, listStorage} from './storage.js';
import './inventory.js';
import './checkboxes.js';
import {goMarket, goForest, goWarehouse} from './location.js';
import {text, charismaText, xpText, healthText, goldText} from './interaction.js';



document.addEventListener('DOMContentLoaded', function() {
  console.log('Before initialization');
  
  // Initialize buttons
  button1.onclick = goMarket;
  button2.onclick = goForest;
  button3.onclick = goWarehouse; // openStore;
  button4.onclick = goWarehouse;
  buttonInv.onclick = listInventory;
  console.log('After initialization');
});

export function easterEgg() {
  update(locations[7]);
}

export function pickTwo() {
  pick(2);
}

export function pickEight() {
  pick(8);
}

export function pick(guess) {
  let numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.indexOf(guess) !== -1) {
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}