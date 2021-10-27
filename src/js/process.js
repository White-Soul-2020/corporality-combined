var textWrapper = document.querySelector('.ml9-process .letters-process');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter-process'>$&</span>");

anime.timeline({loop: 1})
  .add({
    targets: '.ml9-process .letter-process',
    scale: [0, 1],
    duration: 2500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  })
  const HeadingAnimation = (textWrapper,target) => {
    
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter-process'>$&</span>");
    anime.timeline({ loop: 1 })
        .add({
            targets: '.ml9-process .letter-process',
            scale: [4, 1],
            opacity: [0, 1],
            translateZ: 0,
            // easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 65 * (i+1),
            elasticity: 600,
            
        })
  
}
