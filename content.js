const interval = setInterval(() => {
    const player = document.querySelector("._aa4l");
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
    })

    player.appendChild(button)

}, 1000)
