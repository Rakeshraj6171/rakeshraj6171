// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
document.body.prepend(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Add dark mode styles in CSS
/*
.dark-mode {
  background-color: #333;
  color: #f4f4f4;
}

.dark-mode section {
  background-color: #444;
  color: #f4f4f4;
}
*/