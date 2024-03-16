function solve(percentage) {
    let loadingBar = '..........'

    loadingBar = '%'.repeat(percentage / 10)
    loadingBar += '.'.repeat(10 - percentage / 10)

    
    
    if (percentage == 100) {
        console.log(`${percentage}% Complete!`)
        console.log(`[${loadingBar}]`)
    } else {
        console.log(`${percentage}% [${loadingBar}]`);
        console.log('Still loading...')
    }
}

solve(100)