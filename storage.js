import './script.js';
import './market.js';
import './combat.js';
import './storage.js';
import {makeSelfInvVisible, makeStorageInvVisible} from './inventory.js';
import  {player} from './player.js';
import {generateCheckboxesSelfInv, generateCheckboxesStorageInv} from './checkboxes.js';
import './location.js';
import './interaction.js';

export function addStorage() {
    //TODO When I checkbox an item, and then press a button, 
    //i want it to remove it from one list and add it to another
    //for item in inventoryList
    moveCheckedItemsToStorage();
  
  }
  
export function takeStorage() {
    console.log("take storage button clicked")
    moveCheckedItemsToInventory();
  
  }
  
export function moveCheckedItemsToInventory() {
    const inventoryList = document.querySelector('#selfInvList');
    const storageList = document.querySelector('#storageInvList');
    console.log(player.checkedItems);
  
    player.checkedItems.forEach((item) => {
      const checkbox = storageList.querySelector(`input[value="${item}"]`);
      console.log(checkbox.value);
      player.selfInventory.push(checkbox.value);
      console.log(player.selfInventory);
  
      if (checkbox) {
        // Create a label for the checkbox
        const label = checkbox.nextElementSibling;
  
        // Clone the checkbox for the storage list
        const clonedCheckbox = document.createElement('input');
        clonedCheckbox.type = 'checkbox';
        clonedCheckbox.value = item;
  
        // Clone the label for the cloned checkbox
        const clonedLabel = document.createElement('label');
        clonedLabel.htmlFor = `clonedItem${item}`;
        clonedLabel.appendChild(document.createTextNode(item));
  
        // Remove both the checkbox and the label from the original list item
        checkbox.parentElement.removeChild(checkbox);
        label.parentElement.removeChild(label);
  
        // Append the cloned checkbox and label to the storage list
        const listItem = document.createElement('div');
        listItem.appendChild(clonedCheckbox);
        listItem.appendChild(clonedLabel);
        inventoryList.appendChild(listItem);
  
        const index = player.storageInventory.indexOf(item);
  
        if (index !== -1) {
          // Remove the item from the selfInventory array
          player.storageInventory.splice(index, 1);
        }
      }
    });
  
    player.checkedItems.length = 0; // Empty the checked items array after processing
  }
  
export function moveCheckedItemsToStorage() {
    const inventoryList = document.querySelector('#selfInvList');
    const storageList = document.querySelector('#storageInvList');
  
    player.checkedItems.forEach((item) => {
      const checkbox = inventoryList.querySelector(`input[value="${item}"]`);
      console.log(checkbox.value);
      player.storageInventory.push(checkbox.value);
      console.log(player.storageInventory);
  
      if (checkbox) {
        // Create a label for the checkbox
        const label = checkbox.nextElementSibling;
  
        // Clone the checkbox for the storage list
        const clonedCheckbox = document.createElement('input');
        clonedCheckbox.type = 'checkbox';
        clonedCheckbox.value = item;
  
        // Clone the label for the cloned checkbox
        const clonedLabel = document.createElement('label');
        clonedLabel.htmlFor = `clonedItem${item}`;
        clonedLabel.appendChild(document.createTextNode(item));
  
        // Remove both the checkbox and the label from the original list item
        checkbox.parentElement.removeChild(checkbox);
        label.parentElement.removeChild(label);
  
        // Append the cloned checkbox and label to the storage list
        const listItem = document.createElement('div');
        listItem.appendChild(clonedCheckbox);
        listItem.appendChild(clonedLabel);
        storageList.appendChild(listItem);
  
        const index = player.selfInventory.indexOf(item);
  
        if (index !== -1) {
          // Remove the item from the selfInventory array
          player.selfInventory.splice(index, 1);
        }
      }
    });
  
    player.checkedItems.length = 0; // Empty the checked items array after processing
  }
  
export function listStorage() {
    console.log("List Storage Items button clicked");
    makeStorageInvVisible()
    const storageInvList = document.querySelector('#storageInvList');
    storageInvList.innerHTML = '';
  
    if (player.storageInventory.length === 0) {
      text.innerText = "You don't have anything in storage!";
    } else {
      text.innerText = "You have " + player.storageInventory + " in your warehouse.";
      generateCheckboxesStorageInv();
      
    }
  }

export function listInventory() {
  
  makeSelfInvVisible();
  const inventoryList = document.querySelector('#selfInvList');
  inventoryList.innerHTML = ''; //Clear the current content

  if (player.selfInventory.length === 0) {
    text.innerText = "You don't have anything in your inventory! What are you wearing??";
  } else {
    generateCheckboxesSelfInv();
   }
  }