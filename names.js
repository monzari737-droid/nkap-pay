const CASINO_NAMES = {
    afrique: [
        "Moussa", "Fatoumata", "Tidiane", "Aminata", "Bakary", "Oumou", "Cheick", "Mariam",
        "Dieudonné", "Inès", "Junior", "Merveille", "Blaise", "Tatiana", "Guy", "Ornella",
        "Kofi", "Ama", "Tendai", "Zanele", "Jomo", "Nala", "Thabo", "Kwamé"
    ],
    europe: [
        "Lucas", "Emma", "Gabriel", "Chloé", "Hugo", "Léa", "Thomas", "Manon",
        "Mateo", "Sofia", "Alessandro", "Giulia", "Diego", "Lucia", "Marco", "Elena",
        "Lukas", "Hanna", "Erik", "Astrid", "Klaus", "Ingrid", "Stefan", "Helga"
    ],
    usa: [
        "Jackson", "Olivia", "Liam", "Ava", "Noah", "Isabella", "Mason", "Sophia",
        "Tyler", "Madison", "Hunter", "Brooklyn", "Jayden", "Harper", "Logan", "Riley"
    ]
};

// Fonction pour récupérer un nom aléatoire flouté
function getRandomBlurredName() {
    const categories = Object.keys(CASINO_NAMES);
    const category = categories[Math.floor(Math.random() * categories.length)];
    const name = CASINO_NAMES[category][Math.floor(Math.random() * CASINO_NAMES[category].length)];
    return name.substring(0, 2) + "****";
}
