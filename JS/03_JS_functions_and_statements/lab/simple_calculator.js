function solve(num1, num2, operator) {
    function returnResult(num1, num2, operator) {
        let result;

        switch (operator) {
            case 'multiply':
                result = (a, b) => a * b;
                break;
            case 'divide':
                result = (a, b) => a / b;
                break;
            case 'add':
                result = (a, b) => a + b;
                break;
            case 'subtract':
                result = (a, b) => a - b;
                break;
        }

        return result
    }


    finalResult = returnResult(num1, num2, operator)
    if (finalResult != undefined) {
        console.log(finalResult(num1, num2));
    }
    
}
    

solve(40, 8, 'divide')