function addItem() {
    let itemsListElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    let itemElement = document.createElement('li');
    let deleteButton = document.createElement('a');

    itemElement.textContent = inputElement.value;
    deleteButton.textContent = '[Delete]';
    deleteButton.href = '#';
    itemElement.appendChild(deleteButton)
    itemsListElement.appendChild(itemElement);

    deleteButton.addEventListener('click', () => {
        deleteButton.parentElement.remove();
    });
}