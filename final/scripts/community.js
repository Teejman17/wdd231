const navButton = document.querySelector('#hamButton');
const navLinks = document.querySelector('#navBar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
});

const dataURL = 'data/data.json';
const trailCards = document.querySelector('#trails');
const vendorCards = document.querySelector('#vendors');

const displayTrails = (trails) => {
    trails.forEach((trail) => {
    
        const card = document.createElement('section');
        const name = document.createElement('h3');
        const img = document.createElement('img');
        const distance = document.createElement('p');
        const desc = document.createElement('p');

        name.textContent = trail.trailName;
        img.setAttribute('src', trail.img);
        img.setAttribute('alt', 'trail image');
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '300');
        img.setAttribute('height', '200');
        distance.textContent = `Distance: ${trail.distance}`;
        desc.textContent = trail.trailDescription;

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(distance);
        card.appendChild(desc);

        trailCards.appendChild(card);
        
    });
};

async function getTrailData() {
    const response = await fetch(dataURL);
    const data = await response.json();
    console.table(data.trails);
    displayTrails(data.trails);
    
}

getTrailData();

const displayVendors = (vendors) => {
    vendors.forEach((vendor) => {

        const card = document.createElement('section');
        const name = document.createElement('h3');
        const img = document.createElement('img');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('a');

        name.textContent = vendor.companyName;
        img.setAttribute('src', vendor.img);
        img.setAttribute('alt', 'vendor image');
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '300');
        img.setAttribute('height', '200');
        address.textContent = vendor.companyAddress;
        phone.textContent = `Phone: ${vendor.phoneNumber}`;
        website.href = vendor.website;
        website.textContent = `Visit ${vendor.companyName}'s website`;

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        vendorCards.appendChild(card);
    });
};

async function getVendorData() {
    const response = await fetch(dataURL);
    const data = await response.json();
    console.table(data.vendors);
    displayVendors(data.vendors);

}

getVendorData();


const year = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified ${document.lastModified}`;