let $deal = 0;
let $game = 0;
let $money = 0;

let $c = 0;
let $u = 1;
let $a = 1;

let $d0;
let $d1;
let $d2;
let $d3;
let $d4;
let $d5;
let $d6;
let $d7;
let $d8;
let $d9;

let $Check_1;
let $Check_2;
let $Check_3;
let $Minus_100_1;
let $Minus_100_2;
let $Minus_100_3;
let $Countdown_1;
let $Countdown_2;
let $Zero_1;
let $Zero_2;

let $timer1;
let $timer2;
let $timer3;
let $timer4;
let $timer5;
let $timer6;
let $timer7;
let $timer8;
let $timer9;
let $timer10;

let $First_Deal;
let $Audio_Cards;

let $card_1;
let $card_2;
let $card_3;
let $card_4;
let $card_5;

let $choice_1;

let $win_1;
let $win_2;

let $waiting_1;
let $waiting_2;
let $waiting_3;
let $waiting_4;
let $waiting_5;
let $waiting_6;
let $waiting_7;
let $waiting_8;
let $waiting_9;
let $waiting_10;

let $k1;
let $k2;
let $k3;
let $k4;
let $k5;

let $n1;
let $b1;
let $Audio_Card_1;

let $n2;
let $b2;
let $Audio_Card_2;

let $n3;
let $b3;
let $Audio_Card_3;

let $n4;
let $b4;
let $Audio_Card_4;

let $n5;
let $b5;
let $Audio_Card_5;

let $win;
let $two_of_a_kind;
let $four_colors;

let $Five_of_a_kind;
let $Royal_flush;
let $Street_flush;
let $Poker;
let $Full_house;
let $Flush;
let $Street;
let $Three_of_a_kind;
let $Two_pairs;
let $High_pair;

let $d;
let $was_win;

let $hold1;
let $hold2;
let $hold3;
let $hold4;
let $hold5;

let $victory_1;
let $victory_2;

function $Victory_1() {
    victory.style.visibility = "hidden";
}
function $Victory_2() {
    victory.style.visibility = "visible";
}
function $audioCount1() {
    document.getElementById("audioCount1").play();
    document.getElementById("audioCount1").currentTime = 0;
}
function $audioCount2() {
    document.getElementById("audioCount2").play();
    document.getElementById("audioCount2").currentTime = 0;
}
function $Minus_1() {
    $c = $c + 1;
    document.getElementById("credit").innerHTML = $c;
    $Credit_Value();
    $d = $d - 1;
    document.getElementById("win_value").innerHTML = $d;
    $audioCount1();
}
function $Minus_100() {
    $c = $c + 100;
    document.getElementById("credit").innerHTML = $c;
    $Credit_Value();
    $d = $d - 100;
    document.getElementById("win_value").innerHTML = $d;
    $audioCount2();
}

let $message_3 = document.getElementById("message_3");
$message_3.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRESS  HOLD CARDS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
$message_3.style.left = "736px";
let $message_4 = document.getElementById("message_4");
$message_4.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRESS  DEAL CARDS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
$message_4.style.left = "736px";
let $message_5 = document.getElementById("message_5");
$message_5.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRESS  CLEAR CARDS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
$message_5.style.left = "724px";

let $stop1 = document.getElementById("stop1");
$stop1.innerHTML = "&nbsp;&nbsp;&nbsp;HOLD&nbsp;&nbsp;&nbsp;";
let $stop2 = document.getElementById("stop2");
$stop2.innerHTML = "&nbsp;&nbsp;&nbsp;HOLD&nbsp;&nbsp;&nbsp;";
let $stop3 = document.getElementById("stop3");
$stop3.innerHTML = "&nbsp;&nbsp;&nbsp;HOLD&nbsp;&nbsp;&nbsp;";
let $stop4 = document.getElementById("stop4");
$stop4.innerHTML = "&nbsp;&nbsp;&nbsp;HOLD&nbsp;&nbsp;&nbsp;";
let $stop5 = document.getElementById("stop5");
$stop5.innerHTML = "&nbsp;&nbsp;&nbsp;HOLD&nbsp;&nbsp;&nbsp;";

