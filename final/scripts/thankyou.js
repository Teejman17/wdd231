const navButton = document.querySelector('#hamButton');
const navLinks = document.querySelector('#navBar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
});

const submittedInfo = new URLSearchParams(window.location.search);
console.log(submittedInfo);

document.querySelector('#submittedData').innerHTML = `<p>Full Name: ${submittedInfo.get('first')} ${submittedInfo.get('last')} </p>
<p></p>
<p>Your Email: ${submittedInfo.get('email')}</p>
<p></p>
<p>Cell Phone: ${submittedInfo.get('phone')}</p>
<p></p>`

const year = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified ${document.lastModified}`;
