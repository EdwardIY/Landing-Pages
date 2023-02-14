gsap.registerPlugin(ScrollTrigger)

document.querySelectorAll('.card').forEach((el) => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            toggleActions: 'play none none none'
        },
        duration: 1,
        opacity: 1,
        y: 0
    }) 
})

document.querySelectorAll('.left').forEach((el) => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            toggleActions: 'play none none none'
        },
        duration: 1,
        opacity: 1,
        x: 0
    }) 
})

document.querySelectorAll('.right').forEach((el) => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            toggleActions: 'play none none none'
        },
        duration: 1,
        opacity: 1,
        x: 0
    }) 
})

gsap.to('.up', {
    scrollTrigger: {
        trigger: '.up',
        toggleActions: 'play none none none'
    },
    duration: 1,
    opacity: 1,
    y: 0
}) 

gsap.to('.down', {
    scrollTrigger: {
        trigger: '.down',
        toggleActions: 'play none none none'
    },
    duration: 1,
    opacity: 1,
    y: 0
}) 