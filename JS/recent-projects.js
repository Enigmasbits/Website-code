// Select all images in the slider
const slides = document.querySelectorAll(".slider2 img");
// Select the navigation links
const navLinks = document.querySelectorAll(".slider-nav a");

// Initialize the current slide index
let currentSlide = 0;

// Function to show the current slide and hide others
function showSlide(index) {
  // Hide all slides and remove the active class
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active"); // Add active class to show slide
    } else {
      slide.classList.remove("active"); // Remove active class to hide slide
    }
  });

  // Update the navigation links
  navLinks.forEach((link, i) => {
    link.classList.toggle("active", i === index);
  });
}

// Function to switch to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
  showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

// Set an interval to switch slides every 3 seconds (3000 milliseconds)
setInterval(nextSlide, 3000);
