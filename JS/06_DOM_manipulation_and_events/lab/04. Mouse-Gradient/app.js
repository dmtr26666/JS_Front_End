function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (e)=> {
        let mouseX = e.offsetX;
        let elementWidth = gradientElement.clientWidth;

        console.log((mouseX / elementWidth) * 100);
        resultElement.textContent = Math.floor((mouseX / elementWidth) * 100) + '%';
    });
}