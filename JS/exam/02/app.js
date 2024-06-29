window.addEventListener("load", solve);

function solve() {
    const nameInputEl = document.getElementById('name');
    const phoneInputEl = document.getElementById('phone');
    const categoryEl = document.getElementById('category');
    const addBtnEl = document.getElementById('add-btn');
    const checkListEl = document.getElementById('check-list');
    const contactListEl = document.getElementById('contact-list');

    addBtnEl.addEventListener('click', () => {
        let liEl = document.createElement('li');
        let articleEl = document.createElement('article');

        let nameP = document.createElement('p');
        nameP.innerHTML = `name:${nameInputEl.value}`;
        let phoneP = document.createElement('p');
        phoneP.innerHTML = `phone:${phoneInputEl.value}`;
        let categoryP = document.createElement('p');
        categoryP.innerHTML = `category:${categoryEl.options[categoryEl.selectedIndex].value}`;

        articleEl.appendChild(nameP);
        articleEl.appendChild(phoneP);
        articleEl.appendChild(categoryP);

        let divEl = document.createElement('div');
        divEl.classList.add('buttons');
        let editBtnEl = document.createElement('button');
        editBtnEl.classList.add('edit-btn');
        let saveBtnEl = document.createElement('button');
        saveBtnEl.classList.add('save-btn');
        divEl.appendChild(editBtnEl);
        divEl.appendChild(saveBtnEl);

        liEl.appendChild(articleEl);
        liEl.appendChild(divEl);

        checkListEl.appendChild(liEl);

        nameInputEl.value = '';
        phoneInputEl.value = '';
        categoryEl.selectedIndex = 0;

        editBtnEl.addEventListener('click', () => {
            let name = editBtnEl.parentElement.parentElement.querySelector('article p:nth-child(1)').innerHTML;
            name = name.split(':');
            nameInputEl.value = name[1];

            let phone = editBtnEl.parentElement.parentElement.querySelector('article p:nth-child(2)').innerHTML;
            phone = phone.split(':');
            phoneInputEl.value = phone[1];

            let ctg = editBtnEl.parentElement.parentElement.querySelector('article p:nth-child(3)').innerHTML;
            ctg = ctg.split(':');
            if (ctg[1] == 'work') {
                categoryEl.selectedIndex = 1;
            } else if(ctg[1] == 'family') {
                categoryEl.selectedIndex = 2;
            } else {
                categoryEl.selectedIndex = 3;
            }

            editBtnEl.parentElement.parentElement.remove()

        })
        saveBtnEl.addEventListener('click', () => {
            let currentLiEl = saveBtnEl.parentElement.parentElement;
            saveBtnEl.parentElement.parentElement.remove()
            currentLiEl.querySelector('div.buttons').remove()
            let deleteBtnEl = document.createElement('button');
            deleteBtnEl.classList.add('del-btn');
            currentLiEl.appendChild(deleteBtnEl);

            contactListEl.appendChild(currentLiEl);

            deleteBtnEl.addEventListener('click', () => {
                deleteBtnEl.parentElement.remove()
            })
        })

        
    })
}
  