import Player from '@vimeo/player';
import storage from './storage';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time';
player.on(
  'timeupdate',
  throttle(() => {
    player
      .getCurrentTime()
      .then(function (seconds) {
        // seconds = the current playback position

        storage.save(CURRENT_TIME_KEY, seconds);
      })
      .catch(function (error) {
        // an error occurred
      });
  }, 1000)
);

player
  .setCurrentTime(storage.load(CURRENT_TIME_KEY))
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
