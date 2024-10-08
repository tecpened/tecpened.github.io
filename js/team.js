source = [
    '../public/founders/Nahian.png',
    '../public/founders/Nihaz.png',
    '../public/founders/Belal.png',
    '../public/founders/Tofiq.png'
]

founders = [
    'Nahian Hasan',
    'Nihaz Bin Hashem',
    'Belal Mahmud',
    'Tofiqur Rahman'
]
designations = [
    'Founder, CEO',
    'Founder, CEO',
    'Founder, CEO',
    'Founder, CEO',
]

const team = document.querySelector('.team_right');

for( i = 0; i < source.length; i++ ){
    const founder = document.createElement('div');
    founder.className = 'founders';
    team.appendChild(founder);

    var images = document.createElement('img');
    images.src = source[i];
    founder.appendChild(images);

    const names = document.createElement('div');
    names.className = 'names';
    founder.appendChild(names);

    const name = document.createElement('h4');
    name.innerText = founders[i];
    names.appendChild(name);

    const designation = document.createElement('h5');
    designation.innerText = designations[i];
    names.appendChild(designation);
}
