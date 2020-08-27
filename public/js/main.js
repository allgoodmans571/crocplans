var purpose = document.querySelector(".carousel-purpose")
var container1 = document.querySelector(".carousel-container1")
var container2 = document.querySelector(".carousel-container2")
var container3 = document.querySelector(".carousel-container3")
var container4 = document.querySelector(".carousel-container4")
var container5 = document.querySelector(".carousel-container5")



var count1 = document.querySelectorAll(".purpose__item-p")
var count2 = document.querySelectorAll(".purpose__item-r")
var count3 = document.querySelectorAll(".purpose__item-o")
var count4 = document.querySelectorAll(".purpose__item-b")
var count5 = document.querySelectorAll(".purpose__item-pi")

const nextBtn1 = document.querySelector(".nextBtn1")
const nextBtn2 = document.querySelector(".nextBtn2")
const nextBtn3 = document.querySelector(".nextBtn3")
const nextBtn4 = document.querySelector(".nextBtn4")
const nextBtn5 = document.querySelector(".nextBtn5")

const prevBtn1 = document.querySelector(".prevBtn1")
const prevBtn2 = document.querySelector(".prevBtn2")
const prevBtn3 = document.querySelector(".prevBtn3")
const prevBtn4 = document.querySelector(".prevBtn4")
const prevBtn5 = document.querySelector(".prevBtn5")

var step


if (document.body.clientWidth > 770){
    size = 323
} else{
    size = 203
}

var widthContainer1 = size * count1.length
var widthContainer2 = size * count2.length
var widthContainer3 = size * count3.length
var widthContainer4 = size * count4.length
var widthContainer5 = size * count5.length

var step = size + 20


var widthPurpose = parseInt(window.getComputedStyle(purpose).width)

container1.style.width = `${widthContainer1}px`
container2.style.width = `${widthContainer2}px`
container3.style.width = `${widthContainer3}px`
container4.style.width = `${widthContainer4}px`
container5.style.width = `${widthContainer5}px`

var position1 = 0

var position2 = 0

var position3 = 0

var position4 = 0

var position5 = 0

nextBtn1.addEventListener("click", ()=>{
    if (widthContainer1 + position1 > widthPurpose){

        if (widthContainer1 + position1 - step < widthPurpose){
            position1 -= widthContainer1 + position1 - widthPurpose + parseInt(window.getComputedStyle(purpose).marginLeft);
        } else{
            position1 -= step
        }
        
        container1.style.transform = "translateX(" + String(position1) + "px)"
    }
});

prevBtn1.addEventListener("click", ()=>{
    position1 += step
 
    position1 = Math.min(0, position1)

    container1.style.transform = "translateX(" + String(position1) + "px)"
});



nextBtn2.addEventListener("click", ()=>{
    if (widthContainer2 + position2 > widthPurpose){


        if (widthContainer2 + position2 - step < widthPurpose){
            position2 -= widthContainer2 + position2 - widthPurpose + parseInt(window.getComputedStyle(purpose).marginLeft);
        } else{
            position2 -= step
        }
        
        container2.style.transform = "translateX(" + String(position2) + "px)"
    }
});

prevBtn2.addEventListener("click", ()=>{
    position2 += step
    position2 = Math.min(0, position2)

    container2.style.transform = "translateX(" + String(position2) + "px)"
});


nextBtn3.addEventListener("click", ()=>{
    if (widthContainer3 + position3 > widthPurpose){
        
        if (widthContainer3 + position3 - step < widthPurpose){
            position3 -= widthContainer3 + position3 - widthPurpose + parseInt(window.getComputedStyle(purpose).marginLeft);
        } else{
            position3 -= step
        }
        
        container3.style.transform = "translateX(" + String(position3) + "px)"
    }
});


prevBtn3.addEventListener("click", ()=>{
    position3 += step
    position3 = Math.min(0, position3)

    container3.style.transform = "translateX(" + String(position3) + "px)"
});

nextBtn4.addEventListener("click", ()=>{
    if (widthContainer4 + position4 > widthPurpose){
        
        if (widthContainer4 + position4 - step < widthPurpose){
            position4 -= widthContainer4 + position4 - widthPurpose + parseInt(window.getComputedStyle(purpose).marginLeft);
        } else{
            position4 -= step
        }
        
        container4.style.transform = "translateX(" + String(position4) + "px)"
    }
});


prevBtn4.addEventListener("click", ()=>{
    position4 += step
    position4 = Math.min(0, position4)

    container4.style.transform = "translateX(" + String(position4) + "px)"
});

nextBtn5.addEventListener("click", ()=>{
    if (widthContainer5 + position5 > widthPurpose){
        
        if (widthContainer5 + position5 - step < widthPurpose){
            position5 -= widthContainer5 + position5 - widthPurpose + parseInt(window.getComputedStyle(purpose).marginLeft);
        } else{
            position5 -= step
        }

        container5.style.transform = "translateX(" + String(position5) + "px)"
    }
});

prevBtn5.addEventListener("click", ()=>{
    position5 += step
    position5 = Math.min(0, position5)

    container5.style.transform = "translateX(" + String(position5) + "px)"
});



