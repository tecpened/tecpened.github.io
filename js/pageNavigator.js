// Content Panel
const contentArea = document.querySelector('.content');

// Set up content for each page
const sidebarContent = {
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
      displayServices();
    });

    companyBtn.addEventListener('click', function() {
        changeContent('<h2>Company Section</h2><p>Learn more about our company history and values.</p>');
    });

    contactBtn.addEventListener('click', function() {
        changeContent('<h2>Contact Section</h2><p>Get in touch with us via email or social media.</p>');
    });
});

// Get all the required Ids and Divisions
const sidebarHeading = document.getElementById('sidebar-heading');
const sidebarTitle = document.getElementById('sidebar-title');
const sidebarSubtitle = document.getElementById('sidebar-subtitle');

//Sidebar Information
function changeSidebarText(page) {
  sidebarHeading.textContent = `${sidebarContent[page].heading}`;
  sidebarTitle.textContent = `${sidebarContent[page].title}`;
  sidebarSubtitle.textContent = `${sidebarContent[page].subtitle}`;

  // If the page is "projects", show the categories under it
  if (page === "projects") {
      displayCategories(sidebarContent.projects.categories);
  }
  else {
      // bottomSidebar.innerHTML = ""; // Hide categories if not "projects"
      checkPage(page);
  }
}

const navItems = document.querySelectorAll('.right .items h5');

navItems.forEach(item => {
  item.addEventListener('click', function () {
    const page = item.textContent.trim().toLowerCase(); // Get the text content of the clicked item (company, projects, etc.)
    changeSidebarText(page); // Change the content based on the clicked page
  });
});