$stop1.style.visibility = "hidden";
$stop2.style.visibility = "hidden";
$stop3.style.visibility = "hidden";
$stop4.style.visibility = "hidden";
$stop5.style.visibility = "hidden";

let $timerStop1;
let $timerStop2;
let $timerStop3;
let $timerStop4;
let $timerStop5;

let $no_win;

let $stop;

let $wait_high;
let $wait_low;

let $k00;
let $k01;
let $k02;
let $k03;
let $k04;
let $k05;
let $k06;
let $k07;
let $k08;
let $k09;
let $k10;
let $k11;

let $pause_high;
let $pause_low;

let $karta;

$polje1.style.position = "absolute";
$polje1.style.left = "10px";
$polje1.style.top = "320px";
$polje1.style.visibility = "hidden";
    
$polje2.style.position = "absolute";
$polje2.style.left = "390px";
$polje2.style.top = "320px";
$polje2.style.visibility = "hidden";

$polje3.style.position = "absolute";
$polje3.style.left = "770px";
$polje3.style.top = "320px";
$polje3.style.visibility = "hidden";

$polje4.style.position = "absolute";
$polje4.style.left = "1150px";
$polje4.style.top = "320px";
$polje4.style.visibility = "hidden";

$polje5.style.position = "absolute";
$polje5.style.left = "1530px";
$polje5.style.top = "320px";
$polje5.style.visibility = "hidden";

$rucno.style.position = "absolute";
$rucno.style.left = "0px";
$rucno.style.top = "5px";
$rucno.style.visibility = "hidden";

tabela.style.visibility = "hidden";

izborlevo.style.visibility = "hidden";
izbordesno.style.visibility = "hidden";
victory.style.visibility = "hidden";

veca.style.visibility = "hidden";
manja.style.visibility = "hidden";

$polje00.style.position = "absolute";
$polje00.style.left = "10px";
$polje00.style.top = "320px";
$polje00.style.visibility = "hidden";

$polje01.style.position = "absolute";
$polje01.style.left = "10px";
$polje01.style.top = "320px";
$polje01.style.visibility = "hidden";

$polje02.style.position = "absolute";
$polje02.style.left = "80px";
$polje02.style.top = "320px";
$polje02.style.visibility = "hidden";

$polje03.style.position = "absolute";
$polje03.style.left = "150px";
$polje03.style.top = "320px";
$polje03.style.visibility = "hidden";

$polje04.style.position = "absolute";
$polje04.style.left = "220px";
$polje04.style.top = "320px";
$polje04.style.visibility = "hidden";

$polje05.style.position = "absolute";
$polje05.style.left = "290px";
$polje05.style.top = "320px";
$polje05.style.visibility = "hidden";

$polje06.style.position = "absolute";
$polje06.style.left = "360px";
$polje06.style.top = "320px";
$polje06.style.visibility = "hidden";

$polje07.style.position = "absolute";
$polje07.style.left = "430px";
$polje07.style.top = "320px";
$polje07.style.visibility = "hidden";

$polje08.style.position = "absolute";
$polje08.style.left = "500px";
$polje08.style.top = "320px";
$polje08.style.visibility = "hidden";

$polje09.style.position = "absolute";
$polje09.style.left = "570px";
$polje09.style.top = "320px";
$polje09.style.visibility = "hidden";

$polje10.style.position = "absolute";
$polje10.style.left = "640px";
$polje10.style.top = "320px";
$polje10.style.visibility = "hidden";

$polje11.style.position = "absolute";
$polje11.style.left = "710px";
$polje11.style.top = "320px";
$polje11.style.visibility = "hidden";

$polje12.style.position = "absolute";
$polje12.style.left = "780px";
$polje12.style.top = "320px";
$polje12.style.visibility = "hidden";

izbormanja.style.visibility = "hidden";
izborveca.style.visibility = "hidden";

let $poljeKarte = "$polje00";
let $timerPogodio;
let $pola;
let $prviDeo;
let $drugiDeo;

$includeJs("Poker.js");

function $includeJs(jsFilePath) {
    let js1 = document.createElement("script");
    js1.type = "text/javascript";
    js1.src = jsFilePath;
    document.body.appendChild(js1);
}