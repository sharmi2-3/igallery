const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.getElementById('close-modal');

galleryImages.forEach(image => {
  image.addEventListener('click', () => {

    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    
    modalImg.src = image.src;
    modalImg.alt = image.alt;
  });
});

closeBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.style.display === 'block') {
    closeModal();
  }
});


function closeModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  modalImg.src = '';
  modalImg.alt = '';
}
