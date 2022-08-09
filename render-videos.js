export function renderVideos(video) {
    const videoEl = document.createElement('div');
    const topEl = document.createElement('div');
    const nameEl = document.createElement('h2');
    const creatorEl = document.createElement('h3');
    const bottomEl = document.createElement('div');
    const leftEl = document.createElement('div');
    const rightEl = document.createElement('div');
    const genresEl = document.createElement('ul');
    const publicationEl = document.createElement('p');
   

    nameEl.textContent = video.title;
    creatorEl.textContent = `By ${video.creator}`;
    publicationEl.textContent = `Published by ${video.publication.publisher} in ${video.publication.year}`;
    

    for (let genre of video.genres) {
        const genreEl = document.createElement('li');

        genreEl.textContent = `${genre}`;

        genresEl.append(genreEl);
    }

    videoEl.classList.add('video');
    bottomEl.classList.add('bottom');
    leftEl.classList.add('left');
    rightEl.classList.add('right');
    videoEl.append(topEl, bottomEl);
    topEl.append(nameEl, creatorEl);
    bottomEl.append(leftEl, rightEl);
    leftEl.append(genresEl, publicationEl);
   

    return videoEl;
}