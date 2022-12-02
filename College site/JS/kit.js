/* eslint-disable no-undef */
// Mobile Nav
const closeNav = document.getElementById("close")
const openNav = document.getElementById("open")
const nav = document.getElementById("nav")

openNav.addEventListener("click",()=>{
    closeNav.style.opacity = "1"
    closeNav.style.zIndex = "2"
    openNav.style.opacity = "0"
    openNav.style.zIndex = "0"
    nav.style.top = "0vh"
    document.querySelector("body").style.overflowY = "hidden"

})

closeNav.addEventListener("click",()=>{
    openNav.style.opacity = "1"
    openNav.style.zIndex = "2"
    closeNav.style.opacity = "0"
    closeNav.style.zIndex = "0"
    nav.style.top = "-100vh"
    document.querySelector("body").style.overflowY= "scroll"
})

// Scroll animations
window.sr = ScrollReveal();


sr.reveal(".left-In1",
{
 origin:"left",
 distance:"100px",
 duration:1000,
 delay:500

});

sr.reveal(".bottom-In",
{
 origin:"bottom",
 distance:"100px",
 duration:2000,
 viewFactor:.4,

});

sr.reveal(".bottom-InDelay",
{
 origin:"bottom",
 distance:"100px",
 duration:2000,
 viewFactor:.4,
 delay:500

});

sr.reveal(".fade-In",
{
duration:2000,
opacity:0

});
sr.reveal(".left-In2",
{
 origin:"left",
 distance:"100px",
 duration:2000,
 viewFactor:.3


});
sr.reveal(".top-In",
{
 origin:"top",
 distance:"100px",
 duration:2000,
 viewFactor:.3


});
sr.reveal('.item1-up-In',
{
 origin:"bottom",
 distance:"50px",
 viewFactor:.2

});

sr.reveal('.item2-up-In',
{
 delay:100,
  origin:"bottom",
 distance:"50px",
viewFactor:.2


});
sr.reveal('.item3-up-In',
{
 delay:200,
  origin:"bottom",
 distance:"50px",
viewFactor:.2


});
sr.reveal('.item4-up-In',
{
 delay:300,
origin:"bottom",
 distance:"50px",
viewFactor:.2


});
sr.reveal('.item5-up-In',
{
 delay:400,
  origin:"bottom",
 distance:"50px",
viewFactor:.2
});



sr.reveal(".left-In3",
{
 origin:"left",
 distance:"100px",
 duration:2000,
 viewFactor:.3

})
sr.reveal(".right-In",
{
 origin:"right",
 distance:"100px",
 // duration:1000,
 duration:2000,
 viewFactor:.3,
 delay:500
})

//News Letter
const openNL = document.querySelectorAll(".openNL")
const closeNL = document.getElementById("closeNL")
const newsLetter = document.getElementById("newsLetter")
const nLbg = document.getElementById("NL-BG")
// const submit = document.getElementById("submitBtn")


openNL.forEach((x)=>{
    x.addEventListener("click",()=>{
        // if(localStorage.getItem("submitted")) submission();
            if(newsLetter.style.display == "none") submission();
            newsLetter.style.opacity = "1"
            newsLetter.style.zIndex = "3"
            nLbg.style.display = "block"
             
    })
})

closeNL.addEventListener("click",()=>{
    newsLetter.style.opacity = "0"
    newsLetter.style.zIndex = "-1"
    nLbg.style.display = "none"
})

newsLetter.addEventListener("submit",submission);

function submission(e){
    if(newsLetter.style.display != "none") {
        e.preventDefault();
    }
    localStorage.setItem("submitted","true")
    newsLetter.style.display = "initial"
    newsLetter.innerHTML = `<h1> Thank You for Your Submission</h1>`
    setTimeout(()=>{
            newsLetter.style.display = "none"
            nLbg.style.display = "none"
    },2000)
}





