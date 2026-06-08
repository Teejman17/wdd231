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
    attractions.forEach(attraction => {
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
        
        name.textContent = attraction.name;
        address.textContent = attraction.address;
        description.textContent = attraction.description;
        img.setAttribute('src', attraction.img);
        img.setAttribute('alt', attraction.name);
        img.setAttribute('loading', 'lazy');
        figure.appendChild(img);
        

        card.appendChild(name);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);
         
        showHere.appendChild(card);
        
    });
}

displayItems(attractions);


const year = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified ${document.lastModified}`;
