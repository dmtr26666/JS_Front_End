function solve() {
  let inputElement = document.querySelector('#exercise > textarea:first-of-type');
  let outputElement = document.querySelector('#exercise textarea:last-of-type');
  let generateBtnElement = document.querySelector('#exercise > button:first-of-type');
  let buyBtnElement = document.querySelector('#exercise button:last-of-type');
  let tableElement = document.querySelector('table tbody')


  generateBtnElement.addEventListener('click', (e) => {
    let products = JSON.parse(inputElement.value);

  

    products.forEach(product => {
      let row = document.createElement('tr');

      let img_td = document.createElement('td');
      let img_elem = document.createElement('img');
      img_elem.src = product.img;
      img_td.appendChild(img_elem);
      row.appendChild(img_td);

      let name_td = document.createElement('td');
      let name_p = document.createElement('p');
      name_p.textContent = product.name;
      name_td.appendChild(name_p);
      row.appendChild(name_td);


      let price_td = document.createElement('td');
      let price_p = document.createElement('p');
      price_p.textContent = product.price;
      price_td.appendChild(price_p);
      row.appendChild(price_td);


      let decoration_td = document.createElement('td');
      let decoration_p = document.createElement('p');
      decoration_p.textContent = product.decFactor;
      decoration_td.appendChild(decoration_p);
      row.appendChild(decoration_td);


      let checkbox_td = document.createElement('td');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox_td.appendChild(checkbox);
      row.appendChild(checkbox_td);


      tableElement.appendChild(row);

    });

    
  });

  buyBtnElement.addEventListener('click', (e) => {
    let tableRows = tableElement.querySelectorAll('tr');

    let furniture = {};
    let totalSum = 0;
    let totalChecked = 0;
    let totalDecFac = 0;

    Array.from(tableRows).forEach(elem => {
      let checked = elem.querySelector('td:last-child input');


      if (checked.checked) {
        console.log('in');
        totalChecked += 1;

        totalSum += Number(elem.querySelector('td:nth-child(3)').textContent);
        totalDecFac += Number(elem.querySelector('td:nth-child(4)').textContent);
        furniture[elem.querySelector('td:nth-child(2)').textContent] = true;
      }
    });

    outputElement.value += `Bought furniture: ${Object.keys(furniture).join(', ')}\n`;
    outputElement.value += `Total price: ${totalSum.toFixed(2)}\n`;
    outputElement.value += `Average decoration factor: ${totalDecFac / totalChecked}`;
  });

  
}