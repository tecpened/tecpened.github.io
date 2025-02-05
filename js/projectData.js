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

// Set up content for each page
const pageContent = {
    company: {
      heading: "Company",
      title: "tecpen",
      subtitle: "resonating in style!"
    },
    projects: {
      heading: "Projects",
      title: "ui/ux design",
      categories: categoryDataMap,
      subtitle: "Here are some of our projects."
    },
    services: {
      heading: "Services",
      title: "tecpen",
      subtitle: "Explore our services here."
    },
    contact: {
      heading: "Contact",
      title: "tecpen",
      subtitle: "Feel free to reach out to us."
    }
  };



// Get all the required Ids and Divisions
const navItems = document.querySelectorAll('.right .items h5');
const sidebarHeading = document.getElementById('sidebar-heading');
const sidebarTitle = document.getElementById('sidebar-title');
const sidebarSubtitle = document.getElementById('sidebar-subtitle');

const projectCategories = document.getElementById('project-categories');

// Function to change the content
function changeSidebarText(page) {
    sidebarHeading.textContent = `${pageContent[page].heading}`;
    sidebarTitle.textContent = `${pageContent[page].title}`;
    sidebarSubtitle.textContent = `${pageContent[page].subtitle}`;

    // If the page is "projects", show the categories under it
    if (page === "projects") {
        displayCategories(pageContent.projects.categories);
        } else {
        projectCategories.innerHTML = ""; // Hide categories if not "projects"
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
    projectCategories.innerHTML = ""; // Clear previous categories
    for (const category in categories) {
      const categoryElement = document.createElement("h5");
      categoryElement.textContent = category;
      categoryElement.addEventListener('click', () => {
        changeCategoryContent(category, categories[category]);
        fetchProjects(category)
      });
      projectCategories.appendChild(categoryElement);
    }
  }

function changeCategoryContent(category, content) {
    sidebarTitle.textContent = category; // Change sidebar heading to the category
}

//Filtering and Projecting Data
function fetchProjects(category) {

    // Get the corresponding data or an empty array if the category is not found
    let projectsData = categoryDataMap[category] || categoryDataMap["ui/ux"];

    // Create the HTML content for projects
    let projectContent = '';
    projectsData.forEach((project, index) => {
        projectContent += `
            <div class="project-item" data-index="${index}">
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
    projectItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            showProjectDescription(projectsData[index]);
        });
    });
}

// Show the project description in a modal or a new section
function showProjectDescription(project) {
    // Create a modal or description box
    const descriptionModal = document.createElement('div');
    descriptionModal.className = 'description-modal';
    descriptionModal.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <button class="close-modal">Close</button>
    `;
    
    // Append the modal to the body
    document.body.appendChild(descriptionModal);

    // Close the modal when the close button is clicked
    const closeButton = descriptionModal.querySelector('.close-modal');
    closeButton.addEventListener('click', function() {
        descriptionModal.remove();
    });
}

