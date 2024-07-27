let timer;
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];
const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const lapButton = document.getElementById('lap');
const resetButton = document.getElementById('reset');
const lapsContainer = document.getElementById('laps');

startStopButton.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    display.textContent = '00:00:00';
    startStopButton.textContent = 'Start';
    isRunning = false;
    lapsContainer.innerHTML = ''; // Clear laps
});

lapButton.addEventListener('click', () => {
    if (isRunning) {
        const lapTime = display.textContent;
        const lapElement = document.createElement('div');
        lapElement.className = 'lap';
        lapElement.textContent = lapTime;
        lapsContainer.appendChild(lapElement);
    }
});

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
    return value.toString().padStart(2, '0');
}
