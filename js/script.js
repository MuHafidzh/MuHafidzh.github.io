// js/script.js
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Download CV button (simulate contact request)
  const downloadBtn = document.getElementById('downloadCVBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      alert("📄 Hi! Send an email to hafidzhhabsy04@gmail.com requesting my full CV, and I'll share the latest version within 24 hours.");
    });
  }

  // Contact form handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('nameInput')?.value.trim();
      const email = document.getElementById('emailInput')?.value.trim();
      const msg = document.getElementById('msgInput')?.value.trim();
      if (!name || !email) {
        alert("Please fill in your name and email address.");
        return;
      }
      alert(`✨ Thanks ${name}, I've received your message. I'll get back to you at ${email} soon.`);
      contactForm.reset();
    });
  }

  // Back to top button logic
  const backBtn = document.getElementById('back2topBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) backBtn.classList.add('show');
    else backBtn.classList.remove('show');
  });
  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Optional: Add dynamic year in footer
  const footerYear = document.querySelector('footer .container p:first-child');
  if (footerYear) {
    const year = new Date().getFullYear();
    footerYear.innerHTML = `© ${year} Muhammad Hafidzh — Electrical Engineering & Robotics Portfolio. Ready for full‑time opportunities starting 2026.`;
  }
});
