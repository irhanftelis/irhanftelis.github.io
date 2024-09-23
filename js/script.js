var messages = ["Pacar saya hebat!", "Pacar saya luar biasa!", "Pacar saya adalah yang terbaik!"];
var currentMessageIndex = 0;

function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("message").innerText = messages[currentMessageIndex];
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function okeClicked() {
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    openPopup();
}

function noClicked() {
    openPopup();
}

// Panggil fungsi openPopup() saat halaman dimuat
window.onload = openPopup;
