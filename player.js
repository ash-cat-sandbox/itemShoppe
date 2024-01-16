import './script.js';
import './market.js';
import './player.js';
import {weaponMarket} from './combat.js';
import './storage.js';
import './inventory.js';
import './checkboxes.js';
import {update, locations} from './location.js';
import './interaction.js';
import { charismaText, healthText, xpText } from './interaction.js';


export const player = {
    charisma: 0, 
    xp: 0,
    health: 100,
    gold: 150,
    weight: 0,
    weapons: [weaponMarket[0]],
    currentWeapon: 0,
    selfInventory: ['Leather Vest', 'Wheat Loaf', 'Apple'],
    checkedItems: [],
    storageInventory: []
};


export function restart() {
  update(locations[0]);
  player.charisma = 0;
  charismaText.innerText = player.charisma;
  player.xp = 0;
  xpText.innerText = player.xp;
  player.health = 100;
  healthText.innerText = player.health;
  player.gold = 150;
  goldText.innerText = player.gold;
  player.weight = 0;
  weightText.innerText = player.weight;
  player.selfInventory = ['Leather Vest', 'Wheat Loaf', 'Apple'];
  player.weapons = ['stick'];
  player.storageInventory = [];
  player.checkedItems = [];
  player.currentWeapon = 0;

}

