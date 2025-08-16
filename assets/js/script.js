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

  // Timeline (only on about page)
  if ($("#timeline-content").length) {
    renderTimeline(lang);
  }

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
  $(document).trigger("languageChanged", [lang]);
});

// Timeline hover tooltip
$(document).on('mouseenter', '.timeline-item', function(e) {
  const title = $(this).data('title');
  const time = $(this).data('time');
  const desc = $(this).data('desc');
  
  $('#tooltip-title').text(title);
  $('#tooltip-time').text(time);
  $('#tooltip-desc').text(desc);
  
  $('#timeline-tooltip')
    .css({ top: e.pageY - 100, left: e.pageX - 100 })
    .fadeIn(200);
});

$(document).on('mousemove', '.timeline-item', function(e) {
  $('#timeline-tooltip').css({ top: e.pageY - 100, left: e.pageX - 100 });
});

$(document).on('mouseleave', '.timeline-item', function() {
  $('#timeline-tooltip').fadeOut(150);
});




// Scroll animation for timeline
function revealTimeline() {
  document.querySelectorAll('.timeline-item').forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add('show');
    }
  });
}
window.addEventListener('scroll', revealTimeline);
window.addEventListener('load', revealTimeline);

function renderTimeline(lang) {
  if (!translations[lang] || !translations[lang].timeline) return;
  const timeline = translations[lang].timeline;
  const readMoreText = translations[lang].readMore || "Read more";
  let html = "";
  timeline.forEach(item => {
    html += `
      <div class="timeline-item" data-year="${item.year}">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h5>${item.title}</h5>
          <h6>
            <span class="institution">${item.institution}</span>
            <span class="stripe"></span>
            <span class="location"><i>${item.location}</i></span>
          </h6>
          <p class="small mb-2">${item.period}</p>
          <p class="short-text">${item.short}</p>
          <p class="full-text d-none">${item.full}</p>
          <button class="btn btn-sm btn-outline-primary toggle-btn">${readMoreText}</button>
        </div>
      </div>
    `;
  });
  $("#timeline-content").html(html);

  // Add this line to trigger the animation immediately after rendering
  revealTimeline();
}

// Expand / collapse details
$(document).on('click', '.toggle-btn', function() {
  const lang = localStorage.getItem("selectedLang") || "en";
  const readMore = translations[lang].readMore || "Read more";
  const showLess = translations[lang].showLess || "Show less";
  const content = $(this).closest('.timeline-content');
  const shortText = content.find('.short-text');
  const fullText = content.find('.full-text');
  const isExpanded = !fullText.hasClass('d-none');
  console.log("Toggle button clicked", isExpanded, shortText, fullText);

  if (isExpanded) {
    // Collapse
    fullText.addClass('d-none');
    //shortText.removeClass('d-none');
    $(this).text(readMore);
  } else {
    // Expand
    fullText.removeClass('d-none');
    //shortText.addClass('d-none');
    $(this).text(showLess);
  }
});