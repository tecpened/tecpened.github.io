// Content Panel
const contentArea = document.querySelector('.content');

function changeContent(newContent) {
    if(newContent.tagName == 'DIV'){
    contentArea.innerHTML = '';
    contentArea.appendChild(newContent);
    }
    else{
    contentArea.innerHTML = newContent;
    } // Update the content
}
document.addEventListener('DOMContentLoaded', function() {
    const projectsBtn = document.getElementById('projects');
    const servicesBtn = document.getElementById('services');
    const companyBtn = document.getElementById('company');
    const contactBtn = document.getElementById('contact');

    // Event listeners for navigation items
    projectsBtn.addEventListener('click', function() {
        fetchProjects();
    });

    servicesBtn.addEventListener('click', function() {
        changeContent('<h2>Services Section</h2><p>Here you will find the various services we offer.</p>');
    });

    companyBtn.addEventListener('click', function() {
        changeContent('<h2>Company Section</h2><p>Learn more about our company history and values.</p>');
    });

    contactBtn.addEventListener('click', function() {
        changeContent('<h2>Contact Section</h2><p>Get in touch with us via email or social media.</p>');
    });
});

//Sidebar
// Get all the nav items (h5 tags)
const navItems = document.querySelectorAll('.right .items h5');
const sidebarHeading = document.getElementById('sidebar-heading');
const sidebarTitle = document.getElementById('sidebar-title');
const sidebarSubtitle = document.getElementById('sidebar-subtitle');

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

// Function to change the content
function changeSidebarText(page) {
  sidebarHeading.textContent = `${pageContent[page].heading}`;
  sidebarTitle.textContent = `${pageContent[page].title}`;
  sidebarSubtitle.textContent = `${pageContent[page].subtitle}`;
}

// Add event listeners to each nav item
navItems.forEach(item => {
  item.addEventListener('click', function () {
    const page = item.textContent.trim().toLowerCase(); // Get the text content of the clicked item (company, projects, etc.)
    changeSidebarText(page); // Change the content based on the clicked page
  });
});
