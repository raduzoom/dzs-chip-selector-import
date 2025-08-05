import { ChipSelectorOptions, DzsChipSelector } from 'chip-selector';

// Initialize the chip-selector webcomponent
function initChipSelector() {
  // Get the webcomponent element
  const chipSelectorElement = document.querySelector('#chip-selector-demo') as HTMLElement;
  
  if (!chipSelectorElement) {
    console.error('Chip selector element not found');
    return;
  }

  // Configuration options for the chip selector
  const options: ChipSelectorOptions = {
    // Add your configuration options here
    // For example:
    // placeholder: 'Select chips...',
    // maxChips: 5,
    // allowDuplicates: false,
  };

  // Initialize the chip selector
  const chipSelector = new DzsChipSelector(chipSelectorElement, options);
  
  // Initialize the component
  chipSelector.initClass();
  
  console.log('Chip selector webcomponent initialized successfully');
}

// Initialize when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChipSelector);
} else {
  initChipSelector();
} 