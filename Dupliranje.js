$timerCekanje9 = setInterval(Cekanje9, 500);
 
function Cekanje9() {
    console.log($deljenje);

    if($deljenje==10) {
        $deljenje = 12;
        clearInterval($timerCekanje9);
        $polje01.style.visibility = "visible";
        veca.style.visibility = "visible";
        document.getElementById("audioVeca").play();
        audioCount1.currentTime = 0;
        $timerManja = setInterval(Manja, 400);
        $timerVeca = setInterval(Veca, 800);
        
        veca.style.visibility = "visible";
        
    }
}   function Veca() {
        veca.style.visibility = "visible";
        manja.style.visibility = "hidden";
        audioManja.currentTime = 2;
        document.getElementById("audioVeca").play();
        audioVeca.currentTime = 0;
    }
    function Manja() {
        veca.style.visibility = "hidden";
        manja.style.visibility = "visible";
        audioVeca.currentTime = 2;
        document.getElementById("audioManja").play();
        audioManja.currentTime = 0;
    }
   
   

