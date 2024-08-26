// lets make some typing sequence

const sentence = [
    "A fabulous landing page?",
    "Building something cool?",
    "A collaboration on something?"
]


let serviceIndex = 0;
let isAnimating = false;

// type shii
function changesentence() {
    if(!isAnimating) {
        isAnimating = true;
        const text = document.getElementById("service-text")
        const service = sentence[serviceIndex]
        const length = service.length

        let currentLength = 0

        const typingInterval = setInterval(() => {
            if (currentLength === length) {
                clearInterval(typingInterval)
                setTimeout(() => {
                    isAnimating = false;
                    deltxt()
                },
            2000)
            } else {
                text.textContent = service.slice(0, currentLength + 1)
                currentLength++
            }
        }, 100)
        serviceIndex = (serviceIndex +1 ) % sentence.length
    }
}


function deltxt() {
    const text = document.getElementById("service-text")
    let length = text.textContent.length
    const interval = setInterval(() => {
        if (length === 0) {
            clearInterval(interval)
            changesentence()
        } else {
            text.textContent = text.textContent.slice(0, -1)
            length--
        }
    }, 50 )

}

changesentence()
