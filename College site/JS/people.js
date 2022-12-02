const personOne = {
    location : document.getElementById("p1"),
    nameOccupation : "Paul Yang, Ph.D., Assistant Professor",
    areaOfStudy : "English | College of Arts and Sciences | Geauga Campus",
    JPEG : "../images/prof1.Small-min.jpg",
    description : ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, pariatur
    nulla laboriosam
    excepturi
    totam at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quia. Lorem
    ipsum
    dolor
    sit amet
    consectetur adipisicing elit. Eaque sit aliquam quo doloribus! Vitae
    voluptates quae voluptatibus, eveniet consectetur et, provident doloremque tempora itaque iure
    ullam
    exercitationem sapiente, repudiandae delectus.`
}
const personTwo = {
    location : document.getElementById("p2"),
    nameOccupation : "Jack McCartney, Ph.D., Associate Professor",
    areaOfStudy : "Math | College of math and Sciences | Florin Campus",
    JPEG : "../images/prof2.Small-min.jpg",
    description : ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, pariatur
    nulla laboriosam
    excepturi
    totam at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quia. Lorem
    ipsum
    dolor
    sit amet
    consectetur adipisicing elit. Eaque sit aliquam quo doloribus! Vitae
    voluptates quae voluptatibus, eveniet consectetur et, provident doloremque tempora itaque iure
    ullam
    exercitationem sapiente, repudiandae delectus.`
}
const personThree = {
    location : document.getElementById("p3"),
    nameOccupation : "Smith Hacker, Ph.D., Professor",
    areaOfStudy : "Geology | Department of Arts and Sciences | Trumbull Campus",
    JPEG : "../images/prof3.Small-min.jpg",
    description : ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, pariatur
    nulla laboriosam
    excepturi
    totam at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quia. Lorem
    ipsum
    dolor
    sit amet
    consectetur adipisicing elit. Eaque sit aliquam quo doloribus! Vitae
    voluptates quae voluptatibus, eveniet consectetur et, provident doloremque tempora itaque iure
    ullam
    exercitationem sapiente, repudiandae delectus.`
}

//Person Creator Function
function Person(LIH,NO,AS,JPEG,DES){
    this.locationInHTML = LIH,
    this.nameOccupation = NO
    this.areaOfStudy = AS,
    this.JPEG = JPEG,
    this.description = DES
}

export {
    personOne,
    personTwo,
    personThree,
    Person
}