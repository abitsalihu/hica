"use strict"

const homeBtn = document.querySelector(".home");
const aboutBtn = document.querySelector(".about");
const eventsBtn = document.querySelector(".events");


const aboutSection = document.querySelectorAll(".title");
const eventSection = document.querySelectorAll(".title")


aboutBtn.addEventListener("click", () => {
    console.log("clicked")
    aboutSection[0].scrollIntoView({ behavior: 'smooth' });
})

eventsBtn.addEventListener("click", () => {
    eventSection[2].scrollIntoView({behavior:"smooth"})
})
