$waiting_7 = setInterval(Cekanje7, 100);

function Cekanje7() {

    console.log($deal);

    if($deal == 8) {
        
        clearInterval($waiting_7);
        $stop = 1;
        console.log($hold1);
        console.log($hold2);
        console.log($hold3);
        console.log($hold4);
        console.log($hold5);

        if($hold1==1&&$a==1) {
            $Stop1();
            $stop+=250;
        }
        if($hold2==1&&$a==1) {
            $timerStop2 = setInterval($Stop2,$stop);
            $stop+=250;
        }
        if($hold3==1&&$a==1) {
            $timerStop3 = setInterval($Stop3,$stop);
            $stop+=250;
        }
        if($hold4==1&&$a==1) {
            $timerStop4 = setInterval($Stop4,$stop);
            $stop+=250;
        }
        if($hold5==1&&$a==1) {
            $timerStop5 = setInterval($Stop5,$stop);
            $stop+=50;
        }
        $message_5.style.visibility = "visible";
        console.log($deal);
        $choice_1 = setInterval(Izbor1,($stop+200));
    }
}
function $Stop1() {
    stop1.style.visibility = "visible";
    $hold1 = 1;
    document.getElementById("audioStop").play();
    audioStop.currentTime = 0;
    clearInterval($timerStop1);
}
function $Stop2() {
    stop2.style.visibility = "visible";
    $hold2 = 1;
    document.getElementById("audioStop").play();
    audioStop.currentTime = 0;
    clearInterval($timerStop2);
}
function $Stop3() {
    stop3.style.visibility = "visible";
    $hold3 = 1;
    document.getElementById("audioStop").play();
    audioStop.currentTime = 0;
    clearInterval($timerStop3);
}
function $Stop4() {
    stop4.style.visibility = "visible";
    $hold4 = 1;
    document.getElementById("audioStop").play();
    audioStop.currentTime = 0;
    clearInterval($timerStop4);
}
function $Stop5() {
    stop5.style.visibility = "visible";
    $hold5 = 1;
    document.getElementById("audioStop").play();
    audioStop.currentTime = 0;
    clearInterval($timerStop5);
}
function Ponistavanje() {
    $stop1.style.visibility = "hidden";
    $stop2.style.visibility = "hidden";
    $stop3.style.visibility = "hidden";
    $stop4.style.visibility = "hidden";
    $stop5.style.visibility = "hidden";
    $hold1 = 0;
    $hold2 = 0;
    $hold3 = 0;
    $hold4 = 0;
    $hold5 = 0;
    document.getElementById("audioPonistavanje").play();
    audioPonistavanje.currentTime = 0;
}
function Izbor1() {
    clearInterval($choice_1);
    window.addEventListener("keydown", IzborKarata);
    $timerPoruka3 = setInterval(Poruka3, 1000);
    $timerPoruka4 = setInterval(Poruka4, 2000);
    $timerPoruka5 = setInterval(Poruka5, 3000);

    function Poruka3() {
        $message_3.style.visibility = "visible";
        $message_4.style.visibility = "hidden";
        $message_5.style.visibility = "hidden";
    }
    function Poruka4() {
        $message_4.style.visibility = "visible";
        $message_3.style.visibility = "hidden";
        $message_5.style.visibility = "hidden";
    }
    function Poruka5() {
        $message_5.style.visibility = "visible";
        $message_3.style.visibility = "hidden";
        $message_4.style.visibility = "hidden";
        clearInterval($timerPoruka3);
        clearInterval($timerPoruka4);
        clearInterval($timerPoruka5);
        $timerPoruka3 = setInterval(Poruka3, 1000);
        $timerPoruka4 = setInterval(Poruka4, 2000);
        $timerPoruka5 = setInterval(Poruka5, 3000);
    }
}
function IzborKarata(event) {
    switch(event.keyCode) {
        case 49 :
            $Stop1();
            break;
        case 50 :
            $Stop2();
            break;
        case 51 :
            $Stop3();
            break;
        case 52 :
            $Stop4();
            break;
        case 53 :
            $Stop5();
            break;
        case 32 :
            Ponistavanje();
            break;
        case 13 :
            $hand.style.visibility = "hidden";
            window.removeEventListener("keydown", IzborKarata);
            document.getElementById("audioDeljenje2").play();
            audioDeljenje1.currentTime = 0;
            $message_3.style.visibility = "hidden";
            $message_4.style.visibility = "hidden";
            $message_5.style.visibility = "hidden";
            clearInterval($timerPoruka3);
            clearInterval($timerPoruka4);
            clearInterval($timerPoruka5);
            $stop1.style.visibility = "hidden";
            $stop2.style.visibility = "hidden";
            $stop3.style.visibility = "hidden";
            $stop4.style.visibility = "hidden";
            $stop5.style.visibility = "hidden";

            if($hold1 == 0) {
                document.getElementById("$field_1").src="./Karte/53.png";
                $field_1.style.visibility = "visible";
            }
            if($hold2 == 0) {
                document.getElementById("$field_2").src="./Karte/53.png";
                $field_2.style.visibility = "visible";
            }
            if($hold3 == 0) {
                document.getElementById("$field_3").src="./Karte/53.png";
                $field_3.style.visibility = "visible";
            }
            if($hold4 == 0) {
                document.getElementById("$field_4").src="./Karte/53.png";
                $field_4.style.visibility = "visible";
            }
            if($hold5 == 0) {
                document.getElementById("$field_5").src="./Karte/53.png";
                $field_5.style.visibility = "visible";
            }
            function Audio_Card_1() {
                document.getElementById("audioKarta1").play();
                audioKarta1.currentTime = 0;
            }
            function Audio_Card_2() {
                document.getElementById("audioKarta2").play();
                audioKarta2.currentTime = 0;
            }
            function Audio_Card_3() {
                document.getElementById("audioKarta3").play();
                audioKarta3.currentTime = 0;
            }
            function Audio_Card_4() {
                document.getElementById("audioKarta4").play();
                audioKarta4.currentTime = 0;
            }
            function Audio_Card_5() {
                document.getElementById("audioKarta5").play();
                audioKarta5.currentTime = 0;
            }
            function Pauza1() {
                console.log($deal);
                clearInterval(timerPauza1);
                $deal = 9;
            }
            $stop = 0;

            if($hold1 == 0) {
                $k1 = Math.floor(Math.random() * 53);
                while($k1==$k2||$k1==$k3||$k1==$k4||$k1==$k5) {
                    $k1 = Math.floor(Math.random() * 53);
                }
                $stop += 300;
                $Audio_Card_1 = setInterval(Audio_Card_1,$stop);
                $card_1 = setInterval($Karta1,$stop);
            }
            if($hold2 == 0) {
                $k2 = Math.floor(Math.random() * 53);
                while($k2==$k1||$k2==$k3||$k2==$k4||$k2==$k5) {
                    $k2 = Math.floor(Math.random() * 53);
                }
                $stop += 300;
                $Audio_Card_2 = setInterval(Audio_Card_2,$stop);
                $card_2 = setInterval($Karta2,$stop);
            }
            if($hold3 == 0) {
                $k3 = Math.floor(Math.random() * 53);
                while($k3==$k1||$k3==$k2||$k3==$k4||$k3==$k5) {
                    $k3 = Math.floor(Math.random() * 53);
                }
                $stop += 300;
                $Audio_Card_3 = setInterval(Audio_Card_3,$stop);
                $card_3 = setInterval($Karta3,$stop);
            }
            if($hold4 == 0) {
                $k4 = Math.floor(Math.random() * 53);
                while($k4==$k1||$k4==$k2||$k4==$k3||$k4==$k5) {
                    $k4 = Math.floor(Math.random() * 53);
                }
                $stop += 300;
                $Audio_Card_4 = setInterval(Audio_Card_4,$stop);
                $card_4 = setInterval($Karta4,$stop);
            }
            if($hold5 == 0) {
                $k5 = Math.floor(Math.random() * 53);
                while($k5==$k1||$k5==$k2||$k5==$k3||$k5==$k4) {
                    $k5 = Math.floor(Math.random() * 53);
                }
                $stop += 300;
                $Audio_Card_5 = setInterval(Audio_Card_5,$stop);
                $card_5 = setInterval($Karta5,$stop);
            }
            timerPauza1 = setInterval(Pauza1,$stop);
    
    }   
}
