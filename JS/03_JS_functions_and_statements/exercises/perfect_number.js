function solve(num) {
    function findPositiveDivisors(number) {
        let divisors = []

        for (let index = 0; index < number; index++) {
            if (number % index == 0) {
                divisors.push(index)
            }
        }

        return divisors
    }

    let divisors = findPositiveDivisors(num)
    if (divisors.reduce((partialSum, a) => partialSum + a, 0) == num) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.")
    }
}

solve(1236498)