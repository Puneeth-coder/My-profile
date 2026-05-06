function initTypingEffect() {
    const textElement = document.getElementById("typing-text");

    // If the element doesn't exist, don't run the script
    if (!textElement) {
        console.error("Typing element not found!");
        return;
    }

    const words = ["MERN Enthusiast", "Competitive Programmer", "Full-Stack Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150;

    function type() {
        const currentWord = words[wordIndex];

        // Slicing the string to create the typing effect
        if (isDeleting) {
            textElement.textContent = currentWord.slice(0, charIndex--);
            typeSpeed = 50;
        } else {
            textElement.textContent = currentWord.slice(0, charIndex++);
            typeSpeed = 150;
        }

        // Logic to switch between typing and deleting
        if (!isDeleting && charIndex > currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at the end
        } else if (isDeleting && charIndex < 0) {
            isDeleting = false;
            charIndex = 0;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

// Ensure the DOM is fully loaded before running
document.addEventListener("DOMContentLoaded", initTypingEffect);