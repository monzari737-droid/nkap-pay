window.CASINO_NAMES = [
    "Moussa", "Fatou", "Kamga", "Simo", "Ondoa", "Zambo", "Lucas", "Emma", 
    "Thomas", "Mateo", "Sofia", "Lukas", "Hanna", "Jackson", "Olivia", "Liam"
];

window.getRandomUser = function() {
    const name = window.CASINO_NAMES[Math.floor(Math.random() * window.CASINO_NAMES.length)];
    return {
        name: name.substring(0, 2) + "****",
        amount: Math.floor(Math.random() * 500) + 1,
        num: Math.floor(Math.random() * 6)
    };
};
