const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
// Leaf animation script

function createLeaf() {
  const leaf = document.createElement('div');
  leaf.classList.add('leaf');

  // Random size between 20px and 40px
  const size = Math.random() * 20 + 20;
  leaf.style.width = `${size}px`;
  leaf.style.height = `${size}px`;

  // Random horizontal position
  leaf.style.left = `${Math.random() * 100}%`;

  // Random animation duration and delay
  const duration = Math.random() * 5 + 5; // 5s to 10s
  const delay = Math.random() * 5;
  leaf.style.animationDuration = `${duration}s`;
  leaf.style.animationDelay = `${delay}s`;

  // Set leaf image
  leaf.style.backgroundImage = "url('images/leaf.png')";

  document.querySelector('.leaf-container').appendChild(leaf);

  // Remove leaf after animation completes
  setTimeout(() => {
    leaf.remove();
  }, (duration + delay) * 1000);
}

// Generate leaves every 800ms
setInterval(createLeaf, 800);


