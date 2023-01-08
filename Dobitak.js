var poruka3 = document.getElementById("poruka3");
poruka3.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRITISNITE  STOP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
poruka3.style.left = "734px";
var poruka4 = document.getElementById("poruka4");
poruka4.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRITISNITE  DELJENJE&nbsp;&nbsp;&nbsp;&nbsp;";
poruka4.style.left = "735px";
var poruka5 = document.getElementById("poruka5");
poruka5.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRITISNITE  PONIŠTAVANJE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
poruka5.style.left = "700px";

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
        timerPoruka3 = setInterval(Poruka3, 1000);
        timerPoruka4 = setInterval(Poruka4, 2000);
        timerPoruka5 = setInterval(Poruka5, 3000);

        function Poruka3() {
            poruka3.style.visibility = "visible";
            poruka4.style.visibility = "hidden";
            poruka5.style.visibility = "hidden";
        }
        function Poruka4() {
            poruka4.style.visibility = "visible";
            poruka3.style.visibility = "hidden";
            poruka5.style.visibility = "hidden";
        }
        function Poruka5() {
            poruka5.style.visibility = "visible";
            poruka3.style.visibility = "hidden";
            poruka4.style.visibility = "hidden";
            clearInterval(timerPoruka3);
            clearInterval(timerPoruka4);
            clearInterval(timerPoruka5);
            timerPoruka3 = setInterval(Poruka3, 1000);
            timerPoruka4 = setInterval(Poruka4, 2000);
            timerPoruka5 = setInterval(Poruka5, 3000);
        }

    }
}