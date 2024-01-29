if($deal == 0) {
    
    let timerImaReklame;
    let timerNemaReklame;
    let timerLevo;
    let timerDesno;
    let timerPoruka1;
    let timerPoruka2;
    let timerJoker1;
    let timerJoker2;
    let timerJoker3;
    let timerJoker4;
    let timerJoker5;
    let timerPrviekran;

    if($c > 0 && $u > $c) {
        $u = $c;
        vrednostUloga();
        vrednostDobitka();
    }
    if($c == 0) {
        $u = 1;
    }

    clearInterval($no_win);

    window.addEventListener("keydown", pocetak);

    if($was_win == 1) {
        window.removeEventListener("keydown", pocetak);
        window.addEventListener("keydown", pocetak);
        timerPrviekran = setInterval(Prviekran,3000);

    }
    if($was_win == 0 && $game == 1) {
        
        timerPrviekran = setInterval(Prviekran,1000);
    }
    if($game == 0) {
        intro();
        window.addEventListener("keydown", pocetak);
        imaReklame();
        vrednostDobitka();
        $Credit_Value();
        vrednostUloga();
        timerNemaReklame = setInterval(nemaReklame, 6000);
        timerImaReklame = setInterval(imaReklame, 12000);
    }
    if($deal == 0 && $c == 0) {
        desno.style.visibility = "hidden";
        poruka1.style.visibility = "hidden";
        poruka2.style.visibility = "hidden";
        message_3.style.visibility = "hidden";
        message_4.style.visibility = "hidden";
        $message_5.style.visibility = "hidden";
        timerDesno = setInterval(desnoDole, 500);
        timerLevo = setInterval(levoDole, 1000);
    }
    else {
        levo.style.visibility = "hidden";
        desno.style.visibility = "hidden";
        if($was_win== 0) {
            timerPoruka1 = setInterval(Poruka1,1000);
            timerPoruka2 = setInterval(Poruka2,2000);
        }
        
    }
    function Brisanje1_12() {
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
        document.getElementById("$field_00").src="./Karte/53.png";
        document.getElementById("$field_01").src="./Karte/53.png";
        document.getElementById("$field_02").src="./Karte/53.png";
        document.getElementById("$field_03").src="./Karte/53.png";
        document.getElementById("$field_04").src="./Karte/53.png";
        document.getElementById("$field_05").src="./Karte/53.png";
        document.getElementById("$field_06").src="./Karte/53.png";
        document.getElementById("$field_07").src="./Karte/53.png";
        document.getElementById("$field_08").src="./Karte/53.png";
        document.getElementById("$field_09").src="./Karte/53.png";
        document.getElementById("$field_10").src="./Karte/53.png";
        document.getElementById("$field_11").src="./Karte/53.png";
        low_choice.style.visibility = "hidden";
        high_choice.style.visibility = "hidden";
    }

    function Prviekran() {
        Brisanje1_12();
        Ispis();
        clearInterval(timerPoruka1);
        clearInterval(timerPoruka2);
        clearInterval(timerPrviekran);
        imaReklame();
        vrednostDobitka();
        $Credit_Value();
        vrednostUloga();
        timerNemaReklame = setInterval(nemaReklame, 6000);
        timerImaReklame = setInterval(imaReklame, 12000);
        window.removeEventListener("keydown", pocetak);
        window.addEventListener("keydown", pocetak);
        if($c > 0) {
            timerPoruka1 = setInterval(Poruka1,1000);
            timerPoruka2 = setInterval(Poruka2,2000);
        }
    }
    function Ispis() {
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
    function Dobici() {
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
    function vrednostDobitka() {
        Dobici();
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
    function vrednostUloga() {
        document.getElementById("bet").innerHTML = $u;
    }
    function imaReklame() {
        reklama1.style.visibility = "visible";
        reklama2.style.visibility = "visible";
        $field_1.style.visibility = "hidden";
        $field_2.style.visibility = "hidden";
        $field_3.style.visibility = "hidden";
        $field_4.style.visibility = "hidden";
        $field_5.style.visibility = "hidden";
        clearInterval(timerJoker1);
        clearInterval(timerJoker2);
        clearInterval(timerJoker3);
        clearInterval(timerJoker4);
        clearInterval(timerJoker5);
    }
    function nemaReklame() {
        reklama1.style.visibility = "hidden";
        reklama2.style.visibility = "hidden";
        prazneKarte();
        timerJoker1 = setInterval(joker1, 1000);
        timerJoker2 = setInterval(joker2, 2000);
        timerJoker3 = setInterval(joker3, 3000);
        timerJoker4 = setInterval(joker4, 4000);
        timerJoker5 = setInterval(joker5, 5000);
    }
    function levoDole() {
        let levo = document.getElementById("levo");
        levo.innerHTML = ' ' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LACIKA BAČI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        levo.style.visibility = "visible";
        desno.style.visibility = "hidden";
    }
    function desnoDole() {
        let desno = document.getElementById("desno");
        desno.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SERBIA  2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        levo.style.visibility = "hidden";
        desno.style.visibility = "visible";
    }
    function Poruka1() {
        let poruka1 = document.getElementById("poruka1");
        poruka1.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CHOOSE BET&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        poruka1.style.left = "746px";
        poruka1.style.visibility = "visible";
        poruka2.style.visibility = "hidden";
    }
    function Poruka2() {
        let poruka2 = document.getElementById("poruka2");
        poruka2.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRESS DEAL CARDS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        poruka2.style.left = "744px";
        poruka2.style.visibility = "visible";
        poruka1.style.visibility = "hidden";
    }
    function intro() {
        if($c == 0) {
            document.getElementById("audioIntro").play();
            audioIntro.currentTime = 0;
        }
    }
    function prazneKarte() {
        document.getElementById("$field_1").src="./Karte/53.png";
        document.getElementById("$field_2").src="./Karte/53.png";
        document.getElementById("$field_3").src="./Karte/53.png";
        document.getElementById("$field_4").src="./Karte/53.png";
        document.getElementById("$field_5").src="./Karte/53.png";
        $field_1.style.visibility = "visible";
        $field_2.style.visibility = "visible";
        $field_3.style.visibility = "visible";
        $field_4.style.visibility = "visible";
        $field_5.style.visibility = "visible";
    }
    function joker1() {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Karte/00.png";
        $field_1.style.visibility = "visible";
        clearInterval(timerJoker1);
    }
    function joker2() {
        $field_1.style.visibility = "hidden";
        document.getElementById("$field_1").src="./Karte/53.png";
        $field_1.style.visibility = "visible";
        $field_2.style.visibility = "hidden";
        document.getElementById("$field_2").src="./Karte/00.png";
        $field_2.style.visibility = "visible";
        clearInterval(timerJoker2);
    }
    function joker3() {
        $field_2.style.visibility = "hidden";
        document.getElementById("$field_2").src="./Karte/53.png";
        $field_2.style.visibility = "visible";
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Karte/00.png";
        $field_3.style.visibility = "visible";
        clearInterval(timerJoker3);
    }
    function joker4() {
        $field_3.style.visibility = "hidden";
        document.getElementById("$field_3").src="./Karte/53.png";
        $field_3.style.visibility = "visible";
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Karte/00.png";
        $field_4.style.visibility = "visible";
        clearInterval(timerJoker4);
    }
    function joker5() {
        $field_4.style.visibility = "hidden";
        document.getElementById("$field_4").src="./Karte/53.png";
        $field_4.style.visibility = "visible";
        $field_5.style.visibility = "hidden";
        document.getElementById("$field_5").src="./Karte/00.png";
        $field_5.style.visibility = "visible";
        clearInterval(timerJoker5);
    }
    function autohold() {
        if($c > 0) {
            document.getElementById("audioAutohold").play();
            audioAutohold.currentTime = 0;
            if($a == 1) {
                $a = 0;
                document.getElementById("autohold").style.visibility = "hidden";
            }
            else {
                $a = 1;
                document.getElementById("autohold").style.visibility = "visible";
            }
        }
    }
    function Reset() {
        clearInterval($Countdown_1);
        clearInterval(timerNemaReklame);
        clearInterval(timerImaReklame);
        imaReklame();
        timerNemaReklame = setInterval(nemaReklame, 6000);
        timerImaReklame = setInterval(imaReklame, 12000);
        window.addEventListener("keydown", pocetak);
    }
    function Money() {
        $c = $c - 1;
        document.getElementById("credit").innerHTML = $c;
        $Credit_Value();
        $audioCount1();
    
        $Check_1 = setInterval(Check_1,60);
    
        function Check_1() {
            
            if((Math.round($c/100) != $c/100) && $c > 0) {
                $audioCount1();
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
                    document.getElementById("audioCount2").play();
                    audioCount2.currentTime = 0;
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
            document.getElementById("audioIntro").play();
            audioIntro.currentTime = 0;
        }
        function Countdown_1() {
            clearInterval($Countdown_1);
            $deal = 0;
            $u = 1;
            $a = 1;
            document.getElementById("autohold").style.visibility = "visible";
            vrednostUloga();
            vrednostDobitka();
            clearInterval(timerJoker1);
            clearInterval(timerJoker2);
            clearInterval(timerJoker3);
            clearInterval(timerJoker4);
            clearInterval(timerJoker5);
            $Countdown_1 = setInterval(Reset,100);
        }
    }
    function pocetak(event) {

        switch(event.keyCode) {

            case 81 :

                if($c == 0) {
                    $was_win = 0;
                    $game = 1;
                    levo.style.visibility = "hidden";
                    desno.style.visibility = "hidden";
                    clearInterval(timerLevo);
                    clearInterval(timerDesno);
                    timerPoruka1 = setInterval(Poruka1,1000);
                    timerPoruka2 = setInterval(Poruka2,2000);
                }
                if($c < 4901 && $was_win == 0) {
                    $c = $c + 100;
                    $Credit_Value();
                    document.getElementById("audioKredit").play();
                    audioKredit.currentTime = 0;
                    audioIntro.currentTime = 5;
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
                vrednostUloga();
                vrednostDobitka();
                document.getElementById("audioUlog").play();
                audioUlog.currentTime = 0;
                }
                break;

            case 32 :

                if($was_win == 0) {
                    autohold();
                }
                break;

            case 13 :

                if($c > 0) {
                    Brisanje1_12();
                    Ispis();
                    $money = 0;
                    victory.style.visibility = "hidden";
                    clearInterval(timerPrviekran);
                    audioIntro.currentTime = 5;
                    $c = $c - $u;
                    $Credit_Value();
                    document.getElementById("audioDeljenje1").play();
                    audioDeljenje1.currentTime = 0;
                    clearInterval(timerPoruka1);
                    clearInterval(timerPoruka2);
                    clearInterval(timerImaReklame);
                    clearInterval(timerNemaReklame);
                    clearInterval(timerJoker1);
                    clearInterval(timerJoker2);
                    clearInterval(timerJoker3);
                    clearInterval(timerJoker4);
                    clearInterval(timerJoker5);
                    poruka1.style.visibility = "hidden";
                    poruka2.style.visibility = "hidden";
                    reklama1.style.visibility = "hidden";
                    reklama2.style.visibility = "hidden";
                    $field_1.style.visibility = "hidden";
                    $field_2.style.visibility = "hidden";
                    $field_3.style.visibility = "hidden";
                    $field_4.style.visibility = "hidden";
                    $field_5.style.visibility = "hidden";
                    reklama1.style.visibility = "hidden";
                    reklama2.style.visibility = "hidden";
                    prazneKarte();
                    window.removeEventListener("keydown", pocetak);
                    $deal = 1;
                    break;
                    }
                else {
                    Brisanje1_12();
                    break;
                }

            case 35 : 

                if($c > 0 && $was_win == 0) {

                    window.removeEventListener("keydown", pocetak);

                    $money = 1;
                    clearInterval(timerPoruka1);
                    clearInterval(timerPoruka2);
                    poruka1.style.visibility = "hidden";
                    poruka2.style.visibility = "hidden";
                    levo.style.visibility = "visible";
                    timerDesno = setInterval(desnoDole, 500);
                    timerLevo = setInterval(levoDole, 1000);
                    Money();
                    break;
                }
                else {
                    break;
                }
                
        }   
    }
}