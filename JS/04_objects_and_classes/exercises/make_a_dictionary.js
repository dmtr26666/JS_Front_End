function solve(input) {
    let dict = {};

    for (const term of input) {
        let object = JSON.parse(term)

        Object.assign(dict, object)
    }

    const sortedDict = Object.keys(dict).sort((a, b) => a.localeCompare(b))

    for (const key of sortedDict) {
        console.log(`Term: ${key} => Definition: ${dict[key]}`);
    }

}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )