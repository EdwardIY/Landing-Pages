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

window.addEventListener('scroll', () => {
    const currentScrollpos = window.scrollY;
    if (prevScrollpos > currentScrollpos) handleScrollUp();
    else if(prevScrollpos < currentScrollpos) handleScrollDown()
    prevScrollpos = currentScrollpos
})

function handleScrollUp(){
    header.style.opacity = 1;
    header.style.top = '0vh'
    // header.style.background = 'rgba(0, 0, 0, 0.945)'
}

function handleScrollDown(){
    header.style.opacity = 0;
    header.style.top = '-10vh'
}

