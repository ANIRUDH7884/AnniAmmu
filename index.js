// Initialize AOS
AOS.init({
  duration: 800, // animation duration in ms
  once: true,    // whether animation should happen only once while scrolling down
});

 const music = document.getElementById('bg-music');
  const overlay = document.getElementById('start-music-overlay');

  // Disable scrolling initially
  document.documentElement.classList.add('no-scroll');
  document.body.classList.add('no-scroll');

  overlay.addEventListener('click', () => {
    music.play().then(() => {
      overlay.style.display = 'none';
      // Enable scrolling
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
    }).catch(err => {
      console.error("Autoplay error:", err);
    });
  });

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = window.innerHeight + 20 + 'px';
  heart.style.animationDuration = 3 + Math.random() * 3 + 's';
  heart.style.opacity = Math.random();
  document.getElementById('heart-container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Create hearts every 300ms
setInterval(createHeart, 300);
