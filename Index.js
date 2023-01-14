let $deljenje = 0;
let $game = 1;

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

includeJs("Naslovna.js");

includeJs("Deljenje1.js");

includeJs("Karta1.js");

includeJs("Karta2.js");

includeJs("Karta3.js");

includeJs("Karta4.js");

includeJs("Karta5.js");

includeJs("Dobitak1.js");

includeJs("Izbor1.js");

includeJs("Dobitak2.js");

function includeJs(jsFilePath) {
    let js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}
