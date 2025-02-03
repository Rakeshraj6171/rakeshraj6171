// Tabbed Navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('section').forEach(section => section.classList.remove('active-section'));
    document.querySelector(this.getAttribute('href')).classList.add('active-section');
  });
});

// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
