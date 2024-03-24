function solve(input) {
    let movies = [];

    for (const command of input) {
        let splitCommand = command.split(' ')

        if (command.includes('addMovie')) {
            movies.push({name: command.split('addMovie ')[1]})
        } else if (command.includes('directedBy')) {
            let [movieName, director] = command.split(' directedBy ')
            for (const movie of movies) {
                if (movie.name == movieName) {
                    movie.director = director
                }
            }
        } else if (command.includes('onDate')) {
            let [movieName, date] = command.split(' onDate ')
            for (const movie of movies) {
                if (movie.name == movieName) {
                    movie.date = date
                }
            }
        }
    }

    for (const movie of movies) {
        if (Object.values(movie).length == 3) {
            console.log(JSON.stringify(movie));
        }
    }

}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    )