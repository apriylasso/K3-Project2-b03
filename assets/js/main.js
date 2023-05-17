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