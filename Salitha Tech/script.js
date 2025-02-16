// Add interactivity if needed
// Example: Animate service cards on scroll
const serviceCards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
});

serviceCards.forEach((card) => {
  observer.observe(card);
});
// Testimonials Carousel
const testimonials = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    if (i === index) {
      testimonial.classList.add('active');
    }
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
  showTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
  showTestimonial(currentIndex);
});

// Auto-rotate testimonials (optional)
setInterval(() => {
  currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
  showTestimonial(currentIndex);
}, 5000); // Change testimonial every 5 seconds
// Add interactivity if needed
// Example: Animate blog cards on scroll
// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');

backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function downloadFile(filename) {
  // Create a link element
  const link = document.createElement('a');
  link.href = filename;
  link.download = filename;

  // Append the link to the body (required for Firefox)
  document.body.appendChild(link);

  // Trigger the download
  link.click();

  // Remove the link from the document
  document.body.removeChild(link);
}