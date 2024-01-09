let charisma = 0;
let health = 100;
let gold = 50;
let selfInventory = ['Leather Vest', 'Wheat Loaf', 'Apple'];
let storageInventory = [];
let weapons = [];
let currentWeapon = 0;
let _html = "";
for (let i = 0; i < selfInventory.length; i++) {
  _html += selfInventory[i] + "<br>";
}

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const buttonInv = document.querySelector('#buttonInv');
const text    = document.querySelector('#text');
const charismaText = document.querySelector('#charismaText');
const healthText   = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName');
const monsterHealthText = document.querySelector('#monsterHealth');
const inventoryList = document.querySelector("#invText").innerHTML = _html;



const locations = [
    {
        name: "town square",
        "button text": ["Open your store", "Go to forest", "Go to the Market", "Go to the Warehouse"],
        "button functions": [goStore, goForest, fightDragon, goWarehouse],
        text: "You are in the town square. You see a sign that says \"Store\" - oh wait, that's your store."
    },
    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown, goWarehouse],
        text: "You enter your store."
    },
    {
        name: "forest",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown, goWarehouse],
        text: "You enter the Forest. You see some monsters."
    },
    {
      name: "warehouse",
      "button text": ["List Storage items", "Take from Storage", "Add to Storage", "Go to Town Square"],
      "button functions": [listStorage, restart, addStorage, goTown],
      text: "You enter the warehouse where you store your goods."
    },
    {
        name: "fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        text: "You are fighting a monster."
    },
    {
        name: "kill monster",
        "button text": ["Go to town square", "Go to town square", "Go to town square"],
        "button functions": [goTown, goTown, easterEgg],
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

// initialize buttons
button1.onclick = goStore;
button2.onclick = goForest;
button3.onclick = fightDragon;
button4.onclick = goWarehouse;
buttonInv.onclick = listInventory;

function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button4.innerText = location["button text"][3];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  button4.onclick = location["button functions"][3];
  text.innerText = location.text;
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goForest() {
  update(locations[2]);
}

function goWarehouse() {
  update(locations[3]);
}

function listStorage() {
  if (storageInventory.length === 0) {
    text.innerText = "You don't have anything in storage!"
  } else {
   text.innerText = "You have these items in your warehouse: " + storageInventory;
  }
}

function listInventory() {
  if (selfInventory.length === 0) {
    text.innerText = "You don't have anything in your inventory! What are you wearing??"
  } else {
   text.innerText = "You have these items in your personal inventory: " + selfInventory;
  }
}

function addStorage() {
  //TODO make visible checkbox check box of self inventory add to storageInventory

}


function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
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

function sellWeapon() {
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

function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}

function goFight() {
  update(locations[4]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;    
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

function dodge() {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

function defeatMonster() {
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

function restart() {
  charisma = 0;
  health = 100;
  gold = 50;
  selfInventory = ['Leather Vest', 'Wheat Loaf', 'Apple'];
  storageInventory = [];
  weapons = [];
  currentWeapon = 0;
}

function easterEgg() {
  update(locations[7]);
}

function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

function pick(guess) {
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