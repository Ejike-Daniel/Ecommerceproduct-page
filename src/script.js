// Hamburger Menu:

function showSideBar() {
  document.querySelector(".hamburger").classList.toggle("hidden");
  document.querySelector(".delete").classList.toggle("hidden");
  document.querySelector(".navList").classList.remove("hidden");
  document.querySelector(".navList").classList.add("flex-col");
}

function hideSideBar() {
  document.querySelector(".hamburger").classList.toggle("hidden");
  document.querySelector(".delete").classList.toggle("hidden");
  document.querySelector(".navList").classList.add("hidden");
  document.querySelector(".navList").classList.remove("flex-col");
}

// Image slider:

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slider-img");
  slides.forEach((slide, slideIndex) => {
    if (slideIndex === index) {
      slide.classList.remove("hidden");
    } else {
      slide.classList.add("hidden");
    }
  });
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + 4) % 4;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % 4;
  showSlide(currentSlide);
}

showSlide(currentSlide);
