import './styles.css';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadGallery from './modules/gallery';

function init() {
    const content = document.getElementById('content');
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const galleryBtn = document.getElementById('gallery-btn');

    homeBtn.addEventListener('click', () => {
        content.innerHTML = '';
        loadHome();
    });

    menuBtn.addEventListener('click', () => {
        content.innerHTML = '';
        loadMenu();
    });

    galleryBtn.addEventListener('click', () => {
        content.innerHTML = '';
        loadGallery();
    });

    // Load home by default
    loadHome();
}

init();
