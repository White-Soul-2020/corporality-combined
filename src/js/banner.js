// var textWrapper = document.querySelector('.ml2-banner');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter-banner'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml2-banner .letter-banner',
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
//   var textWrapper = document.querySelector('.ml9-banner .letters-banner');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter-banner'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml9-banner .letter-banner',
//     scale: [0, 1],
//     duration: 1500,
//     elasticity: 600,
//     delay: (el, i) => 45 * (i+1)
//   }).add({
//     targets: '.ml9',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });
// var textWrapper = document.querySelector('.ml13-banner');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter-banner'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml13-banner .letter-banner',
//     translateY: [100,0],
//     translateZ: 0,
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 1400,
//     delay: (el, i) => 300 + 30 * i
//   }).add({
//     targets: '.ml13-banner .letter-banner',
//     translateY: [0,-100],
//     opacity: [1,0],
//     easing: "easeInExpo",
//     duration: 1200,
//     delay: (el, i) => 100 + 30 * i
//   });
import anime from 'animejs';

export function banner() {
  var textWrapper = document.querySelector('.ml13-banner');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter-banner'>$&</span>");

  anime.timeline({
      loop: true
    })
    .add({
      targets: '.ml13-banner .letter-banner',
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 300 + 30 * i
    }).add({
      targets: '.ml13-banner .letter-banner',
      translateY: [0, -100],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 1200,
      delay: (el, i) => 100 + 30 * i
    });
}
