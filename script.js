const modal = document.getElementById('modal');
console.log(modal);

function openModal(){
    document.getElementById('modal').classList.add('active');
    document.getElementById('basket').classList.add('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal(){
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('click', function(e) {
    const activeModal = document.querySelector('.delivery-modal.active');
    if (e.target === modal) {
        activeModal.classList.remove('active');
        document.body.style.overflow = '';
    }
})

document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.delivery-modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
})

setTimeout(closeModal, 5000);


menuData.forEach(function(entryCategory) {
    const menuCategory = document.getElementById("category-" + entryCategory.category.toLowerCase());
   menuCategory.innerHTML = entryCategory.category;
})

menuData.forEach(function(entryItemPrice) {
    const menuPrice = document.getElementById('price-maki' + entryItemPrice.item.price);
    console.log(menuPrice);
})
