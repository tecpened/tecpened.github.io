// var rectangle = document.createElement('div');
// rectangle.className = 'rectangle';
// document.body.prepend(rectangle);

// Section 1: The big hero image 
source = './public/1.jpg'
function image(){
    const container = document.querySelector('.static_image');

    const im  = document.createElement('img');
    im.src = source;

    container.appendChild(im)
}

const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
};

// Example: Adding an event listener to a button
document.querySelector('#theme-button').addEventListener('click', toggleTheme);

// image();



// // Function to update height and width
// function updateSize() {
//     height.innerHTML = window.innerHeight;
//     width.innerHTML = window.innerWidth;
// }

// // Add event listener for window resize
// window.addEventListener('resize', updateSize);

// // Initial update
// updateSize();