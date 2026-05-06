// js/features/project-filter.js

function projectFilterInit() {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const searchInput = document.getElementById("project-search");

    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {

            // UI RESET
            filterButtons.forEach(btn => {
                btn.classList.remove(
                    "bg-gradient-to-r",
                    "from-blue-600",
                    "to-purple-600",
                    "text-white",
                    "scale-105"
                );
                btn.classList.add("bg-white/40", "text-gray-700");
            });

            // ACTIVE BUTTON STYLE
            button.classList.remove("bg-white/40", "text-gray-700");
            button.classList.add(
                "bg-gradient-to-r",
                "from-blue-600",
                "to-purple-600",
                "text-white",
                "scale-105"
            );

            const selectedCategory = button.dataset.category;
            const searchValue = searchInput ? searchInput.value.toLowerCase() : "";

            let filteredList = projectsData;

            // FIX: was comparing to lowercase "all" but data-category is "All"
            if (selectedCategory !== "All") {
                filteredList = filteredList.filter(
                    p => p.category === selectedCategory
                );
            }

            // FIX: was using p.title but projects use p.name
            if (searchValue) {
                filteredList = filteredList.filter(p =>
                    p.name.toLowerCase().includes(searchValue) ||
                    p.description.toLowerCase().includes(searchValue)
                );
            }

            renderProject(filteredList);
            document.dispatchEvent(new Event("projectsUpdated"));
        });
    });
}

projectFilterInit();
