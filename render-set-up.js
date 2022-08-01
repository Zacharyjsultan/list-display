export function renderSetUp(setUp) {
    const trucksEl = document.createElement('div');
    const wheelsEl = document.createElement('h3');
    const deckEl = document.createElement('p');

    trucksEl.classList.add('setup');
    wheelsEl.textContent = setUp.trucks;
    deckEl.textContent = `is ${setUp.deck} kind of board`;

    trucksEl.append(wheelsEl, deckEl);
    
    return trucksEl;
}