function getCurrentLang() {
  return localStorage.getItem("selectedLang") || "en";
}

function getProjects(lang) {
  return translations[lang]?.projects || [];
}

function renderProjects(projects) {
  let html = "";
  projects.forEach(project => {
    html += `
      <div class="col-md-4 mb-4 project-card" 
           data-title="${project.title.toLowerCase()}" 
           data-tags="${(project.tags || []).join(',').toLowerCase()}" 
           data-category="${project.category}">
        <div class="card h-100">
          <img src="${project.image}" class="card-img-top" alt="${project.title}">
          <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.description}</p>
            <div class="mb-2">
              ${(project.tags || []).map(tag => `<span class="badge">${tag}</span>`).join(' ')}
            </div>
            <!-- Add more fields as needed -->
          </div>
        </div>
      </div>
    `;
  });
  $("#projects-container").html(html);
}

function renderTabs(projects, lang) {
  // Get unique categories and translate if needed
  const categories = [...new Set(projects.map(p => p.category))];
  let tabsHtml = `<li class="nav-item">
                   <a class="nav-link active" data-category="all" href="#">${translations[lang]?.all || "All"}</a>
                 </li>`;
  categories.forEach(cat => {
    tabsHtml += `<li class="nav-item">
                   <a class="nav-link" data-category="${cat}" href="#">${cat}</a>
                 </li>`;
  });
  $("#project-tabs").html(tabsHtml);
}

function filterAndRenderProjects(projects, category, keyword, order) {
  let filtered = projects;
  if (category && category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }
  if (keyword) {
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(keyword) ||
      (p.tags || []).join(',').toLowerCase().includes(keyword)
    );
  }
  if (order === "asc" || order === "desc") {
    filtered = filtered.slice().sort((a, b) =>
      order === "asc"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
    );
  }
  renderProjects(filtered);
}

function setupProjectEvents(projects, lang) {
  // Filter by category tab
  $(document).off("click", "#project-tabs .nav-link").on("click", "#project-tabs .nav-link", function(e) {
    e.preventDefault();
    $("#project-tabs .nav-link").removeClass("active");
    $(this).addClass("active");
    const category = $(this).data("category");
    const keyword = $("#search-input").val().toLowerCase();
    const order = $("#sort-select").val();
    filterAndRenderProjects(projects, category, keyword, order);
  });

  // Search by keyword
  $("#search-input").off("keyup").on("keyup", function() {
    const keyword = $(this).val().toLowerCase();
    const category = $("#project-tabs .nav-link.active").data("category");
    const order = $("#sort-select").val();
    filterAndRenderProjects(projects, category, keyword, order);
  });

  // Sort by date
  $("#sort-select").off("change").on("change", function() {
    const order = $(this).val();
    const category = $("#project-tabs .nav-link.active").data("category");
    const keyword = $("#search-input").val().toLowerCase();
    filterAndRenderProjects(projects, category, keyword, order);
  });
}

function renderAllProjectsUI(lang) {
  const projects = getProjects(lang);
  renderTabs(projects, lang);
  renderProjects(projects);
  setupProjectEvents(projects, lang);
  updateProjectsUITexts(lang);
}

$(function() {
  // Initial render
  const lang = getCurrentLang();
  renderAllProjectsUI(lang);

  // Re-render on language change
  $(document).on("languageChanged", function(e, lang) {
    renderAllProjectsUI(lang);
  });
});

// Hook for applyLanguage in script.js
function renderProjectsByLang(lang) {
  renderAllProjectsUI(lang);
}

function updateProjectsUITexts(lang) {
  // Update search placeholder
  $("#search-input").attr("placeholder", translations[lang]?.searchPlaceholder || "Search projects...");
  // Update sort select options
  $("#sort-select option[value='desc']").text(translations[lang]?.newestFirst || "Newest first");
  $("#sort-select option[value='asc']").text(translations[lang]?.oldestFirst || "Oldest first");
}