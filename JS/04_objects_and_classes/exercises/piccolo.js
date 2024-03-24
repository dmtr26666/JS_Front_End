function solve(input) {
    
    let parkingLot = {};

    for (const car of input) {
        let [direction, registration] = car.split(', ')
        if(direction == 'OUT') {
            delete parkingLot[registration]
        } else {
            parkingLot[registration] = Number(registration.slice(2,6))
        }
    }

    if(Object.keys(parkingLot).length != 0) {
        const sorted = Object.keys(parkingLot).sort((a, b) => a.localeCompare(b))
        for (const car of sorted) {
            console.log(car);
        }
    } else {
        console.log("Parking Lot is Empty");
    }
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)
