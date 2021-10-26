var textWrapper = document.querySelector('.ml13-revamping');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter-revamping'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml13-revamping .letter-revamping',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.ml13-revamping .letter-revamping',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  });