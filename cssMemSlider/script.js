    const slides = document.getElementsByClassName('item');
    const dots = document.getElementsByClassName('slider-dots-item');
    const text = document.getElementsByClassName('silder-text')


// initial index

let slideIndex = 1;
showSlides(slideIndex);

// current index function

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// main function

function showSlides(n) {

    
    if (n > slides.length) {
      slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', "");
    }

    for (i=0; i < text.length; i++) {
        text[i].style.display = 'none'
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    text[slideIndex -1].style.display = 'block';

}

