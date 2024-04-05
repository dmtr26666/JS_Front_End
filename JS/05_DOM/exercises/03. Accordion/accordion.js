function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0]
    let exraTextElement = document.getElementById('extra')

    if (buttonElement.innerHTML === 'More') {
        buttonElement.innerHTML = 'Less'
        exraTextElement.style.display = 'block'
    } else {
        buttonElement.innerHTML = 'More'
        exraTextElement.style.display = 'none'
    }
}