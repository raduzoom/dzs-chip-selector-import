import {ChipSelectorOptions, DzsChipSelector, ChipSelectorItem} from 'chip-selector';

// Initialize the chip-selector with options
const chipSelectorElement = document.querySelector('#chip-selector-demo') as HTMLElement;

if (chipSelectorElement) {
  // Create persistent options (pre-defined chips)
  const persistentOptions: ChipSelectorItem[] = [
    {
      htmlContent: 'JavaScript',
      value: 'js',
      currentStatus: 'unchecked'
    },
    {
      htmlContent: 'TypeScript',
      value: 'ts',
      currentStatus: 'unchecked'
    },
    {
      htmlContent: 'React',
      value: 'react',
      currentStatus: 'unchecked'
    },
    {
      htmlContent: 'Vue',
      value: 'vue',
      currentStatus: 'unchecked'
    },
    {
      htmlContent: 'Angular',
      value: 'angular',
      currentStatus: 'unchecked'
    }
  ];

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

  console.log('chipSelectorElement - ', chipSelectorElement);
  const chipSelector = new DzsChipSelector(chipSelectorElement, options);

  console.log('Chip selector initialized with correct options');
}
