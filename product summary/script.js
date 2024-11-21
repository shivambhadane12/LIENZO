let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        thumbnails[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            thumbnails[i].classList.add('active');
        }
    });
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide-image');
    currentSlide += direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0; // Loop back to the first slide
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Go to the last slide
    }

    showSlide(currentSlide);
}

function selectSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);
