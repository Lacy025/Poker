$waiting_9 = setInterval(Cekanje9, 500);
 
function Cekanje9() {
    console.log($deal);

    if($deal == 10) {
        clearInterval($waiting_9);
        $deal = 12;
        $pause_low = 400;
        $pause_high = 800;
        $card = 1;
        document.getElementById("audioVeca").play();
        audioCount1.currentTime = 0;
        $field_01.style.visibility = "visible";
        high.style.visibility = "visible";
        Dupliranje();
    }
}
function Dupliranje() {

    clearInterval($bingo);
    clearInterval($wait_low);
    clearInterval($wait_high);
    clearInterval($victory_1);
    clearInterval($victory_2);
    victory.style.visibility = "hidden";
    low.style.visibility = "hidden";
    high.style.visibility = "hidden";
    Karta1_12();

    if($card<12&&$d<10000) {
        high.style.visibility = "visible";
        document.getElementById("audioVeca").play();
        audioCount1.currentTime = 0;
        window.addEventListener("keydown", Kockanje);
    }
    else {
        clearInterval($wait_low);
        clearInterval($wait_high);
        low.style.visibility = "hidden";
        high.style.visibility = "hidden";
        window.removeEventListener("keydown", Kockanje);
        victory.style.visibility = "visible";
        $deal = 11;
    }
}
function Karta1_12() {

    if($card == 1) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        $wait_low = setInterval(Manja, $pause_low);
        $wait_high = setInterval(Veca, $pause_high);
    }
    if($card == 2) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00==$k01) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $field_02.style.visibility = "visible";
        $wait_low = setInterval(Manja, $pause_low);
        $wait_high = setInterval(Veca, $pause_high);
    }
    if($card == 3) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00==$k01 || $k00==$k02) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $field_03.style.visibility = "visible";
        $wait_low = setInterval(Manja, $pause_low);
        $wait_high = setInterval(Veca, $pause_high);
    }
    if($card == 4) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00==$k01 || $k00==$k02 || $k00==$k03) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $field_04.style.visibility = "visible";
        $wait_low = setInterval(Manja, $pause_low);
        $wait_high = setInterval(Veca, $pause_high);
    }
    if($card == 5) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00==$k01 || $k00==$k02 || $k00==$k03 || $k00==$k04) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $field_05.style.visibility = "visible";
        $wait_low = setInterval(Manja, $pause_low);
        $wait_high = setInterval(Veca, $pause_high);
    }
    if($card == 6) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00==$k01 || $k00==$k02 || $k00==$k03 || $k00==$k04 || $k00==$k05) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $field_06.style.visibility = "visible";
        $wait_low = setInterval(Manja, $pause_low);
        $wait_high = setInterval(Veca, $pause_high);
    }
    if($card == 7) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00==$k01 || $k00==$k02 || $k00==$k03 || $k00==$k04 || $k00==$k05 ||
            $k00==$k06) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $field_07.style.visibility = "visible";
        $wait_low = setInterval(Manja, $pause_low);
        $wait_high = setInterval(Veca, $pause_high);
    }
    if($card == 8) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00==$k01 || $k00==$k02 || $k00==$k03 || $k00==$k04 || $k00==$k05 ||
            $k00==$k06 || $k00==$k07) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $field_08.style.visibility = "visible";
        $wait_low = setInterval(Manja, $pause_low);
        $wait_high = setInterval(Veca, $pause_high);
    }
    if($card == 9) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00==$k01 || $k00==$k02 || $k00==$k03 || $k00==$k04 || $k00==$k05 ||
            $k00==$k06 || $k00==$k07 || $k00==$k08) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $field_09.style.visibility = "visible";
        $wait_low = setInterval(Manja, $pause_low);
        $wait_high = setInterval(Veca, $pause_high);
    }
    if($card == 10) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00==$k01 || $k00==$k02 || $k00==$k03 || $k00==$k04 || $k00==$k05 ||
            $k00==$k06 || $k00==$k07 || $k00==$k08 || $k00==$k09) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $field_10.style.visibility = "visible";
        $wait_low = setInterval(Manja, $pause_low);
        $wait_high = setInterval(Veca, $pause_high);
    }
    if($card == 11) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00==$k01 || $k00==$k02 || $k00==$k03 || $k00==$k04 || $k00==$k05 ||
            $k00==$k06 || $k00==$k07 || $k00==$k08 || $k00==$k09 || $k00==$k10) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $field_11.style.visibility = "visible";
        $wait_low = setInterval(Manja, $pause_low);
        $wait_high = setInterval(Veca, $pause_high);
    }
    if($card == 12) {
        $field_12.style.visibility = "visible";
    }


    // document.getElementById("kartaxx").innerHTML = $k00;  // CHEATING MODE

}
function Brisanje() {

    window.removeEventListener("keydown", Kockanje);
    clearInterval($wait_low);
    clearInterval($wait_high);
    low.style.visibility = "hidden";
    high.style.visibility = "hidden";
}
function Kockanje(event) {

    switch(event.keyCode) {

        case 17 :  // CTRL - DOUBLING

            Brisanje();

            Karta();

            document.getElementById("win_value").innerHTML = $d;
            document.getElementById("win_value").style.visibility = "hidden";

            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {  // LOW
                
                high_choice.style.visibility = "hidden";
                low_choice.style.visibility = "visible";

                if($k00<25) {
                    Pogodio();
                }
                else {
                    Promasio();
                }
                break;
            }
            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {  // HIGH
            
                low_choice.style.visibility = "hidden";
                high_choice.style.visibility = "visible";

                if($k00>24) {
                    Pogodio();
                }
                else {
                    Promasio();
                }
                break;
            }

        case 32 :  // TASTER SPACE - KASIRANJE

            Brisanje();
            $deal = 11;
            break;

        case 53 :  // TASTER 5 - UZMI POLA

            if($d>1) {

                Brisanje();
                $Victory_2();

                $half = Math.floor($d / 2);

                $victory_1 = setInterval($Victory_1,500);
                $victory_2 = setInterval($Victory_2,1000);

                if($d<101) {
                    $Check_3 = setInterval(Pola1,60);
                }
                if($d>100 && $d<200) {
                    $first_part = $d - 100;
                    $second_part = 100 - $half;
                    Pola2();
                }
                if($d==200) {
                    $Minus_100();
                    $Check_3 = setInterval(Pola3,1000);
                }
                if($d>200) {
                    Pola4();
                }
            }
    }
}
function Pola1() {

    if($d != $half) {
        $Minus_1();
    }
    else {
        clearInterval($Check_3);
        $audioCount2();
        $Victory_1();
        $bingo = setInterval(Dupliranje, 1000);
    }
}
function Pola2() {
    Prvideo1();
    $Check_3 = setInterval(Drugideo1,1000);
}
function Prvideo1() {
    $Victory_2();
    $c = $c + $first_part;
    document.getElementById("credit").innerHTML = $c;
    $Credit_Value();
    $d = $d - $first_part;
    document.getElementById("win_value").innerHTML = $d;
    $audioCount2();
}
function Drugideo1() {
    clearInterval($Check_3);
    if($second_part != 0) {
        $Minus_1();
        $Check_3 = setInterval(Drugideo1, 60);
        $second_part --;
    }
    else {
        clearInterval($Check_3);
        $Victory_2();
        $audioCount2();
        $bingo = setInterval(Dupliranje, 1000);
    }
}
function Pola3() {
    clearInterval($Check_3);
    $audioCount2();
    $bingo = setInterval(Dupliranje, 1000);
}
function Pola4() {
    if((Math.floor($d/100)) != ($d/100)) {
        Prvideo2();
        $Check_3 = setInterval(Drugideo2, 1000);
    }
    else {
        Drugideo2();
    }
}
function Prvideo2() {
    $first_part = Math.round((($d/100) - (Math.floor($d/100))) * 100);
    Prvideo1();
}
function Drugideo2() {
    clearInterval($Check_3);
    if($d - $half > 99) {
        $Minus_100();
        $Check_3 = setInterval(Drugideo2, 1000);
    }
    else {

        if($d - $half == 0) {
            Trecideo3();
        }
        else {
            clearInterval($Check_3);
            clearInterval($victory_1);
            clearInterval($victory_2);
            $Victory_2();
            $first_part = $d - $half;
            Prvideo1();
            $bingo = setInterval(Trecideo3, 1000);
        } 
    }
}
function Trecideo3() {
    clearInterval($Check_3);
    clearInterval($bingo);
    clearInterval($victory_1);
    clearInterval($victory_2);
    $Victory_2();
    Dupliranje();
}
function Karta() {

    if($card == 1) {
        $field_01.style.visibility = "hidden";
        $k01 = $k00;
        $card_field = "$field_01"
        Karta00();
        $field_01.style.visibility = "visible";
        low_choice.style.left = "580px";
        high_choice.style.left = "580px";
    }
    if($card == 2) {
        $field_02.style.visibility = "hidden";
        $k02 = $k00;
        $card_field = "$field_02"
        Karta00();
        $field_02.style.visibility = "visible";
        low_choice.style.left = "650px";
        high_choice.style.left = "650px";
    }
    if($card == 3) {
        $field_03.style.visibility = "hidden";
        $k03 = $k00;
        $card_field = "$field_03"
        Karta00();
        $field_03.style.visibility = "visible";
        low_choice.style.left = "720px";
        high_choice.style.left = "720px";
    }
    if($card == 4) {
        $field_04.style.visibility = "hidden";
        $k04 = $k00;
        $card_field = "$field_04"
        Karta00();
        $field_04.style.visibility = "visible";
        low_choice.style.left = "790px";
        high_choice.style.left = "790px";
    }
    if($card == 5) {
        $field_05.style.visibility = "hidden";
        $k05 = $k00;
        $card_field = "$field_05"
        Karta00();
        $field_05.style.visibility = "visible";
        low_choice.style.left = "860px";
        high_choice.style.left = "860px";
    }
    if($card == 6) {
        $field_06.style.visibility = "hidden";
        $k06 = $k00;
        $card_field = "$field_06"
        Karta00();
        $field_06.style.visibility = "visible";
        low_choice.style.left = "930px";
        high_choice.style.left = "930px";
    }
    if($card == 7) {
        $field_07.style.visibility = "hidden";
        $k07 = $k00;
        $card_field = "$field_07"
        Karta00();
        $field_07.style.visibility = "visible";
        low_choice.style.left = "1000px";
        high_choice.style.left = "1000px";
    }
    if($card == 8) {
        $field_08.style.visibility = "hidden";
        $k08 = $k00;
        $card_field = "$field_08"
        Karta00();
        $field_08.style.visibility = "visible";
        low_choice.style.left = "1070px";
        high_choice.style.left = "1070px";
    }
    if($card == 9) {
        $field_09.style.visibility = "hidden";
        $k09 = $k00;
        $card_field = "$field_09"
        Karta00();
        $field_09.style.visibility = "visible";
        low_choice.style.left = "1140px";
        high_choice.style.left = "1140px";
    }
    if($card == 10) {
        $field_10.style.visibility = "hidden";
        $k10 = $k00;
        $card_field = "$field_10"
        Karta00();
        $field_10.style.visibility = "visible";
        low_choice.style.left = "1210px";
        high_choice.style.left = "1210px";
    }
    if($card == 11) {
        $field_11.style.visibility = "hidden";
        $k11 = $k00;
        $card_field = "$field_11"
        Karta00();
        $field_11.style.visibility = "visible";
        low_choice.style.left = "1280px";
        high_choice.style.left = "1280px";
    }
}
function Pogodio() {
    victory.style.visibility = "visible";
    $d = $d * 2;
    document.getElementById("win_value").innerHTML = $d;
    document.getElementById("win_value").style.visibility = "visible";
    document.getElementById("audioPogodak").play();
    audioPogodak.currentTime = 0;
    $card++;
    $pause_low = $pause_low - 30;
    $pause_high = $pause_high - 60;
    $bingo = setInterval(Dupliranje, 1400);
}
function Promasio() {
    $d = 0;
    document.getElementById("win_value").innerHTML = $d;
    document.getElementById("win_value").style.visibility = "visible";
    $deal = 11;
}
function Veca() {
    high.style.visibility = "visible";
    low.style.visibility = "hidden";
    audioManja.currentTime = 1;
    document.getElementById("audioVeca").play();
    audioVeca.currentTime = 0;
}
function Manja() {
    high.style.visibility = "hidden";
    low.style.visibility = "visible";
    audioVeca.currentTime = 1;
    document.getElementById("audioManja").play();
    audioManja.currentTime = 0;
}
function Karta00() {

    if($k00==1) {
        document.getElementById($card_field).src="./Karte/01.png";
    }
    if($k00==2) {
        document.getElementById($card_field).src="./Karte/02.png";
    }
    if($k00==3) {
        document.getElementById($card_field).src="./Karte/03.png";
    }
    if($k00==4) {
        document.getElementById($card_field).src="./Karte/04.png";
    }
    if($k00==5) {
        document.getElementById($card_field).src="./Karte/05.png";
    }
    if($k00==6) {
        document.getElementById($card_field).src="./Karte/06.png";
    }
    if($k00==7) {
        document.getElementById($card_field).src="./Karte/14.png";
    }
    if($k00==8) {
        document.getElementById($card_field).src="./Karte/15.png";
    }
    if($k00==9) {
        document.getElementById($card_field).src="./Karte/16.png";
    }
    if($k00==10) {
        document.getElementById($card_field).src="./Karte/17.png";
    }
    if($k00==11) {
        document.getElementById($card_field).src="./Karte/18.png";
    }
    if($k00==12) {
        document.getElementById($card_field).src="./Karte/19.png";
    }
    if($k00==13) {
        document.getElementById($card_field).src="./Karte/27.png";
    }
    if($k00==14) {
        document.getElementById($card_field).src="./Karte/28.png";
    }
    if($k00==15) {
        document.getElementById($card_field).src="./Karte/29.png";
    }
    if($k00==16) {
        document.getElementById($card_field).src="./Karte/30.png";
    }
    if($k00==17) {
        document.getElementById($card_field).src="./Karte/31.png";
    }
    if($k00==18) {
        document.getElementById($card_field).src="./Karte/32.png";
    }
    if($k00==19) {
        document.getElementById($card_field).src="./Karte/40.png";
    }
    if($k00==20) {
        document.getElementById($card_field).src="./Karte/41.png";
    }
    if($k00==21) {
        document.getElementById($card_field).src="./Karte/42.png";
    }
    if($k00==22) {
        document.getElementById($card_field).src="./Karte/43.png";
    }
    if($k00==23) {
        document.getElementById($card_field).src="./Karte/44.png";
    }
    if($k00==24) {
        document.getElementById($card_field).src="./Karte/45.png";
    }
    if($k00==25) {
        document.getElementById($card_field).src="./Karte/08.png";
    }
    if($k00==26) {
        document.getElementById($card_field).src="./Karte/09.png";
    }
    if($k00==27) {
        document.getElementById($card_field).src="./Karte/10.png";
    }
    if($k00==28) {
        document.getElementById($card_field).src="./Karte/11.png";
    }
    if($k00==29) {
        document.getElementById($card_field).src="./Karte/12.png";
    }
    if($k00==30) {
        document.getElementById($card_field).src="./Karte/13.png";
    }
    if($k00==31) {
        document.getElementById($card_field).src="./Karte/21.png";
    }
    if($k00==32) {
        document.getElementById($card_field).src="./Karte/22.png";
    }
    if($k00==33) {
        document.getElementById($card_field).src="./Karte/23.png";
    }
    if($k00==34) {
        document.getElementById($card_field).src="./Karte/24.png";
    }
    if($k00==35) {
        document.getElementById($card_field).src="./Karte/25.png";
    }
    if($k00==36) {
        document.getElementById($card_field).src="./Karte/26.png";
    }
    if($k00==37) {
        document.getElementById($card_field).src="./Karte/34.png";
    }
    if($k00==38) {
        document.getElementById($card_field).src="./Karte/35.png";
    }
    if($k00==39) {
        document.getElementById($card_field).src="./Karte/36.png";
    }
    if($k00==40) {
        document.getElementById($card_field).src="./Karte/37.png";
    }
    if($k00==41) {
        document.getElementById($card_field).src="./Karte/38.png";
    }
    if($k00==42) {
        document.getElementById($card_field).src="./Karte/39.png";
    }
    if($k00==43) {
        document.getElementById($card_field).src="./Karte/47.png";
    }
    if($k00==44) {
        document.getElementById($card_field).src="./Karte/48.png";
    }
    if($k00==45) {
        document.getElementById($card_field).src="./Karte/49.png";
    }
    if($k00==46) {
        document.getElementById($card_field).src="./Karte/50.png";
    }
    if($k00==47) {
        document.getElementById($card_field).src="./Karte/51.png";
    }
    if($k00==48) {
        document.getElementById($card_field).src="./Karte/52.png";
    }
}