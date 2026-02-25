let audioCtx;
let oscillator;
let gainNode;
let isPlaying = false;

const key = document.getElementById("key");
const volumeSlider = document.getElementById("volume");

key.addEventListener("mousedown", () => {
    // Ha még nincs audio context, létrehozzuk
    if (isPlaying) return; //stop if already pressed

    isPlaying = true;
    key.classList.add("active");  // Button is pressed

    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    oscillator = audioCtx.createOscillator(); // Új oszcillátor obj létrehozása
    gainNode = audioCtx.createGain(); // Hangerőszabályzó obj létehozása
    
    oscillator.type = "sine";       // Hullámforma megadása
    oscillator.frequency.value = 440; // A hang (440 Hz) frek. megadása

    oscillator.connect(gainNode);  // Oszcillátor obj és hangerő obj összekapcsolása
    gainNode.connect(audioCtx.destination); // Fenti obj összekapcsolása a kimenettel
    
    gainNode.gain.value = volumeSlider.value; // Kezdő hangerő 50%

    oscillator.start();
});

// Egér felengedése → hang leáll
key.addEventListener("mouseup", () => {
    if (oscillator) {
        oscillator.stop();
        oscillator.disconnect();
        oscillator = null        
    }
    key.classList.remove("active");
    isPlaying = false;
});

// Ha az egér elhagyja a gombot lenyomva → szintén álljon le
key.addEventListener("mouseleave", () => {
    if (isPlaying) {
        if (oscillator) {
            oscillator.stop();  // Oszcillátor leáll
            oscillator.disconnect();  // Oszcillátor kikapcsol
            oscillator = null;  // Oszcillátor kiürít
        }
        key.classList.remove("active");  // Gomb visszaállít        }
        isPlaying = false;    }
});


// Hangerő változtatása
volumeSlider.addEventListener("input", () => {
    if (gainNode) {
        gainNode.gain.value = volumeSlider.value;
    }
});
