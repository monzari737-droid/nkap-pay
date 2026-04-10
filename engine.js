let timeLeft = 15;
let gameStatus = "WAITING"; // WAITING, SPINNING, RESULT

function startEngine() {
    setInterval(() => {
        const timerEl = document.getElementById('chrono');
        
        if (gameStatus === "WAITING") {
            if (timeLeft > 0) {
                timeLeft--;
                if(timerEl) {
                    timerEl.innerText = timeLeft;
                    timerEl.className = timeLeft <= 5 ? "timer-red" : "timer-gold";
                }
                
                // On appelle la fonction de names.js pour injecter un bot
                if (Math.random() > 0.4) {
                    injectBotMise();
                }
            } else {
                runWheelPhase();
            }
        }
    }, 1000);
}

function injectBotMise() {
    const list = document.getElementById('players-list');
    const name = getRandomBlurredName(); // Vient de names.js
    const mt = Math.floor(Math.random() * 500) + 1;
    const num = Math.floor(Math.random() * 6);
    
    const row = `<div class="table-row">👤 ${name} | ${mt}F | n°${num}</div>`;
    if(list) {
        list.insertAdjacentHTML('afterbegin', row);
        // On limite à 50 joueurs comme demandé
        if (list.children.length > 50) list.lastElementChild.remove();
    }
}

function runWheelPhase() {
    gameStatus = "SPINNING";
    // Logique pour afficher la roue (on la liera dans l'index.html)
    console.log("La roue tourne...");
    
    setTimeout(() => {
        gameStatus = "WAITING";
        timeLeft = 15;
        const list = document.getElementById('players-list');
        if(list) list.innerHTML = ""; // On vide le tableau pour le prochain tour
    }, 4000);
}
