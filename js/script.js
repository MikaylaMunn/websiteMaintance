// Set the date we're counting down to
const countDownDate = new Date("Dec 21, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the distance between now and the countdown date
    const distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in the corresponding elements
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // If the countdown is over, stop the interval
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").textContent = "EXPIRED";
    }
}, 1000);
