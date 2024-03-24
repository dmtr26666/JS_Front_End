function solve(input) {
    class Hero {
        constructor(name, level, items) {
            this.heroName = name
            this.heroLevel = level
            this.heroItems = items
        }
    }

    let allHeroes = [];

    for (const hero of input) {
        let [name, level, items] = hero.split(' / ')

        let itemsList = items.split(', ')

        allHeroes.push(new Hero(name, level, itemsList))
    }

    

    allHeroes.sort((a, b) => a.heroLevel - b.heroLevel);
    

    for (const hero of allHeroes) {
        console.log(`Hero: ${hero.heroName} `);
        console.log(`level => ${hero.heroLevel}`);
        console.log(`items => ${hero.heroItems.join(', ')}`);
    }
}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )