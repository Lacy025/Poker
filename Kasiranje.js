$waiting_10 = setInterval(Cekanje10, 200);
   
function Cekanje10() {
    console.log($deal);

    if($deal == 11) {
        clearInterval($waiting_10);
        $deal = 12;
        if($d>0) {
            $Pobeda2();
            $timerPobeda1 = setInterval($Pobeda1,500);
            $timerPobeda2 = setInterval($Pobeda2,1000);
            Kasiranje();
        }
        else {
            Countdown_2();
        }
    }
}
function Kasiranje() {
    $Minus_1();
    $Check_2 = setInterval(Check_2,60);
}
function Check_2() {

    if((Math.round($d/100) != $d/100) && $d>0) {
        $Minus_1();
    }
    else {
        clearInterval($Check_2);
        if($d>0) {
            Minus_100_2();
        }
        if($d>0) {

            $Minus_100_2 = setInterval(Minus_100_2,1000);
        }
        else {
            pobeda.style.visibility = "visible";
            clearInterval($timerPobeda1);
            clearInterval($timerPobeda2);
            document.getElementById("audioCount2").play();
            audioCount2.currentTime = 0;
            $deal = 0;
            $Countdown_2 = setInterval(Countdown_2,1000);
            $Zero_2 = setInterval(Zero_2,1000);
        }
    }
}
function Minus_100_2() {
    if($d>99) {
        $Minus_100();
    }
    else {
        clearInterval($Minus_100_2);
        pobeda.style.visibility = "visible";
        clearInterval($timerPobeda1);
        clearInterval($timerPobeda2);
        $Countdown_2 = setInterval(Countdown_2,1000);
        $Zero_2 = setInterval(Zero_2,100);
    }
}
function Zero_2() {
    clearInterval($Zero_2);
    document.getElementById("audioIntro").play();
    audioIntro.currentTime = 0;
}
function Countdown_2() {
    clearInterval($Countdown_2);
    $deal = 0;
    $includeJs("Poker.js");
}