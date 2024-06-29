// Get the button element
const fork = document.querySelector('.fork');
const toggle = document.querySelector('.toggle');

const lists = document.createElement('div');
lists.className = 'lists';
toggle.append(lists);

list_box = [
    'web development',
    'graphic design',
    'interior design'
]

for (let i = 0; i < 3; i++){
    var list = document.createElement('div');
    list.className = `list${i+1}`;
     list.innerText = list_box[i];
    lists.appendChild(list);
}
lists.style.position = 'absolute';
lists.style.display = 'flex';
lists.style.opacity = 0;

let value = false;

function onclick(){
    if(value){
    lists.style.opacity = 1;
    lists.style.transform = 'translateX(100px)'
    lists.style.transition = '.5s';
    lists.style.display = 'flex';
    

    }
    else{
        lists.style.transform = 'translateX(0px)';
        lists.style.transition = '.1s';
        lists.style.opacity = 0;
        lists.style.position = 'absolute';
        
    }

    value = !value;
}

fork.addEventListener('click', onclick);