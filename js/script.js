// ---------- Scroll Animation for Cards ----------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const cards = document.querySelectorAll('.card');
cards.forEach((card) => observer.observe(card));

// ---------- Input Glow on Focus ----------
const searchInput = document.querySelector('.nav-right input');
if (searchInput) {
  searchInput.addEventListener('focus', () => {
    searchInput.style.outline = '2px solid #fd1ccc';
  });
  searchInput.addEventListener('blur', () => {
    searchInput.style.outline = 'none';
  });
}

// ---------- Scroll to Top Button ----------
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
scrollBtn.id = 'scrollTopBtn';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '30px';
scrollBtn.style.right = '30px';
scrollBtn.style.padding = '10px 15px';
scrollBtn.style.background = '#fd1ccc';
scrollBtn.style.color = '#121212';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.fontSize = '18px';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
scrollBtn.style.zIndex = '999';
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

// ---------- Placeholder for Future Logic ----------
/*
document.querySelector('.login-btn')?.addEventListener('click', () => {
  // Optional: Validate login via backend
  alert('Login system will be integrated soon!');
});
*/

// ---------- Animate .card fade-in (support CSS) ----------
const style = document.createElement('style');
style.innerHTML = `
.card {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}
.card.show {
  opacity: 1;
  transform: translateY(0);
}`;
document.head.appendChild(style);
