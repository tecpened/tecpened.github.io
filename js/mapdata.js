
const uiData = [
    { icons:'c,c,c', title: 'turfhub', category: 'ui/ux', image: './public/interior/1.png', description: 'A sports arena booking app, designed to get the smoothest and fastest user experience' },
    { icons:'', title: 'Todvob', category: 'ui/ux', image: './public/interior/2.png', description: 'Todvob, Your personal web or social media chatbot creator dashboard, facilitated by directing UX and generic UI' },
    { icons:'', title: 'Flyme Global Travels', category: 'ui/ux', image: './public/interior/3.png', description: `Book and travel to your favorite spots. Never it's never more easy to customize and track your orders` },
    { icons:'', title: 'Project 2', category: 'ui/ux', image: './public/interior/1.png', description: 'Description of Project 1' },
    { icons:'', title: 'Project 3', category: 'ui/ux', image: './public/interior/1.png', description: 'Description of Project 1' },
    { icons:'', title: 'Project 4', category: 'ui/ux', image: './public/interior/1.png', description: 'Description of Project 1' },
    { icons:'', title: 'Project 5', category: 'ui/ux', image: './public/interior/1.png', description: 'Description of Project 1' },
    { icons:'', title: 'Project 6', category: 'ui/ux', image: './public/interior/1.png', description: 'Description of Project 1' },
];

const webData = [
    { icons:'', title: 'Project 2', category: 'web', image: './public/interior/2.png', description: 'Description of Project 2' },
    { icons:'', title: 'Project 2', category: 'web', image: './public/interior/2.png', description: 'Description of Project 2' },
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

const sidebarContent = {
    home: {
        heading: "Home",
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