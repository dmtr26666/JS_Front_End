function solve(password) {
    let regex = /^(?=.*\d.*\d)[a-zA-Z0-9]{6,10}$/;
    let result = regex.test(password)

    function testPasswordForLength(password) {
        if (password.length < 6 || password.length > 10) {
            console.log('Password must be between 6 and 10 characters')
        }
    }

    function testPasswordForAlphanumeric(password) {
        let regexForAlphanumeric = /^[A-Za-z0-9]+$/;
        let testAlphanumeric = regexForAlphanumeric.test(password)
        if (testAlphanumeric == false) {
            console.log('Password must consist only of letters and digits')
        }
    }

    function testPasswordForContainingAtleaseTwoDigits(password) {
        let regexForTwoDigits =/^(?=.*\d.*\d).+$/;
        let testForTwoDigits = regexForTwoDigits.test(password)
        if (testForTwoDigits == false) {
            console.log('Password must have at least 2 digits')
        }
    }

    if (result) {
        console.log('Password is valid');
    } else {
        testPasswordForLength(password)
        testPasswordForAlphanumeric(password)
        testPasswordForContainingAtleaseTwoDigits(password)
    }
}

solve('Pa$s$s')