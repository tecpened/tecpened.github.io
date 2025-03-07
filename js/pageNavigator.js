const container = document.querySelector('.container');

  
// Call fetchHome function to load the content
fetchHome();

// Select the home container, project container, and project card (Bento Box)
// const homeContainer = document.querySelector('.home');
function createNavbar(id, icon, header, subtitle) {
  // Create the navbar container
  const navbar = document.createElement('div');
  navbar.classList.add('navbar');
  navbar.id = id;  // Assign the provided ID to the Navbar

  // Create and add the header row
  const boxText = document.createElement('div');
  boxText.className = 'boxText';
  // boxText.style.display = 'flex';
  boxText.style.flexDirection = 'column';
  boxText.style.gap = '.3rem';

  const title = document.createElement('h4');
  title.textContent = header;  // Insert the header
  title.classList.add('navbar-title');
  
  const subtext = document.createElement('h2');
  subtext.textContent = subtitle;  // Insert the subtitle
  
  boxText.appendChild(title);
  boxText.appendChild(subtext);

  // Create the list of options (projects, services, contacts)
  const boxList = document.createElement('div');
  boxList.className = 'boxList';

  // Create options (projects, services, contacts)
  const options = ['📂', '💼', '📞'];

  options.forEach(optionText => {
    const option = document.createElement('h4');
    option.textContent = optionText;
    option.classList.add('navbar-option');
    boxList.appendChild(option);

    // Add click event to each option
    option.addEventListener('click', () => {
      changeContainerContent(optionText);  // Change content when option is clicked
    });
  });

  // Add the home header click functionality to navigate back to home content
  title.addEventListener('click', () => {
    changeContainerContent('Home');  // Navigate to home when title is clicked
  });

  navbar.appendChild(boxText);

  // Create and add the icon row
  const navIcon = document.createElement('div');
  navIcon.classList.add('navIcon');
  navIcon.innerHTML = icon;  // Insert the icon
  navbar.appendChild(navIcon);
  // Add the home header click functionality to navigate back to home content
  navIcon.addEventListener('click', () => {
    changeContainerContent('Home');  // Navigate to home when title is clicked
  });

  navbar.appendChild(boxList);

  return navbar;
}
// Function to change the container content based on selected option
function changeContainerContent(option) {
  const container = document.querySelector('.container'); // Assume this is the container you want to change

  // Clear current content
  container.innerHTML = '';

  const existingNavbar = document.querySelector('.navbar');  // Assuming you are appending a <nav> element
  if (existingNavbar) {
    existingNavbar.remove();
  }

  // Add specific content based on the selected option
  switch (option) {
    case '📂': // projects
      const initialCategory = 'ui/ux'; // Default category
      fetchProjects(initialCategory, container);
      document.body.appendChild(createNavbar('nav', iconNav, 'tecpen', 'resonating in style'));
      break;
    case '💼': // services
      displayServices(container)
      document.body.appendChild(createNavbar('nav', iconNav, 'tecpen', 'resonating in style'));
      break;
    case '📞': // contacts
      container.innerHTML = '<h1>Contacts Section</h1><p>Here are the contact details...</p>';
      document.body.appendChild(createNavbar('nav', iconNav, 'tecpen', 'resonating in style'));
      break;
    case 'Home':
      window.location.href = '/';
      break;
    default:
      window.location.href = '/';
  }
}

// Add the event listener to the project card
const projectCard = document.querySelector('#bento-2');
const serviceCard = document.querySelector('#bento-4');

projectCard.addEventListener('click', function() {

  // Show the projects container
  const initialCategory = 'ui/ux'; // Default category
  fetchProjects(initialCategory, container);
  document.body.appendChild(createNavbar('nav', iconNav, 'tecpen', 'resonating in style'));

});

serviceCard.addEventListener('click', function() {

  // Default category
  displayServices(container)
  document.body.appendChild(createNavbar('nav', iconNav, 'tecpen', 'resonating in style'));
});
