// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Set the date we're counting down to (30 days from now)
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 30);
    
    // Update the count down every 1 second
    const countdownFunction = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the count down date
        const distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in elements
        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
        
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
        }
    }, 1000);
    
    // Background animation effect
    document.addEventListener('mousemove', (e) => {
        const container = document.querySelector('.container');
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    // Add a slight pulse animation to the container on load
    const container = document.querySelector('.container');
    container.style.animation = 'fadeIn 1.5s ease-out';
    
    // Add CSS for fadeIn animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
    
    // Add hover effect to countdown items
    const countdownItems = document.querySelectorAll('.countdown-item');
    countdownItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.background = 'rgba(255, 255, 255, 0.15)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.background = 'rgba(255, 255, 255, 0.1)';
        });
    });
});