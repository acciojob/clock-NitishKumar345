//your JS code here. If required.

 function updateTimer() {
      const timerElement = document.getElementById('timer');
      const now = new Date();
      const formattedTime = now.toLocaleString();
     timerElement.textContent = formattedTime;
    }

    updateTimer();
    setInterval(updateTimer, 1000);