function attachEvents() {
    const messagesUrl = 'http://localhost:3030/jsonstore/messenger';
    let displayMesEl = document.getElementById('messages');
    let authorEl = document.querySelector('input[name=author][type=text]');
    let messageEl = document.querySelector('input[name=content][type=text]');
    let sendBtnEl = document.getElementById('submit');
    let refreshBtnEl = document.getElementById('refresh');

    sendBtnEl.addEventListener('click', () => {
        const authorName = authorEl.value;
        const messageText = messageEl.value;
        fetch(messagesUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                author: authorName,
                content: messageText,
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log('something went wrong'))

    })

    refreshBtnEl.addEventListener('click', () => {
        fetch(messagesUrl)
        .then(res => res.json())
        .then(data => {
            let result = [];
            for (const message in data) {
                console.log(data[message]);
                result.push(`${data[message].author}: ${data[message].content}`);
            }

            displayMesEl.textContent = result.join('\n');
        })
        .catch(err => console.log('error'))
    })

}

attachEvents();