function solve(product, count) {
    let price;
    switch (product) {
        case 'coffee':
            price = 1.50;
            break;
        case 'water':
            price = 1.00;
            break;
        case 'coke':
            price = 1.40;
            break;
        case 'snacks':
            price = 2.00;
            break;
    }

    console.log((price * count).toFixed(2));

}

solve('coffee', 2)