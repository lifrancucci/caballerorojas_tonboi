function contentLoaded() {
  const trackNumbers = document.querySelectorAll('.track-number');

  function hideNumbers() {
    console.log("it's working");
  }

  trackNumbers.addEventListener('click', hideNumbers);

}
