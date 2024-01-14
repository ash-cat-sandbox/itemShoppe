import './script.js';
import './market.js';
import './player.js';
import './combat.js';
import './storage.js';
import './inventory.js';
import './checkboxes.js';
import './location.js';
import './interaction.js';


let charisma = 0;
export {charisma};
let xp = 0;
export {xp};
let health = 100;
export {health};
let gold = 150;
export {gold};
let selfInventory = ['Leather Vest', 'Wheat Loaf', 'Apple'];
export {selfInventory};
let checkedItems = [];
export {checkedItems};
let storageInventory = [];
export {storageInventory};
let weapons = ['stick'];
export {weapons};
let currentWeapon = 0;
export {currentWeapon};

export function restart() {
  charisma = 0;
  health = 100;
  gold = 50;
  selfInventory = ['Leather Vest', 'Wheat Loaf', 'Apple'];
  storageInventory = [];
  weapons = [];
  currentWeapon = 0;
}

