function solve(grade) {
    function formatGrade(grade) {

        result = ''
        if (grade < 3.00) {
            result = `Fail (2)`
        } else if (grade >= 3.00 && grade < 3.50) {
            result = `Poor (${grade.toFixed(2)})`
        } else if (grade < 4.50) {
            result = `Good (${grade.toFixed(2)})`
        } else if (grade < 5.50) {
            result = `Very good (${grade.toFixed(2)})`
        } else if (grade >= 5.50) {
            result = `Excellent (${grade.toFixed(2)})`
        }

        return result
    }

    console.log(formatGrade(grade))
}

solve(4.50)