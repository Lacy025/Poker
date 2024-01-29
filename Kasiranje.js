$waiting_10 = setInterval(Wait_10, 200);
   
function Wait_10() {
    console.log($deal);

    if($deal == 11) {
        clearInterval($waiting_10);
        $deal = 12;
        if($d > 0) {
            $Victory_2();
            $victory_1 = setInterval($Victory_1,500);
            $victory_2 = setInterval($Victory_2,1000);
            Cashing();
        }
        else {
            Countdown_2();
        }
    }
}
function Cashing() {
    $Minus_1();
    $Check_2 = setInterval(Check_2,60);
}
function Check_2() {

    if((Math.round($d / 100) != $d / 100) && $d > 0) {
        $Minus_1();
    }
    else {
        clearInterval($Check_2);
        if($d > 0) {
            Minus_100_2();
        }
        if($d > 0) {

            $Minus_100_2 = setInterval(Minus_100_2,1000);
        }
        else {
            victory.style.visibility = "visible";
            clearInterval($victory_1);
            clearInterval($victory_2);
            document.getElementById("audioCount2").play();
            audioCount2.currentTime = 0;
            $deal = 0;
            $Countdown_2 = setInterval(Countdown_2,1000);
            $Zero_2 = setInterval(Zero_2,1000);
        }
    }
}
function Minus_100_2() {
    if($d > 99) {
        $Minus_100();
    }
    else {
        clearInterval($Minus_100_2);
        victory.style.visibility = "visible";
        clearInterval($victory_1);
        clearInterval($victory_2);
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