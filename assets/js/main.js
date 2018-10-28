document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });


  languative.modifyDictionary("en", {
    welcomeMessage: "Witaj na stronie testowej Languative",
    selectLanguage: "Możesz wybrać język przez kliknięcie linków poniżej",
    english: "English",
    spanish: "Spanish",
    contact: "Contact",
    siteTitle: "Kayak Adapted Paddle",
    siteSubtitle: "An innovative kayak paddle design, directed to...",
    alertTitle: "We are currently preparing for our first production run",
    alertMessage: "If you would be interested in buying a KAP®, send us an e-mail with your details to:",
    section_1: "Missing first section translation....",
    section_2: "Missing section 2 translation...",
    section_3: "Missing third section translation...",
    footer_authors: " has been designed by:",
    footer_author_1: "Juan Luís de Andrés Muguruza - MISSING ENGLISH TRANSLATION!",
    footer_author_2: "Gema Fernández García - MISSING ENGLISH TRANSLATION!",
    pattent_pending: "KAP® Pattent pending"

  });

  languative.modifyDictionary("es", {
    alertTitle: "Estamos preparando la primera ronda de producción",
    alertMessage: "Si estás interesado en adquirir un KAP®, envíanos un mail a:"
  });


  function changeToEnglish(){
      document.getElementById('lang-es').classList.remove('is-active');
    languative.changeLanguage('en');
    document.getElementById('lang-eng').classList.add('is-active');
  }

  function changeToSpanish(){
    document.getElementById('lang-eng').classList.remove('is-active');
    languative.changeLanguage('html');
    document.getElementById('lang-es').classList.add('is-active');
}