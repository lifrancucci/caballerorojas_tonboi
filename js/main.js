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
  const songs = document.getElementById('songs');
  const mediaPlayer = document.querySelectorAll('.media-player')
  const trackName = document.querySelectorAll('.track-name');

  const interactive1 = document.getElementById('interactive1');
  const interactive2 = document.getElementById('interactive2');
  const interactive3 = document.getElementById('interactive3');
  const interactive4 = document.getElementById('interactive4');

  function lyricsAppear() {
    if(this.closest('.track1')) {
      interactive1.classList.add('interactive-display');
    } else {
      interactive1.classList.remove('interactive-display');
    }
    if(this.closest('.track2')) {
      interactive2.classList.add('interactive-display');
    } else {
      interactive2.classList.remove('interactive-display');
    }
    if(this.closest('.track3')) {
      interactive3.classList.add('interactive-display');
    } else {
      interactive3.classList.remove('interactive-display');
    }
    if(this.closest('.track4')) {
      interactive4.classList.add('interactive-display');
    } else {
      interactive4.classList.remove('interactive-display');
    }
  };

  function lyricsHide() {
    interactive1.classList.remove('interactive-display');
    interactive2.classList.remove('interactive-display');
    interactive3.classList.remove('interactive-display');
    interactive4.classList.remove('interactive-display');
  }

  trackName.forEach(track => track.addEventListener('mouseenter', lyricsAppear));

  songs.addEventListener('mouseleave', lyricsHide);

  // Pause other players when one is active
  document.addEventListener('play', function(e){
    let audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
            audios[i].currentTime = 0;
        }
    }
  }, true);

}
