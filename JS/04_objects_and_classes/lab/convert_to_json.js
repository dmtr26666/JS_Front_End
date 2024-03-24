function solve(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    }

    let objectAsJson = JSON.stringify(person)
    console.log(objectAsJson);
}

solve('George', 'Jones', 'Brown')