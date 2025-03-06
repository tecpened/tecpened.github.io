// var rectangle = document.createElement('div');
// rectangle.className = 'rectangle';
// document.body.prepend(rectangle);


const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
};

// Example: Adding an event listener to a button
// document.querySelector('.theme-button').addEventListener('click', toggleTheme);

/////////////////////Cursor Effect///////////////////

// Create the cursor contour element dynamically
const contour = document.createElement('div');
contour.classList.add('cursor-contour');
document.body.appendChild(contour);

// Variables to track mouse position and target position with delay
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

// Speed of the contour following the mouse (higher = slower)
const speed = 0.05;

// Function to update contour position with a delay
function updateContourPosition() {
    // Smoothly move the contour towards the mouse position
    targetX += (mouseX - targetX) * speed;
    targetY += (mouseY - targetY) * speed;

    contour.style.left = `${targetX - contour.offsetWidth / 1}px`;
    contour.style.top = `${targetY - contour.offsetHeight / 2}px`;

    // Continue to call the update function to smoothly animate
    requestAnimationFrame(updateContourPosition);
}

// Mouse move listener
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Start the smooth update loop
updateContourPosition();
