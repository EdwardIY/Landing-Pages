const header = document.querySelector('header')
const NavList_1 = document.getElementById('NavList_1')
const NavList_2 = document.getElementById('NavList_2')
const MobileNavList = document.querySelector('.Nav__List__Mobile')
const openNav = document.querySelector('.Hamburger')
const closeNav = document.querySelector('.Nav__List__Mobile--icon')

// Fix close nav bug
const mediaQuery = window.matchMedia('(max-width:1300px)');
mediaQuery.addEventListener('change', collapse)
openNav.addEventListener('click', () => {
    openNav.style.opacity = 0;
    MobileNavList.style.right = '0px'
})
closeNav.addEventListener('click', () => {
    console.log('ran closed')
    openNav.style.opacity = 1
    MobileNavList.style.right = '-500px'
})

function collapse(e) {
    if (e.matches) {
        console.log(NavList_1.children[1].children[0].textContent)
        for (let i = 1; i < NavList_1.children.length; i++){
            MobileNavList.innerHTML +=
                `<li class="Nav__List__Mobile--link"><a href="">
                    ${NavList_1.children[i].children[0].textContent}
                </a></li>`;
            NavList_1.children[i].style.display = 'none'
        }
    } else {
        for (let i = 1; i < NavList_1.children.length; i++){
            MobileNavList.lastChild.remove()
            NavList_1.children[i].style.display = 'block'
        }
    }
}

