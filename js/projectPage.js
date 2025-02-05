//Sidebar
const uiData = [
    { title: 'Project 1', category: 'ui/ux', image: './public/interior/1.png', description: 'Description of Project 1' },
    { title: 'Project 1', category: 'ui/ux', image: './public/interior/1.png', description: 'Description of Project 1' },
    { title: 'Project 1', category: 'ui/ux', image: './public/interior/1.png', description: 'Description of Project 1' },
    { title: 'Project 1', category: 'ui/ux', image: './public/interior/1.png', description: 'Description of Project 1' },
    { title: 'Project 1', category: 'ui/ux', image: './public/interior/1.png', description: 'Description of Project 1' },
    { title: 'Project 1', category: 'ui/ux', image: './public/interior/1.png', description: 'Description of Project 1' },
];
const webData = [
    { title: 'Project 2', category: 'web', image: './public/interior/2.png', description: 'Description of Project 2' },
    { title: 'Project 2', category: 'web', image: './public/interior/2.png', description: 'Description of Project 2' },
    { title: 'Project 2', category: 'web', image: './public/interior/2.png', description: 'Description of Project 2' },
    { title: 'Project 2', category: 'web', image: './public/interior/2.png', description: 'Description of Project 2' },
    { title: 'Project 2', category: 'web', image: './public/interior/2.png', description: 'Description of Project 2' },
    { title: 'Project 2', category: 'web', image: './public/interior/2.png', description: 'Description of Project 2' },
];
const animData = [
    { title: 'Project 3', category: 'animation', image: './public/interior/3.png', description: 'Description of Project 3' },
    { title: 'Project 3', category: 'animation', image: './public/interior/3.png', description: 'Description of Project 3' },
    { title: 'Project 3', category: 'animation', image: './public/interior/3.png', description: 'Description of Project 3' },
    { title: 'Project 3', category: 'animation', image: './public/interior/3.png', description: 'Description of Project 3' },
    { title: 'Project 3', category: 'animation', image: './public/interior/3.png', description: 'Description of Project 3' },
    { title: 'Project 3', category: 'animation', image: './public/interior/3.png', description: 'Description of Project 3' },
];

const categoryDataMap = {
    "ui/ux": uiData,
    "web development": webData,
    animation: animData,
    video: '',
    photography: ''
};

// Get all the required Ids and Divisions
const navItems = document.querySelectorAll('.right .items h5');
const sidebarHeading = document.getElementById('sidebar-heading');
const sidebarTitle = document.getElementById('sidebar-title');
const sidebarSubtitle = document.getElementById('sidebar-subtitle');

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
function changeSidebarText(page) {
    sidebarHeading.textContent = `${pageContent[page].heading}`;
    sidebarTitle.textContent = `${pageContent[page].title}`;
    sidebarSubtitle.textContent = `${pageContent[page].subtitle}`;

    // If the page is "projects", show the categories under it
    if (page === "projects") {
        displayCategories(pageContent.projects.categories);
    }
    else {
        // bottomSidebar.innerHTML = ""; // Hide categories if not "projects"
        checkPage(page);
    }
}

// Add event listeners to each nav item
navItems.forEach(item => {
    item.addEventListener('click', function () {
      const page = item.textContent.trim().toLowerCase(); // Get the text content of the clicked item (company, projects, etc.)
      changeSidebarText(page); // Change the content based on the clicked page
    });
});


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
            changeCategoryContent(category, categories[category]);
            fetchProjects(category);
        });
    }
}


function changeCategoryContent(category, content) {
    sidebarTitle.textContent = category; // Change sidebar heading to the category
}

const container = document.querySelector('.container');
//Filtering and Projecting Data
function fetchProjects(category) {
    // Get the corresponding data or an empty array if the category is not found
    let projectsData = categoryDataMap[category] || categoryDataMap["ui/ux"];

    // Create the HTML content for projects
    let projectContent = '';
    projectsData.forEach((project, index) => {
        projectContent += `
            <div class="project-item" data-index="${index}" style="opacity: 0;">
                <img src="${project.image}" alt="${project.title}" class="content-image">
            </div>
        `;
    });

    const projectsDiv = document.createElement('div');
    projectsDiv.className = 'projectsDiv';
    projectsDiv.innerHTML = projectContent;  // Add the content to the div

    // Change the content with a smooth fade
    changeContent(projectsDiv);

    // Add event listeners to each project item
    const projectItems = projectsDiv.querySelectorAll('.project-item');

    // Animate each project item with a fade-in effect
    projectItems.forEach((item, index) => {
        let opacity = 0;
        item.style.transition = 'none'; // Disable default transition first to handle animation manually

        // Start fade-in effect
        const fadeIn = setInterval(() => {
            opacity += 0.05; // Increment opacity
            item.style.opacity = opacity;

            // If opacity reaches 1, stop the animation
            if (opacity >= 1) {
                clearInterval(fadeIn);
            }
        }, 30); // Adjust the interval for smoother transition (30ms per step)

        // Add a click event to each project item
        item.addEventListener('click', function() {
            showProjectDescription(projectsData[index]);
            container.style.filter = 'blur(10px)';
        });
    });

}

function showProjectDescription(project) {
    // Create a modal or description box
    const descriptionModal = document.createElement('div');
    descriptionModal.className = 'description-modal';
    descriptionModal.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
    `;
    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.className = 'close-modal';
    closeButton.textContent = 'close'; // You can customize the text or use an icon
    
    // Append the close button to the modal
    document.body.appendChild(closeButton);
    
    // Append the modal to the body
    document.body.appendChild(descriptionModal);

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function() {
        descriptionModal.remove();
        closeButton.style.display ='none';
        container.style.filter = 'blur(0px)';
    });
}
