<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari formulir
    $name = $_POST['name'];
    $email = $_POST['email'];
    $attendance = $_POST['attendance'];
    $message = $_POST['message'];

    // Konfigurasi email
    $to = 'irhansaputra0608@gmail.com'; // Ganti dengan alamat email tujuan
    $subject = 'Konfirmasi Kehadiran Pernikahan';
    $body = "Nama: $name\n";
    $body .= "Email: $email\n";
    $body .= "Kehadiran: $attendance\n";
    $body .= "Pesan Tambahan: $message\n";
    $headers = "From: $email";

    // Kirim email
    if (mail($to, $subject, $body, $headers)) {
        // Kirim respons JSON
        echo json_encode(array('status' => 'success', 'message' => 'Email terkirim.'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Gagal mengirim email.'));
    }
} else {
    // Jika bukan metode POST
    echo json_encode(array('status' => 'error', 'message' => 'Metode request tidak valid.'));
}
?>
