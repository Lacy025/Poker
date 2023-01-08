if($deljenje==0) {
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

    intro();

    vrednostDobitka();
    vrednostKredita();
    vrednostUloga();

    $polje1.style.visibility = "hidden";
    $polje2.style.visibility = "hidden";
    $polje3.style.visibility = "hidden";
    $polje4.style.visibility = "hidden";
    $polje5.style.visibility = "hidden";

    imaReklame();
    timerNemaReklame = setInterval(nemaReklame, 6000);
    timerImaReklame = setInterval(imaReklame, 12000);

    if($deljenje==0) {
        desno.style.visibility = "hidden";
        poruka1.style.visibility = "hidden";
        poruka2.style.visibility = "hidden";
        poruka3.style.visibility = "hidden";
        poruka4.style.visibility = "hidden";
        poruka5.style.visibility = "hidden";
        timerDesno = setInterval(desnoDole, 500);
        timerLevo = setInterval(levoDole, 1000);
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
        $polje1.style.visibility = "hidden";
        $polje2.style.visibility = "hidden";
        $polje3.style.visibility = "hidden";
        $polje4.style.visibility = "hidden";
        $polje5.style.visibility = "hidden";
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
        var levo = document.getElementById("levo");
        levo.innerHTML = ' ' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LACIKA BAČI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        levo.style.visibility = "visible";
        desno.style.visibility = "hidden";
    }
    function desnoDole() {
        var desno = document.getElementById("desno");
        desno.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SRBIJA  2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        levo.style.visibility = "hidden";
        desno.style.visibility = "visible";
    }
    function Poruka1() {
        var poruka1 = document.getElementById("poruka1");
        poruka1.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BIRAJTE  ULOG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        poruka1.style.left = "734px";
        poruka1.style.visibility = "visible";
        poruka2.style.visibility = "hidden";
    }
    function Poruka2() {
        var poruka2 = document.getElementById("poruka2");
        poruka2.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRITISNITE  DELJENJE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        poruka2.style.left = "735px";
        poruka2.style.visibility = "visible";
        poruka1.style.visibility = "hidden";
    }
    function intro() {
        if($c==0) {
            document.getElementById("audioIntro").play();
            audioIntro.currentTime = 0;
        }
    }
    function prazneKarte() {
        document.getElementById("$polje1").src="/Karte/53.png";
        document.getElementById("$polje2").src="/Karte/53.png";
        document.getElementById("$polje3").src="/Karte/53.png";
        document.getElementById("$polje4").src="/Karte/53.png";
        document.getElementById("$polje5").src="/Karte/53.png";
        $polje1.style.visibility = "visible";
        $polje2.style.visibility = "visible";
        $polje3.style.visibility = "visible";
        $polje4.style.visibility = "visible";
        $polje5.style.visibility = "visible";
    }
    function joker1() {
        $polje1.style.visibility = "hidden";
        document.getElementById("$polje1").src="/Karte/00.png";
        $polje1.style.visibility = "visible";
        clearInterval(timerJoker1);
    }
    function joker2() {
        $polje1.style.visibility = "hidden";
        document.getElementById("$polje1").src="/Karte/53.png";
        $polje1.style.visibility = "visible";
        $polje2.style.visibility = "hidden";
        document.getElementById("$polje2").src="/Karte/00.png";
        $polje2.style.visibility = "visible";
        clearInterval(timerJoker2);
    }
    function joker3() {
        $polje2.style.visibility = "hidden";
        document.getElementById("$polje2").src="/Karte/53.png";
        $polje2.style.visibility = "visible";
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="/Karte/00.png";
        $polje3.style.visibility = "visible";
        clearInterval(timerJoker3);
    }
    function joker4() {
        $polje3.style.visibility = "hidden";
        document.getElementById("$polje3").src="/Karte/53.png";
        $polje3.style.visibility = "visible";
        $polje4.style.visibility = "hidden";
        document.getElementById("$polje4").src="/Karte/00.png";
        $polje4.style.visibility = "visible";
        clearInterval(timerJoker4);
    }
    function joker5() {
        $polje4.style.visibility = "hidden";
        document.getElementById("$polje4").src="/Karte/53.png";
        $polje4.style.visibility = "visible";
        $polje5.style.visibility = "hidden";
        document.getElementById("$polje5").src="/Karte/00.png";
        $polje5.style.visibility = "visible";
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
                if($c==0) {
                    levo.style.visibility = "hidden";
                    desno.style.visibility = "hidden";
                    clearInterval(timerLevo);
                    clearInterval(timerDesno);
                    timerPoruka1 = setInterval(Poruka1,1000);
                    timerPoruka2 = setInterval(Poruka2,2000);
                }
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
                    $polje1.style.visibility = "hidden";
                    $polje2.style.visibility = "hidden";
                    $polje3.style.visibility = "hidden";
                    $polje4.style.visibility = "hidden";
                    $polje5.style.visibility = "hidden";
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