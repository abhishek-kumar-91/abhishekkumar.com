// SmoothScroll.jsx (or any relevant script file)
document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('.scroll-link');
  
    scrollLinks.forEach(function(scrollLink) {
      scrollLink.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetPosition = document.querySelector(targetId).offsetTop;
  
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    });
  });
  