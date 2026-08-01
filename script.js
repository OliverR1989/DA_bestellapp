menuData.forEach((menu) => {
    if (menu.category === "Maki") {
        const menuCard = document.createElement("div")
        const menuCardImage = document.createElement("div")
        const menuCardText = document.createElement("div")
        const menuCardPrice = document.createElement("div")

        menuCard.classList.add("menu-card")
        menuCardImage.classList.add("menu-card-img")
        menuCardText.classList.add("menu-card-text")
        menuCardPrice.classList.add("menu-card-price")

        menuCardImage.innerHTML = `
        <img src="${menu.image}" alt="">
        `;

        menuCardText.innerHTML = `
        <h4>${menu.name}</h4>
        <p class="description-text">${menu.description}</p>
        `;

        menuCardPrice.innerHTML = `
        <h4>${euroFormat.format(menu.price)}</h4>
        <button class="add-basket-button" data-id="${menu.id}"></button>`

        document.getElementById("main-content-maki").appendChild(menuCard)
        menuCard.appendChild(menuCardImage)
        menuCard.appendChild(menuCardText)
        menuCard.appendChild(menuCardPrice)
    }
})

menuData.forEach((menu) => {
    if (menu.category === "Nigiri") {
        const menuCard = document.createElement("div")
        const menuCardImage = document.createElement("div")
        const menuCardText = document.createElement("div")
        const menuCardPrice = document.createElement("div")

        menuCard.classList.add("menu-card")
        menuCardImage.classList.add("menu-card-img")
        menuCardText.classList.add("menu-card-text")
        menuCardPrice.classList.add("menu-card-price")

        menuCardImage.innerHTML = `
        <img src="${menu.image}" alt="">
        `;

        menuCardText.innerHTML = `
        <h3>${menu.name}</h3>
        <p class="description-text">${menu.description}</p>
        `;

        menuCardPrice.innerHTML = `
        <h4>${euroFormat.format(menu.price)}</h4>
        <button class="add-basket-button" data-id="${menu.id}"></button>`

        document.getElementById("main-content-nigiri").appendChild(menuCard)
        menuCard.appendChild(menuCardImage)
        menuCard.appendChild(menuCardText)
        menuCard.appendChild(menuCardPrice)
    }
})
menuData.forEach((menu) => {
    if (menu.category === "Dessert") {
        const menuCard = document.createElement("div")
        const menuCardImage = document.createElement("div")
        const menuCardText = document.createElement("div")
        const menuCardPrice = document.createElement("div")

        menuCard.classList.add("menu-card")
        menuCardImage.classList.add("menu-card-img")
        menuCardText.classList.add("menu-card-text")
        menuCardPrice.classList.add("menu-card-price")

        menuCardImage.innerHTML = `
        <img src="${menu.image}" alt="">
        `;

        menuCardText.innerHTML = `
        <h3>${menu.name}</h3>
        <p class="description-text">${menu.description}</p>
        `;

        menuCardPrice.innerHTML = `
        <h4>${euroFormat.format(menu.price)}</h4>
        <button class="add-basket-button" data-id="${menu.id}"></button>`

        document.getElementById("main-content-dessert").appendChild(menuCard)
        menuCard.appendChild(menuCardImage)
        menuCard.appendChild(menuCardText)
        menuCard.appendChild(menuCardPrice)
    }
})

menuData.forEach((menu) => {
    if (menu.category === "Getraenke") {
        const menuCard = document.createElement("div")
        const menuCardImage = document.createElement("div")
        const menuCardText = document.createElement("div")
        const menuCardPrice = document.createElement("div")

        menuCard.classList.add("menu-card")
        menuCardImage.classList.add("menu-card-img")
        menuCardText.classList.add("menu-card-text")
        menuCardPrice.classList.add("menu-card-price")

        menuCardImage.innerHTML = `
        <img src="${menu.image}" alt="">
        `;

        menuCardText.innerHTML = `
        <h3>${menu.name}</h3>
        <p class="description-text">${menu.description}</p>
        `;

        menuCardPrice.innerHTML = `
        <h4>${euroFormat.format(menu.price)}</h4>
        <button class="add-basket-button" data-id="${menu.id}"></button>`

        document.getElementById("main-content-getraenke").appendChild(menuCard)
        menuCard.appendChild(menuCardImage)
        menuCard.appendChild(menuCardText)
        menuCard.appendChild(menuCardPrice)
    }
})

