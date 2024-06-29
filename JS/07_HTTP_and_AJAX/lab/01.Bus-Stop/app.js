function getInfo() {
    const busesUrl = 'http://localhost:3030/jsonstore/bus/businfo';

    let busIdElement = document.getElementById('stopId');
    let busStopNameElement = document.getElementById('stopName');
    let busesElement = document.getElementById('buses');

    let busId = busIdElement.value;

    fetch(`${busesUrl}/${busId}`)
    .then(response => response.json())
    .then(data => {
        busStopNameElement.textContent = data.name;

        for (const bus in data.buses) {
            let liElement = document.createElement('li');
            liElement.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
            busesElement.appendChild(liElement);
        }
    })
    .catch(err => busStopNameElement.textContent = 'Error');
}