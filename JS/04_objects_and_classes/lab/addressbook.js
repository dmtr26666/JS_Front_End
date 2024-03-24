function solve(input) {
    let addressBook = {}

    for (const line of input) {
        let [name, address] = line.split(':')
        addressBook[name] = address
    }

    const sortedAddressBook = Object.entries(addressBook)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(kvp => console.log(`${kvp[0]} -> ${kvp[1]}`));

    
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)