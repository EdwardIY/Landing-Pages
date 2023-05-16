const header = document.querySelector('header')
const NavList_1 = document.getElementById('NavList_1')
const NavList_2 = document.getElementById('NavList_2')
const MobileNavList = document.querySelector('.Nav__List__Mobile')
const openNav = document.querySelector('.Hamburger')
const closeNav = document.querySelector('.Nav__List__Mobile--icon')

if (window.innerWidth <= 1300) collapse();
const mediaQuery = window.matchMedia('(max-width:1300px)');
mediaQuery.addEventListener('change', (e) => {
    if (e.matches) collapse()
    else expand()
})
openNav.addEventListener('click', () => {
    console.log('open clicked')
    MobileNavList.style.right = '0px'
})
closeNav.addEventListener('click', () => {
    console.log('close clicked')
    MobileNavList.style.right = '-500px'
})


function collapse() {
    for (let i = 1; i < NavList_1.children.length; i++){
        let link = document.createElement('li') 
        link.className = 'Nav__List__Mobile--link'
        link.textContent = NavList_1.children[i].children[0].textContent

        MobileNavList.appendChild(link)
        NavList_1.children[i].style.display = 'none'
    }
    console.log(MobileNavList.children)
}

function expand() {
    for (let i = 1; i < NavList_1.children.length; i++){
        MobileNavList.lastChild.remove()
        NavList_1.children[i].style.display = 'block'
    }
}


let prevScrollpos = window.scrollY;



function handleScrollUp(){
    header.style.opacity = 1;
    header.style.top = '0vh'
    // header.style.background = 'rgba(0, 0, 0, 0.945)'
}

function handleScrollDown(){
    header.style.opacity = 0;
    header.style.top = '-10vh'
}


// Numbers

const stats = document.getElementById('stats');
const stat_1 = stats.children[0];
const stat_2 = stats.children[1];
const stat_3 = stats.children[2];

window.addEventListener('scroll', handleScroll);

function handleScroll(){
    if (stats.getBoundingClientRect().top <= 560) {
        incNumbers();
        window.removeEventListener('scroll',handleScroll)
    }
        
}
function incNumbers() {
        for (let i = 1; i <= 212; i++){
            setTimeout(() => {
                if (i <= 147) stat_3.children[0].textContent = i;
                if (i <= 170) stat_2.children[0].textContent = i;
                if (i <= 212) stat_1.children[0].textContent = i;
    
            }, i * 5)
        }
}



// Model

const note = document.getElementById('Model__Note');
const chart = document.getElementById('Model__Chart');
const model = document.getElementById('Model Hero');
let revealed = false;
let disabled = false;

function changeModelState() {
    chart.style.opacity = '1';
    model.style.background = 'url(../img/falcon-9_model.jpg) center center'
    model.style.backgroundSize = 'cover';
    console.log('Changed')
    revealed = true;

}
function revertModelState() {
    chart.style.opacity = '0';
    model.style.background = 'url(../img/falcon-9_lines.jpg) center center';
    model.style.backgroundSize = 'cover';
    console.log('Changed back')
    revealed = false;
}






window.addEventListener('scroll', () => {

    // Nav bar
    const currentScrollpos = window.scrollY;
    if (prevScrollpos > currentScrollpos) handleScrollUp();
    else if(prevScrollpos < currentScrollpos) handleScrollDown()
    prevScrollpos = currentScrollpos

    // Model
    let location = note.getBoundingClientRect().top;
    if ((location < -150 && location > -330) && !revealed)
        changeModelState()
    else if ((location < 900 && location > -150) && revealed)
        revertModelState()
})





