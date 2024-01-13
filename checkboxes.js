import './script.js';
import './market.js';
import { selfInventory } from './player.js';
import './combat.js';
import  './storage.js';
import './inventory.js';
import './checkboxes.js';
import './location.js';
import './interaction.js';

//Arrow function - anonymous function good for callbacks and event handlers
export const generateCheckboxesSelfInv = () => {
    // Create a document fragment to hold checkboxes before appending to the DOM
    const fragment = document.createDocumentFragment();
  
    for (let i = 0; i < selfInventory.length; i++) {
      //create checkbox input element
      const checkboxInv = document.createElement('input');
      checkboxInv.type = 'checkbox';
      checkboxInv.id = `item${i}`;
      checkboxInv.value = selfInventory[i];
  
      // Create a label for the checkbox
      const chkLabel = document.createElement('label');
      chkLabel.htmlFor = `item${i}`;
      chkLabel.appendChild(document.createTextNode(selfInventory[i]));
  
      // Create a line break
      const lineBreak = document.createElement('br');
  
      checkboxInv.addEventListener('change', handleCheckboxChange);
  
      fragment.appendChild(checkboxInv);
      fragment.appendChild(chkLabel);
      fragment.appendChild(lineBreak);
    }
  const inventoryList = document.querySelector("#selfInvList");
  // Append the fragment containing checkboxes to the selfInvList div
  inventoryList.appendChild(fragment);
  };
  
export const generateCheckboxesStorageInv = () => {
    // Create a document fragment to hold checkboxes before appending to the DOM
    const fragment = document.createDocumentFragment();
  
    for (let i = 0; i < storageInventory.length; i++) {
      //create checkbox input element
      const checkboxInv = document.createElement('input');
      checkboxInv.type = 'checkbox';
      checkboxInv.id = `item${i}`;
      checkboxInv.value = storageInventory[i];
  
      // Create a label for the checkbox
      const chkLabel = document.createElement('label');
      chkLabel.htmlFor = `item${i}`;
      chkLabel.appendChild(document.createTextNode(storageInventory[i]));
  
      // Create a line break
      const lineBreak = document.createElement('br');
  
      checkboxInv.addEventListener('change', handleCheckboxChange);
  
      fragment.appendChild(checkboxInv);
      fragment.appendChild(chkLabel);
      fragment.appendChild(lineBreak);
    }
  const storageInvList = document.querySelector("#storageInvList");
  // Append the fragment containing checkboxes to the selfInvList div
  storageInvList.appendChild(fragment);
  };
  
export const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      checkedItems.push(value);
      console.log(`Item ${value} checked:`, checkedItems);
    } else {
      const index = checkedItems.indexOf(value);
      if (index !== -1) {
        checkedItems.splice(index, 1);
        console.log(`Item ${value} unchecked:`, checkedItems);
      }
    }
  };