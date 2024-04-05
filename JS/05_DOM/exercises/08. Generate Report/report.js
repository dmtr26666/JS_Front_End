function generateReport() {
    let columsCount = document.querySelector('thead tr').children;
    let columns = Array.from(columsCount)
    let tableRowsContentElement = document.querySelector('tbody').children;
    tableRowsContentElement = Array.from(tableRowsContentElement)
    let textAreaElement = document.getElementById('output')

    let mapper = {};
    let counter = 1;
    for (const columnHead of columns) {
        if (columnHead.lastChild.checked == 1) {
            mapper[columnHead.lastChild.name] = counter
        }
        counter += 1
    }

    let report = [];

    for (const row of tableRowsContentElement) {
        let rowObject = {};
        for (const key in mapper) {
            let rowNumber = mapper[key]
            rowObject[key] = (row.querySelector(`td:nth-child(${rowNumber})`)).innerHTML;
        }

        report.push(rowObject);
    }

    textAreaElement.value = JSON.stringify(report, '', 2);

}