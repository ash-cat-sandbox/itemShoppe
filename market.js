import './script.js';
import './market.js';
import {player} from './player.js';
import {weaponMarket} from './combat.js';
import './storage.js';
import './inventory.js';
import './checkboxes.js';
import './location.js';
import './interaction.js';



export function buyHealth() {
    if (player.gold >= 10) {
        player.gold -= 10;
        player.health += 10;
      goldText.innerText = player.gold;
      healthText.innerText = player.health;
    } else {
      text.innerText = "You do not have enough gold to buy health.";
    }
  }
  
 export function buyWeapon() {
    console.log(weaponMarket.length);
    if (player.currentWeapon < weaponMarket.length - 1) {
      if (player.gold >= 30) {
        player.gold -= 30;
        player.currentWeapon++;
        goldText.innerText = player.gold;
        let newWeapon = weaponMarket[player.currentWeapon];
        console.log(newWeapon);
        text.innerText = "You now have a " + newWeapon.name + ".";
        player.weapons.push(newWeapon);
        console.log(player.weapons);
        text.innerText += " In your weapons inventory, you have: " + player.weapons.map(weapon => weapon.name).join(', ');
      } else {
        text.innerText = "You do not have enough gold to buy a weapon.";
      }
    } else {
      text.innerText = "You already have the most powerful weapon!";
      button2.innerText = "Sell weapon for 15 gold";
      button2.onclick = sellWeapon;
    }
  }
  
 export function sellWeapon() {
    if (weapons.length > 1) {
      player.gold += 15;
      goldText.innerText = player.gold;
      let currentWeapon = player.weapons.shift();
      text.innerText = "You sold a " + currentWeapon + ".";
      text.innerText += " In your weapons inventory you have: " + player.weapons.map(weapon => weapon.name).join(', ');
    } else {
      text.innerText = "Don't sell your only weapon!";
    }
  }

export function listenGossip() {
}
  