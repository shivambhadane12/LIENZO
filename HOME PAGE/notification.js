let notification = document.getElementById("notification");

// Set the target date and time (YYYY-MM-DDTHH:MM:SS format)
const targetDate = new Date("2024-12-31T23:59:59").getTime();

// Update the countdown every 1 second
const countdownTimer = setInterval(function () {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("notification").innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    // If countdown is over, display a message
    if (timeRemaining < 0) {
        clearInterval(countdownTimer);
        document.getElementById("notification").innerHTML = "Countdown Ended";
    }
}, 1000);