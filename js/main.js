document.addEventListener("DOMContentLoaded", function () {

    // Render data-driven sections
    renderSkills();
    renderProject(projectsData);

    // Setup interactivity
    projectFilterInit();
    scrollInit();
    initThemeToggle();
    initTypingEffect();
    setupSkillFilters();
    initContactValidation();

    // FIX: letsPopup inlined here (removed file with apostrophe in name)
    const letsTalkBtn = document.getElementById("lets-talk");
    if (letsTalkBtn) {
        letsTalkBtn.addEventListener("click", () => {
            alert("Thanks for reaching out! Please use the contact form below or WhatsApp me.");
        });
    }

    // Setup live project search
    const searchInput = document.getElementById("project-search");
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const val = searchInput.value.toLowerCase();
            const filtered = val
                ? projectsData.filter(p =>
                    p.name.toLowerCase().includes(val) ||
                    p.description.toLowerCase().includes(val)
                  )
                : projectsData;
            renderProject(filtered);
        });
    }
});
