// Set the date we're counting down to (31 January 2024)
const countDownDate = new Date("Jan 31, 2025 23:59:59").getTime();

// Update the countdown every 1 second
const countdown = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Add animation class when numbers change
    function updateNumber(id, value) {
        const element = document.getElementById(id);
        const currentValue = element.innerHTML;
        if(currentValue !== String(value).padStart(2, '0')) {
            element.classList.add('animate');
            setTimeout(() => element.classList.remove('animate'), 300);
        }
        element.innerHTML = String(value).padStart(2, '0');
    }

    // Display the result and add animation
    updateNumber('days', days);
    updateNumber('hours', hours);
    updateNumber('minutes', minutes);
    updateNumber('seconds', seconds);

    // If the countdown is finished, display expired message
    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector('.timer').innerHTML = "<h2 style='color: #990000;'>EXPIRED</h2>";
    }
}, 1000);