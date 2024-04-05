function sumTable() {
    let pricesElements = document.querySelectorAll('tbody td:nth-child(2n)')
    let array = Array.from(pricesElements)
    array.pop()

    let resultElement = document.getElementById('sum')
    let sum = 0;

    for (const price of array) {
        sum += Number(price.textContent)
    }
    resultElement.textContent = sum
}