document.querySelectorAll('.fadeIn').forEach((el) => {
    gsap.to(el, {
        scrollTrigger: el,
        duration: 1,
        opacity: 1,
    })
})
document.querySelectorAll('.fadeUp').forEach((el) => {
    gsap.to(el, {
        scrollTrigger: el,
        duration: 1,
        opacity: 1,
        y:0
    })
})
document.querySelectorAll('.fadeDown').forEach((el) => {
    gsap.to(el, {
        scrollTrigger: el,
        duration: 1,
        opacity: 1,
        y:0
    })
})
document.querySelectorAll('.fadeLeft').forEach((el) => {
    gsap.to(el, {
        scrollTrigger: el,
        duration: 1,
        opacity: 1,
        x:0
    })
})
document.querySelectorAll('.fadeRight').forEach((el) => {
    gsap.to(el, {
        scrollTrigger: el,
        duration: 1,
        opacity: 1,
        x:0
    })
})