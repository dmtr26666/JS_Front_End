function colorize() {
    let everySecondTrElement = document.querySelectorAll('table tr:nth-child(2n)')

    for (const row of everySecondTrElement) {
        row.style.backgroundColor = 'Teal'
    }
}