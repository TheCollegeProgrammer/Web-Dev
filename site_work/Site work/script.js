const track = document.querySelector(".carousel-track")
const slides = document.querySelectorAll(".slide")

let index = 0

document.querySelector(".next").onclick = () => {

    index++

    if (index >= slides.length) {
        index = 0
    }

    update()

}

document.querySelector(".prev").onclick = () => {

    index--

    if (index < 0) {
        index = slides.length - 1
    }

    update()

}

function update() {

    track.style.transform = `translateX(-${index * 100}%)`

}