import {buyHealth, buyWeapon, sellWeapon} from './market.js'; 
import {addStorage, listStorage, takeStorage} from './storage.js';
import {fightSlime, fightBeast, attack, dodge} from './combat.js';
import {restart} from './player.js';
import {pickTwo, pickEight} from './script.js';

const locations = [
    {
        name: "town square",
        "button text": ["Go to Market", "Go to forest", "Open your Store", "Go to the Warehouse"],
        "button functions": [goMarket, goForest, goTown, goWarehouse],
        text: "You are in the town square. You see a sign that says \"Store\" - oh wait, that's your store."
    },
    {
        name: "market",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Listen to Gossip", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown, goTown],
        text: "You enter the bustling market."
    },
    {
        name: "forest",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square", "Go to your warehouse"],
        "button functions": [fightSlime, fightBeast, goTown, goWarehouse],
        text: "You enter the Forest. You see some monsters."
    },
    {
      name: "warehouse",
      "button text": ["List Storage items", "Take from Storage", "Add to Storage", "Go to Town Square"],
      "button functions": [listStorage, takeStorage, addStorage, goTown],
      text: "You enter the warehouse where you store your goods."
    },
    {
        name: "fight",
        "button text": ["Attack", "Dodge", "Run", ""],
        "button functions": [attack, dodge, goTown, goTown],
        text: "You are fighting a monster."
    },
    {
        name: "kill monster",
        "button text": ["Go to town square", "Go to town square", "Go to town square"],
        "button functions": [goTown, goTown, goTown, goTown],
        text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
    },
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You die. ☠️"
    },
    { 
        name: "win", 
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
        "button functions": [restart, restart, restart], 
        text: "You defeat the dragon! YOU WIN THE GAME! 🎉" 
    },
    {
        name: "easter egg",
        "button text": ["2", "8", "Go to town square?"],
        "button functions": [pickTwo, pickEight, goTown],
        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
    }
];
export {locations};
export function update(location) {
    const buttonFunctions = location["button functions"];
  
    monsterStats.style.display = "none";
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button4.innerText = location["button text"][3];
    button1.onclick = buttonFunctions[0];
    button2.onclick = buttonFunctions[1];
    button3.onclick = buttonFunctions[2];
    button4.onclick = buttonFunctions[3];
  
    if (location.name === 'warehouse') {
      button4.removeEventListener('click', goWarehouse); // Remove the existing listener
      button4.addEventListener('click', addStorage); // Add the specific listener for warehouse
    }
  
    text.innerText = location.text;
  }
  
export function goTown() {
    update(locations[0]);
  }
  
export function goMarket() {
    update(locations[1]);
  }
  
export function goForest() {
    update(locations[2]);
  }
  
export  function goWarehouse() {
    update(locations[3]);
  }