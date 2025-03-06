const skipButton = document.getElementById('skipButton');  // Button, um das Intro zu überspringen
const intro = document.getElementById('intro');  // Element für das Intro
const mainContent = document.getElementById('mainContent');  // Element für den Hauptinhalt der Seite
const introVideo = document.getElementById('introVideo');  // Das Video, das beim Starten der Seite abgespielt wird
const loginPage = document.getElementById("loginPage");  // Element für die Login-Seite

// Geschwindigkeit des Videos erhöhen
introVideo.playbackRate = 3.5;

// Funktion zum Überspringen des Intros
function skipIntro() {
    intro.style.display = 'none';  // Beendet intro --> nicht mehr im Layout der Seite angezeigt
    mainContent.style.opacity = 1;  // vollständig sichtbar, indem es die Transparenz auf 100% setzt.

    // Warte kurz, dann scrolle nach oben
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
}

introVideo.onended = skipIntro; // Wenn das Video beendet ist, wird Funktion skipIntro ausgeführt

skipButton.addEventListener('click', skipIntro);// Wenn der Skip-Button gedrückt wird,  wird Funktion skipIntro ausgeführt

window.addEventListener('keydown', (event) => {
    // Überprüfen, ob die gedrückte Taste die Leertaste ist
    if (event.key === ' ' || event.keyCode === 32) {  // Leertaste
        event.preventDefault(); // Verhindert das Scrollen der Seite durch die Leertaste
        skipIntro(); // Ruft die Funktion auf
    }
});

// Beim Laden der Seite wird dieser Code ausgeführt
window.onload = () => {
    intro.style.display = 'flex';  // Stellt sicher, dass das Intro sichtbar ist, indem es auf 'flex' gesetzt wird
    introVideo.play();  // Startet das Intro-Video

    setTimeout(() => window.scrollTo(0, 0), 50);  // Scrollt die Seite nach 50 Millisekungden ganz nach oben
};