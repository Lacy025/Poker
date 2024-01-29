$waiting_3 = setInterval(Cekanje3, 100);

function Cekanje3() {
    console.log($deal);

    if($deal == 4) {
        clearInterval($waiting_3);
        console.log($deal);
        $card_3 = setInterval($Karta3, 50);
    }
}
function $Karta3() {

    clearInterval($card_3);
    clearInterval($Audio_Card_3);

    if($k3==0) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/00.png";
        $field_3.style.visibility = "visible";
        $n3 = 0;
        $b3 = 0;
    }
    if($k3==1) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/01.png";
        $field_3.style.visibility = "visible";
        $n3 = 14;
        $b3 = 1;
    }
    if($k3==2) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/02.png";
        $field_3.style.visibility = "visible";
        $n3 = 2;
        $b3 = 1;
    }
    if($k3==3) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/03.png";
        $field_3.style.visibility = "visible";
        $n3 = 3;
        $b3 = 1;
    }
    if($k3==4) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/04.png";
        $field_3.style.visibility = "visible";
        $n3 = 4;
        $b3 = 1;
    }
    if($k3==5) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/05.png";
        $field_3.style.visibility = "visible";
        $n3 = 5;
        $b3 = 1;
    }
    if($k3==6) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/06.png";
        $field_3.style.visibility = "visible";
        $n3 = 6;
        $b3 = 1;
    }
    if($k3==7) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/07.png";
        $field_3.style.visibility = "visible";
        $n3 = 7;
        $b3 = 1;
    }
    if($k3==8) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/08.png";
        $field_3.style.visibility = "visible";
        $n3 = 8;
        $b3 = 1;
    }
    if($k3==9) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/09.png";
        $field_3.style.visibility = "visible";
        $n3 = 9;
        $b3 = 1;
    }
    if($k3==10) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/10.png";
        $field_3.style.visibility = "visible";
        $n3 = 10;
        $b3 = 1;
    }
    if($k3==11) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/11.png";
        $field_3.style.visibility = "visible";
        $n3 = 11;
        $b3 = 1;
    }
    if($k3==12) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/12.png";
        $field_3.style.visibility = "visible";
        $n3 = 12;
        $b3 = 1;
    }
    if($k3==13) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/13.png";
        $field_3.style.visibility = "visible";
        $n3 = 13;
        $b3 = 1;
    }
    if($k3==14) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/14.png";
        $field_3.style.visibility = "visible";
        $n3 = 14;
        $b3 = 2;
    }
    if($k3==15) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/15.png";
        $field_3.style.visibility = "visible";
        $n3 = 2;
        $b3 = 2;
    }
    if($k3==16) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/16.png";
        $field_3.style.visibility = "visible";
        $n3 = 3;
        $b3 = 2;
    }
    if($k3==17) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/17.png";
        $field_3.style.visibility = "visible";
        $n3 = 4;
        $b3 = 2;
    }
    if($k3==18) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/18.png";
        $field_3.style.visibility = "visible";
        $n3 = 5;
        $b3 = 2;
    }
    if($k3==19) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/19.png";
        $field_3.style.visibility = "visible";
        $n3 = 6;
        $b3 = 2;
    }
    if($k3==20) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/20.png";
        $field_3.style.visibility = "visible";
        $n3 = 7;
        $b3 = 2;
    }
    if($k3==21) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/21.png";
        $field_3.style.visibility = "visible";
        $n3 = 8;
        $b3 = 2;
    }
    if($k3==22) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/22.png";
        $field_3.style.visibility = "visible";
        $n3 = 9;
        $b3 = 2;
    }
    if($k3==23) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/23.png";
        $field_3.style.visibility = "visible";
        $n3 = 10;
        $b3 = 2;
    }
    if($k3==24) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/24.png";
        $field_3.style.visibility = "visible";
        $n3 = 11;
        $b3 = 2;
    }
    if($k3==25) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/25.png";
        $field_3.style.visibility = "visible";
        $n3 = 12;
        $b3 = 2;
    }
    if($k3==26) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/26.png";
        $field_3.style.visibility = "visible";
        $n3 = 13;
        $b3 = 2;
    }
    if($k3==27) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/27.png";
        $field_3.style.visibility = "visible";
        $n3 = 14;
        $b3 = 3;
    }
    if($k3==28) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/28.png";
        $field_3.style.visibility = "visible";
        $n3 = 2;
        $b3 = 3;
    }
    if($k3==29) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/29.png";
        $field_3.style.visibility = "visible";
        $n3 = 3;
        $b3 = 3;
    }
    if($k3==30) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/30.png";
        $field_3.style.visibility = "visible";
        $n3 = 4;
        $b3 = 3;
    }
    if($k3==31) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/31.png";
        $field_3.style.visibility = "visible";
        $n3 = 5;
        $b3 = 3;
    }
    if($k3==32) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/32.png";
        $field_3.style.visibility = "visible";
        $n3 = 6;
        $b3 = 3;
    }
    if($k3==33) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/33.png";
        $field_3.style.visibility = "visible";
        $n3 = 7;
        $b3 = 3;
    }
    if($k3==34) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/34.png";
        $field_3.style.visibility = "visible";
        $n3 = 8;
        $b3 = 3;
    }
    if($k3==35) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/35.png";
        $field_3.style.visibility = "visible";
        $n3 = 9;
        $b3 = 3;
    }
    if($k3==36) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/36.png";
        $field_3.style.visibility = "visible";
        $n3 = 10;
        $b3 = 3;
    }
    if($k3==37) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/37.png";
        $field_3.style.visibility = "visible";
        $n3 = 11;
        $b3 = 3;
    }
    if($k3==38) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/38.png";
        $field_3.style.visibility = "visible";
        $n3 = 12;
        $b3 = 3;
    }
    if($k3==39) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/39.png";
        $field_3.style.visibility = "visible";
        $n3 = 13;
        $b3 = 3;
    }
    if($k3==40) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/40.png";
        $field_3.style.visibility = "visible";
        $n3 = 14;
        $b3 = 4;
    }
    if($k3==41) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/41.png";
        $field_3.style.visibility = "visible";
        $n3 = 2;
        $b3 = 4;
    }
    if($k3==42) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/42.png";
        $field_3.style.visibility = "visible";
        $n3 = 3;
        $b3 = 4;
    }
    if($k3==43) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/43.png";
        $field_3.style.visibility = "visible";
        $n3 = 4;
        $b3 = 4;
    }
    if($k3==44) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/44.png";
        $field_3.style.visibility = "visible";
        $n3 = 5;
        $b3 = 4;
    }
    if($k3==45) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/45.png";
        $field_3.style.visibility = "visible";
        $n3 = 6;
        $b3 = 4;
    }
    if($k3==46) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/46.png";
        $field_3.style.visibility = "visible";
        $n3 = 7;
        $b3 = 4;
    }
    if($k3==47) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/47.png";
        $field_3.style.visibility = "visible";
        $n3 = 8;
        $b3 = 4;
    }
    if($k3==48) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/48.png";
        $field_3.style.visibility = "visible";
        $n3 = 9;
        $b3 = 4;
    }
    if($k3==49) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/49.png";
        $field_3.style.visibility = "visible";
        $n3 = 10;
        $b3 = 4;
    }
    if($k3==50) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/50.png";
        $field_3.style.visibility = "visible";
        $n3 = 11;
        $b3 = 4;
    }
    if($k3==51) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/51.png";
        $field_3.style.visibility = "visible";
        $n3 = 12;
        $b3 = 4;
    }
    if($k3==52) {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/52.png";
        $field_3.style.visibility = "visible";
        $n3 = 13;
        $b3 = 4;
    }
    console.log($n3);
    console.log($b3);
    $deal = 5;
}
