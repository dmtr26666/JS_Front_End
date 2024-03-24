function solve(input) {
    let jsonAsObject = JSON.parse(input)

    let entries = Object.entries(jsonAsObject)

    for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')