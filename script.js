const euroFormat = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'});

const modal = document.getElementById('modal');

const basket = [];

menuData.forEach(function (entryCategory) {
    const menuCategory = document.getElementById("category-" + entryCategory.category.toLowerCase());
    menuCategory.innerHTML = entryCategory.category;

    const menuContainer = document.getElementById("main-content-" + entryCategory.category.toLowerCase());
    console.log(menuContainer);

    entryCategory.items.forEach(function (menuItem) {
        const menuCardHTML =    `<div class="menu-card">
                                    <div class="menu-card-img">
                                        <img src="${menuItem.image}" alt="${menuItem.name}">
                                    </div>
                                    <div class="menu-card-text">
                                        <h4>${menuItem.name}</h4>
                                        <h5>${menuItem.description}</h5>
                                    </div>
                                    <div class="menu-card-buy">
                                        <h4>${euroFormat.format(menuItem.price)}</h4>
                                        <button class="menu-card-button" data-name="${menuItem.name}" data-price="${menuItem.price}"></button>
                                    </div>
                                </div>`;
        menuContainer.innerHTML += menuCardHTML;
    });
})

function renderBasket() {
    const basketContainer = document.getElementById('basket-items');
    basketContainer.innerHTML = '';

    basket.forEach(function (item) {
        const deleteOrMinusButton = item.quantity === 1
            ? `<button class="delet-item-button" data-name="${item.name}"></button>`
            : `<button class="minus-item-button" data-name="${item.name}"></button>`;

        const itemHTML = `<div class="basket-menu-card">
                              <div class="basket-menu-card-headline">
                                  <h4>${item.name}</h4>
                                  <button class="delet-all-button" data-name="${item.name}"></button>
                              </div>
                              <div class="basket-menu-card-text">
                                  <div class="basket-menu-card-quanity-counter">
                                      <div class="item-count">
                                          ${deleteOrMinusButton}
                                          <h4 class="summary-items">${item.quantity}</h4>
                                          <button class="plus-item-button" data-name="${item.name}"></button>
                                      </div>
                                      <div>
                                          <h4>${euroFormat.format(item.price * item.quantity)}</h4>
                                      </div>
                                  </div>
                              </div>
                           </div>`;
        basketContainer.innerHTML += itemHTML;
    });
}

function openModal() {
    document.getElementById('modal').classList.add('active');
    document.getElementById('basket').classList.remove('openBasket');
    document.body.style.overflow = 'hidden';
    setTimeout(closeModal, 2500);
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = '';
}
function addToBasket(name, price) {
    document.getElementById('basket').classList.add('openBasket');

    const existingItem = basket.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        basket.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    renderBasket() 
}

function changeQuantity(name, delta) {
    const item = basket.find(item => item.name === name);
    item.quantity = item.quantity + delta;
    renderBasket();
}

function removeFromBasket(name) {
    const index = basket.findIndex(item => item.name === name);
    basket.splice(index, 1);
    renderBasket();
}

document.addEventListener('click', function (e) {
    const activeModal = document.querySelector('.delivery-modal.active');
    if (e.target === modal) {
        activeModal.classList.remove('active');
        document.body.style.overflow = '';
    }
})

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.delivery-modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
})

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('menu-card-button')) {
        const name = e.target.dataset.name;
        const price = parseFloat(e.target.dataset.price);
        addToBasket(name, price);
    }
});

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('plus-item-button')) {
        const name = e.target.dataset.name;
        changeQuantity(name, 1);
    }
});



document.addEventListener('click', function (e) {
    if (e.target.classList.contains('minus-item-button')) {
        const name = e.target.dataset.name;
        changeQuantity(name, -1);
    }
});



document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delet-item-button')) {
        const name = e.target.dataset.name;
        removeFromBasket(name);
    }
});


document.getElementById('deliver-cost').innerHTML = euroFormat.format(deliverCost);

document.getElementById('total-cost').innerHTML = euroFormat.format(deliverCost + 5);

document.getElementById('total-cost-button').innerHTML = "( " + euroFormat.format(deliverCost + 5) + " )";