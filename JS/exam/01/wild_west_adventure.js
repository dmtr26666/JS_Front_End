function solve(input){
    const charCount = input.shift();
    let heroes = {};

    for (let index = 0; index < charCount; index++) {
        let [heroName, health, bullets] = input.shift().split(' ');
        bullets = Number(bullets);
        health = Number(health);
        heroes[heroName] = {health, bullets};     
    }

    for (const command of input) {
        if (command === "Ride Off Into Sunset") {
            break;
        }

        const splitCommand = command.split(' - ');

        if (splitCommand[0] === 'FireShot') {
            if (heroes[splitCommand[1]].bullets > 0) {
                heroes[splitCommand[1]].bullets -= 1;
                console.log(`${splitCommand[1]} has successfully hit ${splitCommand[2]} and now has ${heroes[splitCommand[1]].bullets} bullets!`);
            } else {
                console.log(`${splitCommand[1]} doesn't have enough bullets to shoot at ${splitCommand[2]}!`);
            }
        } else if(splitCommand[0] === 'TakeHit') {
            if (heroes[splitCommand[1]].health > Number(splitCommand[2])) {
                heroes[splitCommand[1]].health -= Number(splitCommand[2]);
                console.log(`${splitCommand[1]} took a hit for ${splitCommand[2]} HP from ${splitCommand[3]} and now has ${heroes[splitCommand[1]].health} HP!`);
            } else {
                delete heroes[splitCommand[1]];
                console.log(`${splitCommand[1]} was gunned down by ${splitCommand[3]}!`);
            }
        } else if(splitCommand[0] === 'Reload') {
            if (heroes[splitCommand[1]].bullets < 6) {
                
                console.log(`${splitCommand[1]} reloaded ${6 - heroes[splitCommand[1]].bullets} bullets!`);
                heroes[splitCommand[1]].bullets = 6
            } else {
                console.log(`${splitCommand[1]}'s pistol is fully loaded!`);
            }
        } else if(splitCommand[0] === 'PatchUp') {
            if (heroes[splitCommand[1]].health != 100) {
                if ((heroes[splitCommand[1]].health + Number(splitCommand[2])) > 100) {
                    heroes[splitCommand[1]].health = 100;
                    console.log(`${splitCommand[1]} patched up and recovered ${heroes[splitCommand[1]].health - Number(splitCommand[2])} HP!`);
                } else {
                    heroes[splitCommand[1]].health += Number(splitCommand[2]);
                    console.log(`${splitCommand[1]} patched up and recovered ${splitCommand[2]} HP!`);
                }
                
            } else {
                console.log(`${splitCommand[1]} is in full health!`);
            }
        }
    }

    for (const hero in heroes) {
        console.log(`${hero}\n HP: ${heroes[hero].health}\n Bullets: ${heroes[hero].bullets}`);
    }
}
