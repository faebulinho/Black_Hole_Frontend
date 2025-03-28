// Funktion für die Anmeldung
function loginUser(event) {
    event.preventDefault();
    // Hier könnte später die eigentliche Login-Logik stehen

    // Benutzer als eingeloggt markieren im localStorage
    localStorage.setItem('userType', 'loggedIn');

    // Weiterleitung zur Hauptseite
    window.location.href = 'index.html';
}

// Funktion für den Gast-Zugang
function guestAccess() {
    // Benutzer als Gast markieren im localStorage
    localStorage.setItem('userType', 'guest');

    // Weiterleitung zur Hauptseite
    window.location.href = 'index.html';
}