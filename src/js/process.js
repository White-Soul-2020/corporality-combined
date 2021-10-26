var textWrapper = document.querySelector('.ml9-process .letters-process');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter-process'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9-process .letter-process',
    scale: [0, 1],
    duration: 2500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
// var textWrapper = document.querySelector('.ml2-process');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter-process'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml2-process .letter-process',
//     scale: [4,1],
//     opacity: [0,1],
//     translateZ: 0,
//     easing: "easeOutExpo",
//     duration: 950,
//     delay: (el, i) => 70*i
//   }).add({
//     targets: '.ml2',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });