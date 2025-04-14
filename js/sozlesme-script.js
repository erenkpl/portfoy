let counter = 0;

const buton = document.getElementById("sayac-buton");
const counterGoruntuleme = document.getElementById("sayac-goruntuleme");
const resim = document.getElementById("resim")
const hdr = document.getElementById("hdr")

buton.addEventListener("click", function() {
    counter ++;

    counterGoruntuleme.innerHTML = `Sayaç: ${counter}`;

    if(counter == 10){
        hdr.innerHTML = `<h1>Doya doya için! Yoksa beklentiniz farklı mıydı?</h1>`
        resim.src = "images/acik.png";
    }
    else if (counter == 20){
        counterGoruntuleme.innerHTML = "Tamam artık basma!"
    }
});