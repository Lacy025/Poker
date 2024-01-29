$waiting_7 = setInterval(Wait_7, 100);

function Wait_7() {

    console.log($deal);

    if($deal == 8) {
        
        clearInterval($waiting_7);
        $stop = 1;
        console.log($hold1);
        console.log($hold2);
        console.log($hold3);
        console.log($hold4);
        console.log($hold5);

        if($hold1 == 1 && $a == 1) {
            $Stop1();
            $stop += 250;
        }
        if($hold2 == 1 && $a == 1) {
            $timerStop2 = setInterval($Stop2,$stop);
            $stop += 250;
        }
        if($hold3 == 1&&$a == 1) {
            $timerStop3 = setInterval($Stop3,$stop);
            $stop += 250;
        }
        if($hold4 == 1 && $a == 1) {
            $timerStop4 = setInterval($Stop4,$stop);
            $stop += 250;
        }
        if($hold5 == 1 && $a == 1) {
            $timerStop5 = setInterval($Stop5,$stop);
            $stop += 50;
        }
        $message_5.style.visibility = "visible";
        console.log($deal);
        $choice_1 = setInterval(Choice_1,($stop+200));
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
function Clear_hold() {
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
    document.getElementById("audio_clear").play();
    audio_clear.currentTime = 0;
}
function Choice_1() {
    clearInterval($choice_1);
    window.addEventListener("keydown", Card_choice);
    message_3 = setInterval(Message_3, 1000);
    message_4 = setInterval(Message_4, 2000);
    message_5 = setInterval(Message_5, 3000);

    function Message_3() {
        $message_3.style.visibility = "visible";
        $message_4.style.visibility = "hidden";
        $message_5.style.visibility = "hidden";
    }
    function Message_4() {
        $message_4.style.visibility = "visible";
        $message_3.style.visibility = "hidden";
        $message_5.style.visibility = "hidden";
    }
    function Message_5() {
        $message_5.style.visibility = "visible";
        $message_3.style.visibility = "hidden";
        $message_4.style.visibility = "hidden";
        clearInterval(message_3);
        clearInterval(message_4);
        clearInterval(message_5);
        message_3 = setInterval(Message_3, 1000);
        message_4 = setInterval(Message_4, 2000);
        message_5 = setInterval(Message_5, 3000);
    }
}
function Card_choice(event) {
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
            Clear_hold();
            break;
        case 13 :
            $hand.style.visibility = "hidden";
            window.removeEventListener("keydown", Card_choice);
            document.getElementById("audio_deal_2").play();
            audio_deal_1.currentTime = 0;
            $message_3.style.visibility = "hidden";
            $message_4.style.visibility = "hidden";
            $message_5.style.visibility = "hidden";
            clearInterval(message_3);
            clearInterval(message_4);
            clearInterval(message_5);
            $stop1.style.visibility = "hidden";
            $stop2.style.visibility = "hidden";
            $stop3.style.visibility = "hidden";
            $stop4.style.visibility = "hidden";
            $stop5.style.visibility = "hidden";

            if($hold1 == 0) {
                document.getElementById("$field_1").src="./Cards/53.png";
                $field_1.style.visibility = "visible";
            }
            if($hold2 == 0) {
                document.getElementById("$field_2").src="./Cards/53.png";
                $field_2.style.visibility = "visible";
            }
            if($hold3 == 0) {
                document.getElementById("$field_3").src="./Cards/53.png";
                $field_3.style.visibility = "visible";
            }
            if($hold4 == 0) {
                document.getElementById("$field_4").src="./Cards/53.png";
                $field_4.style.visibility = "visible";
            }
            if($hold5 == 0) {
                document.getElementById("$field_5").src="./Cards/53.png";
                $field_5.style.visibility = "visible";
            }
            function Audio_Card_1() {
                document.getElementById("audio_card_1").play();
                audio_card_1.currentTime = 0;
            }
            function Audio_Card_2() {
                document.getElementById("audio_card_2").play();
                audio_card_2.currentTime = 0;
            }
            function Audio_Card_3() {
                document.getElementById("audio_card_3").play();
                audio_card_3.currentTime = 0;
            }
            function Audio_Card_4() {
                document.getElementById("audio_card_4").play();
                audio_card_4.currentTime = 0;
            }
            function Audio_Card_5() {
                document.getElementById("audio_card_5").play();
                audio_card_5.currentTime = 0;
            }
            function Between_1() {
                console.log($deal);
                clearInterval(between_1);
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
                $card_1 = setInterval($Card_1,$stop);
            }
            if($hold2 == 0) {
                $k2 = Math.floor(Math.random() * 53);
                while($k2==$k1||$k2==$k3||$k2==$k4||$k2==$k5) {
                    $k2 = Math.floor(Math.random() * 53);
                }
                $stop += 300;
                $Audio_Card_2 = setInterval(Audio_Card_2,$stop);
                $card_2 = setInterval($Card_2,$stop);
            }
            if($hold3 == 0) {
                $k3 = Math.floor(Math.random() * 53);
                while($k3==$k1||$k3==$k2||$k3==$k4||$k3==$k5) {
                    $k3 = Math.floor(Math.random() * 53);
                }
                $stop += 300;
                $Audio_Card_3 = setInterval(Audio_Card_3,$stop);
                $card_3 = setInterval($Card_3,$stop);
            }
            if($hold4 == 0) {
                $k4 = Math.floor(Math.random() * 53);
                while($k4==$k1||$k4==$k2||$k4==$k3||$k4==$k5) {
                    $k4 = Math.floor(Math.random() * 53);
                }
                $stop += 300;
                $Audio_Card_4 = setInterval(Audio_Card_4,$stop);
                $card_4 = setInterval($Card_4,$stop);
            }
            if($hold5 == 0) {
                $k5 = Math.floor(Math.random() * 53);
                while($k5==$k1||$k5==$k2||$k5==$k3||$k5==$k4) {
                    $k5 = Math.floor(Math.random() * 53);
                }
                $stop += 300;
                $Audio_Card_5 = setInterval(Audio_Card_5,$stop);
                $card_5 = setInterval($Card_5,$stop);
            }
            between_1 = setInterval(Between_1,$stop);
    
    }   
}
