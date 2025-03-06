// Diese Funktion ruft Informationen über ein schwarzes Loch ab, basierend auf dem übergebenen Namen.
async function fetchBlackHoleInfo(name = null) {
    // Die Variable resultDiv verweist auf das HTML-Element, in dem die Ergebnisse angezeigt werden sollen.
    const resultDiv = document.getElementById("result");

    // Wenn kein Name übergeben wurde, versuchen wir, den Namen aus einem Eingabefeld zu holen.
    if (!name) {
        name = document.getElementById("blackHoleName").value.trim();
    }

    // Falls auch der Name leer bleibt, wird eine Fehlermeldung angezeigt und die Funktion wird abgebrochen.
    if (!name) {
        resultDiv.innerHTML = "<p style='color: red;'>Bitte gib einen Namen ein!</p>";
        return;
    }

    // Zeigt eine Ladeanzeige an, während auf die Antwort gewartet wird.
    resultDiv.innerHTML = "<p>Lade Daten...</p>";

    try {
        // Ruft die API mit dem angegebenen Namen des schwarzen Lochs ab.
        const response = await fetch(`http://localhost:8080/api/v1/blackholes/${name}`);
        // Wandelt die Antwort in ein JSON-Objekt um.
        const data = await response.json();

        // Überprüft, ob die Antwort der API erfolgreich war.
        if (response.ok) {
            // Wenn die Antwort erfolgreich war, werden die Daten angezeigt.
            resultDiv.innerHTML = `
                <h2>${data.name}</h2>
                <p><strong>Masse:</strong> ${data.mass}</p>
                <p><strong>Quelle:</strong> <a href="${data.source}" target="_blank">${data.source}</a></p>
            `;
        } else {
            // Wenn ein Fehler in den Daten oder der Anfrage war, wird eine Fehlermeldung angezeigt.
            resultDiv.innerHTML = `<p style='color: red;'>Fehler: ${data.error || "Daten nicht gefunden"}</p>`;
        }
    } catch (error) {
        // Falls ein Fehler beim Abrufen der Daten auftritt (z.B. Netzwerkfehler), wird eine Fehlermeldung angezeigt.
        resultDiv.innerHTML = `<p style='color: red;'>Fehler beim Abrufen der Daten.</p>`;
    }
}
