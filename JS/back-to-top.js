document.addEventListener("scroll", function() {
    const button = document.getElementById("scrollButton");
    const halfPageHeight = document.body.scrollHeight / 4;
  
    if (window.scrollY > halfPageHeight) {
      button.classList.add("visible"); // Add class to show the button
    } else {
      button.classList.remove("visible"); // Remove class to hide the button
    }
  });
  
  // Optional: Scroll to top when the button is clicked
  document.getElementById("scrollButton").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });