$timerCekanje10 = setInterval(Cekanje10, 200);
   
function Cekanje10() {
    console.log($deal);

    if($deal == 11) {
        clearInterval($timerCekanje10);
        $deal = 12;
        if($d>0) {
            $Pobeda2();
            $timerPobeda1 = setInterval($Pobeda1,500);
            $timerPobeda2 = setInterval($Pobeda2,1000);
            Kasiranje();
        }
        else {
            Odbrojano2();
        }
    }
}
function Kasiranje() {
    $Minusjedan();
    $Check_2 = setInterval(Check_2,60);
}
function Check_2() {

    if((Math.round($d/100) != $d/100) && $d>0) {
        $Minusjedan();
    }
    else {
        clearInterval($Check_2);
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
            $deal = 0;
            $timerOdbrojano2 = setInterval(Odbrojano2,1000);
            $timerNula2 = setInterval(Nula2,1000);
        }
    }
}
function Minussto2() {
    if($d>99) {
        $Minussto();
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
    $deal = 0;
    $includeJs("Poker.js");
}