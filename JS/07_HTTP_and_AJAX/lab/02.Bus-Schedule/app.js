function solve() {

    const stopsUrl = 'http://localhost:3030/jsonstore/bus/schedule';
    let displayElement = document.getElementById('info');
    let departBtnElement = document.getElementById('depart');
    let arriveBtnElement = document.getElementById('arrive');
    let currentStop = 'depot';

    function depart() {
         
         

         fetch(`${stopsUrl}/${currentStop}`)
         .then(response => response.json())
         .then(data => {
            departBtnElement.disabled = 'disabled';
            arriveBtnElement.removeAttribute('disabled');

            displayElement.textContent = `Next stop ${data.name}`;
            currentStop = data.next;
         })
         .catch(error => {
            displayElement.textContent = 'Error';
            departBtnElement.disabled = 'disabled';
            arriveBtnElement.disabled = 'disabled';
         })
    }

    async function arrive() {

        try {
            departBtnElement.removeAttribute('disabled');
            arriveBtnElement.disabled = 'disabled';

            let response = await fetch(`${stopsUrl}/${currentStop}`);
            let data = await response.json();
            displayElement.textContent = `Arriving at ${data.name}`;
            currentStop = data.next;
            
        } catch (error) {
            displayElement.textContent = 'Error';
            departBtnElement.disabled = 'disabled';
            arriveBtnElement.disabled = 'disabled';
        } 
    }

    return {
        depart,
        arrive
    };
}

let result = solve();

