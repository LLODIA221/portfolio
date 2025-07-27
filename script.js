document.addEventListener('DOMContentLoaded', function () {
  // Gestion du formulaire de contact
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      formMessage.textContent = 'Envoi en cours...';
      formMessage.style.color = '#2196f3';
      
      const data = new FormData(form);
      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            formMessage.textContent = 'Merci pour votre message ! Je vous répondrai rapidement.';
            formMessage.style.color = '#4CAF50';
            form.reset();
          } else {
            formMessage.textContent = 'Une erreur est survenue. Merci de réessayer.';
            formMessage.style.color = '#f44336';
          }
        })
        .catch(() => {
          formMessage.textContent = 'Une erreur est survenue. Merci de réessayer.';
          formMessage.style.color = '#f44336';
        });
    });
  }
  
  // Menu burger
  const burger = document.querySelector('.burger');
  const navMenu = document.getElementById('nav-menu');
  if (burger && navMenu) {
    burger.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen);
      burger.classList.toggle('open');
      
      // Empêcher le défilement du body quand le menu est ouvert
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    
    // Fermer le menu quand on clique sur un lien
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
      });
    });
  }
  
  // Apparition animée des cartes de compétences
  const skillCards = document.querySelectorAll('.skill-card[data-appear]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    skillCards.forEach(card => observer.observe(card));
  } else {
    // Fallback : affiche tout si IntersectionObserver non supporté
    skillCards.forEach(card => card.classList.add('visible'));
  }

  // Scroll to top
  const scrollBtn = document.getElementById('scrollToTop');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });
  scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Animation des barres de compétences
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  if ('IntersectionObserver' in window) {
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Récupérer la largeur définie dans le style inline
          const width = entry.target.style.width;
          // Réinitialiser à 0 puis animer vers la valeur cible
          entry.target.style.width = '0%';
          setTimeout(() => {
            entry.target.style.width = width;
          }, 100);
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    skillBars.forEach(bar => barObserver.observe(bar));
  }
});