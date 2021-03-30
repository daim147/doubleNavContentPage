const contentBoxes = document.querySelectorAll(".content-box-wrap")
const heading = document.querySelector(".heading")
const allLeftLinks = document.querySelectorAll(".l-item")
let text = heading.innerText
let letter = 1
let timing = setInterval(()=>{
    animateHeading(text)
}, 250)
heading.innerText = ''

allLeftLinks.forEach((link, idx)=>{
    link.addEventListener("click",function(e){
        e.preventDefault()
        addRemoveClass()
        const nameofLink = this.innerText
     
        text = nameofLink
        heading.innerText = ''
        letter = 1
        clearInterval(timing)
        timing = setInterval(()=>{
            animateHeading(text)
        }, 250)
        contentBoxes[idx].classList.remove("remove")
    })
})



function animateHeading(text){
    heading.innerText = ''
    heading.innerText = text.slice(0, letter)
    letter ++
    if(letter > text.length ){
        letter = 1
    }

}

function addRemoveClass(){
    contentBoxes.forEach(box=>{
        box.classList.add("remove")
    })
}