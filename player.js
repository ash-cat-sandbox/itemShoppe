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
let xp = 0;
let health = 100;
let gold = 150;
let selfInventory = ['Leather Vest', 'Wheat Loaf', 'Apple'];
export {selfInventory};
let checkedItems = [];
let storageInventory = [];
let weapons = ['stick'];
let currentWeapon = 0;

export function restart() {
  charisma = 0;
  health = 100;
  gold = 50;
  selfInventory = ['Leather Vest', 'Wheat Loaf', 'Apple'];
  storageInventory = [];
  weapons = [];
  currentWeapon = 0;
}

