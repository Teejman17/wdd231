const navButton = document.querySelector('#hamButton');
const navLinks = document.querySelector('#navBar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
});

const timestamp = document.querySelector('#timestamp');
    if (timestamp) {
        timestamp.value = new Date().toLocaleString();
    }
    
const modalOpen = document.querySelectorAll('.modalOpen');
const modalClose = document.querySelectorAll('.modalClose');

modalOpen.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const targetModal = document.getElementById(modalId);

        if (targetModal) {
            targetModal.showModal();
        }
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('dialog');
        if (modal) {
            modal.close();
        }
    });
});

const year = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified ${document.lastModified}`;

