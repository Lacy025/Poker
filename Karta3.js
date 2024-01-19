$timerCekanje3 = setInterval(Cekanje3, 100);

function Cekanje3() {
    console.log($deal);

    if($deal == 4) {
        clearInterval($timerCekanje3);
        console.log($deal);
        $timerKarta3 = setInterval($Karta3, 50);
    }
}
function $Karta3() {

    clearInterval($timerKarta3);
    clearInterval($timerAudiokarta3);

    if($k3==0) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/00.png";
        $polje3.style.visibility = "visible";
        $n3 = 0;
        $b3 = 0;
    }
    if($k3==1) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/01.png";
        $polje3.style.visibility = "visible";
        $n3 = 14;
        $b3 = 1;
    }
    if($k3==2) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/02.png";
        $polje3.style.visibility = "visible";
        $n3 = 2;
        $b3 = 1;
    }
    if($k3==3) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/03.png";
        $polje3.style.visibility = "visible";
        $n3 = 3;
        $b3 = 1;
    }
    if($k3==4) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/04.png";
        $polje3.style.visibility = "visible";
        $n3 = 4;
        $b3 = 1;
    }
    if($k3==5) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/05.png";
        $polje3.style.visibility = "visible";
        $n3 = 5;
        $b3 = 1;
    }
    if($k3==6) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/06.png";
        $polje3.style.visibility = "visible";
        $n3 = 6;
        $b3 = 1;
    }
    if($k3==7) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/07.png";
        $polje3.style.visibility = "visible";
        $n3 = 7;
        $b3 = 1;
    }
    if($k3==8) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/08.png";
        $polje3.style.visibility = "visible";
        $n3 = 8;
        $b3 = 1;
    }
    if($k3==9) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/09.png";
        $polje3.style.visibility = "visible";
        $n3 = 9;
        $b3 = 1;
    }
    if($k3==10) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/10.png";
        $polje3.style.visibility = "visible";
        $n3 = 10;
        $b3 = 1;
    }
    if($k3==11) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/11.png";
        $polje3.style.visibility = "visible";
        $n3 = 11;
        $b3 = 1;
    }
    if($k3==12) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/12.png";
        $polje3.style.visibility = "visible";
        $n3 = 12;
        $b3 = 1;
    }
    if($k3==13) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/13.png";
        $polje3.style.visibility = "visible";
        $n3 = 13;
        $b3 = 1;
    }
    if($k3==14) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/14.png";
        $polje3.style.visibility = "visible";
        $n3 = 14;
        $b3 = 2;
    }
    if($k3==15) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/15.png";
        $polje3.style.visibility = "visible";
        $n3 = 2;
        $b3 = 2;
    }
    if($k3==16) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/16.png";
        $polje3.style.visibility = "visible";
        $n3 = 3;
        $b3 = 2;
    }
    if($k3==17) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/17.png";
        $polje3.style.visibility = "visible";
        $n3 = 4;
        $b3 = 2;
    }
    if($k3==18) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/18.png";
        $polje3.style.visibility = "visible";
        $n3 = 5;
        $b3 = 2;
    }
    if($k3==19) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/19.png";
        $polje3.style.visibility = "visible";
        $n3 = 6;
        $b3 = 2;
    }
    if($k3==20) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/20.png";
        $polje3.style.visibility = "visible";
        $n3 = 7;
        $b3 = 2;
    }
    if($k3==21) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/21.png";
        $polje3.style.visibility = "visible";
        $n3 = 8;
        $b3 = 2;
    }
    if($k3==22) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/22.png";
        $polje3.style.visibility = "visible";
        $n3 = 9;
        $b3 = 2;
    }
    if($k3==23) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/23.png";
        $polje3.style.visibility = "visible";
        $n3 = 10;
        $b3 = 2;
    }
    if($k3==24) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/24.png";
        $polje3.style.visibility = "visible";
        $n3 = 11;
        $b3 = 2;
    }
    if($k3==25) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/25.png";
        $polje3.style.visibility = "visible";
        $n3 = 12;
        $b3 = 2;
    }
    if($k3==26) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/26.png";
        $polje3.style.visibility = "visible";
        $n3 = 13;
        $b3 = 2;
    }
    if($k3==27) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/27.png";
        $polje3.style.visibility = "visible";
        $n3 = 14;
        $b3 = 3;
    }
    if($k3==28) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/28.png";
        $polje3.style.visibility = "visible";
        $n3 = 2;
        $b3 = 3;
    }
    if($k3==29) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/29.png";
        $polje3.style.visibility = "visible";
        $n3 = 3;
        $b3 = 3;
    }
    if($k3==30) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/30.png";
        $polje3.style.visibility = "visible";
        $n3 = 4;
        $b3 = 3;
    }
    if($k3==31) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/31.png";
        $polje3.style.visibility = "visible";
        $n3 = 5;
        $b3 = 3;
    }
    if($k3==32) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/32.png";
        $polje3.style.visibility = "visible";
        $n3 = 6;
        $b3 = 3;
    }
    if($k3==33) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/33.png";
        $polje3.style.visibility = "visible";
        $n3 = 7;
        $b3 = 3;
    }
    if($k3==34) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/34.png";
        $polje3.style.visibility = "visible";
        $n3 = 8;
        $b3 = 3;
    }
    if($k3==35) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/35.png";
        $polje3.style.visibility = "visible";
        $n3 = 9;
        $b3 = 3;
    }
    if($k3==36) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/36.png";
        $polje3.style.visibility = "visible";
        $n3 = 10;
        $b3 = 3;
    }
    if($k3==37) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/37.png";
        $polje3.style.visibility = "visible";
        $n3 = 11;
        $b3 = 3;
    }
    if($k3==38) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/38.png";
        $polje3.style.visibility = "visible";
        $n3 = 12;
        $b3 = 3;
    }
    if($k3==39) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/39.png";
        $polje3.style.visibility = "visible";
        $n3 = 13;
        $b3 = 3;
    }
    if($k3==40) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/40.png";
        $polje3.style.visibility = "visible";
        $n3 = 14;
        $b3 = 4;
    }
    if($k3==41) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/41.png";
        $polje3.style.visibility = "visible";
        $n3 = 2;
        $b3 = 4;
    }
    if($k3==42) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/42.png";
        $polje3.style.visibility = "visible";
        $n3 = 3;
        $b3 = 4;
    }
    if($k3==43) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/43.png";
        $polje3.style.visibility = "visible";
        $n3 = 4;
        $b3 = 4;
    }
    if($k3==44) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/44.png";
        $polje3.style.visibility = "visible";
        $n3 = 5;
        $b3 = 4;
    }
    if($k3==45) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/45.png";
        $polje3.style.visibility = "visible";
        $n3 = 6;
        $b3 = 4;
    }
    if($k3==46) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/46.png";
        $polje3.style.visibility = "visible";
        $n3 = 7;
        $b3 = 4;
    }
    if($k3==47) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/47.png";
        $polje3.style.visibility = "visible";
        $n3 = 8;
        $b3 = 4;
    }
    if($k3==48) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/48.png";
        $polje3.style.visibility = "visible";
        $n3 = 9;
        $b3 = 4;
    }
    if($k3==49) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/49.png";
        $polje3.style.visibility = "visible";
        $n3 = 10;
        $b3 = 4;
    }
    if($k3==50) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/50.png";
        $polje3.style.visibility = "visible";
        $n3 = 11;
        $b3 = 4;
    }
    if($k3==51) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/51.png";
        $polje3.style.visibility = "visible";
        $n3 = 12;
        $b3 = 4;
    }
    if($k3==52) {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="./Karte/52.png";
        $polje3.style.visibility = "visible";
        $n3 = 13;
        $b3 = 4;
    }
    console.log($n3);
    console.log($b3);
    $deal = 5;
}
