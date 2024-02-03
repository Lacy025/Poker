if($deal == 0) {
    
    let advertisement;
    let no_advertisement;
    let message_left_1;
    let message_right_1;
    let message_left_2;
    let message_right_2;
    let joker_1;
    let joker_2;
    let joker_3;
    let joker_4;
    let joker_5;
    let main_screen;

    if($c > 0 && $u > $c) {
        $u = $c;
        Bet_value();
        Win_value();
    }
    if($c == 0) {
        $u = 1;
    }

    clearInterval($no_win);

    window.addEventListener("keydown", Choose);

    if($was_win == 1) {
        window.removeEventListener("keydown", Choose);
        window.addEventListener("keydown", Choose);
        main_screen = setInterval(Main_screen,3000);

    }
    if($was_win == 0 && $game == 1) {
        
        main_screen = setInterval(Main_screen,1000);
    }
    if($game == 0) {
        intro();
        window.addEventListener("keydown", Choose);
        Advertisement();
        Win_value();
        $Credit_Value();
        Bet_value();
        no_advertisement = setInterval(No_advertisement, 6000);
        advertisement = setInterval(Advertisement, 12000);
    }
    if($deal == 0 && $c == 0) {
        right.style.visibility = "hidden";
        message_1.style.visibility = "hidden";
        message_2.style.visibility = "hidden";
        message_3.style.visibility = "hidden";
        message_4.style.visibility = "hidden";
        $message_5.style.visibility = "hidden";
        message_right_1 = setInterval(Message_right_1, 500);
        message_left_1 = setInterval(Message_left_1, 1000);
    }
    else {
        left.style.visibility = "hidden";
        right.style.visibility = "hidden";
        if($was_win== 0) {
            message_left_2 = setInterval(Message_left_2,1000);
            message_right_2 = setInterval(Message_right_2,2000);
        }
        
    }
    function Clear_gambling_cards() {
        $field_00.style.visibility = "hidden";
        $field_01.style.visibility = "hidden";
        $field_02.style.visibility = "hidden";
        $field_03.style.visibility = "hidden";
        $field_04.style.visibility = "hidden";
        $field_05.style.visibility = "hidden";
        $field_06.style.visibility = "hidden";
        $field_07.style.visibility = "hidden";
        $field_08.style.visibility = "hidden";
        $field_09.style.visibility = "hidden";
        $field_10.style.visibility = "hidden";
        $field_11.style.visibility = "hidden";
        $field_12.style.visibility = "hidden";
        document.getElementById("$field_00").src="./Cards/53.png";
        document.getElementById("$field_01").src="./Cards/53.png";
        document.getElementById("$field_02").src="./Cards/53.png";
        document.getElementById("$field_03").src="./Cards/53.png";
        document.getElementById("$field_04").src="./Cards/53.png";
        document.getElementById("$field_05").src="./Cards/53.png";
        document.getElementById("$field_06").src="./Cards/53.png";
        document.getElementById("$field_07").src="./Cards/53.png";
        document.getElementById("$field_08").src="./Cards/53.png";
        document.getElementById("$field_09").src="./Cards/53.png";
        document.getElementById("$field_10").src="./Cards/53.png";
        document.getElementById("$field_11").src="./Cards/53.png";
        low_choice.style.visibility = "hidden";
        high_choice.style.visibility = "hidden";
    }

    function Main_screen() {
        Clear_gambling_cards();
        Winnings();
        clearInterval(message_left_2);
        clearInterval(message_right_2);
        clearInterval(main_screen);
        Advertisement();
        Win_value();
        $Credit_Value();
        Bet_value();
        no_advertisement = setInterval(No_advertisement, 6000);
        advertisement = setInterval(Advertisement, 12000);
        window.removeEventListener("keydown", Choose);
        window.addEventListener("keydown", Choose);
        if($c > 0) {
            message_left_2 = setInterval(Message_left_2,1000);
            message_right_2 = setInterval(Message_right_2,2000);
        }
    }
    function Winnings() {
        table.style.visibility = "hidden";
        document.getElementById("win_name").style.visibility = "hidden";
        document.getElementById("win_value").style.visibility = "hidden";
        victory.style.visibility = "hidden";
        document.getElementById("win_1").style.visibility = "visible";
        document.getElementById("win_2").style.visibility = "visible";
        document.getElementById("win_3").style.visibility = "visible";
        document.getElementById("win_4").style.visibility = "visible";
        document.getElementById("win_5").style.visibility = "visible";
        document.getElementById("win_6").style.visibility = "visible";
        document.getElementById("win_7").style.visibility = "visible";
        document.getElementById("win_8").style.visibility = "visible";
        document.getElementById("win_9").style.visibility = "visible";
        document.getElementById("win_10").style.visibility = "visible";
        document.getElementById("value_1").style.visibility = "visible";
        document.getElementById("value_2").style.visibility = "visible";
        document.getElementById("value_3").style.visibility = "visible";
        document.getElementById("value_4").style.visibility = "visible";
        document.getElementById("value_5").style.visibility = "visible";
        document.getElementById("value_6").style.visibility = "visible";
        document.getElementById("value_7").style.visibility = "visible";
        document.getElementById("value_8").style.visibility = "visible";
        document.getElementById("value_9").style.visibility = "visible";
        document.getElementById("value_10").style.visibility = "visible";
        $was_win = 0;
    }
    function Values() {
        $d0 = $u * 1100;
        $d1 = $u * 500;
        $d2 = $u * 100;
        $d3 = $u * 40;
        $d4 = $u * 10;
        $d5 = $u * 7;
        $d6 = $u * 5;
        $d7 = $u * 3;
        $d8 = $u * 2;
        $d9 = $u * 1;
    }
    function Win_value() {
        Values();
        document.getElementById("value_1").innerHTML = $d0;
        document.getElementById("value_2").innerHTML = $d1;
        document.getElementById("value_3").innerHTML = $d2;
        document.getElementById("value_4").innerHTML = $d3;
        document.getElementById("value_5").innerHTML = $d4;
        document.getElementById("value_6").innerHTML = $d5;
        document.getElementById("value_7").innerHTML = $d6;
        document.getElementById("value_8").innerHTML = $d7;
        document.getElementById("value_9").innerHTML = $d8;
        document.getElementById("value_10").innerHTML = $d9;
    }
    function $Credit_Value() {
        document.getElementById("credit").innerHTML = $c;
    }
    function Bet_value() {
        document.getElementById("bet").innerHTML = $u;
    }
    function Advertisement() {
        joker.style.visibility = "visible";
        card.style.visibility = "visible";
        $field_1.style.visibility = "hidden";
        $field_2.style.visibility = "hidden";
        $field_3.style.visibility = "hidden";
        $field_4.style.visibility = "hidden";
        $field_5.style.visibility = "hidden";
        clearInterval(joker_1);
        clearInterval(joker_2);
        clearInterval(joker_3);
        clearInterval(joker_4);
        clearInterval(joker_5);
    }
    function No_advertisement() {
        joker.style.visibility = "hidden";
        card.style.visibility = "hidden";
        Back_cards();
        joker_1 = setInterval(joker1, 1000);
        joker_2 = setInterval(joker2, 2000);
        joker_3 = setInterval(joker3, 3000);
        joker_4 = setInterval(joker4, 4000);
        joker_5 = setInterval(joker5, 5000);
    }
    function Message_left_1() {
        let left = document.getElementById("left");
        left.innerHTML = ' ' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LACIKA BAČI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        left.style.visibility = "visible";
        right.style.visibility = "hidden";
    }
    function Message_right_1() {
        let right = document.getElementById("right");
        right.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SERBIA  2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        left.style.visibility = "hidden";
        right.style.visibility = "visible";
    }
    function Message_left_2() {
        let message_1 = document.getElementById("message_1");
        message_1.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CHOOSE BET&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        message_1.style.left = "746px";
        message_1.style.visibility = "visible";
        message_2.style.visibility = "hidden";
    }
    function Message_right_2() {
        let message_2 = document.getElementById("message_2");
        message_2.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRESS DEAL CARDS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        message_2.style.left = "744px";
        message_2.style.visibility = "visible";
        message_1.style.visibility = "hidden";
    }
    function intro() {
        if($c == 0) {
            document.getElementById("audio_intro").play();
            audio_intro.currentTime = 0;
        }
    }
    function Back_cards() {
        document.getElementById("$field_1").src="./Cards/53.png";
        document.getElementById("$field_2").src="./Cards/53.png";
        document.getElementById("$field_3").src="./Cards/53.png";
        document.getElementById("$field_4").src="./Cards/53.png";
        document.getElementById("$field_5").src="./Cards/53.png";
        $field_1.style.visibility = "visible";
        $field_2.style.visibility = "visible";
        $field_3.style.visibility = "visible";
        $field_4.style.visibility = "visible";
        $field_5.style.visibility = "visible";
    }
    function joker1() {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/00.png";
        $field_1.style.visibility = "visible";
        clearInterval(joker_1);
    }
    function joker2() {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Cards/53.png";
        $field_1.style.visibility = "visible";
        $field_2.style.visibility = "hidden";
        document.getElementById("$field_2").src="./Cards/00.png";
        $field_2.style.visibility = "visible";
        clearInterval(joker_2);
    }
    function joker3() {
        $field_2.style.visibility = "hidden";
        document.getElementById("$field_2").src="./Cards/53.png";
        $field_2.style.visibility = "visible";
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/00.png";
        $field_3.style.visibility = "visible";
        clearInterval(joker_3);
    }
    function joker4() {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Cards/53.png";
        $field_3.style.visibility = "visible";
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/00.png";
        $field_4.style.visibility = "visible";
        clearInterval(joker_4);
    }
    function joker5() {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Cards/53.png";
        $field_4.style.visibility = "visible";
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Cards/00.png";
        $field_5.style.visibility = "visible";
        clearInterval(joker_5);
    }
    function Auto_hold() {
        if($c > 0) {
            document.getElementById("audio_auto_hold").play();
            audio_auto_hold.currentTime = 0;
            if($a == 1) {
                $a = 0;
                document.getElementById("auto_hold").style.visibility = "hidden";
            }
            else {
                $a = 1;
                document.getElementById("auto_hold").style.visibility = "visible";
            }
        }
    }
    function Reset() {
        clearInterval($Countdown_1);
        clearInterval(no_advertisement);
        clearInterval(advertisement);
        Advertisement();
        no_advertisement = setInterval(No_advertisement, 6000);
        advertisement = setInterval(Advertisement, 12000);
        window.addEventListener("keydown", Choose);
    }
    function Money() {
        $c = $c - 1;
        document.getElementById("credit").innerHTML = $c;
        $Credit_Value();
        $Audio_count_1();
    
        $Check_1 = setInterval(Check_1,60);
    
        function Check_1() {
            
            if((Math.round($c/100) != $c/100) && $c > 0) {
                $Audio_count_1();
                Minus_1_1();
            }
            else {
                clearInterval($Check_1);
                if($c > 0) {
                    Minus_100_1();
                }
                if($c > 0) {
                    $Minus_100_1 = setInterval(Minus_100_1,1000);
                }
                else {
                    document.getElementById("audio_count_2").play();
                    audio_count_2.currentTime = 0;
                    $Countdown_1 = setInterval(Countdown_1,1000);
                    $Zero_1 = setInterval(Zero_1,1000);
                }
            }
        }
        function Minus_1_1() {
            $c = $c - 1;
            document.getElementById("credit").innerHTML = $c;
            $Credit_Value();
        }
        function Minus_100_1() {
            if($c > 99) {
                $c = $c - 100;
                document.getElementById("credit").innerHTML = $c;
                $Credit_Value();
                $audioCount2();
            }
            else {
                clearInterval($Minus_100_1);
                $Countdown_1 = setInterval(Countdown_1,100);
                $Zero_1 = setInterval(Zero_1,100);
            }
        }
        function Zero_1() {
            clearInterval($Zero_1);
            document.getElementById("audio_intro").play();
            audio_intro.currentTime = 0;
        }
        function Countdown_1() {
            clearInterval($Countdown_1);
            $deal = 0;
            $u = 1;
            $a = 1;
            document.getElementById("auto_hold").style.visibility = "visible";
            Bet_value();
            Win_value();
            clearInterval(joker_1);
            clearInterval(joker_2);
            clearInterval(joker_3);
            clearInterval(joker_4);
            clearInterval(joker_5);
            $Countdown_1 = setInterval(Reset,100);
        }
    }
    function Choose(event) {

        switch(event.keyCode) {

            case 81 :

                if($c == 0) {
                    $was_win = 0;
                    $game = 1;
                    left.style.visibility = "hidden";
                    right.style.visibility = "hidden";
                    clearInterval(message_left_1);
                    clearInterval(message_right_1);
                    message_left_2 = setInterval(Message_left_2,1000);
                    message_right_2 = setInterval(Message_right_2,2000);
                }
                if($c < 4901 && $was_win == 0) {
                    $c = $c + 100;
                    $Credit_Value();
                    document.getElementById("audio_credit").play();
                    audio_credit.currentTime = 0;
                    audio_intro.currentTime = 5;
                    break;
                }
                else {
                    break;
                }

            case 53 :

                if($c > 0 && $was_win == 0) {
                    $u += 1;
                if($u == 99) {
                    $u = 1;
                }
                if($u > $c) {
                    $u = 1;
                }
                Bet_value();
                Win_value();
                document.getElementById("audio_bet").play();
                audio_bet.currentTime = 0;
                }
                break;

            case 32 :

                if($was_win == 0) {
                    Auto_hold();
                }
                break;

            case 13 :

                if($c > 0) {
                    Clear_gambling_cards();
                    Winnings();
                    $money = 0;
                    victory.style.visibility = "hidden";
                    clearInterval(main_screen);
                    audio_intro.currentTime = 5;
                    $c = $c - $u;
                    $Credit_Value();
                    document.getElementById("audio_deal_1").play();
                    audio_deal_1.currentTime = 0;
                    clearInterval(message_left_2);
                    clearInterval(message_right_2);
                    clearInterval(advertisement);
                    clearInterval(no_advertisement);
                    clearInterval(joker_1);
                    clearInterval(joker_2);
                    clearInterval(joker_3);
                    clearInterval(joker_4);
                    clearInterval(joker_5);
                    message_1.style.visibility = "hidden";
                    message_2.style.visibility = "hidden";
                    joker.style.visibility = "hidden";
                    card.style.visibility = "hidden";
                    $field_1.style.visibility = "hidden";
                    $field_2.style.visibility = "hidden";
                    $field_3.style.visibility = "hidden";
                    $field_4.style.visibility = "hidden";
                    $field_5.style.visibility = "hidden";
                    Back_cards();
                    window.removeEventListener("keydown", Choose);
                    $deal = 1;
                    break;
                    }
                else {
                    Clear_gambling_cards();
                    break;
                }

            case 35 : 

                if($c > 0 && $was_win == 0) {

                    window.removeEventListener("keydown", Choose);

                    $money = 1;
                    clearInterval(message_left_2);
                    clearInterval(message_right_2);
                    message_1.style.visibility = "hidden";
                    message_2.style.visibility = "hidden";
                    left.style.visibility = "visible";
                    message_right_1 = setInterval(Message_right_1, 500);
                    message_left_1 = setInterval(Message_left_1, 1000);
                    Money();
                    break;
                }
                else {
                    break;
                }
                
        }   
    }
}