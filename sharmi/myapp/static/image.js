// Select all gallery images and modal elements
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.getElementById('close-modal');

// Add click event listener for each gallery image
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    // Open the modal
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    
    // Set the modal image's source and alt attributes
    modalImg.src = image.src;
    modalImg.alt = image.alt;
  });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', closeModal);

// Close the modal when the Escape key is pressed
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.style.display === 'block') {
    closeModal();
  }
});

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  modalImg.src = '';
  modalImg.alt = '';
}
