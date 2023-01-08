if($deljenje==0) {

    if($deljenje==0) {
        timerCekanje8 = setInterval(cekanje, 500);
    }
    function cekanje() {
        console.log($deljenje);
    
        if($deljenje==7) {
            clearInterval(timerCekanje8);
            console.log($deljenje);
            timerCekanje8 = setInterval(Dobitak, 100);
            $deljenje=8;
        }
    }
    function Dobitak() {

        clearInterval(timerCekanje8);

        timerDesno = setInterval(desnoDole, 700);
        timerLevo = setInterval(levoDole, 1400);

        function levoDole() {
           
                var levo = document.getElementById("levo");
                levo.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRITISNITE  STOP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                levo.style.left = "734px";
                levo.style.visibility = "visible";
                desno.style.visibility = "hidden";

            
        }
        function desnoDole() {

                var desno = document.getElementById("desno");
                desno.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRITISNITE  DELJENJE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                desno.style.left = "735px";
                desno.style.visibility = "visible";
                levo.style.visibility = "hidden";

            
        }

    }
}