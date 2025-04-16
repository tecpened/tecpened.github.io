// Function to display categories (now only bottom bar)
function displayCategories(categories, body) {
    // Create bottom bar for category selection
    const bottomBar = document.createElement('div');
    bottomBar.className = 'bottom';
    body.appendChild(bottomBar);

    // Loop through categories and create clickable elements
    Object.keys(categories).forEach(category => {
        const categoryElement = document.createElement("h6");
        categoryElement.textContent = category;

        bottomBar.appendChild(categoryElement);
        categoryElement.addEventListener('click', () => {
            fetchProjects(category, body); // Load projects for the selected category
        });
    });
}

// Function to fetch and display projects for a selected category
function fetchProjects(category, body) {
    // Clear existing projects before displaying new ones
    body.innerHTML = '';
    
    // const projectsData = categoryDataMap[category] || categoryDataMap["ui/ux"]; // Fallback to default category
    const projectsData = allProjects.filter(project => project.category === (category || 'ui/ux'));
    const projects = document.createElement('div');
    projects.className = 'projects';
    body.appendChild(projects);

    projectsData.forEach((project, index) => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.style.opacity = 0;
        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="content-image" />
            <div class="project-info">
                <h4>${project.category}</h4>
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <div class="icons">${project.icons}</div>
            </div>
        `;
        projects.appendChild(projectItem);

        // Add fade-in effect to each project
        setTimeout(() => {
            projectItem.style.opacity = 1;
            projectItem.style.transition = '1s';
        }, 100 * index);

        // Add event listener to open modal on project click
        projectItem.addEventListener('click', () => {
            window.location.href = `projectDetail.html?project=${project.id - 1}`;
          });
    });

    // Re-display categories after fetching projects (in case new categories need to be shown)
    displayCategories(sidebarContent.projects.categories, body);
}

// Function to create and show the modal dynamically
function openModal(projectData) {
    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <img src="${projectData.image}" style="height: 40vh" />
            <p>${projectData.category}</p>
            <h1>${projectData.title}</h1>
            <p>${projectData.description}</p>
        </div>
    `;
    document.body.appendChild(modal);

    // Event listener to close the modal
    modal.querySelector('.close-btn').addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.removeChild(modal);
    });

    // Close the modal if clicked outside
    window.addEventListener('click', event => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.removeChild(modal);
        }
    });

    modal.style.display = 'block';
}

const projectContainer = document.querySelector('.container');
const initialCategory = 'ui/ux'; // Default category
fetchProjects(initialCategory, projectContainer);