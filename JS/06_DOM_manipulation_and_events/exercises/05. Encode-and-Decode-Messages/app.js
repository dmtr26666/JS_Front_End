function encodeAndDecodeMessages() {
    let encodeBtnElement = document.querySelectorAll('button')[0];
    let decodeBtnElement = document.querySelectorAll('button')[1];
    let outputElement = document.querySelector('#main div:nth-child(2) textarea');

    encodeBtnElement.addEventListener('click', (e) => {
        let content = e.currentTarget.previousElementSibling.value.split('');
        let codedMessage = content.map(symbol => {
            return String.fromCharCode(symbol.charCodeAt(0) + 1)
        });

        outputElement.textContent = codedMessage.join('')
        e.currentTarget.previousElementSibling.value = '';
    });

    decodeBtnElement.addEventListener('click', (e) => {
        let content = e.currentTarget.previousElementSibling.value.split('');
        let codedMessage = content.map(symbol => {
            return String.fromCharCode(symbol.charCodeAt(0) - 1)
        });

        outputElement.textContent = codedMessage.join('');
    });
}