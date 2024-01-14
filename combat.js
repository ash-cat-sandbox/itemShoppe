import './script.js';
import './market.js';
import {currentWeapon, health, xp, gold} from './player.js';
import './combat.js';
import './storage.js';
import './inventory.js';
import './checkboxes.js';
import {update, locations} from './location.js';
import {button1, monsterHealthText, healthText, goldText} from './interaction.js';

export let fighting;
export let monsterHealth;

export const weaponMarket =  [
    { name: 'stick', power: 5 },
    { name: 'dagger', power: 30 },
    { name: 'claw hammer', power: 50 },
    { name: 'sword', power: 100 }
  ];
  
export const monsters = [
    {
      name: "slime",
      level: 2,
      health: 15
    },
    {
      name: "fanged beast",
      level: 8,
      health: 60
    },
    {
      name: "dragon",
      level: 20,
      health: 300
    }
]


export function fightSlime() {
    fighting = 0;
    goFight();
  }
  
export function fightBeast() {
    fighting = 1;
    goFight();
  }
  
export function fightDragon() {
    fighting = 2;
    goFight();
  }
  
export function goFight() {
    update(locations[4]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block";
    monsterName.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
  }
  
export function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + weaponMarket[currentWeapon].name + ".";
    health -= getMonsterAttackValue(monsters[fighting].level);
    if (isMonsterHit()) {
      monsterHealth -= weaponMarket[currentWeapon].power + Math.floor(Math.random() * xp) + 1;    
    } else {
      text.innerText += " You miss.";
    }
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if (health <= 0) {
      lose();
    } else if (monsterHealth <= 0) {
      fighting === 2 ? winGame() : defeatMonster();
    }
    if (Math.random() <= .1 && weapons.length !== 1) {
      text.innerText += " Your " + weapons.pop() + " breaks.";
      currentWeapon--;
    }
  }
  
  function getMonsterAttackValue(level) {
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit);
    return hit > 0 ? hit : 0;
  }
  
  function isMonsterHit() {
    return Math.random() > .2 || health < 20;
  }
  
export function dodge() {
    text.innerText = "You dodge the attack from the " + monsters[fighting].name;
  }
  
export function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7);
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[5]);
  }

 
function lose() {
  update(locations[6]);
}

function winGame() {
  update(locations[7]);
} 