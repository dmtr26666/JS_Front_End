function solve(array1, array2) {
    let storeProducts = {};

    for (let index = 0; index < array1.length; index+=2) {
        let product = array1[index];
        storeProducts[product] = Number(array1[index + 1])
        
    }

    for (let index = 0; index < array2.length; index+=2) {
        let product = array2[index];
        if (storeProducts[product]) {
            storeProducts[product] += Number(array2[index + 1])
        } else {
            storeProducts[product] = Number(array2[index + 1])
        }
        
        
    }

    for (const key in storeProducts) {
        console.log(`${key} -> ${storeProducts[key]}`);
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )