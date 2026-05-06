// js/features/project-count.js

(function () {

    const searchInput = document.getElementById("project-search");
    const container = document.getElementById("projects-container");

    if (!searchInput || !container) return;

    // ✅ CREATE COUNT ELEMENT (Glass Style)
    const countEl = document.createElement("p");
    countEl.id = "project-count";
    countEl.className =
        "text-center text-sm font-semibold text-gray-600 mb-6 transition-all duration-300";

    // Insert after search bar
    const searchWrapper = searchInput.parentElement;
    searchWrapper.insertAdjacentElement("afterend", countEl);

    // ✅ UPDATE COUNT UI
    function updateCount(total, visible) {

        // Remove previous color classes
        countEl.classList.remove("text-green-600", "text-red-500");

        if (searchInput.value.trim() === "") {
            countEl.textContent = `${total} project${total !== 1 ? "s" : ""}`;
        } else {
            if (visible > 0) {
                countEl.textContent = `${visible} project${visible !== 1 ? "s" : ""} found`;
                countEl.classList.add("text-green-600");
            } else {
                countEl.textContent = "No projects found";
                countEl.classList.add("text-red-500");
            }
        }
    }

    // ✅ GET COUNTS (Works with display + hidden class)
    function getCounts() {
        const cards = container.querySelectorAll(".project-card");
        let visible = 0;

        cards.forEach(card => {
            if (
                card.style.display !== "none" &&
                !card.classList.contains("hidden")
            ) {
                visible++;
            }
        });

        return {
            total: cards.length,
            visible
        };
    }

    // ✅ UPDATE AFTER FILTER / SEARCH
    function refreshCount() {
        setTimeout(() => {
            const { total, visible } = getCounts();
            updateCount(total, visible);
        }, 50);
    }

    // 🔍 SEARCH INPUT
    searchInput.addEventListener("input", refreshCount);

    // ⌨️ ESC CLEAR
    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            setTimeout(refreshCount, 50);
        }
    });

    // 👀 OBSERVER (auto updates when cards change)
    const observer = new MutationObserver(refreshCount);

    observer.observe(container, {
        childList: true,
        subtree: false
    });

    // 🚀 INITIAL LOAD
    window.addEventListener("load", refreshCount);

})();