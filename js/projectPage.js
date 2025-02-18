
// const container = document.querySelector('.container');
const projectsContainer = document.querySelector('.content');
const sidebarTitle = document.getElementById('sidebar-title');

// const bottomBar = document.getElementById('bottom');
// Function to display categories
function displayCategories(categories) {
    const bottomBar = document.createElement('div');
    bottomBar.className = 'bottom';
    projectsContainer.appendChild(bottomBar);

    // Loop through categories and create category elements
    Object.keys(categories).forEach(category => {
        const categoryElement = document.createElement("h6");
        categoryElement.textContent = category;

        // Append to the bottomBar and add click event to fetch projects
        bottomBar.appendChild(categoryElement);
        categoryElement.addEventListener('click', function(){
            fetchProjects(category);
            changeCategoryText(category)
            
})

        // Fade-in effect for categories
        // setTimeout(() => categoryElement.style.opacity = 1, 10);
    });
}

// Function to change the sidebar title
function changeCategoryText(category) {
    sidebarTitle.textContent = category; // Change the sidebar title
}

// Function to fetch and display projects for a selected category
function fetchProjects(category) {
    // Clear existing projects before displaying new ones
    projectsContainer.innerHTML = '';
    // Re-display categories after clearing

    const projectsData = categoryDataMap[category] || categoryDataMap["ui/ux"]; // Fallback to default category
    const projects = document.createElement('div');
    projects.className = 'projects';
    projectsContainer.appendChild(projects);
    
    // First Project
    const projectHeader = document.createElement('div');
    projectHeader.className = 'projecto';
    projectHeader.style.width = '20rem'
    projectHeader.style.padding = '1rem';

    const projectTitle = document.createElement('p');
    projectTitle.textContent = 'Projects'; ;
    projectHeader.appendChild(projectTitle);

    const projectDescription = document.createElement('h1');
    projectDescription.textContent = `${(category) || ["ui/ux"]}`;
    projectHeader.appendChild(projectDescription);

    // Append project info and image
    projects.appendChild(projectHeader);
     


    // Loop through each project in the selected category and create project items
    projectsData.forEach((project, index) => {
    
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.style.opacity = 0;

        // Create and append project image and info
        const projectImage = document.createElement('img');
        projectImage.src = project.image;
        projectImage.alt = project.title;
        projectImage.className = 'content-image';

        const projectInfo = document.createElement('div');
        projectInfo.className = 'project-info';

        const projectCategory = document.createElement('h4');
        projectCategory.textContent = project.category;
        projectInfo.appendChild(projectCategory);

        const projectTitle = document.createElement('h4');
        projectTitle.textContent = project.title;
        projectInfo.appendChild(projectTitle);

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectInfo.appendChild(projectDescription);

        const projectIcons = document.createElement('div');
        projectIcons.className = 'icons';
        projectIcons.textContent = project.icons;
        projectInfo.appendChild(projectIcons);

        // Append project info and image
        projectItem.appendChild(projectInfo);
        projectItem.appendChild(projectImage);
        projects.appendChild(projectItem);

        // Add fade-in effect to each project
        projectItem.style.transition = '0.8s'; // Adding smooth transition
        setTimeout(() => projectItem.style.opacity = 1, 100 * index); // Staggered fade-in 
        
        projectItem.addEventListener('click', function(){
            console.log('hello');
            openModal(project);
            
        })
    });

    displayCategories(sidebarContent.projects.categories); 
}

// Fetch initial data for the home or default category (e.g., "ui/ux")
function initPage() {
    const initialCategory = 'ui/ux'; // Default category
    fetchProjects(initialCategory);
    changeCategoryText(initialCategory); // Change sidebar title
}

// Call this function to initialize the page when it's loaded
document.addEventListener('DOMContentLoaded', () => {
    // Trigger initial data fetch and display
    // initPage();
    
});

// Function to create and show the modal dynamically
function openModal(projectData) {
    // Create the modal container
    var modal = document.createElement('div');
    modal.id = 'modal'
    // modal.classList.add('modal');
    
    
    // Create the modal content
    var modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    
    // Create the close button
    var closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';  // Close button character
    
    // Add the image inside the modal
    var modalIMG = document.createElement('img');
    modalIMG.src= projectData.image;

    //Image Styling Here!!
    modalIMG.style.height = '40vh'
    modalContent.appendChild(modalIMG);

    // Paragraph
    var modalParagraph = document.createElement('p');
    modalParagraph.innerText = projectData.category;
    modalContent.appendChild(modalParagraph);

    // Add the content inside the modal
    var modalText = document.createElement('h1');
    modalText.innerText = projectData.title;
    modalContent.appendChild(modalText);

    // Add the content inside the modal
    var modalDescription = document.createElement('p');
    modalDescription.innerText = projectData.description;
    modalContent.appendChild(modalDescription);
        
    // Append close button to the modal content
    modalContent.appendChild(closeBtn);
    
    // Append modal content to the modal container
    modal.appendChild(modalContent);
    
    // Append the modal to the body
    document.body.appendChild(modal);
    
    // Display the modal
    modal.style.display = 'block';
  
    // Event listener to close the modal when the close button is clicked
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.removeChild(modal);  // Remove modal from the DOM when closed
    });
    
    // Close the modal if the user clicks outside of the modal content
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
        document.body.removeChild(modal);  // Remove modal from the DOM when closed
      }
    });
  }
  
  // Add event listener to trigger modal on click of a specific element (for example, "projectItem")
//   document.getElementById('projectItem').addEventListener('click', function() {
//     console.log('hello');
    
//     // Assuming you're passing the text or data of the clicked projectItem
//     var projectData = this.innerText || this.getAttribute('data-project'); // Example of getting data
    
//     openModal(projectData); // Pass data to the modal
//   });
  