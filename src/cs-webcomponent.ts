import {DzsChipSelector, dzsChipSelectorWebComponent_init} from 'chip-selector';

// Simulate a type usage
const mockComponent: DzsChipSelector = new DzsChipSelector(document.querySelector('#chip-selector-demo') as HTMLElement, {});

mockComponent.initClass();

dzsChipSelectorWebComponent_init();
