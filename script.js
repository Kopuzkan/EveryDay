const messages = [
    "Forgive me today. Sometimes you have to forget...",
    "How about saying 'I love you very much' to someone around you today?",
    "Take a deep breath and relax.",
    "Today is a new beginning.",
    "Smile at a stranger today.",
    "Believe in yourself.",
    "Do something kind for someone.",
    "Be grateful for what you have.",
    "You are capable of amazing things.",
    "Enjoy the little things.",
    "Keep pushing forward.",
    "You are stronger than you think.",
    "Take a moment to reflect.",
    "Focus on the positives.",
    "Spread love wherever you go.",
    "You are enough.",
    "Cherish your loved ones.",
    "Embrace the journey.",
    "Live in the moment.",
    "Take time for yourself.",
    "You are unique and special.",
    "Never give up.",
    "Believe in your dreams.",
    "Be kind to yourself.",
    "Stay positive.",
    "Enjoy today.",
    "You make a difference.",
    "Be happy with what you have.",
    "Appreciate the beauty around you.",
    "You are loved.",
    "Stay strong.",
    "Be proud of yourself.",
    "Keep going.",
    "You matter.",
    "Believe in the good.",
    "You are worthy.",
    "Be present.",
    "Take it one day at a time.",
    "You are amazing.",
    "Keep smiling.",
    "Be yourself.",
    "Stay hopeful.",
    "Embrace change.",
    "You can do it.",
    "Stay focused.",
    "Be courageous.",
    "Follow your heart.",
    "Stay motivated.",
    "Be positive."
];

function getMessageForToday() {
    const date = new Date();
    const startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const millisecondsInADay = 24 * 60 * 60 * 1000;
    const dayIndex = Math.floor(startOfDay / millisecondsInADay) % messages.length;
    return messages[dayIndex];
}

function updateMessage() {
    const messageElement = document.getElementById('message');
    messageElement.textContent = getMessageForToday();
    messageElement.style.opacity = '1';  // Animasyon ile mesajın görünmesini sağla
}

function updateCountdown() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const millisecondsUntilTomorrow = tomorrow - now;

    const hours = Math.floor(millisecondsUntilTomorrow / (1000 * 60 * 60));
    const minutes = Math.floor((millisecondsUntilTomorrow % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((millisecondsUntilTomorrow % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = `Next message in: ${hours}h ${minutes}m ${seconds}s`;
}

function showButton() {
    const button = document.getElementById('remindMe');
    const messageElement = document.getElementById('message');
    const countdownElement = document.getElementById('countdown');
    
    button.style.display = 'block';
    messageElement.style.opacity = '0';  // Buton göründüğünde mesajı gizle
    messageElement.textContent = '';
    countdownElement.textContent = '';
}

function hideButton() {
    const button = document.getElementById('remindMe');
    button.style.display = 'none';
}

document.getElementById('remindMe').addEventListener('click', () => {
    updateMessage();
    hideButton();
    setTimeout(showButton, 24 * 60 * 60 * 1000); // 24 saat sonra butonu tekrar göster
});

updateMessage();
showButton();
setInterval(updateCountdown, 1000);
