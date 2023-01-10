var poruka3 = document.getElementById("poruka3");
poruka3.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRITISNITE  STOP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
poruka3.style.left = "734px";
var poruka4 = document.getElementById("poruka4");
poruka4.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRITISNITE  DELJENJE&nbsp;&nbsp;&nbsp;&nbsp;";
poruka4.style.left = "735px";
var poruka5 = document.getElementById("poruka5");
poruka5.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRITISNITE  PONIŠTAVANJE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
poruka5.style.left = "700px";

var stop1 = document.getElementById("stop1");
stop1.innerHTML = "&nbsp;&nbsp;&nbsp;STOP&nbsp;&nbsp;&nbsp;";
var stop2 = document.getElementById("stop2");
stop2.innerHTML = "&nbsp;&nbsp;&nbsp;STOP&nbsp;&nbsp;&nbsp;";
var stop3 = document.getElementById("stop3");
stop3.innerHTML = "&nbsp;&nbsp;&nbsp;STOP&nbsp;&nbsp;&nbsp;";
var stop4 = document.getElementById("stop4");
stop4.innerHTML = "&nbsp;&nbsp;&nbsp;STOP&nbsp;&nbsp;&nbsp;";
var stop5 = document.getElementById("stop5");
stop5.innerHTML = "&nbsp;&nbsp;&nbsp;STOP&nbsp;&nbsp;&nbsp;";

var $hold1;
var $hold2;
var $hold3;
var $hold4;
var $hold5;

stop1.style.visibility = "hidden";
stop2.style.visibility = "hidden";
stop3.style.visibility = "hidden";
stop4.style.visibility = "hidden";
stop5.style.visibility = "hidden";

function $Stop1() {
    stop1.style.visibility = "visible";
    $hold1 = 1;
    document.getElementById("audioStop").play();
    audioStop.currentTime = 0;
}
function $Stop2() {
    stop2.style.visibility = "visible";
    $hold2 = 1;
    document.getElementById("audioStop").play();
    audioStop.currentTime = 0;
}
function $Stop3() {
    stop3.style.visibility = "visible";
    $hold3 = 1;
    document.getElementById("audioStop").play();
    audioStop.currentTime = 0;
}
function $Stop4() {
    stop4.style.visibility = "visible";
    $hold4 = 1;
    document.getElementById("audioStop").play();
    audioStop.currentTime = 0;
}
function $Stop5() {
    stop5.style.visibility = "visible";
    $hold5 = 1;
    document.getElementById("audioStop").play();
    audioStop.currentTime = 0;
}
function Ponistavanje() {
    stop1.style.visibility = "hidden";
    stop2.style.visibility = "hidden";
    stop3.style.visibility = "hidden";
    stop4.style.visibility = "hidden";
    stop5.style.visibility = "hidden";
    $hold1 = 0;
    $hold2 = 0;
    $hold3 = 0;
    $hold4 = 0;
    $hold5 = 0;
    document.getElementById("audioPonistavanje").play();
    audioPonistavanje.currentTime = 0;
}

if($deljenje==0) {
    if($deljenje==0) {
        timerCekanje8 = setInterval(cekanje, 500);
    }
    function cekanje() {
        console.log($deljenje);
        if($deljenje==7) {
            clearInterval(timerCekanje8);
            console.log($deljenje);
            timerCekanje8 = setInterval(Izbor1, 100);
            $deljenje=8;
            window.addEventListener("keydown", IzborKarata);
        }
    }
    function Izbor1() {
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
    function IzborKarata(event) {
        switch(event.keyCode) {
            case 49 :
                $Stop1();
                break;
            case 50 :
                $Stop2();
                break;
            case 51 :
                $Stop3();
                break;
            case 52 :
                $Stop4();
                break;
            case 53 :
                $Stop5();
                break;
            case 32 :
                Ponistavanje();
                break;
            case 13 :
                // Deljenje2
        }   
    }

}