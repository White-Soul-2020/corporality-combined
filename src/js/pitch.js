var textWrapper = document.querySelector('.ml7-pitch .letters-pitch');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter-pitch'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml7-pitch .letter-pitch',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7-pitch',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });