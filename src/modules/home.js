
import pizza1 from '../images/pizza1.jfif';
import pizza2 from '../images/pizza2.jfif';
import pizza3 from '../images/pizza3.jfif';
import wings1 from '../images/wings1.jfif';
import wings2 from '../images/wings2.jfif';
import wings3 from '../images/wings3.jfif';
import hoagie1 from '../images/hoagie1.jfif';
import hoagie2 from '../images/hoagie2.jfif';
import hoagie3 from '../images/hoagie3.jfif';
import img from '../images/logo.png';
import createCarousel from './carousel';

function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    const heading = document.createElement('h2');
    heading.textContent = 'Welcome to Milmont Pizza!';
    homeDiv.appendChild(heading);

    const logoImg = document.createElement('img');
    logoImg.src = img;  // Ensure the path to your logo image is correct
    logoImg.alt = 'Milmont Pizza Logo';
    logoImg.classList.add('logo');
    homeDiv.appendChild(logoImg);

    // Add first carousel above the information
    const topCarouselContainer = document.createElement('div');
    topCarouselContainer.classList.add('carousel-container');
    topCarouselContainer.id = 'top-carousel';
    homeDiv.appendChild(topCarouselContainer);

    // Info Box
    const infoBox = document.createElement('div');
    infoBox.classList.add('info-box');

    // Contact Info
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    contactInfo.innerHTML = `
        <h3>Contact Us</h3>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@milmontpizza.com</p>
    `;
    infoBox.appendChild(contactInfo);

    // Hours Info
    const hoursInfo = document.createElement('div');
    hoursInfo.classList.add('hours-info');
    hoursInfo.innerHTML = `
        <h3>Hours</h3>
        <ul>
            <li>Monday: 10am - 10pm</li>
            <li>Tuesday: 10am - 10pm</li>
            <li>Wednesday: 10am - 10pm</li>
            <li>Thursday: 10am - 10pm</li>
            <li>Friday: 10am - 10pm</li>
            <li>Saturday: 11am - 10pm</li>
            <li>Sunday: 11am - 9pm</li>
        </ul>
    `;
    infoBox.appendChild(hoursInfo);

    homeDiv.appendChild(infoBox);

    // Add three carousels below the information
    const carouselContainers = ['pizza-carousel', 'wings-carousel', 'hoagie-carousel'];
    carouselContainers.forEach(id => {
        const carouselContainer = document.createElement('div');
        carouselContainer.classList.add('carousel-container');
        carouselContainer.id = id;
        homeDiv.appendChild(carouselContainer);
    });

    content.appendChild(homeDiv);

    // Initialize carousels with different sets of images
    const pizzaImages = [pizza1, pizza2, pizza3];
    const wingsImages = [wings1, wings2, wings3];
    const hoagieImages = [hoagie1, hoagie2, hoagie3];
    createCarousel(pizzaImages, 'top-carousel');  // Carousel above information
    createCarousel(wingsImages, 'wings-carousel');
    createCarousel(hoagieImages, 'hoagie-carousel');
}

export default loadHome;
