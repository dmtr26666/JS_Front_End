function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let cellsValuesElements = document.querySelectorAll('tbody tr td');
      let searchBarElement = document.getElementById('searchField');

      for (const cell of cellsValuesElements) {
         cell.parentElement.classList.remove('select')
      }


      if (searchBarElement.value != '') {
         for (const cell of cellsValuesElements) {
            if (cell.innerHTML.includes(searchBarElement.value)) {
               cell.parentElement.className = 'select'
            }
         }
      }

      searchBarElement.value = '';

   }
}