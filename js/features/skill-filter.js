// Function to handle filtering
function setupSkillFilters() {
    const buttons = document.querySelectorAll(".skill-filter-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            // 1. Manage Active Styles
            buttons.forEach(b => {
                b.classList.remove("bg-green-900", "text-white");
                b.classList.add("bg-white", "text-gray-700");
            });
            btn.classList.add("bg-green-900", "text-white");
            btn.classList.remove("bg-white", "text-gray-700");

            // 2. Filter and Re-render
            const category = btn.getAttribute("data-category");
            
            // Check if your render function is globally available
            if (typeof renderSkills === "function") {
                renderSkills(category);
            }
        });
    });
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", setupSkillFilters);



