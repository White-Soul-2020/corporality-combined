const DescriptionAnimation = (textContainer,text) => {
    let letters = text.split("");
    let counter = 0;
    let speed = 23;
    // let x=-0.05;
    textContainer.innerHTML="";
    const refreshId = setInterval(() => {
        let letter = letters[counter];
        counter++;
        var span = document.createElement('span');
        span.textContent = letter;
        span.className = 'letter animates';
        span.style['transition']='all 0.1s ease';
        // span.style['animation-delay'] = (x+0.05) + 's';
        // x=x+0.05;
        textContainer.appendChild(span);
        if (counter === letters.length) {
            clearInterval(refreshId);
        }
        
    }, speed);
}
export default DescriptionAnimation;