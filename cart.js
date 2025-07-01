const itemQtyLimits = {
  chair: 4,
  'ps5-controller': 3,
  // add other exceptions here
};
function addToCart(id, name, price, deposit=0) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const maxQty = itemQtyLimits[id] || 1;

  let itemIndex = cart.findIndex(item => item.id === id);

  if (itemIndex !== -1) {
    if (cart[itemIndex].qty >= maxQty) {
        document.getElementById('modal-message').textContent = `You can only rent up to ${maxQty} ${name}(s).`;
        document.getElementById('cart-modal').style.display = 'flex';

      return;
    }
    cart[itemIndex].qty += 1;
  } else {
    cart.push({ id: id, name: name, price: price, qty: 1, deposit: deposit});
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Show custom modal instead of alert
  document.getElementById('modal-message').textContent = `${name} added to cart!`;
  document.getElementById('cart-modal').style.display = 'flex';
} 


function closeModal() {
  document.getElementById('cart-modal').style.display = 'none';
}

function goToCart() {
  window.location.href = '/cart.html'; // Change path if needed
}