import {ChipSelectorOptions, DzsChipSelector, ChipSelectorItem} from 'chip-selector';
import {persistentOptions} from "./demo-config";

// Initialize the chip-selector with options
const chipSelectorElement = document.querySelector('#chip-selector-demo') as HTMLElement;

if (chipSelectorElement) {
    // Create persistent options (pre-defined chips)

    console.log('persistentOptions-  ', persistentOptions);
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

    const chipSelector = new DzsChipSelector(chipSelectorElement, options);


    console.log('Chip selector initialized with correct options');
}
