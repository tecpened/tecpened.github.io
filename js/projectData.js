function fetchProjects() {
    // Simulated data (you can replace this with an actual fetch request)
    const projectsData = [
        { title: 'Project 1', image: './public/services/1.jpg', description: 'Description of Project 1' },
        { title: 'Project 2', image: './public/services/2.jpg', description: 'Description of Project 2' },
        { title: 'Project 1', image: './public/services/1.jpg', description: 'Description of Project 1' },
        { title: 'Project 1', image: './public/services/1.jpg', description: 'Description of Project 1' },
        { title: 'Project 3', image: './public/services/3.jpg', description: 'Description of Project 3' },
        { title: 'Project 2', image: './public/services/2.jpg', description: 'Description of Project 2' },
        { title: 'Project 2', image: './public/services/2.jpg', description: 'Description of Project 2' },
        { title: 'Project 1', image: './public/services/1.jpg', description: 'Description of Project 1' },
        { title: 'Project 3', image: './public/services/3.jpg', description: 'Description of Project 3' },
        { title: 'Project 2', image: './public/services/2.jpg', description: 'Description of Project 2' },
        { title: 'Project 1', image: './public/services/1.jpg', description: 'Description of Project 1' },
        { title: 'Project 2', image: './public/services/2.jpg', description: 'Description of Project 2' },
        { title: 'Project 2', image: './public/services/2.jpg', description: 'Description of Project 2' },
        { title: 'Project 3', image: './public/services/3.jpg', description: 'Description of Project 3' },
        { title: 'Project 3', image: './public/services/3.jpg', description: 'Description of Project 3' },
        { title: 'Project 2', image: './public/services/2.jpg', description: 'Description of Project 2' },
    ];

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
