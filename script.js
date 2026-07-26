menuData.forEach((menuPrice) => {
    menuPrice.price = (euroFormat.format(menuPrice.price))
})

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
        <button></button>`

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
        <button></button>`

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
        <button></button>`

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
        <button></button>`

        document.getElementById("main-content-getraenke").appendChild(menuCard)
        menuCard.appendChild(menuCardImage)
        menuCard.appendChild(menuCardText)
        menuCard.appendChild(menuCardPrice)
    }
}) 