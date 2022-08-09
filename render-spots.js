export function renderSpotKind(kindOfSpot) {
    const pTag = document.createElement('p');
    pTag.textContent = kindOfSpot;
    pTag.classList.add('spot-kind');

    return pTag;
}