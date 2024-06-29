window.addEventListener("load", solve);

function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/games';
    const loadGamesBtnEl = document.getElementById('load-games');
    const gamesListEl = document.getElementById('games-list');
    const addGameBtn = document.getElementById('add-game');
    const editGameBtn = document.getElementById('edit-game');
    const gameNameEl = document.getElementById('g-name');
    const gameTypeEl = document.getElementById('type');
    const gamePlayersEl = document.getElementById('players');

    function refresh() {
        loadGamesBtnEl.click();
 
    }

    loadGamesBtnEl.addEventListener('click', () => {
        gamesListEl.innerHTML = '';
        fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            editGameBtn.disabled = 'disabled';
            for (const key in data) {
                let mainDivEl = document.createElement('div');
                mainDivEl.classList.add('board-game');

                let contentDivEl = document.createElement('div');
                contentDivEl.classList.add('content')
                let nameEl = document.createElement('p');
                nameEl.innerHTML = data[key].name;
                let typeNameEl = document.createElement('p');
                typeNameEl.innerHTML = data[key].type;
                let playersEl = document.createElement('p');
                playersEl.innerHTML = data[key].players;
                contentDivEl.appendChild(nameEl);
                contentDivEl.appendChild(playersEl);
                contentDivEl.appendChild(typeNameEl);

                let buttonsDivEl = document.createElement('div');
                buttonsDivEl.classList.add('buttons-container');
                let changeBtnEl = document.createElement('button');
                changeBtnEl.classList.add('change-btn');
                changeBtnEl.innerHTML = 'Change';
                let deleteBtnEl = document.createElement('button');
                deleteBtnEl.classList.add('delete-btn');
                deleteBtnEl.innerHTML = 'Delete';

                buttonsDivEl.appendChild(changeBtnEl);
                buttonsDivEl.appendChild(deleteBtnEl);

                mainDivEl.appendChild(contentDivEl);
                mainDivEl.appendChild(buttonsDivEl);

                gamesListEl.appendChild(mainDivEl);

                changeBtnEl.addEventListener('click', () => {
                    gameNameEl.value = nameEl.innerHTML;
                    gameTypeEl.value = typeNameEl.innerHTML;
                    gamePlayersEl.value = playersEl.innerHTML;
                    
                    fetch(baseUrl)
                    .then(response => response.json())
                    .then(data => {
                        let gameId = '';
                        for (const key in data) {
                            console.log(data[key].name == gameNameEl.value);
                            console.log(data[key].name);
                            console.log(nameEl.innerHTML);
                            if (data[key].name == nameEl.innerHTML) {
                                gameNameEl.title = key;                   
                            }
                        }
                    })
                    
                    addGameBtn.disabled = 'disabled';
                    editGameBtn.removeAttribute('disabled');

                })

                deleteBtnEl.addEventListener('click', () => {
                    fetch(baseUrl)
                    .then(response => response.json())
                    .then(data => {
                        let gameId = '';
                        for (const key in data) {
                            if (data[key].name == nameEl.innerHTML) {
                                gameId = key;              
                            }
                        }   
                        
                        fetch(`${baseUrl}/${gameId}`, {
                            method: "DELETE",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: null
                            
                        })
                        .catch(err => console.log(err))

                        
                    })

                    
                })

                

                
            }
        })
        .catch(err => console.log(err))
    })

    loadGamesBtnEl.click();

    editGameBtn.addEventListener('click', () => {

        gameId = gameNameEl.title;

        fetch(`${baseUrl}/${gameId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: gameNameEl.value,
                players: gamePlayersEl.value,
                type: gameTypeEl.value,
                _id: gameId,
            })
        })
        .then(response => () => {
            console.log('mina');
        })
        .catch(err => console.log(err))

       

        
        

        loadGamesBtnEl.click();
        gameNameEl.value = '';
        gamePlayersEl.value = '';
        gameTypeEl.value = '';
        addGameBtn.removeAttribute('disabled');
        editGameBtn.disabled = 'disabled';


    })

    addGameBtn.addEventListener('click', () => {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: gameNameEl.value,
                players: gamePlayersEl.value,
                type: gameTypeEl.value,
            })
        })
        .then(response => {
            gameNameEl.value = '';
            gamePlayersEl.value = '';
            gameTypeEl.value = '';
        })
        .catch(err => console.log(err))

        loadGamesBtnEl.click()
    })
}