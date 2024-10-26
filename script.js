const click = document.getElementById("click")
const audio = document.getElementById("audio")

const jsConfetti = new JSConfetti()

click.addEventListener('click', () => {
    jsConfetti.addConfetti()
    audio.play()
})

const overlay = document.getElementById("overlay")

overlay.addEventListener("click", () => {
    let i = 100
    
    setInterval(() => {
        if(i>0) {
            overlay.style.opacity = i + "%";
            i--
        }
        else {
            overlay.style.display = "none"
            clearInterval(this)
        }
    }, 10)
    
    // overlay.style.display = "none"

})