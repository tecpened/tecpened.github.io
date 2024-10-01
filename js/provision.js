// Section 3: Our Services
serviceSource = [
    './public/animation/1.png',
    './public/animation/2.png',
    './public/animation/3.png',
]
serviceCategories = [
    'Web and App Development',
    'Product Modelling',
    'UI/UX Design'
]

function image(){
    const services = document.querySelector('.services');

    for(i = 0; i <= 2; i++){
        const service = document.createElement('div');
        service.className = `service${i}`;


        

        const serviceImage  = document.createElement('img')
        serviceImage.src = serviceSource[i]

        const serviceName = document.createElement('h4')
        serviceName.textContent = serviceCategories[i];

        service.appendChild(serviceImage)
        service.appendChild(serviceName)

        services.appendChild(service);

    }
    // const im1  = document.createElement('img');
    // const im2  = document.createElement('img');
    // const im3  = document.createElement('img');
    // im1.src = source;
    // im2.src = source;
    // im3.src = source;

    // services.appendChild(im1)
    // services.appendChild(im2)
    // services.appendChild(im3)
}
image();

// Get The Section 4: Provisions
const provisions = document.querySelector('.provisions');
const provision_left = document.querySelector('.provision_left');
const header = document.querySelector('.header');
const provision_right = document.querySelector('.provision_right');

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

for(i = 1; i <= 6; i++){
let source = `${imageSource[2]}${i}.png`
const visuals = document.createElement('img');
visuals.src = source;
provision_right.appendChild(visuals)
}
