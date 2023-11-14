const interval = setInterval(() => {
    const player = document.querySelector("._aa4l", "._aa4k"); //"._ab61"
    if (player) {
        console.log(player)
        clearInterval(interval)
    }

    const button = document.createElement("button");
    button.innerHTML = "2x"
    button.classList.add("flashButton")

    button.addEventListener("click", () => {
        const audios = document.querySelectorAll("audio");
        console.log(audios)
        audios.forEach((audio) => {
            console.log(audio)
            audio.playbackRate = 2;
        })
        // clearInterval(interval)
    })

    player.appendChild(button)

    

}, 500)
