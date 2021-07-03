function contentLoaded() {

  // FIXED NAV
  const nav = document.querySelector('#nav');
  const topOfNav = nav.offsetTop;

  function fixNav() {
    if(window.scrollY >= topOfNav) {
      document.body.classList.add('fixed-nav');
    } else {
      document.body.classList.remove('fixed-nav');
    }
  }

  window.addEventListener('scroll', fixNav);

  // MEDIA PLAYER
  // Get elements
  const player = document.querySelector('.media-player');

  const track1 = player.querySelector('.track1');
  // const track2 = player.querySelector('.track2');
  // const track3 = player.querySelector('.track3');
  // const track4 = player.querySelector('.track4');

  const progress = player.querySelector('.progress');
  const progressBar = player.querySelector('.progress_filled');
  const toggle = player.querySelector('.toggle');

  // Build functions
  function togglePlay() {
    if(track1.paused){
      track1.play();
    } else {
      track1.pause();
    }
  }

  // Hook up Event Listeners
  toggle.addEventListener('click', togglePlay);
}
