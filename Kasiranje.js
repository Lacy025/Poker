$timerCekanje10 = setInterval(Cekanje10, 200);
   
function Cekanje10() {
    console.log($deljenje);

    if($deljenje==11) {
        clearInterval($timerCekanje10);
        $deljenje=12;
        if($d>0) {
            $timerPobeda1 = setInterval($Pobeda1,500);
            $timerPobeda2 = setInterval($Pobeda2,1000);
            Kasiranje();
        }
        else {
            Odbrojano2();
        }
    }
}
function $Pobeda1() {
    pobeda.style.visibility = "hidden";
}
function $Pobeda2() {
    pobeda.style.visibility = "visible";
}
function Kasiranje() {
    $c = $c + 1;
    document.getElementById("credit").innerHTML = $c;
    $vrednostKredita();
    $d = $d - 1;
    document.getElementById("vrednostdobitka").innerHTML = $d;
    document.getElementById("audioCount1").play();
    audioCount1.currentTime = 0;

    $timerProvera2 = setInterval(Provera2,60);
}
function Provera2() {

    if((Math.round($d/100) != $d/100) && $d>0) {
        document.getElementById("audioCount1").play();
        audioCount1.currentTime = 0;
        Minusjedan2();
    }
    else {
        clearInterval($timerProvera2);
        if($d>0) {
            Minussto2();
        }
        if($d>0) {

            $timerMinussto2 = setInterval(Minussto2,1000);
        }
        else {
            pobeda.style.visibility = "visible";
            clearInterval($timerPobeda1);
            clearInterval($timerPobeda2);
            document.getElementById("audioCount2").play();
            audioCount2.currentTime = 0;
            $deljenje = 0;
            $timerOdbrojano2 = setInterval(Odbrojano2,1000);
            $timerNula2 = setInterval(Nula2,1000);
        }
    }
}
function Minusjedan2() {
    $c = $c + 1;
    document.getElementById("credit").innerHTML = $c;
    $vrednostKredita();
    $d = $d - 1;
    document.getElementById("vrednostdobitka").innerHTML = $d;
}
function Minussto2() {
    if($d>99) {
        $c = $c + 100;
        document.getElementById("credit").innerHTML = $c;
        $vrednostKredita();
        $d = $d - 100;
        document.getElementById("vrednostdobitka").innerHTML = $d;
        document.getElementById("audioCount2").play();
        audioCount2.currentTime = 0;
    }
    else {
        clearInterval($timerMinussto2);
        pobeda.style.visibility = "visible";
        clearInterval($timerPobeda1);
        clearInterval($timerPobeda2);
        $timerOdbrojano2 = setInterval(Odbrojano2,1000);
        $timerNula2 = setInterval(Nula2,100);
    }
}
function Nula2() {
    clearInterval($timerNula2);
    document.getElementById("audioIntro").play();
    audioIntro.currentTime = 0;
}
function Odbrojano2() {
    clearInterval($timerOdbrojano2);
    $deljenje = 0;
    $includeJs("Poker.js");
}