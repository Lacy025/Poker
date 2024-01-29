$waiting_5 = setInterval(Cekanje5, 100);

function Cekanje5() {
    console.log($deal);

    if($deal == 6) {
        clearInterval($waiting_5);
        console.log($deal);
        $card_5 = setInterval($Karta5, 50);
    }
}
function $Karta5() {

    clearInterval($card_5);
    clearInterval($Audio_Card_5);

    if($k5==0) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/00.png";
        $field_5.style.visibility = "visible";
        $n5 = 0;
        $b5 = 0;
    }
    if($k5==1) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/01.png";
        $field_5.style.visibility = "visible";
        $n5 = 14;
        $b5 = 1;
    }
    if($k5==2) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/02.png";
        $field_5.style.visibility = "visible";
        $n5 = 2;
        $b5 = 1;
    }
    if($k5==3) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/03.png";
        $field_5.style.visibility = "visible";
        $n5 = 3;
        $b5 = 1;
    }
    if($k5==4) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/04.png";
        $field_5.style.visibility = "visible";
        $n5 = 4;
        $b5 = 1;
    }
    if($k5==5) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/05.png";
        $field_5.style.visibility = "visible";
        $n5 = 5;
        $b5 = 1;
    }
    if($k5==6) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/06.png";
        $field_5.style.visibility = "visible";
        $n5 = 6;
        $b5 = 1;
    }
    if($k5==7) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/07.png";
        $field_5.style.visibility = "visible";
        $n5 = 7;
        $b5 = 1;
    }
    if($k5==8) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/08.png";
        $field_5.style.visibility = "visible";
        $n5 = 8;
        $b5 = 1;
    }
    if($k5==9) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/09.png";
        $field_5.style.visibility = "visible";
        $n5 = 9;
        $b5 = 1;
    }
    if($k5==10) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/10.png";
        $field_5.style.visibility = "visible";
        $n5 = 10;
        $b5 = 1;
    }
    if($k5==11) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/11.png";
        $field_5.style.visibility = "visible";
        $n5 = 11;
        $b5 = 1;
    }
    if($k5==12) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/12.png";
        $field_5.style.visibility = "visible";
        $n5 = 12;
        $b5 = 1;
    }
    if($k5==13) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/13.png";
        $field_5.style.visibility = "visible";
        $n5 = 13;
        $b5 = 1;
    }
    if($k5==14) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/14.png";
        $field_5.style.visibility = "visible";
        $n5 = 14;
        $b5 = 2;
    }
    if($k5==15) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/15.png";
        $field_5.style.visibility = "visible";
        $n5 = 2;
        $b5 = 2;
    }
    if($k5==16) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/16.png";
        $field_5.style.visibility = "visible";
        $n5 = 3;
        $b5 = 2;
    }
    if($k5==17) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/17.png";
        $field_5.style.visibility = "visible";
        $n5 = 4;
        $b5 = 2;
    }
    if($k5==18) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/18.png";
        $field_5.style.visibility = "visible";
        $n5 = 5;
        $b5 = 2;
    }
    if($k5==19) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/19.png";
        $field_5.style.visibility = "visible";
        $n5 = 6;
        $b5 = 2;
    }
    if($k5==20) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/20.png";
        $field_5.style.visibility = "visible";
        $n5 = 7;
        $b5 = 2;
    }
    if($k5==21) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/21.png";
        $field_5.style.visibility = "visible";
        $n5 = 8;
        $b5 = 2;
    }
    if($k5==22) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/22.png";
        $field_5.style.visibility = "visible";
        $n5 = 9;
        $b5 = 2;
    }
    if($k5==23) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/23.png";
        $field_5.style.visibility = "visible";
        $n5 = 10;
        $b5 = 2;
    }
    if($k5==24) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/24.png";
        $field_5.style.visibility = "visible";
        $n5 = 11;
        $b5 = 2;
    }
    if($k5==25) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/25.png";
        $field_5.style.visibility = "visible";
        $n5 = 12;
        $b5 = 2;
    }
    if($k5==26) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/26.png";
        $field_5.style.visibility = "visible";
        $n5 = 13;
        $b5 = 2;
    }
    if($k5==27) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/27.png";
        $field_5.style.visibility = "visible";
        $n5 = 14;
        $b5 = 3;
    }
    if($k5==28) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/28.png";
        $field_5.style.visibility = "visible";
        $n5 = 2;
        $b5 = 3;
    }
    if($k5==29) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/29.png";
        $field_5.style.visibility = "visible";
        $n5 = 3;
        $b5 = 3;
    }
    if($k5==30) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/30.png";
        $field_5.style.visibility = "visible";
        $n5 = 4;
        $b5 = 3;
    }
    if($k5==31) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/31.png";
        $field_5.style.visibility = "visible";
        $n5 = 5;
        $b5 = 3;
    }
    if($k5==32) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/32.png";
        $field_5.style.visibility = "visible";
        $n5 = 6;
        $b5 = 3;
    }
    if($k5==33) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/33.png";
        $field_5.style.visibility = "visible";
        $n5 = 7;
        $b5 = 3;
    }
    if($k5==34) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/34.png";
        $field_5.style.visibility = "visible";
        $n5 = 8;
        $b5 = 3;
    }
    if($k5==35) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/35.png";
        $field_5.style.visibility = "visible";
        $n5 = 9;
        $b5 = 3;
    }
    if($k5==36) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/36.png";
        $field_5.style.visibility = "visible";
        $n5 = 10;
        $b5 = 3;
    }
    if($k5==37) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/37.png";
        $field_5.style.visibility = "visible";
        $n5 = 11;
        $b5 = 3;
    }
    if($k5==38) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/38.png";
        $field_5.style.visibility = "visible";
        $n5 = 12;
        $b5 = 3;
    }
    if($k5==39) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/39.png";
        $field_5.style.visibility = "visible";
        $n5 = 13;
        $b5 = 3;
    }
    if($k5==40) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/40.png";
        $field_5.style.visibility = "visible";
        $n5 = 14;
        $b5 = 4;
    }
    if($k5==41) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/41.png";
        $field_5.style.visibility = "visible";
        $n5 = 2;
        $b5 = 4;
    }
    if($k5==42) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/42.png";
        $field_5.style.visibility = "visible";
        $n5 = 3;
        $b5 = 4;
    }
    if($k5==43) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/43.png";
        $field_5.style.visibility = "visible";
        $n5 = 4;
        $b5 = 4;
    }
    if($k5==44) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/44.png";
        $field_5.style.visibility = "visible";
        $n5 = 5;
        $b5 = 4;
    }
    if($k5==45) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/45.png";
        $field_5.style.visibility = "visible";
        $n5 = 6;
        $b5 = 4;
    }
    if($k5==46) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/46.png";
        $field_5.style.visibility = "visible";
        $n5 = 7;
        $b5 = 4;
    }
    if($k5==47) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/47.png";
        $field_5.style.visibility = "visible";
        $n5 = 8;
        $b5 = 4;
    }
    if($k5==48) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/48.png";
        $field_5.style.visibility = "visible";
        $n5 = 9;
        $b5 = 4;
    }
    if($k5==49) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/49.png";
        $field_5.style.visibility = "visible";
        $n5 = 10;
        $b5 = 4;
    }
    if($k5==50) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/50.png";
        $field_5.style.visibility = "visible";
        $n5 = 11;
        $b5 = 4;
    }
    if($k5==51) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/51.png";
        $field_5.style.visibility = "visible";
        $n5 = 12;
        $b5 = 4;
    }
    if($k5==52) {
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/52.png";
        $field_5.style.visibility = "visible";
        $n5 = 13;
        $b5 = 4;
    }
    console.log($n5);
    console.log($b5);
    $deal = 7;
}
