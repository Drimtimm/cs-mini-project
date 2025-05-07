        let timer;
        let isRunning = false;
        let timeLeft = 25 * 60;

        function startPauseTimer() {
            if (isRunning) {
                clearInterval(timer);
            } else {
                timer = setInterval(() => {
                    if (timeLeft <= 0) {
                        clearInterval(timer);
                        alert("Time's up!");
                        return;
                    }
                    timeLeft--;
                    updateTimerDisplay();
                }, 1000);
            }
            isRunning = !isRunning;
        }

        function resetTimer() {
            clearInterval(timer);
            isRunning = false;
            timeLeft = 25 * 60;
            updateTimerDisplay();
        }

        function setTimer(minutes) {
            clearInterval(timer);
            isRunning = false;
            timeLeft = minutes * 60;
            updateTimerDisplay();
        }

        function updateTimerDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById('timer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }