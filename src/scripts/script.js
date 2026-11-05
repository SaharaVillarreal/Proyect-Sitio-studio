
const openModal = document.querySelectorAll('.open-modal');
const closeModal = document.getElementById('close');
const modal = document.querySelector('.modal');
      
openModal.forEach(button => {
    button.addEventListener('click', () => {
        modal?.classList.add('active');
        document.body.classList.add('overflow-y-hidden');
    });
});
    closeModal?.addEventListener('click', () => {
    modal?.classList.remove('active');
    document.body.classList.remove('overflow-y-hidden');
});
