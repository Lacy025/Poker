if($deljenje==0) {

    let timerImaReklame;
    let timerNemaReklame;
    let timerLevo;
    let timerDesno;
    let timerJoker1;
    let timerJoker2;
    let timerJoker3;
    let timerJoker4;
    let timerJoker5;

    intro();

    vrednostDobitka();
    vrednostKredita();
    vrednostUloga();

    prazna1.style.visibility = "hidden";
    prazna2.style.visibility = "hidden";
    prazna3.style.visibility = "hidden";
    prazna4.style.visibility = "hidden";
    prazna5.style.visibility = "hidden";

    imaReklame();
    timerNemaReklame = setInterval(nemaReklame, 6000);
    timerImaReklame = setInterval(imaReklame, 12000);

    if($deljenje==0) {
        desno.style.visibility = "hidden";
        timerDesno = setInterval(desnoDole, 700);
        timerLevo = setInterval(levoDole, 1400);
    }
    else {
        levo.style.visibility = "hidden";
        desno.style.visibility = "hidden";
    }

    window.addEventListener("keydown", pocetak);

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
        document.getElementById("dobit0").innerHTML = $d0;
        document.getElementById("dobit1").innerHTML = $d1;
        document.getElementById("dobit2").innerHTML = $d2;
        document.getElementById("dobit3").innerHTML = $d3;
        document.getElementById("dobit4").innerHTML = $d4;
        document.getElementById("dobit5").innerHTML = $d5;
        document.getElementById("dobit6").innerHTML = $d6;
        document.getElementById("dobit7").innerHTML = $d7;
        document.getElementById("dobit8").innerHTML = $d8;
        document.getElementById("dobit9").innerHTML = $d9;
    }
    function vrednostKredita() {
        document.getElementById("credit").innerHTML = $c;
    }
    function vrednostUloga() {
        document.getElementById("bet").innerHTML = $u;
    }
    function imaReklame() {
        reklama1.style.visibility = "visible";
        reklama2.style.visibility = "visible";
        prazna1.style.visibility = "hidden";
        prazna2.style.visibility = "hidden";
        prazna3.style.visibility = "hidden";
        prazna4.style.visibility = "hidden";
        prazna5.style.visibility = "hidden";
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
        if($c==0) {
            var levo = document.getElementById("levo");
            levo.innerHTML = ' ' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LACIKA BAČI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            levo.style.visibility = "visible";
            desno.style.visibility = "hidden";
        }
        else {
            var levo = document.getElementById("levo");
            levo.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BIRAJTE  ULOG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            levo.style.left = "734px";
            levo.style.visibility = "visible";
            desno.style.visibility = "hidden";
        }
    }
    function desnoDole() {
        if($c==0) {
            var desno = document.getElementById("desno");
            desno.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SRBIJA  2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            levo.style.visibility = "hidden";
            desno.style.visibility = "visible";
        }
        else {
            var desno = document.getElementById("desno");
            desno.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRITISNITE  DELJENJE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            desno.style.left = "735px";
            desno.style.visibility = "visible";
            levo.style.visibility = "hidden";
        }
    }
    function intro() {
        if($c==0) {
            document.getElementById("audioIntro").play();
            audioIntro.currentTime = 0;
        }
        
    }
    function prazneKarte() {
        document.getElementById("prazna1").src="/Karte/53.png";
        document.getElementById("prazna2").src="/Karte/53.png";
        document.getElementById("prazna3").src="/Karte/53.png";
        document.getElementById("prazna4").src="/Karte/53.png";
        document.getElementById("prazna5").src="/Karte/53.png";
        prazna1.style.visibility = "visible";
        prazna2.style.visibility = "visible";
        prazna3.style.visibility = "visible";
        prazna4.style.visibility = "visible";
        prazna5.style.visibility = "visible";
    }
    function joker1() {
        prazna1.style.visibility = "hidden";
        document.getElementById("prazna1").src="/Karte/0.png";
        prazna1.style.visibility = "visible";
        clearInterval(timerJoker1);
    }
    function joker2() {
        prazna1.style.visibility = "hidden";
        document.getElementById("prazna1").src="/Karte/53.png";
        prazna1.style.visibility = "visible";
        prazna2.style.visibility = "hidden";
        document.getElementById("prazna2").src="/Karte/0.png";
        prazna2.style.visibility = "visible";
        clearInterval(timerJoker2);
    }
    function joker3() {
        prazna2.style.visibility = "hidden";
        document.getElementById("prazna2").src="/Karte/53.png";
        prazna2.style.visibility = "visible";
        prazna3.style.visibility = "hidden";
        document.getElementById("prazna3").src="/Karte/0.png";
        prazna3.style.visibility = "visible";
        clearInterval(timerJoker3);
    }
    function joker4() {
        prazna3.style.visibility = "hidden";
        document.getElementById("prazna3").src="/Karte/53.png";
        prazna3.style.visibility = "visible";
        prazna4.style.visibility = "hidden";
        document.getElementById("prazna4").src="/Karte/0.png";
        prazna4.style.visibility = "visible";
        clearInterval(timerJoker4);
    }
    function joker5() {
        prazna4.style.visibility = "hidden";
        document.getElementById("prazna4").src="/Karte/53.png";
        prazna4.style.visibility = "visible";
        prazna5.style.visibility = "hidden";
        document.getElementById("prazna5").src="/Karte/0.png";
        prazna5.style.visibility = "visible";
        clearInterval(timerJoker5);
    }
    function autohold() {
        if($c>0) {
            document.getElementById("audioAutohold").play();
            audioAutohold.currentTime = 0;
            if($a==1) {
                $a = 0;
                document.getElementById("autohold").style.visibility = "hidden";
            }
            else {
                $a = 1;
                document.getElementById("autohold").style.visibility = "visible";
            }
        }
        
    }
    function pocetak(event) {
    
        switch(event.keyCode) {
            
            case 81 : 
                if($c<4901) {
                $c = $c + 100;
                vrednostKredita();
                document.getElementById("audioKredit").play();
                audioKredit.currentTime = 0;
                audioIntro.currentTime = 5;
                break;
                }
                else {
                    break;
                }
            case 53 :
                if($c>0) {
                    $u+=1;
                if($u==41) {
                    $u=1;
                }
                if($u>$c) {
                    $u = 1;
                }
                vrednostUloga();
                vrednostDobitka();
                document.getElementById("audioUlog").play();
                audioUlog.currentTime = 0;
                }
                break;
            case 32 :
                autohold();
                break;
            case 13 :
                if($c>0) {
                    $c = $c - $u;
                    vrednostKredita();
                    document.getElementById("audioDeljenje1").play();
                    audioDeljenje1.currentTime = 0;
                    clearInterval(timerLevo);
                    clearInterval(timerDesno);
                    clearInterval(timerImaReklame);
                    clearInterval(timerNemaReklame);
                    clearInterval(timerJoker1);
                    clearInterval(timerJoker2);
                    clearInterval(timerJoker3);
                    clearInterval(timerJoker4);
                    clearInterval(timerJoker5);
                    levo.style.visibility = "hidden";
                    desno.style.visibility = "hidden";
                    reklama1.style.visibility = "hidden";
                    reklama2.style.visibility = "hidden";
                    prazna1.style.visibility = "hidden";
                    prazna2.style.visibility = "hidden";
                    prazna3.style.visibility = "hidden";
                    prazna4.style.visibility = "hidden";
                    prazna5.style.visibility = "hidden";
                    reklama1.style.visibility = "hidden";
                    reklama2.style.visibility = "hidden";
                    prazneKarte();
                    window.removeEventListener("keydown", pocetak);
                    $deljenje = 1;
                    break;
                    }
                else {
                    break;
                }
             
        }   
    }
}