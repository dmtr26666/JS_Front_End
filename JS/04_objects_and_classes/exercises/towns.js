function solve(input) {
    function createObject(town, latitude, longitude) {
        return {town, latitude, longitude}
    }

    let allObjects = [];

    for (const line of input) {
        let [town, latitude, longitude] = line.split(' | ')
        latitude = Number(latitude).toFixed(2)
        longitude = Number(longitude).toFixed(2)
        
        allObjects.push(createObject(town, latitude, longitude))
    }

    for (const object of allObjects) {
        console.log(object);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)