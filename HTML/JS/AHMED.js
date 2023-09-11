let cartTotal = 0;
const cartItems = [];

function addToCart(price, itemName) {
    cartTotal += price;
    cartItems.push({ price, itemName });
    updateCartDisplay();
}

function removeFromCart(index) {
    const removedItem = cartItems.splice(index, 1)[0];
    cartTotal -= removedItem.price;
    updateCartDisplay();
}

function updateCartDisplay() {
    document.getElementById('cart-total').textContent = `الإجمالي: $${cartTotal}`;
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // مسح محتوى السلة
    cartItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.itemName} بسعر: $${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'إزالة من السلة';
        removeButton.onclick = function () {
            removeFromCart(index);
        };
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
    });
}

function showCartItems() {
    alert('المنتجات في السلة:\n' + cartItems.map(item => `${item.itemName} بسعر: $${item.price}`).join('\n'));
}