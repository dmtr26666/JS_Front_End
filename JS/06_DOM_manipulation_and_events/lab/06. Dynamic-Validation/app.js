function validate() {
    let pattern = /^[a-z]+@([a-z]+\.)+[a-z]+$/;
    let inputElement = document.getElementById('email')

    inputElement.addEventListener('change', (e) => {
        let match = pattern.test(e.target.value);

        if (!match) {
            e.target.classList.add('error')
        } else {
            e.target.classList.remove('error')
        }
    });
}