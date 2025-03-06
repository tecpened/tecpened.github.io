
function createBentoBox(id, icon, header, subtitle) {
    // Create the bento box container
    const bentoBox = document.createElement('div');
    bentoBox.classList.add('bento-box');
    bentoBox.id = id;  // Assign the provided ID to the Bento Box
  
    // Create and add the icon row
    const iconRow = document.createElement('div');
    iconRow.classList.add('icon-row');
    iconRow.innerHTML = icon;  // Insert the icon
    
    bentoBox.appendChild(iconRow);
  
    // Create and add the header row
    const bentotext = document.createElement('div');
    bentotext.className = 'bentotext';
    bentotext.style.display = 'flex';
    bentotext.style.flexDirection = 'column'
    bentotext.style.gap = '.3rem';

    const title = document.createElement('h4');
    title.textContent = header;  // Insert the header

    const subtext = document.createElement('h2');
    subtext.textContent = subtitle;  // Insert the subtitle

    bentotext.appendChild(title);
    bentotext.appendChild(subtext);

    bentoBox.appendChild(bentotext);
  
    return bentoBox;
}
const container = document.querySelector('.container');
function fetchHome() {
    const homeContainer = document.createElement('div');
    homeContainer.className = 'home'
    container.appendChild(homeContainer)
  
    // Create first row (3 columns)
    const firstRow = document.createElement('div');
    firstRow.className = 'firstRow';

    // Create second row (2 columns)
    const secondRow = document.createElement('div');
    secondRow.className = 'secondRow';

    // Create columns for first row
    const firstRowCol1 = document.createElement('div');
    firstRowCol1.className = 'firstRowCol firstCol';
    const firstRowCol2 = document.createElement('div');
    firstRowCol2.className = 'firstRowCol middleCol';
    const firstRowCol3 = document.createElement('div');
    firstRowCol3.className = 'firstRowCol thirdCol';

    // Create columns for second row
    const secondRowCol1 = document.createElement('div');
    secondRowCol1.className = 'firstRowCol';
    const secondRowCol2 = document.createElement('div');
    secondRowCol2.className = 'firstRowCol';

    // Define icon for Bento Boxes
    const icon1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3333 2H18V6.66667M17 3L12 8M10 3.33333H4C3.46957 3.33333 2.96086 3.54405 2.58579 3.91912C2.21071 4.29419 2 4.8029 2 5.33333V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H14.6667C15.1971 18 15.7058 17.7893 16.0809 17.4142C16.456 17.0391 16.6667 16.5304 16.6667 16V10" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

    // Append Bento Boxes to columns with unique IDs
    firstRowCol1.appendChild(createBentoBox('bento-1', icon1, 'tecpen', 'resonating in style'));
    firstRowCol1.appendChild(createBentoBox('bento-2', icon1, 'Earth', 'Our home planet'));
    firstRowCol2.appendChild(createBentoBox('bento-3', icon1, 'hero', 'Latest in smartphones'));
    firstRowCol3.appendChild(createBentoBox('bento-4', icon1, 'services', 'Latest in smartphones'));
    secondRowCol1.appendChild(createBentoBox('bento-5', '🚀', 'Rocket', 'Travel beyond Earth'));
    secondRowCol2.appendChild(createBentoBox('bento-6', icon1, 'Space Exploration', 'Explore the universe'));

    // Append columns to rows
    firstRow.appendChild(firstRowCol1);
    firstRow.appendChild(firstRowCol2);
    firstRow.appendChild(firstRowCol3);
    secondRow.appendChild(secondRowCol1);
    secondRow.appendChild(secondRowCol2);

    // Append rows to the container
    homeContainer.appendChild(firstRow);
    homeContainer.appendChild(secondRow);

}



