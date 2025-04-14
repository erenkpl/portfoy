const form = document.getElementById("iletisim-bilgileri");
const isimInput = document.getElementById("isim");
const soyisimInput = document.getElementById("soyisim");
const mesajInput = document.getElementById("mesaj");
const emailInput = document.getElementById("email");
const sonucDiv = document.getElementById("sonuc");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const isim = isimInput.value;
    const mesaj = mesajInput.value;

    sonucDiv.innerHTML = '<p><strong>Teşekkürler, ${isim}!</strong></p><p>Mesajınız: ${mesa}</p>';

    form.reset();
});