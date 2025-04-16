document.addEventListener("DOMContentLoaded", function() {
    const projectsList = document.getElementById("projects-list");

    // Function to create a project card dynamically
    function createProjectCard(project, projectId) {
        const card = document.createElement("div");
        card.classList.add("project-card");

        // Create image element
        const img = document.createElement("img");
        img.src = project.image;
        img.alt = project.title;

        // Create content container
        const content = document.createElement("div");
        content.classList.add("content");

        // Create title
        const title = document.createElement("h3");
        title.textContent = project.title;

        // Create description
        const description = document.createElement("p");
        description.textContent = project.description;

        // Create view live button (passing projectId as query parameter)
        const liveUrl = document.createElement("a");
        liveUrl.href = `projectDetail.html?project=project${projectId}`;  // Pass projectId in URL
        // liveUrl.target = "_blank";
        liveUrl.textContent = "View Project";

        // Append everything to the card
        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(liveUrl);
        card.appendChild(img);
        card.appendChild(content);

        return card;
    }

    // Loop through the project data and generate project cards
    for (const projectKey in projectData) {
        const project = projectData[projectKey];
        const projectId = projectKey.replace('project', ''); // Extract project number (1, 2, 3)
        const projectCard = createProjectCard(project, projectId);
        projectsList.appendChild(projectCard);
    }
});
