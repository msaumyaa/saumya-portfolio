const navSlide = () => {
  const burger = document.querySelector(".burger")
  const nav = document.querySelector(".nav-links")
  const navLinks = document.querySelectorAll('.nav-links li')
  
  // Toggle nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')
  });
  
  // Animate Links
  navLinks.forEach((link, index) => {
    console.log(index / 7)
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 1.5}s`;
  });
}

navSlide()