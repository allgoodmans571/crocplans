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

var widthContainer1 = 323 * count1.length
var widthContainer2 = 323 * count2.length
var widthContainer3 = 323 * count3.length
var widthContainer4 = 323 * count4.length
var widthContainer5 = 323 * count5.length





var widthPurpose = parseInt(window.getComputedStyle(purpose).width)
container1.style.width = `${widthContainer1}px`
container2.style.width = `${widthContainer2}px`
container3.style.width = `${widthContainer3}px`
container4.style.width = `${widthContainer4}px`
container5.style.width = `${widthContainer5}px`

var position1 = parseInt(window.getComputedStyle(container1).marginLeft);
var positionStatic = parseInt(window.getComputedStyle(container1).marginLeft);
console.log(positionStatic)
var position2 = parseInt(window.getComputedStyle(container1).marginLeft);

var position3 = parseInt(window.getComputedStyle(container1).marginLeft);

var position4 = parseInt(window.getComputedStyle(container1).marginLeft);

var position5 = parseInt(window.getComputedStyle(container1).marginLeft);


nextBtn1.addEventListener("click", ()=>{
    position1 = position1 - 323
    
    position1 = Math.max(-widthContainer1 - position1, position1)
    console.log(position1)
    container1.style.transform = "translateX(" + String(position1) + "px)"
});

prevBtn1.addEventListener("click", ()=>{
    position1 += 323
    console.log(position1)
    position1 = Math.min(0, position1)
    console.log(position1)
    container1.style.transform = "translateX(" + String(position1) + "px)"
    console.log(container1.style.transform)
});



nextBtn2.addEventListener("click", ()=>{
    position2 = position2 - 323
    
    position2 = Math.max(-widthContainer2 - position2, position2)
    
    container2.style.transform = "translateX(" + String(position2) + "px)"
});

prevBtn2.addEventListener("click", ()=>{
    position2 += 323
    position2 = Math.min(0, position2)

    container2.style.transform = "translateX(" + String(position2) + "px)"
});


nextBtn3.addEventListener("click", ()=>{
    position3 = position3 - 323
    
    position3 = Math.max(-widthContainer3 - position3, position3)
    
    container3.style.transform = "translateX(" + String(position3) + "px)"
});


prevBtn3.addEventListener("click", ()=>{
    position3 += 323
    position3 = Math.min(0, position3)

    container3.style.transform = "translateX(" + String(position3) + "px)"
});

nextBtn4.addEventListener("click", ()=>{
    position4 = position4 - 323
    
    position4 = Math.max(-widthContainer4 - position4, position4)
    
    container4.style.transform = "translateX(" + String(position4) + "px)"
});


prevBtn4.addEventListener("click", ()=>{
    position4 += 323
    position4 = Math.min(0, position4)

    container4.style.transform = "translateX(" + String(position4) + "px)"
});

nextBtn5.addEventListener("click", ()=>{
    position5 = position5 - 323
    
    position5 = Math.max(-widthContainer5 - position5, position5)
    
    container5.style.transform = "translateX(" + String(position5) + "px)"
});

prevBtn5.addEventListener("click", ()=>{
    position5 += 323
    position5 = Math.min(0, position5)

    container5.style.transform = "translateX(" + String(position5) + "px)"
});



