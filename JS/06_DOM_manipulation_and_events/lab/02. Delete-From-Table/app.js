function deleteByEmail() {
    let emailsElements = document.querySelectorAll('tbody tr td:last-child');
    let inputElement = document.querySelector('label input');
    let resultElement = document.getElementById('result');

    Array.from(emailsElements).forEach(email => {
        if (inputElement.value == email.textContent) {
            email.parentElement.remove();
            resultElement.textContent = 'Deleted.'
        }
    });

    if (!resultElement.textContent) {
        resultElement.textContent = 'Not found.'
    }
}