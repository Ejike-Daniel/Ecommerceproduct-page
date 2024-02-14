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
// previous button
function prevSlide() {
  currentSlide = (currentSlide - 1 + 4) % 4;
  showSlide(currentSlide);
}

// The next buttton's function
function nextSlide() {
  currentSlide = (currentSlide + 1) % 4;
  showSlide(currentSlide);
}

showSlide(currentSlide);

// image display

// Referencing to the necessary elements (classes and id)
const imageDisplayContainer = document.querySelector(
  ".image-Display-Container"
);
const displayedImage = document.getElementById("displayedImage");
const closeButton = document.querySelector(".close");
const imageContainer = document.querySelector(".img-container");

// Adding an event-listener to the image container
imageContainer.addEventListener("click", (e) => {
  // checking if the clicked element is an img
  if (e.target.tagName === "IMG") {
    // if it's an image, get the source attribute(src)
    const src = e.target.getAttribute("src");
    // set the src of the displayed image to the clicked image's src
    displayedImage.setAttribute("src", src);
    // remove the hidden class of the image display container to show it's content
    imageDisplayContainer.classList.remove("hidden");
  }
});
// Adding an event listener to the close button, once clicked , it adds the 'hidden' class to the image container
closeButton.addEventListener("click", () => {
  imageDisplayContainer.classList.add("hidden");
});

// image border color when clicked

const image = document.querySelector(".images");

images.addEventListener("onclick", () => {
  images.classList.toggle("border-orange-500");
});
