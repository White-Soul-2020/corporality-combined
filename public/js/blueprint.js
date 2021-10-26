var textWrapper = document.querySelector('.ml10-blueprint .letters-blueprint');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter-blueprint'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10-blueprint .letter-blueprint',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });