document.addEventListener('DOMContentLoaded', () => {
  // Simulate a delay for demonstration purposes
      const preloader = document.getElementById('preloader');
      
      preloader.style.opacity = '0';

      preloader.addEventListener('transitionend', () => {
        preloader.style.display = 'none';
    });
 
});
