function createCarousel(images, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear existing content

    const carouselContainer = document.createElement('div');
    carouselContainer.classList.add('carousel-container');
    const carouselSlide = document.createElement('div');
    carouselSlide.classList.add('carousel-slide');

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        carouselSlide.appendChild(img);
    });

    carouselContainer.appendChild(carouselSlide);
    container.appendChild(carouselContainer);

    // Add navigation buttons
    const prev = document.createElement('a');
    prev.classList.add('prev');
    prev.innerHTML = '&#10094;';
    carouselContainer.appendChild(prev);

    const next = document.createElement('a');
    next.classList.add('next');
    next.innerHTML = '&#10095;';
    carouselContainer.appendChild(next);

    // Add navigation dots
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('dots-container');
    images.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.setAttribute('data-slide', index);
        dotsContainer.appendChild(dot);
    });

    container.appendChild(dotsContainer);

    let slideIndex = 0;
    const slides = document.querySelectorAll(`#${containerId} .carousel-slide img`);
    const dots = document.querySelectorAll(`#${containerId} .dot`);
    const slideWidth = slides[0].clientWidth;

    function showSlide(index) {
        carouselSlide.style.transform = `translateX(${-slideWidth * index}px)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            slideIndex = parseInt(e.target.getAttribute('data-slide'));
            showSlide(slideIndex);
        });
    });

    setInterval(nextSlide, 5000); // Auto-advance every 5 seconds

    // Initialize first slide
    showSlide(slideIndex);
}

export default createCarousel;
