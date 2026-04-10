window.timeLeft = 15;
window.gameStatus = "BETTING";

window.runCasino = function() {
    setInterval(() => {
        const timerEl = document.getElementById('chrono');
        const list = document.getElementById('players-list');

        if (window.gameStatus === "BETTING") {
            if (window.timeLeft > 0) {
                window.timeLeft--;
                timerEl.innerText = window.timeLeft;
                timerEl.style.borderColor = window.timeLeft <= 5 ? "#ff4d4d" : "#f0b90b";

                if (Math.random() > 0.4) {
                    const bot = window.getRandomUser();
                    const html = `<div class="row"><span>👤 ${bot.name}</span><span>${bot.amount}F</span><span>n°${bot.num}</span></div>`;
                    list.insertAdjacentHTML('afterbegin', html);
                    if (list.children.length > 50) list.lastElementChild.remove();
                }
            } else {
                window.gameStatus = "WHEEL";
                timerEl.innerText = "🎰";
                setTimeout(() => {
                    list.innerHTML = "";
                    window.timeLeft = 15;
                    window.gameStatus = "BETTING";
                }, 4000);
            }
        }
    }, 1000);
};
