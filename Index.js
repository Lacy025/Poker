let $deljenje = 0;
let $game = 0;

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

let $k1;
let $k2;
let $k3;
let $k4;
let $k5;

let $n1;
let $b1;
let $timerAudiokarta1;

let $n2;
let $b2;
let $timerAudiokarta2;

let $n3;
let $b3;
let $timerAudiokarta3;

let $n4;
let $b4;
let $timerAudiokarta4;

let $n5;
let $b5;
let $timerAudiokarta5;

let $dobitak;
let $dveiste;
let $cetiriboje;

let $Fiveofakind;
let $Royalflush;
let $Streetflush;
let $Poker;
let $Fullhouse;
let $Flush;
let $Street;
let $Threeofakind;
let $Twopairs;
let $Highpair;

let $hold1;
let $hold2;
let $hold3;
let $hold4;
let $hold5;

let $poruka3 = document.getElementById("poruka3");
$poruka3.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRITISNITE  STOP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
$poruka3.style.left = "734px";
let $poruka4 = document.getElementById("poruka4");
$poruka4.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRITISNITE  DELJENJE&nbsp;&nbsp;&nbsp;&nbsp;";
$poruka4.style.left = "735px";
let $poruka5 = document.getElementById("poruka5");
$poruka5.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRITISNITE  PONIŠTAVANJE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
$poruka5.style.left = "700px";

let $stop1 = document.getElementById("stop1");
$stop1.innerHTML = "&nbsp;&nbsp;&nbsp;STOP&nbsp;&nbsp;&nbsp;";
let $stop2 = document.getElementById("stop2");
$stop2.innerHTML = "&nbsp;&nbsp;&nbsp;STOP&nbsp;&nbsp;&nbsp;";
let $stop3 = document.getElementById("stop3");
$stop3.innerHTML = "&nbsp;&nbsp;&nbsp;STOP&nbsp;&nbsp;&nbsp;";
let $stop4 = document.getElementById("stop4");
$stop4.innerHTML = "&nbsp;&nbsp;&nbsp;STOP&nbsp;&nbsp;&nbsp;";
let $stop5 = document.getElementById("stop5");
$stop5.innerHTML = "&nbsp;&nbsp;&nbsp;STOP&nbsp;&nbsp;&nbsp;";

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

let $timerNemadobitka;

let $stop;

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
pobeda.style.visibility = "hidden";

$includeJs("Poker.js");

function $includeJs(jsFilePath) {
    let js1 = document.createElement("script");
    js1.type = "text/javascript";
    js1.src = jsFilePath;
    document.body.appendChild(js1);
}