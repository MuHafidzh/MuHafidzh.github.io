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
      // Open/download the CV file
      const cvUrl = 'files/my_cv.pdf';
      const a = document.createElement('a');
      a.href = cvUrl;
      a.download = 'Muhammad_Hafidzh_CV.pdf'; // change filename if you want
      a.target = '_blank';
      a.rel = 'noopener';
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  }

  // Contact form handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('nameInput')?.value.trim();
      const email = document.getElementById('emailInput')?.value.trim();
      const phone = document.getElementById('phoneInput')?.value.trim(); // add
      const msg = document.getElementById('msgInput')?.value.trim();

      if (!name || !email) {
        alert("Please fill in your name and email address.");
        return;
      }

      const to = 'hafidzhhabsyi04@gmail.com'; // set to your real email
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '(not provided)'}\n\nMessage:\n${msg || '(no message)'}`
      );

      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
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
