import {ChipSelectorItem, ChipSelectorOptions, DzsChipSelector} from 'chip-selector';
import {persistentOptions} from "./demo-config";

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
    placeholderNoItemsFound: 'No items found',
    inputPlaceholderText: 'Search and select chips...',
    viewSkin: 'skin-flat', // or 'skin-default'
    viewIsWrapping: true,
    persistentOptions: persistentOptions,
    onUpdateFunction: (updatedOptions: ChipSelectorItem[]) => {
      console.log('Chip selector updated:', updatedOptions);
    }
  };

  // Initialize the chip selector
  const chipSelector = new DzsChipSelector(chipSelectorElement, options);

  // Initialize the component

  console.log('Chip selector webcomponent initialized successfully');
}

// Initialize when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChipSelector);
} else {
  initChipSelector();
}


