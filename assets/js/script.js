function getPageKey() {
  const path = window.location.pathname;
  if (path.includes("about")) return "about";
  if (path.includes("projects")) return "projects";
  if (path.includes("contact")) return "contact";
  return "index";
}

// Apply language to navbar and section
function applyLanguage(lang) {
  const t = translations[lang];
  const pageKey = getPageKey();

  // Navbar
  $("#nav-home").text(t.nav.home);
  $("#nav-about").text(t.nav.about);
  $("#nav-projects").text(t.nav.projects);
  $("#nav-contact").text(t.nav.contact);

  // Highlight active language
  $(".lang-option").removeClass("active");
  $("#lang-" + lang).addClass("active");

  // Section
  $("#title-text").text(t.title[pageKey]);
  $("#subtitle-text").text(t.subtitle[pageKey]);
  $("#chat-input").attr("placeholder", t.input);
  $("#chat-send").text(t.send);
}

$(function() {
  // Load header, then apply language
  $("#header").load("partials/header.html", function() {
    const savedLang = localStorage.getItem("selectedLang") || "en";
    applyLanguage(savedLang);
  });

  // Load footer
  $("#footer").load("partials/footer.html", function() {
    document.getElementById("year").textContent = new Date().getFullYear();
  });

  // Chatbot mock answers (only on index)
  $(document).on('click', '#chat-send', function() {
    let question = $('#chat-input').val();
    if (!question) return;
    $('#chat-box').append('<div><strong>You:</strong> ' + question + '</div>');
    $('#chat-input').val('');
    let answer = 'Thanks for asking! I am Zoya, a developer passionate about coding.';
    if (question.toLowerCase().includes('project')) answer = 'I have done several projects in web and data.';
    if (question.toLowerCase().includes('skill')) answer = 'My skills include HTML, CSS, JS, PHP, and more.';
    $('#chat-box').append('<div><strong>ZoyaBot:</strong> ' + answer + '</div>');
    $('#chat-box').scrollTop($('#chat-box')[0].scrollHeight);
  });

  // Filter projects (only on projects)
  $(document).on('click', '.filter-btn', function() {
    let filter = $(this).data('filter');
    if (filter === 'all') {
      $('.project-card').show();
    } else {
      $('.project-card').hide();
      $('.project-card[data-category="' + filter + '"]').show();
    }
  });
});

// Language switcher (delegated, works after header load)
$(document).on("click", ".lang-option", function(e) {
  e.preventDefault();
  const lang = $(this).data("lang");
  localStorage.setItem("selectedLang", lang);
  applyLanguage(lang);
});