function addItem() {
    let inputElement = document.getElementById('newItemText');
    let itemsListElement = document.getElementById('items');

    let newLi = document.createElement('li');
    newLi.textContent = inputElement.value;

    itemsListElement.appendChild(newLi);
}