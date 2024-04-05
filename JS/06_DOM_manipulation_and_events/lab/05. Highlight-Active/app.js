function focused() {
    let inputElements = document.querySelectorAll('div input')

    Array.from(inputElements).forEach(element => {
        element.addEventListener('focus', (e) => {
            e.target.parentElement.classList.add('focused')
        });

    });

    Array.from(inputElements).forEach(element => {
        element.addEventListener('blur', (e) => {
            e.target.parentElement.classList.remove('focused')
        });

    });
}