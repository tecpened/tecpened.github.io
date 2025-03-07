
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
// Function to create and add items to the featured container
function addFeaturedItems(body) {
    const featured = document.createElement('div');
    featured.classList.add('featured');
    body.appendChild(featured);
    // Define the items with header and paragraph
    const items = [
      {
        header: 'Creativity',
        paragraph: 'Creativity is inventing, experimenting, growing, taking risks and breaking rules'
      },
      {
        header: 'Innovation',
        paragraph: 'Innovation is the ability to see change as an opportunity, not a threat.'
      },
      {
        header: 'Youth',
        paragraph: 'Youth is the time to explore, learn, and challenge the status quo.'
      },
      {
        header: 'Unique',
        paragraph: 'Being unique means embracing your individuality and standing out from the crowd.'
      }
    ];

    // Create and append each item to the 'featured' div
    items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item'); // Optionally add a class for styling

      const header = document.createElement('h3');
      header.textContent = item.header;

      const paragraph = document.createElement('p');
      paragraph.textContent = item.paragraph;

      // Append header and paragraph to the item
      itemDiv.appendChild(header);
      itemDiv.appendChild(paragraph);
  
      // Append the item to the 'featured' div
      featured.appendChild(itemDiv);
    });

    return featured;
  }
  
// create the hero bento box //
function createHero(id, icon, header, subtitle) {
    // Create the bento box container
    const bentoBox = document.createElement('div');
    bentoBox.classList.add('bento-box');
    bentoBox.id = id;  // Assign the provided ID to the Bento Box
    
    // Create the featured philosophy
    addFeaturedItems(bentoBox);
    
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

    const title = document.createElement('h1');
    title.textContent = header;  // Insert the header

    const subtext = document.createElement('h2');
    subtext.textContent = subtitle;  // Insert the subtitle

    bentotext.appendChild(subtext);
    bentotext.appendChild(title);

    bentoBox.appendChild(bentotext);
  
    return bentoBox;
}

// Create Whole Structure //
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
    firstRowCol2.appendChild(createHero('bento-3', icon1, 'Creating brands, thinking brands and resonating forever', 'Pagans and vikings, well'));
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



