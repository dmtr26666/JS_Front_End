function solve(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }

    }

    let numberOfSongs = input.shift();
    let typeOfPrint = input.pop();

    let allSongs = [];
    let songs = {};

    for (const song of input) {
        let [type, name, time] = song.split('_')
        allSongs.push({name, time})
        
        if (!songs[type]) {
            songs[type] = []
            songs[type].push(new Song(type, name, time))
        } else {
            songs[type].push(new Song(type, name, time))
        }
    }

    if (typeOfPrint == 'all') {
        for (const song of allSongs) {
            console.log(`${song.name}`);
        }
    } else {
        for (const key of songs[typeOfPrint]) {
            console.log(`${key.name}`);
        }
    }

}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )