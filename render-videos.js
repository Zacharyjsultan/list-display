export function renderVideo(video) {
    const videoEl = document.createElement('div');
    const topEl = document.createElement('div');
    const nameEl = document.createElement('h2');
    const publicationEl = document.createElement('p');
    const bottomEl = document.createElement('div');
    const leftEl = document.createElement('div');
    const rightEl = document.createElement('div');
    

    nameEl.textContent = video.title;
    publicationEl.textContent = `published by ${video.publication.publisher}`;

    for (let publicationy of video.publications){
        const publicationEl = document.createElement('li');

        publicationEl.textContent = `${publicationy}`;

        publicationEl.append(publicationEl);
    }
    videoEl.classList.add('video');
    bottomEl.classList.add('bottom');
    leftEl.classList.add('left');
    rightEl.classList.add('right');
    videoEl.append(topEl, bottomEl);
    topEl.append(publicationEl);
    bottomEl.append(leftEl, rightEl);
    leftEl.append(publicationEl);

    return videoEl;
}