const confirmButton = document.getElementById(`ConfirmStopWatchStart`);
const startButton = document.getElementById(`start`);
const stopwatchNumberTB = document.getElementById(`stopwatchStart`);
const counter = document.querySelector(`.timer #counter`);
let loop = false;
let timerInterval = null;

function playAlertSound() {
    const alertSound = new Audio(`assets/alert.mp3`);

    alertSound.play()
    .then (() => {
        console.log(`Sound alert.mp3 playback successful!`)
    })
    .catch(err => {
        console.error('Sound alert.mp3 playback unsuccessful:', err)
    });
}

confirmButton.addEventListener("click", () => {
    const val = stopwatchNumberTB.valueAsNumber;
    if (!isNaN(val) && val >= 0) {
        counter.textContent = val;
    }
});

startButton.addEventListener("click", () => {
    if (loop === false) {

        let currentVal = parseInt(counter.textContent, 10);

        if (isNaN(currentVal) || currentVal <= 0) return;

        loop = true;
        startButton.disabled = true;

        timerInterval = setInterval(() => {
            currentVal = parseInt(counter.textContent, 10);

            if (currentVal <= 0) {
                clearInterval(timerInterval);
                loop = false;
                startButton.disabled = false;
                playAlertSound()
                window.alert(`Timer has hit 0!`);
            } else {
                counter.textContent = currentVal - 1;
            }
        }, 1000);
    };
});