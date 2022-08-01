// import functions and grab DOM elements
import { spots } from './spots-data.js';

const spotsListEl = document.getElementById ('spots-list');

console.log(spotsListEl);

for (let kind of spots) {
    const spotsEl = document.createElement('p');
    spotsEl.textContent = kind;
    spotsListEl.append(spotsEl);
    
    spotsEl.classList.add('spot-kind');
}
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
