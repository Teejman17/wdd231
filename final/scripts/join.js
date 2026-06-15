const navButton = document.querySelector('#hamButton');
const navLinks = document.querySelector('#navBar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
});


const dialog = document.querySelector('.modal dialog');
const openButton = document.querySelector('.modalOpen');
const closeButton = document.querySelector('.modalClose');

openButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
});


const timestamp = document.querySelector('#timestamp');
if (timestamp) {
    timestamp.value = new Date().toLocaleString();
}

const year = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified ${document.lastModified}`;