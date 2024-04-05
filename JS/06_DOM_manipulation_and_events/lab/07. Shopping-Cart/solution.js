function solve() {
   let allproductsElements = document.querySelectorAll('.product');
   let outputElement = document.querySelector('textarea');
   let checkoutElement = document.querySelector('.checkout')
   let total_checkout_price = 0;
   let products = {};

   Array.from(allproductsElements).forEach(product => {
      let addButton = product.querySelector('.product-add .add-product');
      let price = product.querySelector('.product-line-price');
      let name = product.querySelector('.product-details .product-title');

      addButton.addEventListener('click', (e) => {
         total_checkout_price += Number(price.textContent);
         products[name.textContent] = true;
         outputElement.textContent += `Added ${name.textContent} for ${price.textContent} to the cart.\n`
      });
   });

   checkoutElement.addEventListener('click', (e) => {
      for (const elemt of allproductsElements) {
         let addButton = elemt.querySelector('.product-add .add-product');
         addButton.disabled = 'disabled';
      }
      checkoutElement.disabled = 'disabled';

      let uniqueProducts = Object.keys(products)

      outputElement.textContent += `You bought ${uniqueProducts.join(', ')} for ${total_checkout_price.toFixed(2)}.`;
   });
}