import {} from './script.js';
import './market.js';
import './player.js';
import './combat.js';
import './storage.js';
import './inventory.js';
import './checkboxes.js';
import './location.js';
import './interaction.js';



export function buyHealth() {
    if (gold >= 10) {
      gold -= 10;
      health += 10;
      goldText.innerText = gold;
      healthText.innerText = health;
    } else {
      text.innerText = "You do not have enough gold to buy health.";
    }
  }
  
 export function buyWeapon() {
    console.log(weaponMarket.length);
    if (currentWeapon < weaponMarket.length - 1) {
      if (gold >= 30) {
        gold -= 30;
        currentWeapon++;
        goldText.innerText = gold;
        let newWeapon = weaponMarket[currentWeapon];
        console.log(newWeapon);
        text.innerText = "You now have a " + newWeapon + ".";
        weapons.push(newWeapon);
        text.innerText += " In your weapons inventory you have: " + weapons;
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
      gold += 15;
      goldText.innerText = gold;
      let currentWeapon = weapons.shift();
      text.innerText = "You sold a " + currentWeapon + ".";
      text.innerText += " In your weapons inventory you have: " + weapons;
    } else {
      text.innerText = "Don't sell your only weapon!";
    }
  }
  