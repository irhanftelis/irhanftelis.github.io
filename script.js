document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var formDataObject = {};
    formData.forEach(function(value, key){
        formDataObject[key] = value;
    });
    console.log(formDataObject);

    // Kirim email menggunakan Ajax
    sendEmail(formDataObject);
});

function sendEmail(formData) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "backend/send_email.php", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.status === "success") {
                    alert("Terima kasih atas konfirmasi kehadiran Anda!");
                } else {
                    alert("Maaf, terjadi kesalahan. Silakan coba lagi.");
                }
            } else {
                alert("Maaf, terjadi kesalahan. Silakan coba lagi.");
            }
        }
    };
    xhr.send(JSON.stringify(formData));
}
