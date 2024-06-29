function attachEvents() {
    const phonebookUrl = 'http://localhost:3030/jsonstore/phonebook';
    const loadBtnEl = document.getElementById('btnLoad');
    const createBtnEl = document.getElementById('btnCreate');
    const phonebookListEl = document.getElementById('phonebook');
    const personNameEl = document.getElementById('person');
    const phoneEl = document.getElementById('phone');

    loadBtnEl.addEventListener('click', () => {
        fetch(phonebookUrl)
        .then(response => response.json())
        .then(data => {
            for (const key in data) {
                console.log(key);
                let newLi = document.createElement('li');
                let deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.classList.add('deleteBtn');
                newLi.textContent = `${data[key].person}: ${data[key].phone}`;
                newLi.appendChild(deleteBtn);
                phonebookListEl.appendChild(newLi);

                deleteBtn.addEventListener('click', () => {
                    fetch(`${phonebookUrl}/${data[key]._id}`, {
                        method: "DELETE",
                        headers: {
                            'content-type': 'application/json'
                        } 
                    })
                    .then(response => response.json())
                    .then(data => {
                        // phonebookListEl.innerHTML = '';
                        // loadBtnEl.click();
                        console.log(data);
                    })
                })
            }
        })
    })

    createBtnEl.addEventListener('click', () => {
        

        fetch(phonebookUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                person: personNameEl.value,
                phone: phoneEl.value,
            })

        })
        .then(response => response.json())
        .then(data => {
            personNameEl.value = '';
            phoneEl.value = '';
            loadBtnEl.click();
        })
    })
   
}

attachEvents();