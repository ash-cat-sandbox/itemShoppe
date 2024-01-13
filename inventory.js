import './script.js';
import './market.js';
import './player.js';
import './combat.js';
import './storage.js';
import './inventory.js';
import './checkboxes.js';
import './location.js';
import './interaction.js';

export function makeSelfInvVisible() {
    // Get Elements by ID
    const invText = document.getElementById('invText');
  
    // Set the display property to 'block' to make visible
    invText.style.display = 'block';
  }
  
export function makeStorageInvVisible() {
    const storageText = document.getElementById('storageText');
    storageText.style.display = 'block';
  }