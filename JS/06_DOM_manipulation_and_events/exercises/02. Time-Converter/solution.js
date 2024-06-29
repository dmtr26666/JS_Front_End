function attachEventsListeners() {
    let daysinputElement = document.querySelector('input[type=text][id=days]')
    let hoursinputElement = document.querySelector('input[type=text][id=hours]')
    let minutesinputElement = document.querySelector('input[type=text][id=minutes]')
    let secondsinputElement = document.querySelector('input[type=text][id=seconds]')

    let convertButtons = document.querySelectorAll('input[type=button][value=Convert]');

    for (const button of convertButtons) {
        button.addEventListener('click', (e) => {
            let inputField = e.currentTarget.previousElementSibling
            switch(inputField.id) {
                case 'days':
                    daysinputElement.value = inputField.value
                    hoursinputElement.value = inputField.value * 24
                    minutesinputElement.value = inputField.value * 1440
                    secondsinputElement.value = inputField.value * 86400
                    break;
                case 'hours':
                    daysinputElement.value = inputField.value / 24
                    hoursinputElement.value = inputField.value
                    minutesinputElement.value = inputField.value * 60
                    secondsinputElement.value = inputField.value * 3600
                    break;
                case 'minutes':
                    daysinputElement.value = inputField.value / 1440
                    hoursinputElement.value = inputField.value / 60
                    minutesinputElement.value = inputField.value
                    secondsinputElement.value = inputField.value * 60
                    break;
                case 'seconds':
                    daysinputElement.value = inputField.value / 86400
                    hoursinputElement.value = inputField.value / 3600
                    minutesinputElement.value = inputField.value / 60
                    secondsinputElement.value = inputField.value
                    break;
            }
        });
        
    }

    
}