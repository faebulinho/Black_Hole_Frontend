// Grundlegende Elemente
const skipButton = document.getElementById('skipButton');
const intro = document.getElementById('intro');
const mainContent = document.getElementById('mainContent');
const introVideo = document.getElementById('introVideo');

// Geschwindigkeit des Videos erhöhen (z.B. auf das 3,5-fache der normalen Geschwindigkeit)
introVideo.playbackRate = 3.5;  // Video läuft schneller

// Funktion zum Überspringen des Intros
function skipIntro() {
    intro.style.display = 'none';  // Intro ausblenden
    mainContent.style.opacity = 1;  // Hauptinhalt einblenden

    // Warte kurz, dann scrolle nach oben (damit der Browser Zeit hat, die Anzeige zu aktualisieren)
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
}

// Wenn das Video beendet ist, blende das Intro aus und zeige den Hauptinhalt
introVideo.onended = skipIntro;

// Wenn der Skip-Button gedrückt wird, überspringe das Video
skipButton.addEventListener('click', skipIntro);

// Wenn die Leertaste gedrückt wird, überspringe das Video
window.addEventListener('keydown', (event) => {
    if (event.key === ' ' || event.keyCode === 32) {  // Leertaste
        event.preventDefault(); // Verhindert das Scrollen der Seite durch die Leertaste
        skipIntro();
    }
});

// Video und Intro beim Laden der Seite starten
window.onload = () => {
    intro.style.display = 'flex';  // Sicherstellen, dass das Intro angezeigt wird
    introVideo.play();  // Video abspielen

    // Scrollt nach ganz oben nach einer kurzen Verzögerung
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 50);
};