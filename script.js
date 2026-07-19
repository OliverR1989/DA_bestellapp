const euroFormat = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'});
const modal = document.getElementById('modal');

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
                                        <button class="menu-card-button" onclick="openBasket('basket')"></button>
                                    </div>
                                </div>`;
        menuContainer.innerHTML += menuCardHTML;
    });
})

function openBasket() {
    document.getElementById('basket').classList.add('openBasket');
    document.body.style.overflow = 'hidden';
}

document.getElementById('deliver-cost').innerHTML = euroFormat.format(deliverCost);

document.getElementById('total-cost').innerHTML = euroFormat.format(deliverCost + 5);

document.getElementById('total-cost-button').innerHTML = "( " + euroFormat.format(deliverCost + 5) + " )";