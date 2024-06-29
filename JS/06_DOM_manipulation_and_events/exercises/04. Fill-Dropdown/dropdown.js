function addItem() {
    let itemTextElement = document.getElementById('newItemText');
    let itemvalueElement = document.getElementById('newItemValue');
    let selectMenu = document.getElementById('menu');

    let newOptionElement = document.createElement('option');

    newOptionElement.textContent = itemTextElement.value;
    newOptionElement.value = itemvalueElement.value;

    selectMenu.appendChild(newOptionElement);

    itemTextElement.value = '';
    itemvalueElement.value = '';
}