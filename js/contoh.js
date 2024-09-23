var nama = prompt('Masukkan nama anda : \n*MASUKKAN NAMA DENGAN HURUF KAPITAL');
if (nama === "ELIS") {
	alert("Selamat Sore " + nama);
	alert('Apa kabar cantik? Semoga baik2 Aja ya!!');
	alert('Oiya, Semangatt yaa puasa hari ini nyaa...');
	alert('Eh iya lupa kamu hari ini udah batal puasanya AHHAHAHA');
	alert('Ya intinya SEMANGATT BUAT HARI INI CANTIK');
	alert('Aku cuma mo bilang "kalo aku sayang sama kamu" haha.');
	alert('Jangan pernah jauhin akuu yaaa. I LOVE U!!!!');
	lopyu = true;
	while (lopyu === true ){
		var lopyu = prompt('INGIN MEMBALAS TOO? \nBalas Y/t');
		if( lopyu === "Y") {
			lopyu = false;
			document.write("TERIMAKASIH");
			window.location = "https://wa.me/message/RAA44EKSAVHAE1";
		} else {
			lopyu = true;
		}
	}
} else {
	document.write("MOHON MAAF SEPERTINYA FORMULIR INI BUKAN UNTUK ANDA.");
}
