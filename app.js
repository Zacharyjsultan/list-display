// import functions and grab DOM elements
import { spots } from './spots-data.js';
import { renderSpotKind } from './render-spots.js';
import { setUps } from './set-up-data.js';
import { renderSetUps } from './render-set-up.js';
import { videos } from './videos-data.js';
import { renderVideo } from './render-videos.js';

const spotListEl = document.getElementById ('spots-list');

for (let kind of spots) {
    const spotsEl = renderSpotKind(kind);
    
    spotListEl.append(spotsEl);
}

const setUpListEl = document.getElementById('set-up-list');

for (let type of setUps) {
    const setUpsEl = renderSetUps(type);

    setUpListEl.append(setUpsEl);
}

const videoListEl = document.getElementById('videos-list');

for (let video of videos) {
    const videoEl = renderVideo(video);
    videoListEl.append(videoEl);
}