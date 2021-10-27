var textWrapper = document.querySelector('.ml7-pitch .letters-pitch');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter-pitch'>$&</span>");

anime.timeline({loop: 1})
  .add({
    targets: '.ml7-pitch .letter-pitch',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  })
  const HeadingAnimation = (textWrapper,target) => {
    
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter-pitch'>$&</span>");
    anime.timeline({ loop: 1 })
        .add({
            targets: '.ml7-pitch .letter-pitch',
            scale: [4, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 70 * i
            
        })
  
}
const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {
      if (entry.isIntersecting) {
          var textWrapper = document.querySelector('.letters-pitch');
          HeadingAnimation(textWrapper,'.ml7-pitch .letter-pitch');
      }}
    )})
     
observer.observe(document.querySelector('.letters-pitch'));


