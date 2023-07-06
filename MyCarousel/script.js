let slideIndex = 0;
const slides = document.querySelectorAll(".slider-container .slide");
let timer;

function showSlide() {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
}

function startSlideShow() {
  timer = setInterval(nextSlide, 5000);
}

function stopSlideShow() {
  clearInterval(timer);
}

showSlide();
startSlideShow();
