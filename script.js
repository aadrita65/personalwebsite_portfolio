// Handle the loading page transition
function enterSite() {
    document.getElementById('loadingScreen').classList.add('hidden');
    document.querySelector('body').style.overflow = 'auto';
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('visible');
    });
    document.querySelector('nav').classList.add('visible');
}
const backgroundContainer = document.querySelector('.background-container');

// Function to create and append SVGs
function createBlurredCircle(color, size, top, left) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "background-svg");
    svg.setAttribute("height", `${size}px`);
    svg.setAttribute("width", `${size}px`);
    svg.innerHTML = `<circle r="48%" cx="50%" cy="50%" fill="${color}"></circle>`;
    svg.style.top = `${top}%`;
    svg.style.left = `${left}%`;
    backgroundContainer.appendChild(svg);
}

// circles for the background
createBlurredCircle("rgba(255, 69, 0, 1)", 300, 20, 10);  // Orange
createBlurredCircle("rgba(0, 128, 255, 1)", 350, 50, 70); // Blue
createBlurredCircle("rgba(34, 139, 34, 1)", 250, 70, 30); // Green
createBlurredCircle("rgba(255, 20, 147, 1)", 400, 10, 50); // Pink
createBlurredCircle("rgba(255, 215, 0, 1)", 300, 80, 80);  // Yellow

// Form submission
function handleSubmit(event) {
    event.preventDefault();
    const formMessage = document.getElementById('formMessage');
    formMessage.style.display = 'block';
    document.getElementById('contactForm').reset();
}

// Refresh page
function refreshPage() {
    window.location.reload();
    window.scrollTo(0, 0);
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll Reveal Animation
// ScrollReveal Animations
ScrollReveal().reveal('#section1', {
    duration: 1000,   // Animation duration
    distance: '50px', // Move 50px into view
    origin: 'bottom', // Animation starts from the bottom
    easing: 'ease-in-out',
    reset: true       // Repeats animation when scrolling back
});

ScrollReveal().reveal('#section2', {
    duration: 1200,
    distance: '60px',
    origin: 'left',
    easing: 'ease-in-out',
    reset: true
});

ScrollReveal().reveal('#section3', {
    duration: 1000,
    distance: '50px',
    origin: 'right',
    easing: 'ease-in-out',
    reset: true
});

ScrollReveal().reveal('#contact', {
    duration: 1500,
    distance: '70px',
    origin: 'top',
    easing: 'ease-in-out',
    reset: true
});

window.addEventListener('load', () => {
    const helloImage = document.querySelector('.loading-hello');
    helloImage.style.animation = 'slide-in 2s ease-out forwards, float 4s ease-in-out infinite';
});


// Function to copy email to clipboard
function copyEmail() {
    navigator.clipboard.writeText("adrita079@gmail.com");
    alert("Email copied to clipboard!");
}

const blurredCirclesContainer = document.querySelector('.blurred-circles');

// Generate multiple blurred circles
for (let i = 0; i < 20; i++) {
    const circle = document.createElement('div');
    circle.classList.add('blurred-circle');

    // Set random size and position
    circle.style.width = `${Math.random() * 60 + 20}px`; // Random size between 20px and 80px
    circle.style.height = circle.style.width; // Make it a perfect circle
    circle.style.top = `${Math.random() * 100}%`; // Random position vertically
    circle.style.left = `${Math.random() * 100}%`; // Random position horizontally

    blurredCirclesContainer.appendChild(circle);
}

