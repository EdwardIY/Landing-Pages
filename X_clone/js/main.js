
// Navigation
export function Navigation_Feature() {
    const header = document.querySelector('header')
    const NavList_1 = document.getElementById('NavList_1')
    const NavList_2 = document.getElementById('NavList_2')
    const MobileNavList = document.querySelector('.Nav__List__Mobile')
    const openNav = document.querySelector('.Hamburger')
    const closeNav = document.querySelector('.Nav__List__Mobile--icon')
    let prevScrollpos = window.scrollY;
    
    
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
    function handleScrollUp(){
        header.style.opacity = 1;
        header.style.top = '0vh'
        header.style.background = 'rgba(0, 0, 0, 0.945)'
    }
    function handleScrollDown(){
        header.style.opacity = 0;
        header.style.top = '-10vh'
    }
    window.addEventListener('scroll', () => {
        const currentScrollpos = window.scrollY;
        if (prevScrollpos > currentScrollpos) handleScrollUp();
        else if(prevScrollpos < currentScrollpos) handleScrollDown()
        prevScrollpos = currentScrollpos
    })
}


// Numbers
export function Numbers_Feature(numbers) {
const stats = document.getElementById('stats');
const stat_1 = stats.children[0];
const stat_2 = stats.children[1];
const stat_3 = stats.children[2];
let numsLoaded = false;
function handleScroll(){
    if (stats.getBoundingClientRect().top <= 560 && !numsLoaded) {
        numsLoaded = true;
        incNumbers();
    }  
}
function incNumbers() {
    for (let i = 1; i <= Math.max(...numbers); i++){
        setTimeout(() => {
            if (i <= numbers[2]) stat_3.children[0].textContent = i;
            if (i <= numbers[1]) stat_2.children[0].textContent = i;
            if (i <= numbers[0]) stat_1.children[0].textContent = i;

        }, i * 5)
    }
}
window.addEventListener('scroll',handleScroll)
}


// Model 
export function Model_Feature() {
const note = document.getElementById('Model__Note');
const chart = document.getElementById('Chart');
const model = document.getElementById('Model Hero');
const model_Video = document.getElementById('Model__Video')
let revealed = false;
// let disabled = false;
    function changeModelState() {
        model_Video.style.opacity = '1';
        chart.style.opacity = '1';
}
function revertModelState() {
    chart.style.opacity = '0';
    model_Video.style.opacity = '0';


}
window.addEventListener('scroll', () => {
    let location = note.getBoundingClientRect().top;
    if ((location < -150 && location > -330) && !revealed) {
        revealed = !revealed
        changeModelState()

    }
    else if ((location < 900 && location > -150) && revealed) {
        revealed = !revealed
        revertModelState()

    }
})

}



// Video 
export function Video_Feature() {
const video = document.querySelectorAll('.Play');
const iFrame = document.getElementById('VideoPlayer__Video')
const videPlayer = document.getElementById('VideoPlayer');
const videoPlayerIcon = document.getElementById('VideoPlayer__Icon');
    video.forEach((vid) => {
        vid.addEventListener('click', () => {
            videPlayer.style.top = '0vh'
            iFrame.style.opacity = '1'
            iFrame.src = vid.dataset.videoUrl;
    })
})
videoPlayerIcon.addEventListener('click', () => {
    videPlayer.style.top = '100vh'
    iFrame.style.opacity = '0'
    iFrame.src = ''
})
}



// SlideShow 
export function SlideShow_Feature(slides, slideImages, slideNotes) {
const slidesContainer = document.getElementById('SlidShow__Slides');
const prevIcon = document.getElementById('prevIcon');
const nextIcon = document.getElementById('nextIcon');
const slideNote = document.getElementById('slideNote');
let slidePointer = 1;
let notePointer = 1;
let loaded = false;
function debounce(work, delay) {
    let ready = true;

    return function () {
        if (ready) {
            work();
            ready = false;
            setTimeout(() => ready = true,delay)
        }
    }
}
function prev() {
    slidePointer--;
    notePointer--;

    if (!slides[slidePointer - 1]) { 
        adjustReel(0);
        updateSlide(100)
    }
    else updateSlide(100);
    
}
function next() {
    slidePointer++;
    notePointer++;

    if (!slides[slidePointer + 1]) {
        adjustReel(1);
        updateSlide(-100)
    }
    else updateSlide(-100);
}
function adjustReel(value) {
    if (value) {
        for (let child of slidesContainer.children) {
            if (child.id == slides[0].id) {
                child.style.transition = 'initial';
                child.style.left = '200vw';
                setTimeout(() => child.style.transition = '1.3s',0)

                slides.push(slides.shift())
                slideNotes.push(slideNotes.shift())
                break;
            }
        }
        slidePointer--;
        notePointer--;
    } else {
        for (let child of slidesContainer.children) {
            if (child.id == slides[3].id) {
                child.style.transition = 'initial';
                child.style.left = '-200vw';
                setTimeout(() => child.style.transition = '1.3s',0)

                slides.unshift(slides.pop())
                slideNotes.unshift(slideNotes.pop())
                break;
            }
        }
        slidePointer++;
        notePointer++;
    }
}
function updateSlide(direction) {
    for (let child of slidesContainer.children) {
        let value = child.style.left;
        child.style.left = (+value.slice(0,-2) + direction) + 'vw'
    }
    slideNote.style.opacity = '0';

    setTimeout(() => {
        slideNote.textContent = slideNotes[notePointer];
        slideNote.style.opacity = '1'
    },700)
    
    
} 
prevIcon.addEventListener('click', debounce(prev,1500))
    nextIcon.addEventListener('click', debounce(next, 1500))

    console.log(slideImages,slides)
slideImages.forEach((img, i) => {
        i++;
        slidesContainer.innerHTML += `<div id='${'slide' + i}' class="Slides__IMG Hero" style="background:url(${img}) center center; left:${Number(i * 100 - 200)}vw; background-size:cover;width:100vw"></div>`;
        slides[i - 1] = (slidesContainer.lastElementChild)
    })
    slideNote.textContent = slideNotes[notePointer];
}















