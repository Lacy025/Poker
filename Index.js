let $deal = 0;
let $game = 0;
let $money = 0;

let $c = 0;
let $u = 1;
let $a = 1;

let $wining_0;
let $wining_1;
let $wining_2;
let $wining_3;
let $wining_4;
let $wining_5;
let $wining_6;
let $wining_7;
let $wining_8;
let $wining_9;

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

let $First_Deal;
let $Audio_Cards;

let $card_1;
let $card_2;
let $card_3;
let $card_4;
let $card_5;

let $choice_1;

let $cards_1;
let $cards_2;

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
function $Audio_count_1() {
    document.getElementById("audio_count_1").play();
    audio_count_1.currentTime = 0;
}
function $Audio_count_2() {
    document.getElementById("audio_count_2").play();
    audio_count_2.currentTime = 0;
}
function $Minus_1() {
    $c = $c + 1;
    document.getElementById("credit").innerHTML = $c;
    $Credit_Value();
    $d = $d - 1;
    document.getElementById("win_value").innerHTML = $d;
    $Audio_count_1();
}
function $Minus_100() {
    $c = $c + 100;
    document.getElementById("credit").innerHTML = $c;
    $Credit_Value();
    $d = $d - 100;
    document.getElementById("win_value").innerHTML = $d;
    $Audio_count_2();
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

let $card;

$field_1.style.position = "absolute";
$field_1.style.left = "10px";
$field_1.style.top = "320px";
$field_1.style.visibility = "hidden";
    
$field_2.style.position = "absolute";
$field_2.style.left = "390px";
$field_2.style.top = "320px";
$field_2.style.visibility = "hidden";

$field_3.style.position = "absolute";
$field_3.style.left = "770px";
$field_3.style.top = "320px";
$field_3.style.visibility = "hidden";

$field_4.style.position = "absolute";
$field_4.style.left = "1150px";
$field_4.style.top = "320px";
$field_4.style.visibility = "hidden";

$field_5.style.position = "absolute";
$field_5.style.left = "1530px";
$field_5.style.top = "320px";
$field_5.style.visibility = "hidden";

$hand.style.position = "absolute";
$hand.style.left = "0px";
$hand.style.top = "5px";
$hand.style.visibility = "hidden";

table.style.visibility = "hidden";

left_choice.style.visibility = "hidden";
right_choice.style.visibility = "hidden";
victory.style.visibility = "hidden";

high.style.visibility = "hidden";
low.style.visibility = "hidden";

$field_00.style.position = "absolute";
$field_00.style.left = "10px";
$field_00.style.top = "320px";
$field_00.style.visibility = "hidden";

$field_01.style.position = "absolute";
$field_01.style.left = "10px";
$field_01.style.top = "320px";
$field_01.style.visibility = "hidden";

$field_02.style.position = "absolute";
$field_02.style.left = "80px";
$field_02.style.top = "320px";
$field_02.style.visibility = "hidden";

$field_03.style.position = "absolute";
$field_03.style.left = "150px";
$field_03.style.top = "320px";
$field_03.style.visibility = "hidden";

$field_04.style.position = "absolute";
$field_04.style.left = "220px";
$field_04.style.top = "320px";
$field_04.style.visibility = "hidden";

$field_05.style.position = "absolute";
$field_05.style.left = "290px";
$field_05.style.top = "320px";
$field_05.style.visibility = "hidden";

$field_06.style.position = "absolute";
$field_06.style.left = "360px";
$field_06.style.top = "320px";
$field_06.style.visibility = "hidden";

$field_07.style.position = "absolute";
$field_07.style.left = "430px";
$field_07.style.top = "320px";
$field_07.style.visibility = "hidden";

$field_08.style.position = "absolute";
$field_08.style.left = "500px";
$field_08.style.top = "320px";
$field_08.style.visibility = "hidden";

$field_09.style.position = "absolute";
$field_09.style.left = "570px";
$field_09.style.top = "320px";
$field_09.style.visibility = "hidden";

$field_10.style.position = "absolute";
$field_10.style.left = "640px";
$field_10.style.top = "320px";
$field_10.style.visibility = "hidden";

$field_11.style.position = "absolute";
$field_11.style.left = "710px";
$field_11.style.top = "320px";
$field_11.style.visibility = "hidden";

$field_12.style.position = "absolute";
$field_12.style.left = "780px";
$field_12.style.top = "320px";
$field_12.style.visibility = "hidden";

low_choice.style.visibility = "hidden";
high_choice.style.visibility = "hidden";

let $card_field = "$field_00";
let $bingo;
let $half;
let $first_part;
let $second_part;

$includeJs("Poker.js");

function $includeJs(jsFilePath) {
    let js1 = document.createElement("script");
    js1.type = "text/javascript";
    js1.src = jsFilePath;
    document.body.appendChild(js1);
}