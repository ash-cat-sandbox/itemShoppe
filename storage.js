import './script.js';
import './market.js';
import  {selfInventory} from './player.js';
import './combat.js';
import './storage.js';
import {makeSelfInvVisible, makeStorageInvVisible} from './inventory.js';
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
  
    checkedItems.forEach((item) => {
      const checkbox = storageList.querySelector(`input[value="${item}"]`);
      console.log(checkbox.value);
      selfInventory.push(checkbox.value);
      console.log(selfInventory);
  
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
  
        const index = storageInventory.indexOf(item);
  
        if (index !== -1) {
          // Remove the item from the selfInventory array
          storageInventory.splice(index, 1);
        }
      }
    });
  
    checkedItems.length = 0; // Empty the checked items array after processing
  }
  
export function moveCheckedItemsToStorage() {
    const inventoryList = document.querySelector('#selfInvList');
    const storageList = document.querySelector('#storageInvList');
  
    checkedItems.forEach((item) => {
      const checkbox = inventoryList.querySelector(`input[value="${item}"]`);
      console.log(checkbox.value);
      storageInventory.push(checkbox.value);
      console.log(storageInventory);
  
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
  
        const index = selfInventory.indexOf(item);
  
        if (index !== -1) {
          // Remove the item from the selfInventory array
          selfInventory.splice(index, 1);
        }
      }
    });
  
    checkedItems.length = 0; // Empty the checked items array after processing
  }
  
export function listStorage() {
    console.log("List Storage Items button clicked");
    makeStorageInvVisible()
    const storageInvList = document.querySelector('#storageInvList');
    storageInvList.innerHTML = '';
  
    if (storageInventory.length === 0) {
      text.innerText = "You don't have anything in storage!";
    } else {
      text.innerText = "You have " + storageInventory + " in your warehouse.";
      generateCheckboxesStorageInv();
      /*storageInventory.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.textContent = `${index + 1}. ${item}`;
  
        // Create a checkbox for each item in the storage list
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = item;
        listItem.appendChild(checkbox);*/
  
        //storageInventory.appendChild(listItem);
      
    }
  }

export function listInventory() {
  
  makeSelfInvVisible();
  const inventoryList = document.querySelector('#selfInvList');
  inventoryList.innerHTML = ''; //Clear the current content

  if (selfInventory.length === 0) {
    text.innerText = "You don't have anything in your inventory! What are you wearing??";
  } else {
    generateCheckboxesSelfInv();
   }
  }