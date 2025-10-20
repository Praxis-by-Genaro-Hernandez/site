/* scripts.js */
function joinCommunity() {
  alert('Thank you for your interest! Community registration opens soon.');
}

document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent! We will contact you soon.');
});
