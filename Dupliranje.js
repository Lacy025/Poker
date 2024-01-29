$waiting_9 = setInterval(Wait_9, 500);
 
function Wait_9() {
    console.log($deal);

    if($deal == 10) {
        clearInterval($waiting_9);
        $deal = 12;
        $pause_low = 400;
        $pause_high = 800;
        $card = 1;
        document.getElementById("audio_high").play();
        audioCount1.currentTime = 0;
        $field_01.style.visibility = "visible";
        high.style.visibility = "visible";
        Doubling();
    }
}
function Doubling() {

    clearInterval($bingo);
    clearInterval($wait_low);
    clearInterval($wait_high);
    clearInterval($victory_1);
    clearInterval($victory_2);
    victory.style.visibility = "hidden";
    low.style.visibility = "hidden";
    high.style.visibility = "hidden";
    Doubling_cards();

    if($card < 12 && $d < 10000) {
        high.style.visibility = "visible";
        document.getElementById("audio_high").play();
        audioCount1.currentTime = 0;
        window.addEventListener("keydown", Gambling);
    }
    else {
        clearInterval($wait_low);
        clearInterval($wait_high);
        low.style.visibility = "hidden";
        high.style.visibility = "hidden";
        window.removeEventListener("keydown", Gambling);
        victory.style.visibility = "visible";
        $deal = 11;
    }
}
function Doubling_cards() {

    if($card == 1) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        $wait_low = setInterval(Low, $pause_low);
        $wait_high = setInterval(High, $pause_high);
    }
    if($card == 2) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00 == $k01) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $field_02.style.visibility = "visible";
        $wait_low = setInterval(Low, $pause_low);
        $wait_high = setInterval(High, $pause_high);
    }
    if($card == 3) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00 == $k01 || $k00 == $k02) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $field_03.style.visibility = "visible";
        $wait_low = setInterval(Low, $pause_low);
        $wait_high = setInterval(High, $pause_high);
    }
    if($card == 4) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00 == $k01 || $k00 == $k02 || $k00 == $k03) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $field_04.style.visibility = "visible";
        $wait_low = setInterval(Low, $pause_low);
        $wait_high = setInterval(High, $pause_high);
    }
    if($card == 5) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00 == $k01 || $k00 == $k02 || $k00 == $k03 || $k00 == $k04) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $field_05.style.visibility = "visible";
        $wait_low = setInterval(Low, $pause_low);
        $wait_high = setInterval(High, $pause_high);
    }
    if($card == 6) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00 == $k01 || $k00 == $k02 || $k00 == $k03 || $k00 == $k04 || $k00 == $k05) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $field_06.style.visibility = "visible";
        $wait_low = setInterval(Low, $pause_low);
        $wait_high = setInterval(High, $pause_high);
    }
    if($card == 7) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00 == $k01 || $k00 == $k02 || $k00 == $k03 || $k00 == $k04 || $k00 == $k05 ||
            $k00 == $k06) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $field_07.style.visibility = "visible";
        $wait_low = setInterval(Low, $pause_low);
        $wait_high = setInterval(High, $pause_high);
    }
    if($card == 8) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00 == $k01 || $k00 == $k02 || $k00 == $k03 || $k00 == $k04 || $k00 == $k05 ||
            $k00 == $k06 || $k00 == $k07) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $field_08.style.visibility = "visible";
        $wait_low = setInterval(Low, $pause_low);
        $wait_high = setInterval(High, $pause_high);
    }
    if($card == 9) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00 == $k01 || $k00 == $k02 || $k00 == $k03 || $k00 == $k04 || $k00 == $k05 ||
            $k00 == $k06 || $k00 == $k07 || $k00 == $k08) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $field_09.style.visibility = "visible";
        $wait_low = setInterval(Low, $pause_low);
        $wait_high = setInterval(High, $pause_high);
    }
    if($card == 10) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00 == $k01 || $k00 == $k02 || $k00 == $k03 || $k00 == $k04 || $k00 == $k05 ||
            $k00 == $k06 || $k00 == $k07 || $k00 == $k08 || $k00 == $k09) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $field_10.style.visibility = "visible";
        $wait_low = setInterval(Low, $pause_low);
        $wait_high = setInterval(High, $pause_high);
    }
    if($card == 11) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00 == $k01 || $k00 == $k02 || $k00 == $k03 || $k00 == $k04 || $k00 == $k05 ||
            $k00 == $k06 || $k00 == $k07 || $k00 == $k08 || $k00 == $k09 || $k00 == $k10) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $field_11.style.visibility = "visible";
        $wait_low = setInterval(Low, $pause_low);
        $wait_high = setInterval(High, $pause_high);
    }
    if($card == 12) {
        $field_12.style.visibility = "visible";
    }


    // document.getElementById("cheat").innerHTML = $k00;  // CHEATING MODE

}
function Clearing() {

    window.removeEventListener("keydown", Gambling);
    clearInterval($wait_low);
    clearInterval($wait_high);
    low.style.visibility = "hidden";
    high.style.visibility = "hidden";
}
function Gambling(event) {

    switch(event.keyCode) {

        case 17 :  // CTRL - DOUBLING

        Clearing();

            Card();

            document.getElementById("win_value").innerHTML = $d;
            document.getElementById("win_value").style.visibility = "hidden";

            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {  // LOW
                
                high_choice.style.visibility = "hidden";
                low_choice.style.visibility = "visible";

                if($k00 < 25) {
                    Hit();
                }
                else {
                    Mis();
                }
                break;
            }
            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {  // HIGH
            
                low_choice.style.visibility = "hidden";
                high_choice.style.visibility = "visible";

                if($k00 > 24) {
                    Hit();
                }
                else {
                    Mis();
                }
                break;
            }

        case 32 :  // SPACE - CASHING

            Clearing();
            $deal = 11;
            break;

        case 53 :  // 5 - TAKE HALF

            if($d > 1) {

                Clearing();
                $Victory_2();

                $half = Math.floor($d / 2);

                $victory_1 = setInterval($Victory_1,500);
                $victory_2 = setInterval($Victory_2,1000);

                if($d < 101) {
                    $Check_3 = setInterval(Pola1,60);
                }
                if($d > 100 && $d < 200) {
                    $first_part = $d - 100;
                    $second_part = 100 - $half;
                    Half_2();
                }
                if($d == 200) {
                    $Minus_100();
                    $Check_3 = setInterval(Pola3,1000);
                }
                if($d > 200) {
                    Half_4();
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
        $bingo = setInterval(Doubling, 1000);
    }
}
function Half_2() {
    First_1();
    $Check_3 = setInterval(Second_1,1000);
}
function First_1() {
    $Victory_2();
    $c = $c + $first_part;
    document.getElementById("credit").innerHTML = $c;
    $Credit_Value();
    $d = $d - $first_part;
    document.getElementById("win_value").innerHTML = $d;
    $audioCount2();
}
function Second_1() {
    clearInterval($Check_3);
    if($second_part != 0) {
        $Minus_1();
        $Check_3 = setInterval(Second_1, 60);
        $second_part --;
    }
    else {
        clearInterval($Check_3);
        $Victory_2();
        $audioCount2();
        $bingo = setInterval(Doubling, 1000);
    }
}
function Pola3() {
    clearInterval($Check_3);
    $audioCount2();
    $bingo = setInterval(Doubling, 1000);
}
function Half_4() {
    if((Math.floor($d / 100)) != ($d / 100)) {
        First_2();
        $Check_3 = setInterval(Second_2, 1000);
    }
    else {
        Second_2();
    }
}
function First_2() {
    $first_part = Math.round((($d / 100) - (Math.floor($d / 100))) * 100);
    First_1();
}
function Second_2() {
    clearInterval($Check_3);
    if($d - $half > 99) {
        $Minus_100();
        $Check_3 = setInterval(Second_2, 1000);
    }
    else {

        if($d - $half == 0) {
            Third_3();
        }
        else {
            clearInterval($Check_3);
            clearInterval($victory_1);
            clearInterval($victory_2);
            $Victory_2();
            $first_part = $d - $half;
            First_1();
            $bingo = setInterval(Third_3, 1000);
        } 
    }
}
function Third_3() {
    clearInterval($Check_3);
    clearInterval($bingo);
    clearInterval($victory_1);
    clearInterval($victory_2);
    $Victory_2();
    Doubling();
}
function Card() {

    if($card == 1) {
        $field_01.style.visibility = "hidden";
        $k01 = $k00;
        $card_field = "$field_01"
        Card_00();
        $field_01.style.visibility = "visible";
        low_choice.style.left = "580px";
        high_choice.style.left = "580px";
    }
    if($card == 2) {
        $field_02.style.visibility = "hidden";
        $k02 = $k00;
        $card_field = "$field_02"
        Card_00();
        $field_02.style.visibility = "visible";
        low_choice.style.left = "650px";
        high_choice.style.left = "650px";
    }
    if($card == 3) {
        $field_03.style.visibility = "hidden";
        $k03 = $k00;
        $card_field = "$field_03"
        Card_00();
        $field_03.style.visibility = "visible";
        low_choice.style.left = "720px";
        high_choice.style.left = "720px";
    }
    if($card == 4) {
        $field_04.style.visibility = "hidden";
        $k04 = $k00;
        $card_field = "$field_04"
        Card_00();
        $field_04.style.visibility = "visible";
        low_choice.style.left = "790px";
        high_choice.style.left = "790px";
    }
    if($card == 5) {
        $field_05.style.visibility = "hidden";
        $k05 = $k00;
        $card_field = "$field_05"
        Card_00();
        $field_05.style.visibility = "visible";
        low_choice.style.left = "860px";
        high_choice.style.left = "860px";
    }
    if($card == 6) {
        $field_06.style.visibility = "hidden";
        $k06 = $k00;
        $card_field = "$field_06"
        Card_00();
        $field_06.style.visibility = "visible";
        low_choice.style.left = "930px";
        high_choice.style.left = "930px";
    }
    if($card == 7) {
        $field_07.style.visibility = "hidden";
        $k07 = $k00;
        $card_field = "$field_07"
        Card_00();
        $field_07.style.visibility = "visible";
        low_choice.style.left = "1000px";
        high_choice.style.left = "1000px";
    }
    if($card == 8) {
        $field_08.style.visibility = "hidden";
        $k08 = $k00;
        $card_field = "$field_08"
        Card_00();
        $field_08.style.visibility = "visible";
        low_choice.style.left = "1070px";
        high_choice.style.left = "1070px";
    }
    if($card == 9) {
        $field_09.style.visibility = "hidden";
        $k09 = $k00;
        $card_field = "$field_09"
        Card_00();
        $field_09.style.visibility = "visible";
        low_choice.style.left = "1140px";
        high_choice.style.left = "1140px";
    }
    if($card == 10) {
        $field_10.style.visibility = "hidden";
        $k10 = $k00;
        $card_field = "$field_10"
        Card_00();
        $field_10.style.visibility = "visible";
        low_choice.style.left = "1210px";
        high_choice.style.left = "1210px";
    }
    if($card == 11) {
        $field_11.style.visibility = "hidden";
        $k11 = $k00;
        $card_field = "$field_11"
        Card_00();
        $field_11.style.visibility = "visible";
        low_choice.style.left = "1280px";
        high_choice.style.left = "1280px";
    }
}
function Hit() {
    victory.style.visibility = "visible";
    $d = $d * 2;
    document.getElementById("win_value").innerHTML = $d;
    document.getElementById("win_value").style.visibility = "visible";
    document.getElementById("audio_hit").play();
    audio_hit.currentTime = 0;
    $card++;
    $pause_low = $pause_low - 30;
    $pause_high = $pause_high - 60;
    $bingo = setInterval(Doubling, 1400);
}
function Mis() {
    $d = 0;
    document.getElementById("win_value").innerHTML = $d;
    document.getElementById("win_value").style.visibility = "visible";
    $deal = 11;
}
function High() {
    high.style.visibility = "visible";
    low.style.visibility = "hidden";
    audio_low.currentTime = 1;
    document.getElementById("audio_high").play();
    audio_high.currentTime = 0;
}
function Low() {
    high.style.visibility = "hidden";
    low.style.visibility = "visible";
    audio_high.currentTime = 1;
    document.getElementById("audio_low").play();
    audio_low.currentTime = 0;
}
function Card_00() {

    if($k00 == 1) {
        document.getElementById($card_field).src="./Cards/01.png";
    }
    if($k00 == 2) {
        document.getElementById($card_field).src="./Cards/02.png";
    }
    if($k00 == 3) {
        document.getElementById($card_field).src="./Cards/03.png";
    }
    if($k00 == 4) {
        document.getElementById($card_field).src="./Cards/04.png";
    }
    if($k00 == 5) {
        document.getElementById($card_field).src="./Cards/05.png";
    }
    if($k00 == 6) {
        document.getElementById($card_field).src="./Cards/06.png";
    }
    if($k00 == 7) {
        document.getElementById($card_field).src="./Cards/14.png";
    }
    if($k00 == 8) {
        document.getElementById($card_field).src="./Cards/15.png";
    }
    if($k00 == 9) {
        document.getElementById($card_field).src="./Cards/16.png";
    }
    if($k00 == 10) {
        document.getElementById($card_field).src="./Cards/17.png";
    }
    if($k00 == 11) {
        document.getElementById($card_field).src="./Cards/18.png";
    }
    if($k00 == 12) {
        document.getElementById($card_field).src="./Cards/19.png";
    }
    if($k00 == 13) {
        document.getElementById($card_field).src="./Cards/27.png";
    }
    if($k00 == 14) {
        document.getElementById($card_field).src="./Cards/28.png";
    }
    if($k00 == 15) {
        document.getElementById($card_field).src="./Cards/29.png";
    }
    if($k00 == 16) {
        document.getElementById($card_field).src="./Cards/30.png";
    }
    if($k00 == 17) {
        document.getElementById($card_field).src="./Cards/31.png";
    }
    if($k00 == 18) {
        document.getElementById($card_field).src="./Cards/32.png";
    }
    if($k00 == 19) {
        document.getElementById($card_field).src="./Cards/40.png";
    }
    if($k00 == 20) {
        document.getElementById($card_field).src="./Cards/41.png";
    }
    if($k00 == 21) {
        document.getElementById($card_field).src="./Cards/42.png";
    }
    if($k00 == 22) {
        document.getElementById($card_field).src="./Cards/43.png";
    }
    if($k00 == 23) {
        document.getElementById($card_field).src="./Cards/44.png";
    }
    if($k00 == 24) {
        document.getElementById($card_field).src="./Cards/45.png";
    }
    if($k00 == 25) {
        document.getElementById($card_field).src="./Cards/08.png";
    }
    if($k00 == 26) {
        document.getElementById($card_field).src="./Cards/09.png";
    }
    if($k00 == 27) {
        document.getElementById($card_field).src="./Cards/10.png";
    }
    if($k00 == 28) {
        document.getElementById($card_field).src="./Cards/11.png";
    }
    if($k00 == 29) {
        document.getElementById($card_field).src="./Cards/12.png";
    }
    if($k00 == 30) {
        document.getElementById($card_field).src="./Cards/13.png";
    }
    if($k00 == 31) {
        document.getElementById($card_field).src="./Cards/21.png";
    }
    if($k00 == 32) {
        document.getElementById($card_field).src="./Cards/22.png";
    }
    if($k00 == 33) {
        document.getElementById($card_field).src="./Cards/23.png";
    }
    if($k00 == 34) {
        document.getElementById($card_field).src="./Cards/24.png";
    }
    if($k00 == 35) {
        document.getElementById($card_field).src="./Cards/25.png";
    }
    if($k00 == 36) {
        document.getElementById($card_field).src="./Cards/26.png";
    }
    if($k00 == 37) {
        document.getElementById($card_field).src="./Cards/34.png";
    }
    if($k00 == 38) {
        document.getElementById($card_field).src="./Cards/35.png";
    }
    if($k00 == 39) {
        document.getElementById($card_field).src="./Cards/36.png";
    }
    if($k00 == 40) {
        document.getElementById($card_field).src="./Cards/37.png";
    }
    if($k00 == 41) {
        document.getElementById($card_field).src="./Cards/38.png";
    }
    if($k00 == 42) {
        document.getElementById($card_field).src="./Cards/39.png";
    }
    if($k00 == 43) {
        document.getElementById($card_field).src="./Cards/47.png";
    }
    if($k00 == 44) {
        document.getElementById($card_field).src="./Cards/48.png";
    }
    if($k00 == 45) {
        document.getElementById($card_field).src="./Cards/49.png";
    }
    if($k00 == 46) {
        document.getElementById($card_field).src="./Cards/50.png";
    }
    if($k00 == 47) {
        document.getElementById($card_field).src="./Cards/51.png";
    }
    if($k00 == 48) {
        document.getElementById($card_field).src="./Cards/52.png";
    }
}