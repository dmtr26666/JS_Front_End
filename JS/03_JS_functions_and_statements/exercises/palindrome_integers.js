function solve(arrayOfNums) {
    let checkIfNumIsPalindrome = function(a) {
        let paramAsString = String(a);
        let reversedString = paramAsString.split("").reverse().join("");
        return paramAsString == reversedString
    }

    for (let index = 0; index < arrayOfNums.length; index++) {
        console.log(checkIfNumIsPalindrome(arrayOfNums[index]))
    }

}

solve([32,2,232,1010])