menuData.forEach((menuPrice) => {
    menuPrice.price = (euroFormat.format(menuPrice.price))
})

document.getElementById("deliver-cost").innerText = deliverCost;

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
        <h4>${menu.price}</h4>
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
        <h3>${menu.price}</h3>
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
        <h3>${menu.price}</h3>
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
        <h3>${menu.price}</h3>
        <button class="add-basket-button" data-id="${menu.id}"></button>`

        document.getElementById("main-content-getraenke").appendChild(menuCard)
        menuCard.appendChild(menuCardImage)
        menuCard.appendChild(menuCardText)
        menuCard.appendChild(menuCardPrice)
    }
})

let buttons = document.querySelectorAll('.add-basket-button');
buttons.forEach(button => button.addEventListener('click', addToBasket));

function addToBasket(event) {
    let searchID = Number(event.target.dataset.id);
    let findMenu = menuData.find(menu => menu.id === searchID);
    let basketItem = basket.find(item => item.id === searchID);

    if (basketItem) {

        basketItem.quantity++;

    }
    else {

        basket.push({ id: findMenu.id, name: findMenu.name, price: findMenu.price, quantity: 1, });

    }
    renderBasket()
};

function renderBasket() {
    const container = document.getElementById("basket-items");
    container.innerHTML = "";

    basket.forEach((order) => {
        const orderCard = document.createElement("div")
        const orderTitle = document.createElement("div")
        const orderPrice = document.createElement("div")
        const orderQuantity = document.createElement("div")

        orderTitle.innerHTML = `
    <h3>${order.name}</h3>
    `;

        orderQuantity.innerHTML = `
    <h3>${order.quantity}</h3>
    `;

        orderPrice.innerHTML = `
    <h3>${order.price}</h3>
    `;

        document.getElementById("basket-items").appendChild(orderCard)
        orderCard.appendChild(orderTitle)
        orderCard.appendChild(orderPrice)
        orderCard.appendChild(orderQuantity)
    });
};

console.log(basket)