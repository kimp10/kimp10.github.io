// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
       e.preventDefault();
       document.querySelector(this.getAttribute('href')).scrollIntoView({
           behavior: 'smooth'
       });
   });
});
// Back-to-top button functionality
window.addEventListener('scroll', () => {
   const button = document.getElementById('back-to-top');
   if (window.scrollY > 300) {
       button.style.display = 'block';
   } else {
       button.style.display = 'none';
   }
});
function scrollToTop() {
   window.scrollTo({ top: 0, behavior: 'smooth' });
}
// Intersection Observer for fade-in animations
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
       if (entry.isIntersecting) {
           entry.target.classList.add("visible");
       }
   });
}, { threshold: 0.2 });
sections.forEach((section) => observer.observe(section));