let buttons = document.querySelectorAll('.add-basket-button');
buttons.forEach(button => button.addEventListener('click', addToBasket));

document.getElementById("deliver-cost").innerText = euroFormat.format(deliverCost);

document.getElementById("basket-items").addEventListener('click', function (event) {
    let searchID = Number(event.target.dataset.id);
    let basketItem = basket.find(item => item.id === searchID);
    if (event.target.classList.contains("plus-item-button")) {

        basketItem.quantity++;

    } else if (event.target.classList.contains("trash-item-button") || event.target.classList.contains("minus-item-button")) {

        basketItem.quantity--;

    }


    if (basketItem.quantity === 0) {

        basket = basket.filter(item => item.id !== searchID)
    }

    if (event.target.classList.contains("delet-menu-card-button-hidden")) {

        basket = basket.filter(item => item.id !== searchID)
    }

    calculateSubtotal()
    calculateTotal()

})


function addToBasket(event) {
    let searchID = Number(event.target.dataset.id);
    let findMenu = menuData.find(menu => menu.id === searchID);
    let basketItem = basket.find(item => item.id === searchID);

    if (basketItem) {

        basketItem.quantity++;
        document.getElementById("basket").classList.add("basket-sticky")

    }
    else {

        basket.push({ id: findMenu.id, name: findMenu.name, price: findMenu.price, quantity: 1, });
        document.getElementById("basket").classList.add("basket-sticky")
        document.getElementById("basket-empty").classList.remove("basket-sticky-empty")

    }


    calculateSubtotal()
    calculateTotal()
};

function renderBasket() {
    const container = document.getElementById("basket-items");
    container.innerHTML = "";

    basket.forEach((order) => {
        const orderCard = document.createElement("div")
        const orderTitle = document.createElement("div")
        const orderInformation = document.createElement("div")

        orderCard.classList.add("basket-menu-card")
        orderTitle.classList.add("basket-menu-card-headline")
        orderInformation.classList.add("basket-menu-card-information")

        orderTitle.innerHTML = `
            <h3>${order.name}</h3>
            <button class="delet-menu-card-button-hidden" id="delet-menu-button" data-id="${order.id}"></button>
    `;

        orderInformation.innerHTML = `
        <div class="basket-menu-card-quantity">
            <button class="trash-item-button" id="delet-item-button" data-id="${order.id}"></button>
            <button class="minus-item-button-hidden" id="minus-item-button" data-id="${order.id}"></button>
            <h3>${order.quantity}</h3>
            <button class="plus-item-button" id="plus-item-button" data-id="${order.id}"></button>
        </div>
         <h3>${euroFormat.format(order.price * order.quantity)}</h3>
    `;

        document.getElementById("basket-items").appendChild(orderCard)
        orderCard.appendChild(orderTitle)
        orderCard.appendChild(orderInformation)

        if (order.quantity > 1) {
            orderInformation.querySelector(".trash-item-button").classList.add("trash-item-button-hidden")
            orderInformation.querySelector(".minus-item-button-hidden").classList.add("minus-item-button")
            orderTitle.querySelector(".delet-menu-card-button-hidden").classList.add("delet-menu-card-button")
        }
    })
}

function calculateSubtotal() {
    const basketSubtotal = basket.reduce((akkumulator, aktuellesElement) => akkumulator + aktuellesElement.price * aktuellesElement.quantity, 0)
    document.getElementById("subtotal-cost").innerHTML = euroFormat.format(basketSubtotal);

    renderBasket()

    subtotal = basketSubtotal

    if (basketSubtotal === 0) {
        document.getElementById("basket").classList.remove("basket-sticky")
        document.getElementById("basket-empty").classList.add("basket-sticky-empty")
    }

}

function calculateTotal() {
    const basketTotal = subtotal + deliverCost

    document.getElementById("total-cost").innerHTML = euroFormat.format(basketTotal)
    document.getElementById("total-cost-button").innerHTML = "( " + euroFormat.format(basketTotal) + " )"

    total = basketTotal

    console.log(euroFormat.format(total))
}

function openModal() {
    document.getElementById("basket").classList.remove('basket-sticky');
    document.getElementById("modal").classList.add('active');
    document.body.style.overflow = 'hidden';

    setTimeout(closeModal, 2500)

}

function closeModal() {
    document.getElementById("modal").classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelectorAll('.delivery-modal').forEach(function (modal) {
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    })
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