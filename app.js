/** @format */

const btn = document.querySelector(".talk");
const text = document.querySelector(".text");
const content = document.querySelector(".content");

const speechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.onstart = function () {
    var audio = new Audio(
        "https://www.myinstants.com/media/sounds/meet-message-sound-1.mp3"
    );
    audio.play();
    audio.playbackRate = 1;

    text.textContent = "LISTENING";
};

recognition.onresult = async function (event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;

    text.textContent = "START TALKING";
    console.log(transcript);
    readOutLoud(transcript);
};

btn.addEventListener("click", () => {
    recognition.start();
});

async function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.rate = 0.8;
    speech.pitch = 1;

    if (message === "") {
        var audio = await new Audio(
            "https://www.myinstants.com/media/sounds/holy-jesus-what-is-that.mp3"
        );
        audio.play();
        content.textContent = "फिर्से बोल लोडू";
        audio.onended = function () {
            content.textContent = "";
        };
    } else if (message === "hello") {
        var audio = await new Audio(
            "https://www.myinstants.com/media/sounds/y2mate_dIJjTNw.mp3"
        );
        audio.play();
        content.textContent = "Chala ja bsdk";
        audio.onended = function () {
            content.textContent = "";
        };
    } else if (message === "bye") {
        var audio = await new Audio(
            "https://www.myinstants.com/media/sounds/bye-have-a-great-time.mp3"
        );
        audio.play();
        content.textContent = "bye bye✌✌";
        audio.onended = function () {
            content.textContent = "";
        };
    } else if (message === "scream") {
        var audio = await new Audio(
            "https://www.myinstants.com/media/sounds/toms-screams.mp3"
        );
        audio.play();
        content.textContent = "Ohhhhhhhh😁😁";
        audio.onended = function () {
            content.textContent = "";
        };
    } else if (message === "let's dance") {
        var audio = await new Audio(
            "https://www.myinstants.com/media/sounds/hq-coffin-dance-funeral-vicetone-tony-igy-astronomia.mp3"
        );
        audio.play();
        content.textContent = "Jumping japak jumpak jumpak😎😎";
        audio.onended = function () {
            content.textContent = "";
        };
    } else if (message === "what's the weather") {
        var audio = await new Audio(
            "https://www.myinstants.com/media/sounds/hot-hot-hot-gaming-sound-effect.mp3"
        );
        audio.play();
        content.textContent = "हाए गर्मी🔥🔥";

        audio.onended = function () {
            content.textContent = "";
        };
    } else if (message === "bete") {
        var audio = await new Audio(
            "https://www.myinstants.com/media/sounds/tmp04f0v5jk.mp3"
        );
        audio.play();
        audio.playbackRate = 2;
        content.textContent = "Madarchod";
        audio.onended = function () {
            content.textContent = "";
        };
    } else if (message === "fart" || message === "part") {
        var audio = await new Audio(
            "https://www.myinstants.com/media/sounds/fart-with-reverb.mp3"
        );
        audio.play();
        content.textContent = "अबे ये smell कैसी BC";
        audio.onended = function () {
            content.textContent = "";
        };
    } else {
        var audio = await new Audio(
            "https://www.myinstants.com/media/sounds/holy-jesus-what-is-that.mp3"
        );
        audio.play();
        content.textContent = "फिर्से बोल लोडु";
        audio.onended = function () {
            content.textContent = "";
        };
    }

    speechSynthesis.speak(speech);
}
