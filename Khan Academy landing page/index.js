
document.querySelectorAll('.fadeIn').forEach((x) => {
    gsap.to(x, {
        scrollTrigger: x,
        duration: 1,
        opacity: 1,
        
    })
})

document.querySelectorAll('.fadeUp').forEach((x) => {
    gsap.to(x, {
        scrollTrigger: x,
        duration: 1,
        opacity: 1,
        y:0
        
    })
})

document.querySelectorAll('.fadeDown').forEach((x) => {
    gsap.to(x, {
        scrollTrigger: x,
        duration: 1,
        opacity: 1,
        y: 0,        
    })
})

document.querySelectorAll('.fadeRight').forEach((x) => {
    gsap.to(x, {
        scrollTrigger: x,
        duration: 1,
        opacity: 1,
        x:0
        
    })
})
