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
  player.charisma = 0;
  player.xp = 0;
  player.health = 100;
  player.gold = 50;
  player.selfInventory = ['Leather Vest', 'Wheat Loaf', 'Apple'];
  player.weapons = ['stick'];
  player.storageInventory = [];
  player.checkedItems = [];
  player.currentWeapon = 0;
}

