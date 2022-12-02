
import {personOne,personTwo,personThree,Person} from "./people.js"

const p1 = new Person(
personOne.location,
personOne.nameOccupation,
personOne.areaOfStudy,
personOne.JPEG,
personOne.description
)

const p2 = new Person(
personTwo.location,
personTwo.nameOccupation,
personTwo.areaOfStudy,
personTwo.JPEG,
personTwo.description
)

const p3 = new Person(
personThree.location,
personThree.nameOccupation,
personThree.areaOfStudy,
personThree.JPEG,
personThree.description
)


// Person PopUp TEMPLATE
const personInfo = document.getElementById("pPopUpContainer")
const nameOccupation = document.getElementById("nameOccupation")
const areaOfStudy = document.getElementById("areaOfStudy")
const img = document.getElementById("Img")
const personDes = document.getElementById("personDes")

// Person PopUp Function
function bringUpPerson(NO,AS,IMG,DES) {
    personInfo.style.opacity = "1"
    personInfo.style.zIndex = "1"
    fadeToggle.forEach((x)=> x.style.opacity = "0")
    nameOccupation.innerHTML = NO
    areaOfStudy.innerHTML= AS
    img.src = IMG
    personDes.innerHTML = DES
    
    document.querySelector(".facultyContainer").style.gap = "0px";
    document.querySelectorAll(".person")
    .forEach((x)=> {
        x.style.zIndex = '-5'
        x.style.opacity = "0"
        x.style.position = "absolute"
    })
    personInfo.style.position = "initial"
    
}

p1.locationInHTML.addEventListener("click",()=>bringUpPerson(p1.nameOccupation,p1.areaOfStudy,p1.JPEG,p1.description))
p2.locationInHTML.addEventListener("click",()=>bringUpPerson(p2.nameOccupation,p2.areaOfStudy,p2.JPEG,p2.description))
p3.locationInHTML.addEventListener("click",()=>bringUpPerson(p3.nameOccupation,p3.areaOfStudy,p3.JPEG,p3.description))

// Close person PopUp
const fadeToggle = document.querySelectorAll(".fadeToggle")
const closeBtn = document.getElementById("closeBtn")
closeBtn.addEventListener("click",()=>{
    personInfo.style.opacity = "0"
    personInfo.style.zIndex = "-1"
    fadeToggle.forEach((x)=> x.style.opacity = "1");

    document.querySelector(".facultyContainer").style.gap = "80px";
    document.querySelectorAll(".person")
    .forEach((x)=> {
        x.style.zIndex = 'initial'
        x.style.opacity = "1"
        x.style.position = "relative"
    })
    personInfo.style.position = "absolute"
})


// Landing image animation 
const loadImages = document.getElementById("imgLoader")
const imgContainer = document.getElementById('landingImgContainer');

let imgIndex = 1;

const preload = setInterval(()=>{
    loadImages.style.opacity = '0';
    loadImages.style.maxWidth = '100vw';
    loadImages.style.position = 'absolute';
    loadImages.src = `../images/LandingImage${imgIndex}-Large-min.jpg`;
    if(loadImages.complete) imgIndex++;
    if(imgIndex == 5){
        clearInterval(preload)
        landingPageAnimation()
    }
}, 100)


function landingPageAnimation(){

    let imgIndex = 2;
        setInterval(()=>{
            console.log(imgIndex)
            imgContainer.style.backgroundImage = `url(../images/LandingImage${imgIndex}-Large-min.jpg)`;
            console.log(imgContainer.style.backgroundImage)
            imgIndex++
            if(imgIndex == 5) imgIndex = 1;
        },5000)
}








