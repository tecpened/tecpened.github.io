// Section 2 : Text Heading
text_box = [
    'analytic',
    'available',
    'creative',
    'punctual',
    'attractive'
];
// Section 2: Sub Lines
punch_line = [
    'analysis first approach',
    'always online',
    'out of box thinking',
    'on time mindset',
    'focal point concepts'
]

source = [
    '../public/Benefits/Analysis.svg',
    '../public/Benefits/Available.svg',
    '../public/Benefits/Creative.svg',
    '../public/Benefits/Punctual.svg',
    '../public/Benefits/Attractive.svg',

]

const container = document.querySelector('.container');

const groups = document.createElement('div');
groups.className = 'groups'
container.appendChild(groups);

for (let i = 0; i < 5; i++){
    // Initially Creating a group(1,2,3..) inside the group container and adding it the main group.
    var div = document.createElement('div');
    div.className = `group${i+1}`;
    groups.appendChild(div);

    // Now creating image group inside the for loop generated group
    var grp_img = document.createElement('div');
    grp_img.className = `grp_img${i+1}`;
    div.appendChild(grp_img);

    // Adding Image to the image group (group > group1 > grp_img1 > img)
    var pic = document.createElement('img');
    pic.src = source[i];
    // pic.style.height = '40%';
    grp_img.appendChild(pic);

    // Now creating text group inside the for loop generated group
    var grp_txt = document.createElement('div');
    grp_txt.className = `grp_txt${i+1}`
    div.appendChild(grp_txt)
    
    // Adding Text to the text group (group > group1 > grp_txt1 > h4 and h5)
    const header = document.createElement('h4');
    header.innerText = text_box[i];
    grp_txt.appendChild(header);

    const line = document.createElement('h5');
    line.innerText = punch_line[i];
    grp_txt.appendChild(line);
}

// function add_text(value, index){
//     const box = document.querySelector(`group${1}`);

//     const header = document.createElement('h4')
//     header.innerText = value;
//     box.appendChild(header);

//     const brek = document.createElement('br');
//     box.appendChild(brek);
    
//     const line = document.createElement('h5')
//     line.innerText = punch_line[index];
//     box.appendChild(line);

// }

// text_box.forEach(add_text);
