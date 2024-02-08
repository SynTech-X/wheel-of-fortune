import {Wheel} from 'https://cdn.jsdelivr.net/npm/spin-wheel@4.3.1/dist/spin-wheel-esm.js';

const props = {
    items: [
      {
        label: 'one',
      },
      {
        label: 'two',
      },
      {
        label: 'three',
      },
    ]
  };

const container = document.querySelector('.wheel-container');  
const wheel = new Wheel(container, props);