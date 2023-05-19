const sliderContainer = document.querySelector(".slider-container");
const sliderItems = document.querySelectorAll(".slider-item");
const sliderPrev = document.querySelector(".slider-prev");
const sliderNext = document.querySelector(".slider-next");
const sliderDots = document.querySelectorAll(".slider-dot");

let currentIndex = 0;
let intervalId = null;

function showSlide(index) {
    currentIndex = index;
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    sliderDots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex =
        (currentIndex + sliderItems.length - 1) % sliderItems.length;
    showSlide(currentIndex);
}

function startAutoSlide() {
    intervalId = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

sliderPrev.addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
});

sliderNext.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
});

sliderDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        stopAutoSlide();
        showSlide(index);
    });
});

startAutoSlide();
const swiperPrev = document.querySelector(".prev");
const swiperNext = document.querySelector(".next");
const swiper = document.querySelector('.swiper');
const cards = document.querySelectorAll('.card');

let currentsIndex = 0;
const cardWidth = cards[0].offsetWidth;
const cardMargin = parseInt(getComputedStyle(cards[0]).marginRight);

function showCard(index) {
  const position = -(cardWidth + cardMargin) * index;
  swiper.style.transform = `translateX(${position}px)`;
}

function swipeNext() {
  currentsIndex = (currentsIndex + 1) % cards.length;
  showCard(currentsIndex);
}

function swipePrev() {
  currentsIndex = (currentsIndex - 1 + cards.length) % cards.length;
  showCard(currentsIndex);
}

swiperPrev.addEventListener("click", () => {
    swipePrev();
});

swiperNext.addEventListener("click", () => {
    swipeNext();
});

// document.querySelector('.swiper-container').addEventListener('click', (event) => {
//   if (event.target.classList.contains('prev')) {
//     console.log('prev');
//     swipePrev();
//   } else if (event.target.classList.contains('next')) {
//     swipeNext();
//   }
// });

// Tampilkan kartu pertama saat halaman dimuat
showCard(currentsIndex);
