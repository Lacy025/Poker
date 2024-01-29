$waiting_4 = setInterval(Cekanje4, 100);

function Cekanje4() {
    console.log($deal);

    if($deal == 5) {
        clearInterval($waiting_4);
        console.log($deal);
        $card_4 = setInterval($Karta4, 50);
    }
}
function $Karta4() {

    clearInterval($card_4);
    clearInterval($Audio_Card_4);

    if($k4==0) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/00.png";
        $field_4.style.visibility = "visible";
        $n4 = 0;
        $b4 = 0;
    }
    if($k4==1) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/01.png";
        $field_4.style.visibility = "visible";
        $n4 = 14;
        $b4 = 1;
    }
    if($k4==2) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/02.png";
        $field_4.style.visibility = "visible";
        $n4 = 2;
        $b4 = 1;
    }
    if($k4==3) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/03.png";
        $field_4.style.visibility = "visible";
        $n4 = 3;
        $b4 = 1;
    }
    if($k4==4) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/04.png";
        $field_4.style.visibility = "visible";
        $n4 = 4;
        $b4 = 1;
    }
    if($k4==5) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/05.png";
        $field_4.style.visibility = "visible";
        $n4 = 5;
        $b4 = 1;
    }
    if($k4==6) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/06.png";
        $field_4.style.visibility = "visible";
        $n4 = 6;
        $b4 = 1;
    }
    if($k4==7) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/07.png";
        $field_4.style.visibility = "visible";
        $n4 = 7;
        $b4 = 1;
    }
    if($k4==8) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/08.png";
        $field_4.style.visibility = "visible";
        $n4 = 8;
        $b4 = 1;
    }
    if($k4==9) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/09.png";
        $field_4.style.visibility = "visible";
        $n4 = 9;
        $b4 = 1;
    }
    if($k4==10) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/10.png";
        $field_4.style.visibility = "visible";
        $n4 = 10;
        $b4 = 1;
    }
    if($k4==11) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/11.png";
        $field_4.style.visibility = "visible";
        $n4 = 11;
        $b4 = 1;
    }
    if($k4==12) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/12.png";
        $field_4.style.visibility = "visible";
        $n4 = 12;
        $b4 = 1;
    }
    if($k4==13) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/13.png";
        $field_4.style.visibility = "visible";
        $n4 = 13;
        $b4 = 1;
    }
    if($k4==14) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/14.png";
        $field_4.style.visibility = "visible";
        $n4 = 14;
        $b4 = 2;
    }
    if($k4==15) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/15.png";
        $field_4.style.visibility = "visible";
        $n4 = 2;
        $b4 = 2;
    }
    if($k4==16) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/16.png";
        $field_4.style.visibility = "visible";
        $n4 = 3;
        $b4 = 2;
    }
    if($k4==17) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/17.png";
        $field_4.style.visibility = "visible";
        $n4 = 4;
        $b4 = 2;
    }
    if($k4==18) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/18.png";
        $field_4.style.visibility = "visible";
        $n4 = 5;
        $b4 = 2;
    }
    if($k4==19) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/19.png";
        $field_4.style.visibility = "visible";
        $n4 = 6;
        $b4 = 2;
    }
    if($k4==20) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/20.png";
        $field_4.style.visibility = "visible";
        $n4 = 7;
        $b4 = 2;
    }
    if($k4==21) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/21.png";
        $field_4.style.visibility = "visible";
        $n4 = 8;
        $b4 = 2;
    }
    if($k4==22) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/22.png";
        $field_4.style.visibility = "visible";
        $n4 = 9;
        $b4 = 2;
    }
    if($k4==23) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/23.png";
        $field_4.style.visibility = "visible";
        $n4 = 10;
        $b4 = 2;
    }
    if($k4==24) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/24.png";
        $field_4.style.visibility = "visible";
        $n4 = 11;
        $b4 = 2;
    }
    if($k4==25) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/25.png";
        $field_4.style.visibility = "visible";
        $n4 = 12;
        $b4 = 2;
    }
    if($k4==26) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/26.png";
        $field_4.style.visibility = "visible";
        $n4 = 13;
        $b4 = 2;
    }
    if($k4==27) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/27.png";
        $field_4.style.visibility = "visible";
        $n4 = 14;
        $b4 = 3;
    }
    if($k4==28) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/28.png";
        $field_4.style.visibility = "visible";
        $n4 = 2;
        $b4 = 3;
    }
    if($k4==29) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/29.png";
        $field_4.style.visibility = "visible";
        $n4 = 3;
        $b4 = 3;
    }
    if($k4==30) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/30.png";
        $field_4.style.visibility = "visible";
        $n4 = 4;
        $b4 = 3;
    }
    if($k4==31) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/31.png";
        $field_4.style.visibility = "visible";
        $n4 = 5;
        $b4 = 3;
    }
    if($k4==32) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/32.png";
        $field_4.style.visibility = "visible";
        $n4 = 6;
        $b4 = 3;
    }
    if($k4==33) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/33.png";
        $field_4.style.visibility = "visible";
        $n4 = 7;
        $b4 = 3;
    }
    if($k4==34) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/34.png";
        $field_4.style.visibility = "visible";
        $n4 = 8;
        $b4 = 3;
    }
    if($k4==35) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/35.png";
        $field_4.style.visibility = "visible";
        $n4 = 9;
        $b4 = 3;
    }
    if($k4==36) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/36.png";
        $field_4.style.visibility = "visible";
        $n4 = 10;
        $b4 = 3;
    }
    if($k4==37) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/37.png";
        $field_4.style.visibility = "visible";
        $n4 = 11;
        $b4 = 3;
    }
    if($k4==38) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/38.png";
        $field_4.style.visibility = "visible";
        $n4 = 12;
        $b4 = 3;
    }
    if($k4==39) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/39.png";
        $field_4.style.visibility = "visible";
        $n4 = 13;
        $b4 = 3;
    }
    if($k4==40) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/40.png";
        $field_4.style.visibility = "visible";
        $n4 = 14;
        $b4 = 4;
    }
    if($k4==41) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/41.png";
        $field_4.style.visibility = "visible";
        $n4 = 2;
        $b4 = 4;
    }
    if($k4==42) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/42.png";
        $field_4.style.visibility = "visible";
        $n4 = 3;
        $b4 = 4;
    }
    if($k4==43) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/43.png";
        $field_4.style.visibility = "visible";
        $n4 = 4;
        $b4 = 4;
    }
    if($k4==44) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/44.png";
        $field_4.style.visibility = "visible";
        $n4 = 5;
        $b4 = 4;
    }
    if($k4==45) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/45.png";
        $field_4.style.visibility = "visible";
        $n4 = 6;
        $b4 = 4;
    }
    if($k4==46) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/46.png";
        $field_4.style.visibility = "visible";
        $n4 = 7;
        $b4 = 4;
    }
    if($k4==47) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/47.png";
        $field_4.style.visibility = "visible";
        $n4 = 8;
        $b4 = 4;
    }
    if($k4==48) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/48.png";
        $field_4.style.visibility = "visible";
        $n4 = 9;
        $b4 = 4;
    }
    if($k4==49) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/49.png";
        $field_4.style.visibility = "visible";
        $n4 = 10;
        $b4 = 4;
    }
    if($k4==50) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/50.png";
        $field_4.style.visibility = "visible";
        $n4 = 11;
        $b4 = 4;
    }
    if($k4==51) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/51.png";
        $field_4.style.visibility = "visible";
        $n4 = 12;
        $b4 = 4;
    }
    if($k4==52) {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/52.png";
        $field_4.style.visibility = "visible";
        $n4 = 13;
        $b4 = 4;
    }
    console.log($n4);
    console.log($b4);
    $deal = 6;
}
