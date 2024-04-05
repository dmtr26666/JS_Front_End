function search() {
   let itemsListElement = document.querySelectorAll('#towns li')
   let resultElement = document.getElementById('result');
   let searchBarElement = document.getElementById('searchText');

   let townsList = Array.from(itemsListElement);
   let matches = 0;

   for (const town of townsList) {
      if (town.textContent.includes(searchBarElement.value)) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         matches += 1;
      }
   }

   resultElement.textContent = `${matches} matches found`
}
