$timerCekanje9 = setInterval(Cekanje9, 500);
 
function Cekanje9() {
    console.log($deljenje);

    if($deljenje==10) {
        clearInterval($timerCekanje9);
        $deljenje = 12;
        $pauzaManja = 400;
        $pauzaVeca = 800;
        $karta = 1;
        document.getElementById("audioVeca").play();
        audioCount1.currentTime = 0;
        $polje01.style.visibility = "visible";
        veca.style.visibility = "visible";
        Dupliranje();
    }
}
function Dupliranje() {

    clearInterval($timerPogodio);
    clearInterval($timerManja);
    clearInterval($timerVeca);
    clearInterval($timerPobeda1);
    clearInterval($timerPobeda2);
    pobeda.style.visibility = "hidden";
    manja.style.visibility = "hidden";
    veca.style.visibility = "hidden";
    Karta1_12();

    if($karta<12&&$d<10000) {
        veca.style.visibility = "visible";
        document.getElementById("audioVeca").play();
        audioCount1.currentTime = 0;
        window.addEventListener("keydown", Kockanje);
    }
    else {
        clearInterval($timerManja);
        clearInterval($timerVeca);
        manja.style.visibility = "hidden";
        veca.style.visibility = "hidden";
        window.removeEventListener("keydown", Kockanje);
        pobeda.style.visibility = "visible";
        $deljenje = 11;
    }
}
function Karta1_12() {

    if($karta==1) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        $timerManja = setInterval(Manja, $pauzaManja);
        $timerVeca = setInterval(Veca, $pauzaVeca);
    }
    if($karta==2) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00==$k01) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $polje02.style.visibility = "visible";
        $timerManja = setInterval(Manja, $pauzaManja);
        $timerVeca = setInterval(Veca, $pauzaVeca);
    }
    if($karta==3) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00==$k01 || $k00==$k02) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $polje03.style.visibility = "visible";
        $timerManja = setInterval(Manja, $pauzaManja);
        $timerVeca = setInterval(Veca, $pauzaVeca);
    }
    if($karta==4) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00==$k01 || $k00==$k02 || $k00==$k03) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $polje04.style.visibility = "visible";
        $timerManja = setInterval(Manja, $pauzaManja);
        $timerVeca = setInterval(Veca, $pauzaVeca);
    }
    if($karta==5) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00==$k01 || $k00==$k02 || $k00==$k03 || $k00==$k04) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $polje05.style.visibility = "visible";
        $timerManja = setInterval(Manja, $pauzaManja);
        $timerVeca = setInterval(Veca, $pauzaVeca);
    }
    if($karta==6) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00==$k01 || $k00==$k02 || $k00==$k03 || $k00==$k04 || $k00==$k05) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $polje06.style.visibility = "visible";
        $timerManja = setInterval(Manja, $pauzaManja);
        $timerVeca = setInterval(Veca, $pauzaVeca);
    }
    if($karta==7) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00==$k01 || $k00==$k02 || $k00==$k03 || $k00==$k04 || $k00==$k05 ||
            $k00==$k06) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $polje07.style.visibility = "visible";
        $timerManja = setInterval(Manja, $pauzaManja);
        $timerVeca = setInterval(Veca, $pauzaVeca);
    }
    if($karta==8) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00==$k01 || $k00==$k02 || $k00==$k03 || $k00==$k04 || $k00==$k05 ||
            $k00==$k06 || $k00==$k07) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $polje08.style.visibility = "visible";
        $timerManja = setInterval(Manja, $pauzaManja);
        $timerVeca = setInterval(Veca, $pauzaVeca);
    }
    if($karta==9) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00==$k01 || $k00==$k02 || $k00==$k03 || $k00==$k04 || $k00==$k05 ||
            $k00==$k06 || $k00==$k07 || $k00==$k08) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $polje09.style.visibility = "visible";
        $timerManja = setInterval(Manja, $pauzaManja);
        $timerVeca = setInterval(Veca, $pauzaVeca);
    }
    if($karta==10) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00==$k01 || $k00==$k02 || $k00==$k03 || $k00==$k04 || $k00==$k05 ||
            $k00==$k06 || $k00==$k07 || $k00==$k08 || $k00==$k09) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $polje10.style.visibility = "visible";
        $timerManja = setInterval(Manja, $pauzaManja);
        $timerVeca = setInterval(Veca, $pauzaVeca);
    }
    if($karta==11) {
        $k00 = Math.floor(Math.random() * 48) + 1;
        while($k00==$k01 || $k00==$k02 || $k00==$k03 || $k00==$k04 || $k00==$k05 ||
            $k00==$k06 || $k00==$k07 || $k00==$k08 || $k00==$k09 || $k00==$k10) {
            $k00 = Math.floor(Math.random() * 48) + 1;
        }
        $polje11.style.visibility = "visible";
        $timerManja = setInterval(Manja, $pauzaManja);
        $timerVeca = setInterval(Veca, $pauzaVeca);
    }
    if($karta==12) {
        $polje12.style.visibility = "visible";
    }


    // document.getElementById("kartaxx").innerHTML = $k00;  // CHEATING MODE

}
function Brisanje() {

    window.removeEventListener("keydown", Kockanje);
    clearInterval($timerManja);
    clearInterval($timerVeca);
    manja.style.visibility = "hidden";
    veca.style.visibility = "hidden";
}
function Kockanje(event) {

    switch(event.keyCode) {

        case 17 :  // TASTER CTRL - DUPLIRANJE

            Brisanje();

            Karta();

            document.getElementById("vrednostdobitka").innerHTML = $d;
            document.getElementById("vrednostdobitka").style.visibility = "hidden";

            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {  // MANJA
                
                izborveca.style.visibility = "hidden";
                izbormanja.style.visibility = "visible";

                if($k00<25) {
                    Pogodio();
                }
                else {
                    Promasio();
                }
                break;
            }
            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {  // VEĆA
            
                izbormanja.style.visibility = "hidden";
                izborveca.style.visibility = "visible";

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
            $deljenje = 11;
            break;

        case 53 :  // TASTER 5 - UZMI POLA

            if($d>1) {

                Brisanje();
                $Pobeda2();

                $pola = Math.floor($d / 2);

                $timerPobeda1 = setInterval($Pobeda1,500);
                $timerPobeda2 = setInterval($Pobeda2,1000);

                if($d<101) {
                    $timerProvera3 = setInterval(Pola1,60);
                }
                if($d>100 && $d<200) {
                    $prviDeo = $d - 100;
                    $drugiDeo = 100 - $pola;
                    Pola2();
                }
                if($d==200) {
                    $Minussto();
                    $timerProvera3 = setInterval(Pola3,1000);
                }
                if($d>200) {
                    Pola4();
                }
            }
    }
}
function Pola1() {

    if($d != $pola) {
        $Minusjedan();
    }
    else {
        clearInterval($timerProvera3);
        $audioCount2();
        $Pobeda1();
        $timerPogodio = setInterval(Dupliranje, 1000);
    }
}
function Pola2() {
    Prvideo1();
    $timerProvera3 = setInterval(Drugideo1,1000);
}
function Prvideo1() {
    $Pobeda2();
    $c = $c + $prviDeo;
    document.getElementById("credit").innerHTML = $c;
    $vrednostKredita();
    $d = $d - $prviDeo;
    document.getElementById("vrednostdobitka").innerHTML = $d;
    $audioCount2();
}
function Drugideo1() {
    clearInterval($timerProvera3);
    if($drugiDeo != 0) {
        $Minusjedan();
        $timerProvera3 = setInterval(Drugideo1, 60);
        $drugiDeo--;
    }
    else {
        clearInterval($timerProvera3);
        $Pobeda2();
        $audioCount2();
        $timerPogodio = setInterval(Dupliranje, 1000);
    }
}
function Pola3() {
    clearInterval($timerProvera3);
    $audioCount2();
    $timerPogodio = setInterval(Dupliranje, 1000);
}
function Pola4() {
    if((Math.floor($d/100)) != ($d/100)) {
        Prvideo2();
        $timerProvera3 = setInterval(Drugideo2, 1000);
    }
    else {
        Drugideo2();
    }
}
function Prvideo2() {
    $prviDeo = Math.round((($d/100) - (Math.floor($d/100))) * 100);
    Prvideo1();
}
function Drugideo2() {
    clearInterval($timerProvera3);
    if($d-$pola>99) {
        $Minussto();
        $timerProvera3 = setInterval(Drugideo2, 1000);
    }
    else {

        if($d-$pola == 0) {
            Trecideo3();
        }
        else {
            clearInterval($timerProvera3);
            clearInterval($timerPobeda1);
            clearInterval($timerPobeda2);
            $Pobeda2();
            $prviDeo = $d - $pola;
            Prvideo1();
            $timerPogodio = setInterval(Trecideo3, 1000);
        } 
    }
}
function Trecideo3() {
    clearInterval($timerProvera3);
    clearInterval($timerPogodio);
    clearInterval($timerPobeda1);
    clearInterval($timerPobeda2);
    $Pobeda2();
    Dupliranje();
}
function Karta() {

    if($karta==1) {
        $polje01.style.visibility = "hidden";
        $k01 = $k00;
        $poljeKarte = "$polje01"
        Karta00();
        $polje01.style.visibility = "visible";
        izbormanja.style.left = "580px";
        izborveca.style.left = "580px";
    }
    if($karta==2) {
        $polje02.style.visibility = "hidden";
        $k02 = $k00;
        $poljeKarte = "$polje02"
        Karta00();
        $polje02.style.visibility = "visible";
        izbormanja.style.left = "650px";
        izborveca.style.left = "650px";
    }
    if($karta==3) {
        $polje03.style.visibility = "hidden";
        $k03 = $k00;
        $poljeKarte = "$polje03"
        Karta00();
        $polje03.style.visibility = "visible";
        izbormanja.style.left = "720px";
        izborveca.style.left = "720px";
    }
    if($karta==4) {
        $polje04.style.visibility = "hidden";
        $k04 = $k00;
        $poljeKarte = "$polje04"
        Karta00();
        $polje04.style.visibility = "visible";
        izbormanja.style.left = "790px";
        izborveca.style.left = "790px";
    }
    if($karta==5) {
        $polje05.style.visibility = "hidden";
        $k05 = $k00;
        $poljeKarte = "$polje05"
        Karta00();
        $polje05.style.visibility = "visible";
        izbormanja.style.left = "860px";
        izborveca.style.left = "860px";
    }
    if($karta==6) {
        $polje06.style.visibility = "hidden";
        $k06 = $k00;
        $poljeKarte = "$polje06"
        Karta00();
        $polje06.style.visibility = "visible";
        izbormanja.style.left = "930px";
        izborveca.style.left = "930px";
    }
    if($karta==7) {
        $polje07.style.visibility = "hidden";
        $k07 = $k00;
        $poljeKarte = "$polje07"
        Karta00();
        $polje07.style.visibility = "visible";
        izbormanja.style.left = "1000px";
        izborveca.style.left = "1000px";
    }
    if($karta==8) {
        $polje08.style.visibility = "hidden";
        $k08 = $k00;
        $poljeKarte = "$polje08"
        Karta00();
        $polje08.style.visibility = "visible";
        izbormanja.style.left = "1070px";
        izborveca.style.left = "1070px";
    }
    if($karta==9) {
        $polje09.style.visibility = "hidden";
        $k09 = $k00;
        $poljeKarte = "$polje09"
        Karta00();
        $polje09.style.visibility = "visible";
        izbormanja.style.left = "1140px";
        izborveca.style.left = "1140px";
    }
    if($karta==10) {
        $polje10.style.visibility = "hidden";
        $k10 = $k00;
        $poljeKarte = "$polje10"
        Karta00();
        $polje10.style.visibility = "visible";
        izbormanja.style.left = "1210px";
        izborveca.style.left = "1210px";
    }
    if($karta==11) {
        $polje11.style.visibility = "hidden";
        $k11 = $k00;
        $poljeKarte = "$polje11"
        Karta00();
        $polje11.style.visibility = "visible";
        izbormanja.style.left = "1280px";
        izborveca.style.left = "1280px";
    }
}
function Pogodio() {
    pobeda.style.visibility = "visible";
    $d = $d * 2;
    document.getElementById("vrednostdobitka").innerHTML = $d;
    document.getElementById("vrednostdobitka").style.visibility = "visible";
    document.getElementById("audioPogodak").play();
    audioPogodak.currentTime = 0;
    $karta++;
    $pauzaManja = $pauzaManja - 30;
    $pauzaVeca = $pauzaVeca - 60;
    $timerPogodio = setInterval(Dupliranje, 1400);
}
function Promasio() {
    $d = 0;
    document.getElementById("vrednostdobitka").innerHTML = $d;
    document.getElementById("vrednostdobitka").style.visibility = "visible";
    $deljenje = 11;
}
function Veca() {
    veca.style.visibility = "visible";
    manja.style.visibility = "hidden";
    audioManja.currentTime = 1;
    document.getElementById("audioVeca").play();
    audioVeca.currentTime = 0;
}
function Manja() {
    veca.style.visibility = "hidden";
    manja.style.visibility = "visible";
    audioVeca.currentTime = 1;
    document.getElementById("audioManja").play();
    audioManja.currentTime = 0;
}
function Karta00() {

    if($k00==1) {
        document.getElementById($poljeKarte).src="./Karte/01.png";
    }
    if($k00==2) {
        document.getElementById($poljeKarte).src="./Karte/02.png";
    }
    if($k00==3) {
        document.getElementById($poljeKarte).src="./Karte/03.png";
    }
    if($k00==4) {
        document.getElementById($poljeKarte).src="./Karte/04.png";
    }
    if($k00==5) {
        document.getElementById($poljeKarte).src="./Karte/05.png";
    }
    if($k00==6) {
        document.getElementById($poljeKarte).src="./Karte/06.png";
    }
    if($k00==7) {
        document.getElementById($poljeKarte).src="./Karte/14.png";
    }
    if($k00==8) {
        document.getElementById($poljeKarte).src="./Karte/15.png";
    }
    if($k00==9) {
        document.getElementById($poljeKarte).src="./Karte/16.png";
    }
    if($k00==10) {
        document.getElementById($poljeKarte).src="./Karte/17.png";
    }
    if($k00==11) {
        document.getElementById($poljeKarte).src="./Karte/18.png";
    }
    if($k00==12) {
        document.getElementById($poljeKarte).src="./Karte/19.png";
    }
    if($k00==13) {
        document.getElementById($poljeKarte).src="./Karte/27.png";
    }
    if($k00==14) {
        document.getElementById($poljeKarte).src="./Karte/28.png";
    }
    if($k00==15) {
        document.getElementById($poljeKarte).src="./Karte/29.png";
    }
    if($k00==16) {
        document.getElementById($poljeKarte).src="./Karte/30.png";
    }
    if($k00==17) {
        document.getElementById($poljeKarte).src="./Karte/31.png";
    }
    if($k00==18) {
        document.getElementById($poljeKarte).src="./Karte/32.png";
    }
    if($k00==19) {
        document.getElementById($poljeKarte).src="./Karte/40.png";
    }
    if($k00==20) {
        document.getElementById($poljeKarte).src="./Karte/41.png";
    }
    if($k00==21) {
        document.getElementById($poljeKarte).src="./Karte/42.png";
    }
    if($k00==22) {
        document.getElementById($poljeKarte).src="./Karte/43.png";
    }
    if($k00==23) {
        document.getElementById($poljeKarte).src="./Karte/44.png";
    }
    if($k00==24) {
        document.getElementById($poljeKarte).src="./Karte/45.png";
    }
    if($k00==25) {
        document.getElementById($poljeKarte).src="./Karte/08.png";
    }
    if($k00==26) {
        document.getElementById($poljeKarte).src="./Karte/09.png";
    }
    if($k00==27) {
        document.getElementById($poljeKarte).src="./Karte/10.png";
    }
    if($k00==28) {
        document.getElementById($poljeKarte).src="./Karte/11.png";
    }
    if($k00==29) {
        document.getElementById($poljeKarte).src="./Karte/12.png";
    }
    if($k00==30) {
        document.getElementById($poljeKarte).src="./Karte/13.png";
    }
    if($k00==31) {
        document.getElementById($poljeKarte).src="./Karte/21.png";
    }
    if($k00==32) {
        document.getElementById($poljeKarte).src="./Karte/22.png";
    }
    if($k00==33) {
        document.getElementById($poljeKarte).src="./Karte/23.png";
    }
    if($k00==34) {
        document.getElementById($poljeKarte).src="./Karte/24.png";
    }
    if($k00==35) {
        document.getElementById($poljeKarte).src="./Karte/25.png";
    }
    if($k00==36) {
        document.getElementById($poljeKarte).src="./Karte/26.png";
    }
    if($k00==37) {
        document.getElementById($poljeKarte).src="./Karte/34.png";
    }
    if($k00==38) {
        document.getElementById($poljeKarte).src="./Karte/35.png";
    }
    if($k00==39) {
        document.getElementById($poljeKarte).src="./Karte/36.png";
    }
    if($k00==40) {
        document.getElementById($poljeKarte).src="./Karte/37.png";
    }
    if($k00==41) {
        document.getElementById($poljeKarte).src="./Karte/38.png";
    }
    if($k00==42) {
        document.getElementById($poljeKarte).src="./Karte/39.png";
    }
    if($k00==43) {
        document.getElementById($poljeKarte).src="./Karte/47.png";
    }
    if($k00==44) {
        document.getElementById($poljeKarte).src="./Karte/48.png";
    }
    if($k00==45) {
        document.getElementById($poljeKarte).src="./Karte/49.png";
    }
    if($k00==46) {
        document.getElementById($poljeKarte).src="./Karte/50.png";
    }
    if($k00==47) {
        document.getElementById($poljeKarte).src="./Karte/51.png";
    }
    if($k00==48) {
        document.getElementById($poljeKarte).src="./Karte/52.png";
    }
}