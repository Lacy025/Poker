if($deljenje==0) {

    if($deljenje==0) {
        timerCekanje7 = setInterval(cekanje, 100);
    }
    function cekanje() {
        console.log($deljenje);
    
        if($deljenje==6) {
            clearInterval(timerCekanje7);
            console.log($deljenje);
            timerCekanje7 = setInterval($Karta5, 50);
        }
    }
    function $Karta5() {
    
        clearInterval(timerCekanje7);
        clearInterval($timerAudiokarta5);
    
        if($k5==0) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/00.png";
            $polje5.style.visibility = "visible";
            $n5 = 0;
            $b5 = 0;
        }
        if($k5==1) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/01.png";
            $polje5.style.visibility = "visible";
            $n5 = 14;
            $b5 = 1;
        }
        if($k5==2) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/02.png";
            $polje5.style.visibility = "visible";
            $n5 = 2;
            $b5 = 1;
        }
        if($k5==3) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/03.png";
            $polje5.style.visibility = "visible";
            $n5 = 3;
            $b5 = 1;
        }
        if($k5==4) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/04.png";
            $polje5.style.visibility = "visible";
            $n5 = 4;
            $b5 = 1;
        }
        if($k5==5) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/05.png";
            $polje5.style.visibility = "visible";
            $n5 = 5;
            $b5 = 1;
        }
        if($k5==6) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/06.png";
            $polje5.style.visibility = "visible";
            $n5 = 6;
            $b5 = 1;
        }
        if($k5==7) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/07.png";
            $polje5.style.visibility = "visible";
            $n5 = 7;
            $b5 = 1;
        }
        if($k5==8) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/08.png";
            $polje5.style.visibility = "visible";
            $n5 = 8;
            $b5 = 1;
        }
        if($k5==9) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/09.png";
            $polje5.style.visibility = "visible";
            $n5 = 9;
            $b5 = 1;
        }
        if($k5==10) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/10.png";
            $polje5.style.visibility = "visible";
            $n5 = 10;
            $b5 = 1;
        }
        if($k5==11) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/11.png";
            $polje5.style.visibility = "visible";
            $n5 = 11;
            $b5 = 1;
        }
        if($k5==12) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/12.png";
            $polje5.style.visibility = "visible";
            $n5 = 12;
            $b5 = 1;
        }
        if($k5==13) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/13.png";
            $polje5.style.visibility = "visible";
            $n5 = 13;
            $b5 = 1;
        }
        if($k5==14) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/14.png";
            $polje5.style.visibility = "visible";
            $n5 = 14;
            $b5 = 2;
        }
        if($k5==15) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/15.png";
            $polje5.style.visibility = "visible";
            $n5 = 2;
            $b5 = 2;
        }
        if($k5==16) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/16.png";
            $polje5.style.visibility = "visible";
            $n5 = 3;
            $b5 = 2;
        }
        if($k5==17) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/17.png";
            $polje5.style.visibility = "visible";
            $n5 = 4;
            $b5 = 2;
        }
        if($k5==18) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/18.png";
            $polje5.style.visibility = "visible";
            $n5 = 5;
            $b5 = 2;
        }
        if($k5==19) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/19.png";
            $polje5.style.visibility = "visible";
            $n5 = 6;
            $b5 = 2;
        }
        if($k5==20) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/20.png";
            $polje5.style.visibility = "visible";
            $n5 = 7;
            $b5 = 2;
        }
        if($k5==21) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/21.png";
            $polje5.style.visibility = "visible";
            $n5 = 8;
            $b5 = 2;
        }
        if($k5==22) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/22.png";
            $polje5.style.visibility = "visible";
            $n5 = 9;
            $b5 = 2;
        }
        if($k5==23) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/23.png";
            $polje5.style.visibility = "visible";
            $n5 = 10;
            $b5 = 2;
        }
        if($k5==24) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/24.png";
            $polje5.style.visibility = "visible";
            $n5 = 11;
            $b5 = 2;
        }
        if($k5==25) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/25.png";
            $polje5.style.visibility = "visible";
            $n5 = 12;
            $b5 = 2;
        }
        if($k5==26) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/26.png";
            $polje5.style.visibility = "visible";
            $n5 = 13;
            $b5 = 2;
        }
        if($k5==27) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/27.png";
            $polje5.style.visibility = "visible";
            $n5 = 14;
            $b5 = 3;
        }
        if($k5==28) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/28.png";
            $polje5.style.visibility = "visible";
            $n5 = 2;
            $b5 = 3;
        }
        if($k5==29) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/29.png";
            $polje5.style.visibility = "visible";
            $n5 = 3;
            $b5 = 3;
        }
        if($k5==30) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/30.png";
            $polje5.style.visibility = "visible";
            $n5 = 4;
            $b5 = 3;
        }
        if($k5==31) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/31.png";
            $polje5.style.visibility = "visible";
            $n5 = 5;
            $b5 = 3;
        }
        if($k5==32) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/32.png";
            $polje5.style.visibility = "visible";
            $n5 = 6;
            $b5 = 3;
        }
        if($k5==33) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/33.png";
            $polje5.style.visibility = "visible";
            $n5 = 7;
            $b5 = 3;
        }
        if($k5==34) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/34.png";
            $polje5.style.visibility = "visible";
            $n5 = 8;
            $b5 = 3;
        }
        if($k5==35) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/35.png";
            $polje5.style.visibility = "visible";
            $n5 = 9;
            $b5 = 3;
        }
        if($k5==36) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/36.png";
            $polje5.style.visibility = "visible";
            $n5 = 10;
            $b5 = 3;
        }
        if($k5==37) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/37.png";
            $polje5.style.visibility = "visible";
            $n5 = 11;
            $b5 = 3;
        }
        if($k5==38) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/38.png";
            $polje5.style.visibility = "visible";
            $n5 = 12;
            $b5 = 3;
        }
        if($k5==39) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/39.png";
            $polje5.style.visibility = "visible";
            $n5 = 13;
            $b5 = 3;
        }
        if($k5==40) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/40.png";
            $polje5.style.visibility = "visible";
            $n5 = 14;
            $b5 = 4;
        }
        if($k5==41) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/41.png";
            $polje5.style.visibility = "visible";
            $n5 = 2;
            $b5 = 4;
        }
        if($k5==42) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/42.png";
            $polje5.style.visibility = "visible";
            $n5 = 3;
            $b5 = 4;
        }
        if($k5==43) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/43.png";
            $polje5.style.visibility = "visible";
            $n5 = 4;
            $b5 = 4;
        }
        if($k5==44) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/44.png";
            $polje5.style.visibility = "visible";
            $n5 = 5;
            $b5 = 4;
        }
        if($k5==45) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/45.png";
            $polje5.style.visibility = "visible";
            $n5 = 6;
            $b5 = 4;
        }
        if($k5==46) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/46.png";
            $polje5.style.visibility = "visible";
            $n5 = 7;
            $b5 = 4;
        }
        if($k5==47) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/47.png";
            $polje5.style.visibility = "visible";
            $n5 = 8;
            $b5 = 4;
        }
        if($k5==48) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/48.png";
            $polje5.style.visibility = "visible";
            $n5 = 9;
            $b5 = 4;
        }
        if($k5==49) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/49.png";
            $polje5.style.visibility = "visible";
            $n5 = 10;
            $b5 = 4;
        }
        if($k5==50) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/50.png";
            $polje5.style.visibility = "visible";
            $n5 = 11;
            $b5 = 4;
        }
        if($k5==51) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/51.png";
            $polje5.style.visibility = "visible";
            $n5 = 12;
            $b5 = 4;
        }
        if($k5==52) {
            $polje5.style.visibility = "hidden";
            document.getElementById("$polje5").src="/Karte/52.png";
            $polje5.style.visibility = "visible";
            $n5 = 13;
            $b5 = 4;
        }
        console.log($n5);
        console.log($b5);
        $deljenje=7;
    }
}