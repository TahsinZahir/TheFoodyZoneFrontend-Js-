document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartElement = document.getElementById('cart');
    const totalPriceElement = document.getElementById('total-price');
    const confirmOrderButton = document.getElementById('confirm-order');
    const loginButton = document.getElementById('login-btn');
    const modal = document.getElementById('login-modal');
    const closeModal = document.querySelector('.close');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.getAttribute('data-item');
            const price = parseFloat(button.getAttribute('data-price'));
            cart.push({ item, price });
            updateCart();
        });
    });

    confirmOrderButton.addEventListener('click', () => {
        alert('Order confirmed!');
        cart.length = 0; // Clear cart
        updateCart();
    });

    loginButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    document.getElementById('submit-login').addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        alert(`Logged in as ${username}`);
        modal.style.display = 'none';
    });

    document.getElementById('toggle-dark-mode').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    function updateCart() {
        cartElement.innerHTML = '';
        let total = 0;
        cart.forEach(({ item, price }) => {
            const li = document.createElement('li');
            li.textContent = `${item} - Rs.${price.toFixed(2)}`;
            cartElement.appendChild(li);
            total += price;
        });
        totalPriceElement.textContent = `Total: Rs.${total.toFixed(2)}`;
        confirmOrderButton.style.display = cart.length > 0 ? 'block' : 'none';
    }
});
