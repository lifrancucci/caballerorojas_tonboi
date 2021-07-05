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

  // LYRICS
  const trackName = document.querySelectorAll('.track-name');

  function lyricsAppear() {
    console.log("lyrics appearing!")
  };

  trackName.forEach(track => track.addEventListener('click', lyricsAppear));

}
