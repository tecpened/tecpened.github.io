
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

