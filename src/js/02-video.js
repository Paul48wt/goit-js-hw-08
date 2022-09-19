import Player from '@vimeo/player';
import storage from './storage';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let currentTime = 0;
player.on(
  'timeupdate',
  throttle(() => {
    player
      .getCurrentTime()
      .then(function (seconds) {
        // seconds = the current playback position
        // console.log(seconds);
        // currentTime = seconds;
        storage.save(currentTime, seconds);
      })
      .catch(function (error) {
        // an error occurred
      });
  }, 1000)
);

player
  .setCurrentTime(storage.load(currentTime))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
