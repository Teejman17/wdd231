const memberInfo = new URLSearchParams(window.location.search);
console.log(memberInfo);

// const displayData = document.getElementById('submittedData');

document.querySelector('#submittedData').innerHTML = `<p>Full Name: ${memberInfo.get('first')} ${memberInfo.get('last')} </p>
<p></p>
<p>Your Email: ${memberInfo.get('email')}</p>
<p></p>
<p>Cell Phone: ${memberInfo.get('phone')}</p>
<p></p>
<p>Organization: ${memberInfo.get('organization')}</p >`

const year = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified ${document.lastModified}`;
