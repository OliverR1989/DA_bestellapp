function openModal(modal){
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal){
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = '';
}