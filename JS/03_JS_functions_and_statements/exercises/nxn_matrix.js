function solve(n) {
    let matrix = ''


    for (let index = 0; index < n; index++) {
        for (let index = 0; index < n; index++) {
            matrix += `${n} `
        }
        matrix += '\n'
    }

    
    console.log(matrix)
    
}

solve(7)