function solve(input) {
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = []

    for (const cat of input) {
        let [name, age] = cat.split(' ')
        cats.push(new Cat(name, age))
    }

    cats.forEach(cat => cat.meow())

}

solve(['Mellow 2', 'Tom 5'])