// import functions and grab DOM elements
import { spots } from './spots-data.js';
import { renderSpotKind } from './render-spots.js';

const spotListEl = document.getElementById ('spots-list');

for (let kind of spots) {
    const spotsEl = renderSpotKind(kind);
    
    spotListEl.append(spotsEl);
}


// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
