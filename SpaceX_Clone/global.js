const nav1 = document.querySelectorAll('.nav1');
const nav2 = document.querySelector('.nav2');
const navButton = document.getElementById('navBtn');

(() => {

    let ready  = true;
    let collapsed = false
    window.addEventListener('resize', checkReady)
    checkWidth()

    function checkReady(){
        if(ready){
        checkWidth()
        ready = false
        setTimeout(()=> ready = true,100)
     }
    }
     

function checkWidth(){
        if(window.innerWidth < 1330 && !collapsed) foldNav()
        else if(collapsed && window.innerWidth > 1330) unFoldNav()
}

function foldNav(){
    Array.from(nav1[0].children).forEach((item)=>{
        nav2.innerHTML+= `<li>${item.textContent}</li>`
    
        })
        nav1.forEach((el)=>el.style.display = 'none')
        collapsed = true;
}

function unFoldNav(){
    nav2.innerHTML = Array.from(nav2.children).map((x,i)=>{
            if(i < 5) return `<li>${x.textContent}</li>`
        }).join('')
        collapsed = false
        nav1.forEach((el)=>el.style.display = 'flex')
}
})()



navButton.addEventListener('click',()=>{
    navButton.classList.toggle('open');
    nav2.classList.toggle('visable')
})
