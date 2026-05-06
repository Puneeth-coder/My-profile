// js/features/project-render.js

function renderProject(dataToRender = projectsData) {

    const container = document.getElementById("projects-container");
    const emptyState = document.getElementById("no-projects");

    if (!container) return;

    container.innerHTML = "";

    // ✅ EMPTY STATE
    if (!dataToRender.length) {
        if (emptyState) emptyState.classList.remove("hidden");
        return;
    } else {
        if (emptyState) emptyState.classList.add("hidden");
    }

    dataToRender.forEach(project => {

        const card = document.createElement("div");

        card.className = `
            project-card group p-6 rounded-2xl 
            bg-white/40 backdrop-blur-md border border-white/20 
            shadow-md hover:shadow-xl 
            transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]
        `;

        // TITLE
        const title = document.createElement("h3");
        title.className = "text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition";
        title.textContent = project.name;

        // DESCRIPTION
        const desc = document.createElement("p");
        desc.className = "text-gray-600 text-sm mb-4";
        desc.textContent = project.description;

        // TECHNOLOGIES
        const techWrapper = document.createElement("div");
        techWrapper.className = "flex flex-wrap gap-2 mb-4";

        project.technologies.split(",").forEach(tech => {
            const badge = document.createElement("span");
            badge.className = "px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700";
            badge.textContent = tech.trim();
            techWrapper.appendChild(badge);
        });

        // FOOTER
        const footer = document.createElement("div");
        footer.className = "flex justify-between items-center mt-4";

        const status = document.createElement("span");
        status.className = "px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-semibold";
        status.textContent = project.status;

        const category = document.createElement("span");
        category.className = "text-xs text-gray-500 font-medium";
        category.textContent = project.category;

        footer.appendChild(status);
        footer.appendChild(category);

        // APPEND
        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(techWrapper);
        card.appendChild(footer);

        container.appendChild(card);
    });

    // 🔥 Trigger updates (for count, etc.)
    document.dispatchEvent(new Event("projectsUpdated"));
}