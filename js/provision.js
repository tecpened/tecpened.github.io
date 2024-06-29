// Get The Section 3: Provisions
const provisions = document.querySelector('.provisions');

listofCategories = [
    'Interior Design',
    'Web Development',
    'Product Animations'
]

paragraph = [
    `<b>Design guides details:</b> The overarching design concept provides a framework within which details are placed and integrated. It sets the tone and direction for how details are selected and arranged to support the overall vision.
    <br>
    <b>Details enhance design:</b> Thoughtfully chosen details serve to enrich and amplify the design concept. They provide nuance, personality, and character, elevating the design from good to exceptional. Details can evoke emotion, communicate brand values, and create memorable experiences for the viewer.
    <br>
    <b>Attention to detail reinforces credibility:</b> Paying attention to even the smallest details demonstrates a commitment to quality and craftsmanship. It instills trust and confidence in the audience, showing that the creator has invested time and effort into ensuring every aspect of the design is considered and refined.`,
    'Need Contents for WD asap',
    'Need Contents for PA'
]

imageSource = [
`./public/interior/`,
`./public/web/`,
'./public/animation/'
]

// Create Categories and on Click information change
// A function that creates a division (description) text box containing a header and a paragraph (Header: Interior Design, Paragraph: ....).
function create_category(numberofCategories)
{
    const categories = document.createElement('div');
    categories.className = 'categories'
    provisions.appendChild(categories);

    for(i = 0; i< numberofCategories; i++){
        const category = document.createElement('div');
        category.className = 'category';
        categories.appendChild(category);

        const tab = document.createElement('h4');
        tab.innerHTML = listofCategories[i];
        const paras = paragraph[i];
        const imgs = imageSource[i]
        tab.style.color = 'white';
        tab.style.cursor = 'pointer';
        category.appendChild(tab);

        category.addEventListener('click',() =>
            info_loader(tab.innerHTML, paras, imgs));
    }
}

// Creating categories now!
create_category(3)

// Create a division and name it 'detail', lastly add to the section
const detail = document.createElement('div');
detail.className = 'detail';
provisions.appendChild(detail);

// (Provision: Parent Div > Detail: Gallery Div > Description)
const description = document.createElement('div')
description.className = 'description'
detail.appendChild(description)

// (Description > Title)
const title = document.createElement('h3');
title.innerHTML = listofCategories[0];
title.style.color = 'white'
description.appendChild(title);

// (Description > para)
const para = document.createElement('p');
para.innerHTML = paragraph[0];
description.appendChild(para);

// (Detail > Gradient)
const gradient = document.createElement('div')
gradient.className = 'gradient';
detail.appendChild(gradient);

let source = `${imageSource[0]}${1}.png`
const visuals = document.createElement('img');
visuals.src = source;
detail.appendChild(visuals)

// Function
function info_loader(x, y, z){
    title.innerHTML = x;
    para.innerHTML = y;
    console.log(z);
    visuals.src = `${z}${1}.png`
    gallery(3,z);
}

// (Detail > carousals)
const carousals = document.createElement('div')
carousals.className = 'carousals'
detail.appendChild(carousals)

// Gets images, displays them in carousal \\
// --- Backdrop Image on click --- \\
function gallery(numberofImages, image_path) {

    // Remove all existing carousels before adding a new one
    carousals.innerHTML = '';

    // Create a new carousel div
    const carous = document.createElement('div');
    carous.className = 'carous';
    carousals.appendChild(carous);

    // Loop to add images to the carousel
    for (let i = 0; i < numberofImages; i++) {
        const tiles = document.createElement('img');
        tiles.src = `${image_path}${i + 1}.png`;
        tiles.style.width = '12rem';
        tiles.style.height = '100%';
        tiles.style.margin = '0%';
        tiles.style.borderRadius = '5%';
        tiles.style.position = 'relative';
        tiles.style.cursor = 'pointer';
        carous.appendChild(tiles);

        // Add click event listener to show clicked image
        tiles.addEventListener('click', () => showImage(tiles.src));
    }
}

// Calling the function to add 3 images in the carousal
// gallery(3);

// Create a division: Visual, append to the detail div and visual is the image container.
function showImage(source)
{
    visuals.className = 'visuals';
    visuals.src = source;
}





