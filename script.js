"use strict"

const homeBtn = document.querySelector(".home");
const aboutBtn = document.querySelector(".about");
const eventsBtn = document.querySelector(".events");


const theSections = document.querySelectorAll(".title");
const subTitle = document.querySelectorAll(".sub-title")
const story = document.querySelector(".story-p");
const teamCards = document.querySelectorAll(".team__cards-con")
const mainEvent = document.querySelector(".event")
const navigation = document.querySelector(".nav")
const eventCards = document.querySelectorAll(".third-section_upcoming-events-card")



const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })
    console.log(entries)
},{
    threshold: .5,
});



theSections.forEach(theSections => {

    observer.observe(theSections)
})

teamCards.forEach(cards => {
    observer.observe(cards)
})

eventCards.forEach(card =>{
    observer.observe(card)
})

subTitle.forEach(title => {
    observer.observe(title)
})

observer.observe(story, navigation, mainEvent );
observer.observe(mainEvent)
observer.observe(navigation)




aboutBtn.addEventListener("click", () => {
    console.log("clicked")
    theSections[0].scrollIntoView({ behavior: 'smooth' });
})

eventsBtn.addEventListener("click", () => {
    theSections[2].scrollIntoView({behavior:"smooth"})
})
