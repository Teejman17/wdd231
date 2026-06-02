const navButton = document.querySelector('#hamButton');
const navLinks = document.querySelector('#navBar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
});

document.querySelector('#timestamp').value = new Date().toLocaleString();

const modalOpen = document.querySelector('.modalOpen');
const modalClose = document.querySelector('.modalClose');

modalOpen.forEach(button => {
    const
})