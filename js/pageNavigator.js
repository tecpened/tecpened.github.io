import { init3DScene } from './tecpen3D.js';
import { tecpen } from './tecpen3D.js';
// Content Panel
const contentArea = document.querySelector('.content');
const breadcrumb = document.querySelector('.breadcrumb')
// init3DScene(contentArea);

// Set up content for each page
// const sidebarContent = {
//   home: {
//       heading: "Home",
//       title: "tecpen",
//       subtitle: "resonating in style!"
//     },
//     projects: {
//       heading: "Projects",
//       title: "ui/ux design",
//       categories: categoryDataMap,
//       subtitle: "Here are some of our projects."
//     },
//     services: {
//       heading: "Services",
//       title: "tecpen",
//       subtitle: "Explore our services here."
//     },
//     contact: {
//       heading: "Contact",
//       title: "tecpen",
//       subtitle: "Feel free to reach out to us."
//     }
//   };

function changeContent(newContent) {
    if(newContent.tagName == 'DIV') {
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
    const companyBtn = document.getElementById('home');
    const contactBtn = document.getElementById('contact');

    // Event listeners for navigation items
    projectsBtn.addEventListener('click', function() {
        fetchProjects();
    });

    servicesBtn.addEventListener('click', function() {
      displayServices();
    });

    companyBtn.addEventListener('click', function() {
      const contentBody = document.querySelector('.content');
      contentBody.innerHTML='';
      const HomeContainer = document.createElement('div');
      HomeContainer.className = 'home';
      contentBody.appendChild(HomeContainer);
      breadcrumb.innerHTML = '';
      tecpen(HomeContainer);
      init3DScene(HomeContainer,0.6,2);
    });

    contactBtn.addEventListener('click', function() {
        changeContent('<h2>Contact Section</h2><p>Get in touch with us via email or social media.</p>');
    });
});

// Get all the required Ids and Divisions
const sidebarHeading = document.getElementById('sidebar-heading');
const sidebarTitle = document.getElementById('sidebar-title');
const sidebarSubtitle = document.getElementById('sidebar-subtitle');

// Check Page Type
function checkPage(page){
  if(page == "home"){
      // bottomSidebar.innerHTML = "company profile";
  }
  else if(page == "services"){
      bottomSidebar.innerHTML = "services";
  }
  else{
      bottomSidebar.innerHTML = "contact";
  }
}

//Sidebar Information
function changePage(page) {
  // sidebarHeading.textContent = `${sidebarContent[page].heading}`;
  sidebarTitle.textContent = `${sidebarContent[page].title}`;
  // sidebarSubtitle.textContent = `${sidebarContent[page].subtitle}`;

  // If the page is "projects", show the categories under it
  if (page === "projects") {
      
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
    changePage(page); // Change the content based on the clicked page
  });
});
