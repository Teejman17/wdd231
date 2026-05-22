const navButton = document.querySelector('#hamButton');
const navLinks = document.querySelector('#navBar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
});

const url = "../data/members.json";
const cards = document.querySelector("#membersSection");

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let img = document.createElement('img');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let level = document.createElement('p');
        let slogan = document.createElement('p');
        let established = document.createElement('p');

        name.textContent = member.companyName;
        address.textContent = member.companyAddress;
        phone.textContent = `Phone: ${member.phoneNumber}`;
        slogan.textContent = `"${member.slogan}"`;
        established.textContent = member.establishedYear;
        website.href = member.website;
        website.textContent = `Visit ${member.companyName}'s website`;

        img.setAttribute('src', `images/${member.img}`);
        img.setAttribute('alt', `member image`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '200');
        img.setAttribute('height', '150');

        let membershipLevel = 'member';
        if (member.membership == 2) membershipLevel = 'Silver Member';
        if (member.membership == 3) membershipLevel = 'Gold Member';
        level.textContent = `Level: ${membershipLevel}`;

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(slogan);
        card.appendChild(website);
        card.appendChild(level);
        card.appendChild(established);

        cards.appendChild(card)

    });
};

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
    
}

getMemberData();

const gridButton = document.querySelector('#gridButton');
const listButton = document.querySelector('#listButton');
const displayMenu = document.querySelector('#membersSection');

listButton.addEventListener('click', () => {
    displayMenu.classList.add('list');
});
    
gridButton.addEventListener('click', () => {
    displayMenu.classList.remove('list');
    
});


const year = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;


const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified ${document.lastModified}`;

