$waiting_1 = setInterval(Wait_1, 100);

function Wait_1() {
    console.log($deal);

    if($deal == 2) {
        clearInterval($waiting_1);
        console.log($deal);
        $Audio_Cards = setInterval(Audio_Cards,200);
        $Audio_Card_1 = setInterval($Card_1, 200);
    }
}
function Audio_Cards() {
    document.getElementById("audio_cards").play();
    audio_deal_1.currentTime = 0;
}
function $Card_1() {

    clearInterval($card_1);
    clearInterval($Audio_Cards);
    clearInterval($Audio_Card_1);

    if($k1==0) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/00.png";
        $field_1.style.visibility = "visible";
        $n1 = 0;
        $b1 = 0;
    }
    if($k1==1) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/01.png";
        $field_1.style.visibility = "visible";
        $n1 = 14;
        $b1 = 1;
    }
    if($k1==2) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/02.png";
        $field_1.style.visibility = "visible";
        $n1 = 2;
        $b1 = 1;
    }
    if($k1==3) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/03.png";
        $field_1.style.visibility = "visible";
        $n1 = 3;
        $b1 = 1;
    }
    if($k1==4) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/04.png";
        $field_1.style.visibility = "visible";
        $n1 = 4;
        $b1 = 1;
    }
    if($k1==5) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/05.png";
        $field_1.style.visibility = "visible";
        $n1 = 5;
        $b1 = 1;
    }
    if($k1==6) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/06.png";
        $field_1.style.visibility = "visible";
        $n1 = 6;
        $b1 = 1;
    }
    if($k1==7) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/07.png";
        $field_1.style.visibility = "visible";
        $n1 = 7;
        $b1 = 1;
    }
    if($k1==8) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/08.png";
        $field_1.style.visibility = "visible";
        $n1 = 8;
        $b1 = 1;
    }
    if($k1==9) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/09.png";
        $field_1.style.visibility = "visible";
        $n1 = 9;
        $b1 = 1;
    }
    if($k1==10) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/10.png";
        $field_1.style.visibility = "visible";
        $n1 = 10;
        $b1 = 1;
    }
    if($k1==11) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/11.png";
        $field_1.style.visibility = "visible";
        $n1 = 11;
        $b1 = 1;
    }
    if($k1==12) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/12.png";
        $field_1.style.visibility = "visible";
        $n1 = 12;
        $b1 = 1;
    }
    if($k1==13) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/13.png";
        $field_1.style.visibility = "visible";
        $n1 = 13;
        $b1 = 1;
    }
    if($k1==14) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/14.png";
        $field_1.style.visibility = "visible";
        $n1 = 14;
        $b1 = 2;
    }
    if($k1==15) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/15.png";
        $field_1.style.visibility = "visible";
        $n1 = 2;
        $b1 = 2;
    }
    if($k1==16) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/16.png";
        $field_1.style.visibility = "visible";
        $n1 = 3;
        $b1 = 2;
    }
    if($k1==17) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/17.png";
        $field_1.style.visibility = "visible";
        $n1 = 4;
        $b1 = 2;
    }
    if($k1==18) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/18.png";
        $field_1.style.visibility = "visible";
        $n1 = 5;
        $b1 = 2;
    }
    if($k1==19) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/19.png";
        $field_1.style.visibility = "visible";
        $n1 = 6;
        $b1 = 2;
    }
    if($k1==20) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/20.png";
        $field_1.style.visibility = "visible";
        $n1 = 7;
        $b1 = 2;
    }
    if($k1==21) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/21.png";
        $field_1.style.visibility = "visible";
        $n1 = 8;
        $b1 = 2;
    }
    if($k1==22) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/22.png";
        $field_1.style.visibility = "visible";
        $n1 = 9;
        $b1 = 2;
    }
    if($k1==23) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/23.png";
        $field_1.style.visibility = "visible";
        $n1 = 10;
        $b1 = 2;
    }
    if($k1==24) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/24.png";
        $field_1.style.visibility = "visible";
        $n1 = 11;
        $b1 = 2;
    }
    if($k1==25) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/25.png";
        $field_1.style.visibility = "visible";
        $n1 = 12;
        $b1 = 2;
    }
    if($k1==26) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/26.png";
        $field_1.style.visibility = "visible";
        $n1 = 13;
        $b1 = 2;
    }
    if($k1==27) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/27.png";
        $field_1.style.visibility = "visible";
        $n1 = 14;
        $b1 = 3;
    }
    if($k1==28) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/28.png";
        $field_1.style.visibility = "visible";
        $n1 = 2;
        $b1 = 3;
    }
    if($k1==29) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/29.png";
        $field_1.style.visibility = "visible";
        $n1 = 3;
        $b1 = 3;
    }
    if($k1==30) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/30.png";
        $field_1.style.visibility = "visible";
        $n1 = 4;
        $b1 = 3;
    }
    if($k1==31) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/31.png";
        $field_1.style.visibility = "visible";
        $n1 = 5;
        $b1 = 3;
    }
    if($k1==32) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/32.png";
        $field_1.style.visibility = "visible";
        $n1 = 6;
        $b1 = 3;
    }
    if($k1==33) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/33.png";
        $field_1.style.visibility = "visible";
        $n1 = 7;
        $b1 = 3;
    }
    if($k1==34) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/34.png";
        $field_1.style.visibility = "visible";
        $n1 = 8;
        $b1 = 3;
    }
    if($k1==35) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/35.png";
        $field_1.style.visibility = "visible";
        $n1 = 9;
        $b1 = 3;
    }
    if($k1==36) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/36.png";
        $field_1.style.visibility = "visible";
        $n1 = 10;
        $b1 = 3;
    }
    if($k1==37) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/37.png";
        $field_1.style.visibility = "visible";
        $n1 = 11;
        $b1 = 3;
    }
    if($k1==38) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/38.png";
        $field_1.style.visibility = "visible";
        $n1 = 12;
        $b1 = 3;
    }
    if($k1==39) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/39.png";
        $field_1.style.visibility = "visible";
        $n1 = 13;
        $b1 = 3;
    }
    if($k1==40) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/40.png";
        $field_1.style.visibility = "visible";
        $n1 = 14;
        $b1 = 4;
    }
    if($k1==41) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/41.png";
        $field_1.style.visibility = "visible";
        $n1 = 2;
        $b1 = 4;
    }
    if($k1==42) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/42.png";
        $field_1.style.visibility = "visible";
        $n1 = 3;
        $b1 = 4;
    }
    if($k1==43) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/43.png";
        $field_1.style.visibility = "visible";
        $n1 = 4;
        $b1 = 4;
    }
    if($k1==44) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/44.png";
        $field_1.style.visibility = "visible";
        $n1 = 5;
        $b1 = 4;
    }
    if($k1==45) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/45.png";
        $field_1.style.visibility = "visible";
        $n1 = 6;
        $b1 = 4;
    }
    if($k1==46) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/46.png";
        $field_1.style.visibility = "visible";
        $n1 = 7;
        $b1 = 4;
    }
    if($k1==47) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/47.png";
        $field_1.style.visibility = "visible";
        $n1 = 8;
        $b1 = 4;
    }
    if($k1==48) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/48.png";
        $field_1.style.visibility = "visible";
        $n1 = 9;
        $b1 = 4;
    }
    if($k1==49) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/49.png";
        $field_1.style.visibility = "visible";
        $n1 = 10;
        $b1 = 4;
    }
    if($k1==50) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/50.png";
        $field_1.style.visibility = "visible";
        $n1 = 11;
        $b1 = 4;
    }
    if($k1==51) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/51.png";
        $field_1.style.visibility = "visible";
        $n1 = 12;
        $b1 = 4;
    }
    if($k1==52) {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/52.png";
        $field_1.style.visibility = "visible";
        $n1 = 13;
        $b1 = 4;
    }
    console.log($n1);
    console.log($b1);
    $deal = 3;
}   



