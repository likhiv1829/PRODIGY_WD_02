const displayHours = document.querySelector('.hours');
const displayMinutes = document.querySelector('.minutes');
const displaySeconds = document.querySelector('.seconds');
const displayMilliseconds = document.querySelector('.milliseconds');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');
const lapBtn = document.querySelector('.lap');
const lapsList = document.querySelector('.laps');

let startTime;
let elapsedTime = 0;
let timerInterval;
let lapNumber = 1;

function displayTime() {
    const hours = Math.floor(elapsedTime / (60 * 60 * 1000));
    const minutes = Math.floor((elapsedTime % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((elapsedTime % (60 * 1000)) / 1000);
    const milliseconds = Math.floor(elapsedTime % 1000);

    displayHours.textContent = hours < 10 ? '0' + hours : hours;
    displayMinutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    displaySeconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    displayMilliseconds.textContent = milliseconds < 100 ? (milliseconds < 10 ? '00' + milliseconds : '0' + milliseconds) : milliseconds;
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function() {
        elapsedTime = Date.now() - startTime;
        displayTime();
    }, 10); // Update every 10 milliseconds
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    displayTime();
    lapNumber = 1;
    lapsList.innerHTML = '';
}

function lapTimer() {
    const lapTime = elapsedTime;
    const li = document.createElement('li');
    li.textContent = `Lap ${lapNumber}: ${displayHours.textContent}:${displayMinutes.textContent}:${displaySeconds.textContent}:${displayMilliseconds.textContent}`;
    lapsList.appendChild(li);
    lapNumber++;
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', lapTimer);
