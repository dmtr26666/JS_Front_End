function calc() {
    let firstNumElement = document.getElementById('num1')
    let secondNumElement = document.getElementById('num2')
    let resultElement = document.getElementById('sum')

    resultElement.value = Number(firstNumElement.value) + Number(secondNumElement.value)
}
