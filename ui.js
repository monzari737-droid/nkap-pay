const UI_TEXTS = {
    aide: "🎓 <b>TUTORIEL CASINO</b><br><br>1. Entrez votre Code Secret.<br>2. Choisissez une mise (1-500F).<br>3. Misez sur un numéro (0-5).<br>4. Si la roue s'arrête sur votre numéro, vous gagnez 5x votre mise !",
    parrainage: "👥 <b>PARRAINAGE</b><br><br>Partagez votre lien et gagnez 100F pour chaque 5 nouveaux amis actifs !",
    banque: "💳 <b>GUICHET BANCAIRE</b><br><br>Choisissez 'Dépôt' pour créditer via Notch Pay ou 'Retrait' pour récupérer vos gains.",
    auth_error: "⚠️ Code Secret incorrect. Veuillez entrer les 5 chiffres reçus dans le Bot."
};

// Fonction pour afficher une fenêtre surgissante (Pop-up)
function openModal(content) {
    // Cette fonction sera appelée par les boutons de la navbar
    alert(content); // Pour l'instant on utilise alert, on fera un design propre après
}

function updateBalanceDisplay(amount) {
    const balEl = document.getElementById('user-balance');
    if(balEl) balEl.innerText = amount + " XAF";
}
