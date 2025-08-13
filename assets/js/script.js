function getPageKey() {
  const path = window.location.pathname;
  if (path.includes("about")) return "about";
  if (path.includes("projects")) return "projects";
  if (path.includes("contact")) return "contact";
  return "index";
}

$(document).ready(function() {

  // After header/footer loaded and DOM ready
  const savedLang = localStorage.getItem("selectedLang") || "en";
  const t = translations[savedLang];
  const pageKey = getPageKey();

  // Navbar
  $("#nav-home").text(t.nav.home);
  $("#nav-about").text(t.nav.about);
  $("#nav-projects").text(t.nav.projects);
  $("#nav-contact").text(t.nav.contact);
  $("#langDropdown").text(t.nav.lang);

  // Section
  $("#title-text").text(t.title[pageKey]);
  $("#subtitle-text").text(t.subtitle[pageKey]);
  $("#chat-input").attr("placeholder", t.input);
  $("#chat-send").text(t.send);
  
  // Dynamic year
  $("#year").text(new Date().getFullYear());

  // Chatbot mock answers (only on index)
  if ($("#chat-send").length) {
    $('#chat-send').click(function() {
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
  }

  // Filter projects (only on projects)
  if ($('.filter-btn').length) {
    $('.filter-btn').click(function() {
      let filter = $(this).data('filter');
      if (filter === 'all') {
        $('.project-card').show();
      } else {
        $('.project-card').hide();
        $('.project-card[data-category="' + filter + '"]').show();
      }
    });
  }
});

$(document).on("click", ".lang-option", function(e) {
  e.preventDefault();
  const lang = $(this).data("lang");
  localStorage.setItem("selectedLang", lang); // Save to localStorage
  const t = translations[lang];
  const pageKey = getPageKey();

  // Navbar
  $("#nav-home").text(t.nav.home);
  $("#nav-about").text(t.nav.about);
  $("#nav-projects").text(t.nav.projects);
  $("#nav-contact").text(t.nav.contact);
  $("#langDropdown").text(t.nav.lang);

  // Section
  $("#title-text").text(t.title[pageKey]);
  $("#subtitle-text").text(t.subtitle[pageKey]);
  $("#chat-input").attr("placeholder", t.input);
  $("#chat-send").text(t.send);
});