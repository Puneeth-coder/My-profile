function renderSkills(filter = "All") {
    const skillsContainer = document.getElementById("skills-container");
    if (!skillsContainer) return;

    skillsContainer.innerHTML = "";

    // IMPORTANT: Ensure 'skill.category' exists in your data
    const filteredSkills = filter === "All" 
        ? skillsData 
        : skillsData.filter(skill => skill.category === filter);

    if (filteredSkills.length === 0) {
        skillsContainer.innerHTML = "<p class='col-span-full text-center text-gray-500'>No skills found in this category.</p>";
        return;
    }

    filteredSkills.forEach(function(skill) {

    const card = document.createElement("div");
    card.className = `
    group relative p-[2px] rounded-2xl 
    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
    hover:scale-105 transition duration-300
    `;

    // INNER CARD
    const inner = document.createElement("div");
    inner.className = `
    p-5 rounded-2xl 
    bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl 
    border border-white/20 dark:border-gray-700
    shadow-md hover:shadow-2xl
    flex flex-col items-center justify-center text-center
    transition-all duration-300
    `;

    // ICON
    const iconBox = document.createElement("div");
    iconBox.className = `
    w-14 h-14 mb-3 rounded-xl 
    bg-gradient-to-r from-blue-500 to-purple-500 
    flex items-center justify-center text-white font-bold text-lg
    transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6
    `;
    iconBox.textContent = skill.shortLabel;

    // NAME
    const skillName = document.createElement("h3");
    skillName.className = `
    text-sm font-semibold text-gray-800 dark:text-gray-200 
    group-hover:text-blue-500 transition
    `;
    skillName.textContent = skill.name;

    // DESCRIPTION
    const skillDescription = document.createElement("p");
    skillDescription.className = `
    text-xs text-gray-600 dark:text-gray-400 mt-1
    `;
    skillDescription.textContent = skill.description;

    // GLOW EFFECT
    const glow = document.createElement("div");
    glow.className = `
    absolute inset-0 rounded-2xl blur-xl opacity-0 
    group-hover:opacity-40 transition duration-300 
    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
    `;

    // APPEND
    inner.appendChild(iconBox);
    inner.appendChild(skillName);
    inner.appendChild(skillDescription);

    card.appendChild(inner);
    card.appendChild(glow);

    skillsContainer.appendChild(card);
});
}