// import functions and grab DOM elements
import { spots } from './spots-data.js';
import { renderSpotKind } from './render-spots.js';
import { setUps } from './set-up-data.js';
import { renderSetUps } from './render-set-up.js';

import { renderDisciplines } from './render-discipline.js';
import { disciplines } from './discipline-data.js';

import { videos } from './videos-data.js';
import { renderVideos } from './render-videos.js';

const spotListEl = document.getElementById ('spots-list');

for (let spot of spots) {
    const spotsEl = renderSpotKind(spot);
    
    spotListEl.append(spotsEl);
}

const setUpListEl = document.getElementById('set-up-list');

for (let kind of setUps) {
    const setUpsEl = renderSetUps(kind);

    setUpListEl.append(setUpsEl);
}


const disciplineListEl = document.getElementById('discipline-list');

for (let discipline of disciplines) {
    const disciplinesEl = renderDisciplines(discipline);

    disciplineListEl.append(disciplinesEl);
}

const videoListEl = document.getElementById('video-list');

for (let video of videos) {
    const videoEl = renderVideos(video);

    videoListEl.append(videoEl);
}

