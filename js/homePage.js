
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

    // Append Bento Boxes to columns with unique IDs
    firstRowCol1.appendChild(createBentoBox('bento-1', iconNav, 'tecpen', 'resonating in style'));
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



