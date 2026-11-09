
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

// Script del modal della pagina cosa facciamo 
const openButtons = document.querySelectorAll('[data-modal-target]');
 const closeButtons = document.querySelectorAll('[data-modal-close]');
// const modalID = button.dataset.modalTarget;

openButtons.forEach((button) => {
    button.addEventListener('click', ()=> {
      document.body.classList.add('overflow-y-hidden');
        const modalID = button.dataset.modalTarget;
        const modal = document.getElementById(modalID);
        console.log(modal)
        if(modal instanceof HTMLDialogElement){
            modal.showModal();
        }
    });
});

document.querySelectorAll('dialog').forEach((modal) => {

    modal.addEventListener('click', (event) => {

      if (event.target === modal) {
        modal.close();
      }

    });
    closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      document.body.classList.remove('overflow-y-hidden');
      const modal = button.closest('dialog');

      if (modal instanceof HTMLDialogElement) {
        modal.close();
      }

    });
  });

});

