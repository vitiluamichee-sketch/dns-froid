document.addEventListener('DOMContentLoaded', () => {

  /* ---- Header : solide au scroll ---- */
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    header.classList.toggle('is-solid', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Menu mobile ---- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---- Galerie / lightbox ---- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('is-open');
    });
  });

  function closeLightbox(){
    lightbox.classList.remove('is-open');
    lightboxImg.src = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

  /* ---- Formulaire de contact -> WhatsApp ---- */
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nom = document.getElementById('cNom').value.trim();
    const tel = document.getElementById('cTel').value.trim();
    const msg = document.getElementById('cMsg').value.trim();
    const texte = `Bonjour DNS Froid, je m'appelle ${nom} (${tel}).\n${msg}`;
    window.open(`https://wa.me/243890252012?text=${encodeURIComponent(texte)}`, '_blank');
  });

});
