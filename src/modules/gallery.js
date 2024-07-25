import pizza1 from '../images/pizza1.jfif';
import pizza2 from '../images/pizza2.jfif';
import pizza3 from '../images/pizza3.jfif';
import wings1 from '../images/wings1.jfif';
import wings2 from '../images/wings2.jfif';
import wings3 from '../images/wings3.jfif';
import hoagie1 from '../images/hoagie1.jfif';
import hoagie2 from '../images/hoagie2.jfif';
import hoagie3 from '../images/hoagie3.jfif';
import createCarousel from './carousel';

function loadGallery() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    const galleryDiv = document.createElement('div');
    galleryDiv.classList.add('gallery');

    const heading = document.createElement('h2');
    heading.textContent = 'Gallery';
    galleryDiv.appendChild(heading);

    const carouselContainer = document.createElement('div');
    carouselContainer.id = 'gallery-carousel';
    galleryDiv.appendChild(carouselContainer);

    content.appendChild(galleryDiv);

    const images = [pizza1, pizza2, pizza3, wings1, wings2, wings3, hoagie1, hoagie2, hoagie3];
    createCarousel(images, 'gallery-carousel');
}

export default loadGallery;

