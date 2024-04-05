function subtract() {
    let firstNumElement = document.getElementById('firstNumber');
    let secondNumElement = document.getElementById('secondNumber');
    let resultElement = document.getElementById('result')

    resultElement.innerHTML = Number(firstNumElement.value) - Number(secondNumElement.value)

}