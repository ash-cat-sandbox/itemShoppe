import './script.js';
import './market.js';
import './player.js';
import {attack} from './combat.js';
import './storage.js';
import './inventory.js';
import './checkboxes.js';
import './location.js';
import './interaction.js';


export const player = {
    charisma: 0, 
    xp: 0,
    health: 100,
    gold: 150,
    weapons: ['stick'],
    currentWeapon: 0,
    selfInventory: ['Leather Vest', 'Wheat Loaf', 'Apple'],
    checkedItems: [],
    storageInventory: []
};


export function restart() {
  charisma = 0;
  health = 100;
  gold = 50;
  selfInventory = ['Leather Vest', 'Wheat Loaf', 'Apple'];
  storageInventory = [];
  weapons = [];
  currentWeapon = 0;
}

