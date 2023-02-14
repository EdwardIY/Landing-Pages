const root = document.querySelector(":root"); 
const title = document.querySelector('h1');
const note = document.querySelector('p')
const button2 = document.querySelector('.op2')

const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close')
const nav = document.querySelector('nav')

        const catOptions = {
            modelS:{
                left:0,
                width:'90px'
            },
            model3:{
                left:'100px',
                width:'90px'
            },
            modelX:{
                left:'200px',
                width:'90px'
            },
            modelY:{
                left:'300px',
                width:'90px'
            },
            Solor_Roof:{
                left:'405px',
                width:'100px'
            },
            Solor_Panels:{
                left:'523px',
                width:'115px'
            },
            Shop:{
                left:'740px',
                width:'70px'
            },
            Account:{
                left:'815px',
                width:'100px'
            },
            Menu:{
                left:'915px',
                width:'80px'
            },
        }

        document.querySelector('nav').addEventListener('mouseover',(e)=>{
            const category = e.target.textContent
            if(category == 'Model S'){
                root.style.setProperty("--hoveredCategory", catOptions.modelS.left);
                root.style.setProperty("--hoveredCategory_width", catOptions.modelS.width);
            }
            else if(category == 'Model 3'){
                root.style.setProperty("--hoveredCategory", catOptions.model3.left);
                root.style.setProperty("--hoveredCategory_width", catOptions.model3.width);
            }
            else if(category == 'Model X'){
                root.style.setProperty("--hoveredCategory", catOptions.modelX.left);
                root.style.setProperty("--hoveredCategory_width", catOptions.modelX.width);
            }
            else if(category == 'Model Y'){
                root.style.setProperty("--hoveredCategory", catOptions.modelY.left);
                root.style.setProperty("--hoveredCategory_width", catOptions.modelY.width);
            }
            else if(category == 'Solar Roof'){
                root.style.setProperty("--hoveredCategory", catOptions.Solor_Roof.left);
                root.style.setProperty("--hoveredCategory_width", catOptions.Solor_Roof.width);
            }
            else if(category == 'Solar Panels'){
                root.style.setProperty("--hoveredCategory", catOptions.Solor_Panels.left);
                root.style.setProperty("--hoveredCategory_width", catOptions.Solor_Panels.width);
            }
            else if(category == 'Shop'){
                root.style.setProperty("--hoveredCategory", catOptions.Shop.left);
                root.style.setProperty("--hoveredCategory_width", catOptions.Shop.width);
            }
            else if(category == 'Account'){
                root.style.setProperty("--hoveredCategory", catOptions.Account.left);
                root.style.setProperty("--hoveredCategory_width", catOptions.Account.width);
            }
            else if(category == 'Menu'){
                root.style.setProperty("--hoveredCategory", catOptions.Menu.left);
                root.style.setProperty("--hoveredCategory_width", catOptions.Menu.width);
            }
        })
let watcher = setInterval(current,1000)


let topics = [
    {
        car: document.querySelector('.mS'),
        title: 'Model S',
        note: 'Leasing starting at $349/mo',
        button2: 'Demo Drive'
    },
    {
        car: document.querySelector('.m3'),
        title: 'Model 3',
        note: 'Leasing starting at $249/mo',
        button2: 'Demo Drive'
    },
    {
        car: document.querySelector('.mY'),
        title: 'Model Y',
        note: 'Leasing starting at $375/mo',
        button2: 'Demo Drive'
    },
    {
        car: document.querySelector('.mX'),
        title: 'Model X',
        note: 'Leasing starting at $30/mo',
        button2: 'Demo Drive'
    },
    {
        car: document.querySelector('.h1'),
        title: 'Solar Roof',
        note: 'Produce Clean Energy From Your Roof',
        button2: 'Learn more'
    },
    {
        car: document.querySelector('.h2'),
        title: 'Solar Panels',
        note: 'Lowest Cost Solar Panels in America',
        button2: 'Learn more'
    }
]

function current() {
    for (i in topics) {
        if (topics[i].car.getBoundingClientRect().top > -500 && topics[i].car.getBoundingClientRect().top < 500) {
            
            title.textContent = topics[i].title
            note.textContent = topics[i].note
            button2.textContent = topics[i].button2
            break
        }
            
    }
}


openBtn.addEventListener('click', () => {
    openBtn.style.zIndex = '0'
    nav.style.right = '0%';
    console.log('clicked')
})

closeBtn.addEventListener('click', () => {
    openBtn.style.zIndex = '1'
    nav.style.right = '-100%';

    // if (screen.width  1400) {
    //     nav.style.right = '0%'
    // }
})
    
