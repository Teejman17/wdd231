const navButton = document.querySelector('#hamButton');
const navLinks = document.querySelector('#navBar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
});

const url = "data/member.json";
const cards = document.querySelector("#membersSection");

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let level = document.createElement('p');
        let slogan = document.createElement('p');
        let established = document.createElement('p');
        companyName.textContent = member.companyName;
    }
    )
}

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
    
};

const year = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;


const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified ${document.lastModified}`;

