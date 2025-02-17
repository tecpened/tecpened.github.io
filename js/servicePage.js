// Data for the services
const servicesData = [
    { icons:'G', title: 'Graphics', description: 'Designing visuals, logos, and illustrations' },
    { icons:'A', title: 'Animation', description: 'Creating 2D/3D animations for various purposes' },
    { icons:'WA', title: 'Web & App Development', description: 'Building responsive websites and mobile apps' },
    { icons:'UI', title: 'UI/UX Design', description: 'Improving user experience and interface design' },
    { icons:'AI', title: 'AI', description: 'Implementing artificial intelligence solutions for businesses' }
];

// Get the required elements
const content = document.querySelector('.content');  // Assuming you have a container for services



// Function to display the services
function displayServices() {
    content.innerHTML = '';  // Clear previous content
    const servicesContainer = document.createElement('div');  
    servicesContainer.className = 'services'
    content.appendChild(servicesContainer)

    const serviceHeader = document.createElement('div');
    serviceHeader.className = 'serviceo';
    serviceHeader.style.width = '20rem'
    serviceHeader.style.padding = '1rem';

    const servicetTitle = document.createElement('p');
    servicetTitle.textContent = 'services'; ;
    serviceHeader.appendChild(servicetTitle);

    const servicetDescription = document.createElement('h1');
    servicetDescription.textContent = `service`;
    serviceHeader.appendChild(servicetDescription);

    // Append project info and image
    servicesContainer.appendChild(serviceHeader);

    servicesData.forEach((service, index) => {
        // Create the service item container
        const serviceItem = document.createElement('div');
        serviceItem.className = 'service-item';
        serviceItem.style.opacity = '0';  // Initially set opacity to 0

        const serviceIcons = document.createElement('div');
        serviceIcons.className = 'icons';
        serviceIcons.textContent = service.icons; // Assuming the icons are part of the service data
        serviceItem.appendChild(serviceIcons);
        
        // Create the service title element
        const serviceTitle = document.createElement('h4');
        serviceTitle.textContent = service.title;
        serviceItem.appendChild(serviceTitle);

        // Create the service description element
        const serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description;
        serviceItem.appendChild(serviceDescription);

        // Append the service item to the container
        servicesContainer.appendChild(serviceItem);

        // Animate each service item with a fade-in effect
        serviceItem.style.transition = '0.8s ease-in-out';  // Adding smooth transition

        // Start fade-in effect after a small delay based on index for staggered animation
        setTimeout(() => {
            serviceItem.style.opacity = '1';
        }, 100 * index);  // Delay based on index for staggered effect
    });
}