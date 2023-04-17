import Vimeo, { Player } from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const STORAGE_CURRENT_TIME = 'videoplayer-current-time';
// console.log(iframe);

const onPlay = function (data) {
  localStorage.setItem(STORAGE_CURRENT_TIME, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = JSON.parse(localStorage.getItem(STORAGE_CURRENT_TIME));
console.log('Current seconds time is', currentTime);
if (currentTime) {
  player.setCurrentTime(currentTime);
}
