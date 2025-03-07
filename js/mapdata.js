
const uiData = [
    { icons:'c,c,c', title: 'turfhub', category: 'ui/ux', image: './public/interior/1.png', description: 'A sports arena booking app, designed to get the smoothest and fastest user experience' },
    { icons:'', title: 'Todvob', category: 'ui/ux', image: './public/interior/2.png', description: 'Todvob, Your personal web or social media chatbot creator dashboard, facilitated by directing UX and generic UI' },
    { icons:'', title: 'Flyme Global Travels', category: 'ui/ux', image: './public/interior/3.png', description: `Book and travel to your favorite spots. Never it's never more easy to customize and track your orders` },
    { icons:'', title: 'Project 2', category: 'ui/ux', image: './public/interior/4.png', description: 'Description of Project 1' },
    { icons:'', title: 'Project 3', category: 'ui/ux', image: './public/interior/2.png', description: 'Description of Project 1' },
    { icons:'', title: 'Project 4', category: 'ui/ux', image: './public/interior/3.png', description: 'Description of Project 1' },
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
    "software development": webData,
    animation: animData,
    Marketing: '',
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


const iconNav = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M2.05264 21.7815C3.12101 21.7815 4.00305 20.911 4.00305 19.8561C4.00183 19.7146 3.98431 19.5737 3.95083 19.4361L7.16657 16.2714L11.2533 16.261C11.9171 16.261 12.6226 16.0254 13.1103 15.5543L21.6887 7.19687C22.1136 6.78698 22.0928 6.13149 21.6887 5.73208C21.2948 5.32262 20.6203 5.32262 20.2154 5.73208L11.9481 13.8951C11.6582 14.1817 11.2949 14.3561 10.8594 14.3561H7.97559L7.82024 14.1717L7.82024 11.0992C7.82024 10.6793 7.98621 10.3104 8.2761 10.0238L16.4194 1.99405C16.8341 1.58415 16.8235 0.928667 16.4194 0.519206C16.323 0.422585 16.208 0.346041 16.0811 0.294102C15.9542 0.242162 15.818 0.215884 15.6806 0.216821C15.5433 0.217758 15.4075 0.245892 15.2813 0.299557C15.1551 0.353223 15.0412 0.43133 14.9461 0.529257L6.47172 9.00951C5.97383 9.52167 5.75609 10.1772 5.75609 10.8431L5.74546 14.7245L2.46777 17.9713C2.33145 17.942 2.19215 17.9282 2.05264 17.9303C0.984265 17.9303 0.113281 18.7911 0.113281 19.8561C0.113281 20.911 0.984265 21.7815 2.05264 21.7815Z" fill="white"/>
</svg>`

const icon1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 2H18V6.66667M17 3L12 8M10 3.33333H4C3.46957 3.33333 2.96086 3.54405 2.58579 3.91912C2.21071 4.29419 2 4.8029 2 5.33333V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H14.6667C15.1971 18 15.7058 17.7893 16.0809 17.4142C16.456 17.0391 16.6667 16.5304 16.6667 16V10" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
