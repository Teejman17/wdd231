const navButton = document.querySelector('#hamButton');
const navLinks = document.querySelector('#navBar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
});

import { attractions } from "../../data/attractions.mjs";
// console.log(attractions);

const showHere = document.querySelector('#gridArea');

function displayItems(attractions) {
    attractions.forEach((attraction, index) => {
        const card = document.createElement('section');
        card.classList.add('attraction-card');
        const name = document.createElement('h2');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const address = document.createElement('address');
        const description = document.createElement('p');
        const button = document.createElement('button');
        button.classList.add('attraction-button');
        button.type = "button";
        button.textContent = "Learn More";
        button.setAttribute('aria-label', `Learn more about ${attraction.name}`);
        
        name.textContent = attraction.name;
        address.textContent = attraction.address;
        description.textContent = attraction.description;
        img.setAttribute('src', attraction.img);
        img.setAttribute('alt', attraction.name);
        img.setAttribute('width', '300');
        img.setAttribute('height', '200');
        if (index === 0) {
            img.setAttribute('loading', 'eager');
            img.setAttribute('fetchpriority', 'high');
        } else {
                img.setAttribute('loading', 'lazy');
        }
    
        figure.appendChild(img);
        

        card.appendChild(figure);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(button);
         
        showHere.appendChild(card);
        
    });
}

displayItems(attractions);

const visitMessage = document.querySelector('#visitDate');
const currentVisitDate = Date.now();
const lastVisit = localStorage.getItem('last-visit-date');

if (!lastVisit) {
    visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
} else {
    const timeDifference = currentVisitDate - parseInt(lastVisit);
    const msDays = 86400000;
    const daysBetween = Math.floor(timeDifference / msDays);

    if (timeDifference < msDays) {
        visitMessage.textContent = 'Back so Soon! Awesome';
    } else {
        if (daysBetween === 1) {
            visitMessage.textContent = 'You last visited 1 day ago';
        } else {
            visitMessage.textContent = `You last visited ${daysBetween} days ago`;
        }

    }
}

localStorage.setItem('last-visit-date', currentVisitDate);

const year = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified ${document.lastModified}`;
