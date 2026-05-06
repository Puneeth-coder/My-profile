function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) return;

    const html = document.documentElement;

    // FIX: Tailwind darkMode:'class' uses 'dark' on <html>, not 'dark-mode' on <body>
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "dark") {
        html.classList.add("dark");
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }

    toggleBtn.addEventListener("click", function () {
        html.classList.toggle("dark");

        if (html.classList.contains("dark")) {
            localStorage.setItem("portfolio-theme", "dark");
            toggleBtn.textContent = "☀️";
        } else {
            localStorage.setItem("portfolio-theme", "light");
            toggleBtn.textContent = "🌙";
        }
    });
}
