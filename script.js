let countdownInterval;
let isTimerRunning = false;

function toggleTimer() {
  if (isTimerRunning) {
    clearInterval(countdownInterval);
    isTimerRunning = false;
    resetDisplay();
  } else {
    startTimer();
    isTimerRunning = true;
  }
}

function resetDisplay() {
  document.getElementById("days").textContent = 0;
  document.getElementById("hours").textContent = 0;
  document.getElementById("minutes").textContent = 0;
  document.getElementById("seconds").textContent = 0;
  document.getElementById("timer").innerHTML = "";
}

function startTimer() {
  // Set the target date and time for the countdown (January 26, 2024)
  const targetDate = new Date("January 26, 2024").getTime();

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("timer").innerHTML = "Event started!";
      isTimerRunning = false;
      resetDisplay();
    } else {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
    }
  }, 1000);
}
