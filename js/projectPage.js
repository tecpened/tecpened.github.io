//Sidebar
const uiData = [
    { icons:'c,c,c', title: 'Project 1', category: 'ui/ux', image: './public/interior/1.png', description: 'Description of Project 1' },
    { icons:'', title: 'Project 1', category: 'ui/ux', image: './public/interior/1.png', description: 'Description of Project 1' },
    { icons:'', title: 'Project 1', category: 'ui/ux', image: './public/interior/1.png', description: 'Description of Project 1' },
    { icons:'', title: 'Project 1', category: 'ui/ux', image: './public/interior/1.png', description: 'Description of Project 1' },
    { icons:'', title: 'Project 1', category: 'ui/ux', image: './public/interior/1.png', description: 'Description of Project 1' },
    { icons:'', title: 'Project 1', category: 'ui/ux', image: './public/interior/1.png', description: 'Description of Project 1' },
];
const webData = [
    { icons:'', title: 'Project 2', category: 'web', image: './public/interior/2.png', description: 'Description of Project 2' },
    { icons:'', title: 'Project 2', category: 'web', image: './public/interior/2.png', description: 'Description of Project 2' },
    { icons:'', title: 'Project 2', category: 'web', image: './public/interior/2.png', description: 'Description of Project 2' },
    { icons:'', title: 'Project 2', category: 'web', image: './public/interior/2.png', description: 'Description of Project 2' },
    { icons:'', title: 'Project 2', category: 'web', image: './public/interior/2.png', description: 'Description of Project 2' },
    { icons:'', title: 'Project 2', category: 'web', image: './public/interior/2.png', description: 'Description of Project 2' },
];
const animData = [
    { icons:'', title: 'Project 3', category: 'animation', image: './public/interior/3.png', description: 'Description of Project 3' },
    { icons:'', title: 'Project 3', category: 'animation', image: './public/interior/3.png', description: 'Description of Project 3' },
    { icons:'', title: 'Project 3', category: 'animation', image: './public/interior/3.png', description: 'Description of Project 3' },
    { icons:'', title: 'Project 3', category: 'animation', image: './public/interior/3.png', description: 'Description of Project 3' },
    { icons:'', title: 'Project 3', category: 'animation', image: './public/interior/3.png', description: 'Description of Project 3' },
    { icons:'', title: 'Project 3', category: 'animation', image: './public/interior/3.png', description: 'Description of Project 3' },
];

const categoryDataMap = {
    "ui/ux": uiData,
    "web development": webData,
    animation: animData,
    video: '',
    photography: ''
};

// Get all the required Ids and Divisions

// const container = document.querySelector('.container');
const contents = document.querySelector('.content');
const bottomSidebar = document.getElementById('bottom');

// Function to check page name
function checkPage(page){
    if(page == "company"){
        bottomSidebar.innerHTML = "company profile";
    }
    else if(page == "services"){
        bottomSidebar.innerHTML = "services";
    }
    else{
        bottomSidebar.innerHTML = "contact";
    }
}
// Function to change the content

// Add event listeners to each nav item


function displayCategories(categories) {
    bottomSidebar.innerHTML = ""; // Clear previous categories
    for (const category in categories) {
        // Create the category element
        const categoryElement = document.createElement("h6");
        categoryElement.textContent = category;

        // Initially set the opacity to 0 (invisible)
        categoryElement.style.opacity = 0;
        categoryElement.style.transition = "none"; // Disable any default transition

        // Append the element to the DOM
        bottomSidebar.appendChild(categoryElement);

        // Function to animate the opacity (fade-in effect)
        let opacity = 0;
        const fadeIn = setInterval(() => {
            opacity += 0.05; // Increment opacity
            categoryElement.style.opacity = opacity;

            // If opacity reaches 1, stop the animation
            if (opacity >= 1) {
                clearInterval(fadeIn);
            }
        }, 30); // Adjust the interval for smoother transition (e.g., 30ms per step)

        // Add the click event listener
        categoryElement.addEventListener('click', () => {
            changeCategoryText(category, categories[category]);
            fetchProjects(category);
            // contents.innerHTML = '';
        });
    }
}

// Function that changes category name at the top left
function changeCategoryText(category, content) {
    sidebarTitle.textContent = category; // Change sidebar heading to the category
}

function fetchProjects(category) {
    
    contents.innerHTML = '';
    // Get the corresponding data or an empty array if the category is not found
    let projectsData = categoryDataMap[category] || categoryDataMap["ui/ux"];


    // Create the HTML content for projects and animate them
    projectsData.forEach((project, index) => {

        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.dataset.index = index;
        projectItem.style.opacity = '0';
    
        const projectInfo = document.createElement('div');
        projectInfo.className = 'project-info';

        // Create the image element and append it to the left column
        const projectImage = document.createElement('img');
        projectImage.src = project.image;
        projectImage.alt = project.title;
        projectImage.className = 'content-image';

        // Create the project category element and append it to the left column
        const projectCategory = document.createElement('h');
        projectCategory.id = 'tag'
        projectCategory.textContent = project.category; // Assuming the category is part of the project data
        projectInfo.appendChild(projectCategory);

        // Create the project title element and append it to the left column
        const projectTitle = document.createElement('h');
        projectTitle.textContent = project.title;
        projectInfo.appendChild(projectTitle);

        // Create the project description element and append it to the left column
        const projectDescription = document.createElement('h');
        projectDescription.textContent = project.description; // Assuming the description is part of the project data
        projectInfo.appendChild(projectDescription);

        // Create the project icons element and append it to the left column
        const projectIcons = document.createElement('div');
        projectIcons.className = 'icons';
        projectIcons.textContent = project.icons; // Assuming the icons are part of the project data
        projectInfo.appendChild(projectIcons);
    
        projectItem.appendChild(projectInfo);
        projectItem.appendChild(projectImage);

        contents.appendChild(projectItem);

        // Animate each project item with a fade-in effect
        projectItem.style.transition = '0.8s'; // Adding smooth transition

        // Start fade-in effect
        setTimeout(() => {
            projectItem.style.opacity = '1';
        }, 100 * index); // Delay based on index for staggered effect
    });
}