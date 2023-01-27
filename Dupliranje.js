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


    document.getElementById("kartaxx").innerHTML = $k00;

}
function Kockanje(event) {

    switch(event.keyCode) {

        case 17 : // TASTER CTRL

        window.removeEventListener("keydown", Kockanje);

        clearInterval($timerManja);
        clearInterval($timerVeca);

        manja.style.visibility = "hidden";
        veca.style.visibility = "hidden";

        Showcard();

        document.getElementById("vrednostdobitka").innerHTML = $d;
        document.getElementById("vrednostdobitka").style.visibility = "hidden";

        if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {  //MANJA
            
            izborveca.style.visibility = "hidden";
            izbormanja.style.visibility = "visible";

            if($k00<25) {
                Pogodio();
            }
            else {
                Promasio();
            }
        }
        if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {  //VEĆA
           
            izbormanja.style.visibility = "hidden";
            izborveca.style.visibility = "visible";

            if($k00>24) {
                Pogodio();
            }
            else {
                Promasio();
            }
        }

        case 53 :

        case 32 :

    }
}
function Showcard() {

    if($karta==1) {
        $polje01.style.visibility = "hidden";
        $k01 = $k00;
        Karta01();
        $polje01.style.visibility = "visible";
    }
    if($karta==2) {
        $polje02.style.visibility = "hidden";
        $k02 = $k00;
        Karta02();
        $polje02.style.visibility = "visible";
        izbormanja.style.left = "650px";
        izborveca.style.left = "650px";
    }
    if($karta==3) {
        $polje03.style.visibility = "hidden";
        $k03 = $k00;
        Karta03();
        $polje03.style.visibility = "visible";
        izbormanja.style.left = "720px";
        izborveca.style.left = "720px";
    }
    if($karta==4) {
        $polje04.style.visibility = "hidden";
        $k04 = $k00;
        Karta04();
        $polje04.style.visibility = "visible";
        izbormanja.style.left = "790px";
        izborveca.style.left = "790px";
    }
    if($karta==5) {
        $polje05.style.visibility = "hidden";
        $k05 = $k00;
        Karta05();
        $polje05.style.visibility = "visible";
        izbormanja.style.left = "860px";
        izborveca.style.left = "860px";
    }
    if($karta==6) {
        $polje06.style.visibility = "hidden";
        $k06 = $k00;
        Karta06();
        $polje06.style.visibility = "visible";
        izbormanja.style.left = "930px";
        izborveca.style.left = "930px";
    }
    if($karta==7) {
        $polje07.style.visibility = "hidden";
        $k07 = $k00;
        Karta07();
        $polje07.style.visibility = "visible";
        izbormanja.style.left = "1000px";
        izborveca.style.left = "1000px";
    }
    if($karta==8) {
        $polje08.style.visibility = "hidden";
        $k08 = $k00;
        Karta08();
        $polje08.style.visibility = "visible";
        izbormanja.style.left = "1070px";
        izborveca.style.left = "1070px";
    }
    if($karta==9) {
        $polje09.style.visibility = "hidden";
        $k09 = $k00;
        Karta09();
        $polje09.style.visibility = "visible";
        izbormanja.style.left = "1140px";
        izborveca.style.left = "1140px";
    }
    if($karta==10) {
        $polje10.style.visibility = "hidden";
        $k10 = $k00;
        Karta10();
        $polje10.style.visibility = "visible";
        izbormanja.style.left = "1210px";
        izborveca.style.left = "1210px";
    }
    if($karta==11) {
        $polje11.style.visibility = "hidden";
        $k11 = $k00;
        Karta11();
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
    $timerPogodio = setInterval(Dupliranje, 1500);
}
function Promasio() {
    $d = 0;
    document.getElementById("vrednostdobitka").innerHTML = $d;
    document.getElementById("vrednostdobitka").style.visibility = "visible";
    //$karta = 13;

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
function Karta01() {

    if($k01==1) {
        document.getElementById("$polje01").src="/Karte/01.png";
    }
    if($k01==2) {
        document.getElementById("$polje01").src="/Karte/02.png";
    }
    if($k01==3) {
        document.getElementById("$polje01").src="/Karte/03.png";
    }
    if($k01==4) {
        document.getElementById("$polje01").src="/Karte/04.png";
    }
    if($k01==5) {
        document.getElementById("$polje01").src="/Karte/05.png";
    }
    if($k01==6) {
        document.getElementById("$polje01").src="/Karte/06.png";
    }
    if($k01==7) {
        document.getElementById("$polje01").src="/Karte/14.png";
    }
    if($k01==8) {
        document.getElementById("$polje01").src="/Karte/15.png";
    }
    if($k01==9) {
        document.getElementById("$polje01").src="/Karte/16.png";
    }
    if($k01==10) {
        document.getElementById("$polje01").src="/Karte/17.png";
    }
    if($k01==11) {
        document.getElementById("$polje01").src="/Karte/18.png";
    }
    if($k01==12) {
        document.getElementById("$polje01").src="/Karte/19.png";
    }
    if($k01==13) {
        document.getElementById("$polje01").src="/Karte/27.png";
    }
    if($k01==14) {
        document.getElementById("$polje01").src="/Karte/28.png";
    }
    if($k01==15) {
        document.getElementById("$polje01").src="/Karte/29.png";
    }
    if($k01==16) {
        document.getElementById("$polje01").src="/Karte/30.png";
    }
    if($k01==17) {
        document.getElementById("$polje01").src="/Karte/31.png";
    }
    if($k01==18) {
        document.getElementById("$polje01").src="/Karte/32.png";
    }
    if($k01==19) {
        document.getElementById("$polje01").src="/Karte/40.png";
    }
    if($k01==20) {
        document.getElementById("$polje01").src="/Karte/41.png";
    }
    if($k01==21) {
        document.getElementById("$polje01").src="/Karte/42.png";
    }
    if($k01==22) {
        document.getElementById("$polje01").src="/Karte/43.png";
    }
    if($k01==23) {
        document.getElementById("$polje01").src="/Karte/44.png";
    }
    if($k01==24) {
        document.getElementById("$polje01").src="/Karte/45.png";
    }
    if($k01==25) {
        document.getElementById("$polje01").src="/Karte/08.png";
    }
    if($k01==26) {
        document.getElementById("$polje01").src="/Karte/09.png";
    }
    if($k01==27) {
        document.getElementById("$polje01").src="/Karte/10.png";
    }
    if($k01==28) {
        document.getElementById("$polje01").src="/Karte/11.png";
    }
    if($k01==29) {
        document.getElementById("$polje01").src="/Karte/12.png";
    }
    if($k01==30) {
        document.getElementById("$polje01").src="/Karte/13.png";
    }
    if($k01==31) {
        document.getElementById("$polje01").src="/Karte/21.png";
    }
    if($k01==32) {
        document.getElementById("$polje01").src="/Karte/22.png";
    }
    if($k01==33) {
        document.getElementById("$polje01").src="/Karte/23.png";
    }
    if($k01==34) {
        document.getElementById("$polje01").src="/Karte/24.png";
    }
    if($k01==35) {
        document.getElementById("$polje01").src="/Karte/25.png";
    }
    if($k01==36) {
        document.getElementById("$polje01").src="/Karte/26.png";
    }
    if($k01==37) {
        document.getElementById("$polje01").src="/Karte/34.png";
    }
    if($k01==38) {
        document.getElementById("$polje01").src="/Karte/35.png";
    }
    if($k01==39) {
        document.getElementById("$polje01").src="/Karte/36.png";
    }
    if($k01==40) {
        document.getElementById("$polje01").src="/Karte/37.png";
    }
    if($k01==41) {
        document.getElementById("$polje01").src="/Karte/38.png";
    }
    if($k01==42) {
        document.getElementById("$polje01").src="/Karte/39.png";
    }
    if($k01==43) {
        document.getElementById("$polje01").src="/Karte/47.png";
    }
    if($k01==44) {
        document.getElementById("$polje01").src="/Karte/48.png";
    }
    if($k01==45) {
        document.getElementById("$polje01").src="/Karte/49.png";
    }
    if($k01==46) {
        document.getElementById("$polje01").src="/Karte/50.png";
    }
    if($k01==47) {
        document.getElementById("$polje01").src="/Karte/51.png";
    }
    if($k01==48) {
        document.getElementById("$polje01").src="/Karte/52.png";
    }
}
function Karta02() {

    if($k02==1) {
        document.getElementById("$polje02").src="/Karte/01.png";
    }
    if($k02==2) {
        document.getElementById("$polje02").src="/Karte/02.png";
    }
    if($k02==3) {
        document.getElementById("$polje02").src="/Karte/03.png";
    }
    if($k02==4) {
        document.getElementById("$polje02").src="/Karte/04.png";
    }
    if($k02==5) {
        document.getElementById("$polje02").src="/Karte/05.png";
    }
    if($k02==6) {
        document.getElementById("$polje02").src="/Karte/06.png";
    }
    if($k02==7) {
        document.getElementById("$polje02").src="/Karte/14.png";
    }
    if($k02==8) {
        document.getElementById("$polje02").src="/Karte/15.png";
    }
    if($k02==9) {
        document.getElementById("$polje02").src="/Karte/16.png";
    }
    if($k02==10) {
        document.getElementById("$polje02").src="/Karte/17.png";
    }
    if($k02==11) {
        document.getElementById("$polje02").src="/Karte/18.png";
    }
    if($k02==12) {
        document.getElementById("$polje02").src="/Karte/19.png";
    }
    if($k02==13) {
        document.getElementById("$polje02").src="/Karte/27.png";
    }
    if($k02==14) {
        document.getElementById("$polje02").src="/Karte/28.png";
    }
    if($k02==15) {
        document.getElementById("$polje02").src="/Karte/29.png";
    }
    if($k02==16) {
        document.getElementById("$polje02").src="/Karte/30.png";
    }
    if($k02==17) {
        document.getElementById("$polje02").src="/Karte/31.png";
    }
    if($k02==18) {
        document.getElementById("$polje02").src="/Karte/32.png";
    }
    if($k02==19) {
        document.getElementById("$polje02").src="/Karte/40.png";
    }
    if($k02==20) {
        document.getElementById("$polje02").src="/Karte/41.png";
    }
    if($k02==21) {
        document.getElementById("$polje02").src="/Karte/42.png";
    }
    if($k02==22) {
        document.getElementById("$polje02").src="/Karte/43.png";
    }
    if($k02==23) {
        document.getElementById("$polje02").src="/Karte/44.png";
    }
    if($k02==24) {
        document.getElementById("$polje02").src="/Karte/45.png";
    }
    if($k02==25) {
        document.getElementById("$polje02").src="/Karte/08.png";
    }
    if($k02==26) {
        document.getElementById("$polje02").src="/Karte/09.png";
    }
    if($k02==27) {
        document.getElementById("$polje02").src="/Karte/10.png";
    }
    if($k02==28) {
        document.getElementById("$polje02").src="/Karte/11.png";
    }
    if($k02==29) {
        document.getElementById("$polje02").src="/Karte/12.png";
    }
    if($k02==30) {
        document.getElementById("$polje02").src="/Karte/13.png";
    }
    if($k02==31) {
        document.getElementById("$polje02").src="/Karte/21.png";
    }
    if($k02==32) {
        document.getElementById("$polje02").src="/Karte/22.png";
    }
    if($k02==33) {
        document.getElementById("$polje02").src="/Karte/23.png";
    }
    if($k02==34) {
        document.getElementById("$polje02").src="/Karte/24.png";
    }
    if($k02==35) {
        document.getElementById("$polje02").src="/Karte/25.png";
    }
    if($k02==36) {
        document.getElementById("$polje02").src="/Karte/26.png";
    }
    if($k02==37) {
        document.getElementById("$polje02").src="/Karte/34.png";
    }
    if($k02==38) {
        document.getElementById("$polje02").src="/Karte/35.png";
    }
    if($k02==39) {
        document.getElementById("$polje02").src="/Karte/36.png";
    }
    if($k02==40) {
        document.getElementById("$polje02").src="/Karte/37.png";
    }
    if($k02==41) {
        document.getElementById("$polje02").src="/Karte/38.png";
    }
    if($k02==42) {
        document.getElementById("$polje02").src="/Karte/39.png";
    }
    if($k02==43) {
        document.getElementById("$polje02").src="/Karte/47.png";
    }
    if($k02==44) {
        document.getElementById("$polje02").src="/Karte/48.png";
    }
    if($k02==45) {
        document.getElementById("$polje02").src="/Karte/49.png";
    }
    if($k02==46) {
        document.getElementById("$polje02").src="/Karte/50.png";
    }
    if($k02==47) {
        document.getElementById("$polje02").src="/Karte/51.png";
    }
    if($k02==48) {
        document.getElementById("$polje02").src="/Karte/52.png";
    }
}
function Karta03() {

    if($k03==1) {
        document.getElementById("$polje03").src="/Karte/01.png";
    }
    if($k03==2) {
        document.getElementById("$polje03").src="/Karte/02.png";
    }
    if($k03==3) {
        document.getElementById("$polje03").src="/Karte/03.png";
    }
    if($k03==4) {
        document.getElementById("$polje03").src="/Karte/04.png";
    }
    if($k03==5) {
        document.getElementById("$polje03").src="/Karte/05.png";
    }
    if($k03==6) {
        document.getElementById("$polje03").src="/Karte/06.png";
    }
    if($k03==7) {
        document.getElementById("$polje03").src="/Karte/14.png";
    }
    if($k03==8) {
        document.getElementById("$polje03").src="/Karte/15.png";
    }
    if($k03==9) {
        document.getElementById("$polje03").src="/Karte/16.png";
    }
    if($k03==10) {
        document.getElementById("$polje03").src="/Karte/17.png";
    }
    if($k03==11) {
        document.getElementById("$polje03").src="/Karte/18.png";
    }
    if($k03==12) {
        document.getElementById("$polje03").src="/Karte/19.png";
    }
    if($k03==13) {
        document.getElementById("$polje03").src="/Karte/27.png";
    }
    if($k03==14) {
        document.getElementById("$polje03").src="/Karte/28.png";
    }
    if($k03==15) {
        document.getElementById("$polje03").src="/Karte/29.png";
    }
    if($k03==16) {
        document.getElementById("$polje03").src="/Karte/30.png";
    }
    if($k03==17) {
        document.getElementById("$polje03").src="/Karte/31.png";
    }
    if($k03==18) {
        document.getElementById("$polje03").src="/Karte/32.png";
    }
    if($k03==19) {
        document.getElementById("$polje03").src="/Karte/40.png";
    }
    if($k03==20) {
        document.getElementById("$polje03").src="/Karte/41.png";
    }
    if($k03==21) {
        document.getElementById("$polje03").src="/Karte/42.png";
    }
    if($k03==22) {
        document.getElementById("$polje03").src="/Karte/43.png";
    }
    if($k03==23) {
        document.getElementById("$polje03").src="/Karte/44.png";
    }
    if($k03==24) {
        document.getElementById("$polje03").src="/Karte/45.png";
    }
    if($k03==25) {
        document.getElementById("$polje03").src="/Karte/08.png";
    }
    if($k03==26) {
        document.getElementById("$polje03").src="/Karte/09.png";
    }
    if($k03==27) {
        document.getElementById("$polje03").src="/Karte/10.png";
    }
    if($k03==28) {
        document.getElementById("$polje03").src="/Karte/11.png";
    }
    if($k03==29) {
        document.getElementById("$polje03").src="/Karte/12.png";
    }
    if($k03==30) {
        document.getElementById("$polje03").src="/Karte/13.png";
    }
    if($k03==31) {
        document.getElementById("$polje03").src="/Karte/21.png";
    }
    if($k03==32) {
        document.getElementById("$polje03").src="/Karte/22.png";
    }
    if($k03==33) {
        document.getElementById("$polje03").src="/Karte/23.png";
    }
    if($k03==34) {
        document.getElementById("$polje03").src="/Karte/24.png";
    }
    if($k03==35) {
        document.getElementById("$polje03").src="/Karte/25.png";
    }
    if($k03==36) {
        document.getElementById("$polje03").src="/Karte/26.png";
    }
    if($k03==37) {
        document.getElementById("$polje03").src="/Karte/34.png";
    }
    if($k03==38) {
        document.getElementById("$polje03").src="/Karte/35.png";
    }
    if($k03==39) {
        document.getElementById("$polje03").src="/Karte/36.png";
    }
    if($k03==40) {
        document.getElementById("$polje03").src="/Karte/37.png";
    }
    if($k03==41) {
        document.getElementById("$polje03").src="/Karte/38.png";
    }
    if($k03==42) {
        document.getElementById("$polje03").src="/Karte/39.png";
    }
    if($k03==43) {
        document.getElementById("$polje03").src="/Karte/47.png";
    }
    if($k03==44) {
        document.getElementById("$polje03").src="/Karte/48.png";
    }
    if($k03==45) {
        document.getElementById("$polje03").src="/Karte/49.png";
    }
    if($k03==46) {
        document.getElementById("$polje03").src="/Karte/50.png";
    }
    if($k03==47) {
        document.getElementById("$polje03").src="/Karte/51.png";
    }
    if($k03==48) {
        document.getElementById("$polje03").src="/Karte/52.png";
    }
}
function Karta04() {

    if($k04==1) {
        document.getElementById("$polje04").src="/Karte/01.png";
    }
    if($k04==2) {
        document.getElementById("$polje04").src="/Karte/02.png";
    }
    if($k04==3) {
        document.getElementById("$polje04").src="/Karte/03.png";
    }
    if($k04==4) {
        document.getElementById("$polje04").src="/Karte/04.png";
    }
    if($k04==5) {
        document.getElementById("$polje04").src="/Karte/05.png";
    }
    if($k04==6) {
        document.getElementById("$polje04").src="/Karte/06.png";
    }
    if($k04==7) {
        document.getElementById("$polje04").src="/Karte/14.png";
    }
    if($k04==8) {
        document.getElementById("$polje04").src="/Karte/15.png";
    }
    if($k04==9) {
        document.getElementById("$polje04").src="/Karte/16.png";
    }
    if($k04==10) {
        document.getElementById("$polje04").src="/Karte/17.png";
    }
    if($k04==11) {
        document.getElementById("$polje04").src="/Karte/18.png";
    }
    if($k04==12) {
        document.getElementById("$polje04").src="/Karte/19.png";
    }
    if($k04==13) {
        document.getElementById("$polje04").src="/Karte/27.png";
    }
    if($k04==14) {
        document.getElementById("$polje04").src="/Karte/28.png";
    }
    if($k04==15) {
        document.getElementById("$polje04").src="/Karte/29.png";
    }
    if($k04==16) {
        document.getElementById("$polje04").src="/Karte/30.png";
    }
    if($k04==17) {
        document.getElementById("$polje04").src="/Karte/31.png";
    }
    if($k04==18) {
        document.getElementById("$polje04").src="/Karte/32.png";
    }
    if($k04==19) {
        document.getElementById("$polje04").src="/Karte/40.png";
    }
    if($k04==20) {
        document.getElementById("$polje04").src="/Karte/41.png";
    }
    if($k04==21) {
        document.getElementById("$polje04").src="/Karte/42.png";
    }
    if($k04==22) {
        document.getElementById("$polje04").src="/Karte/43.png";
    }
    if($k04==23) {
        document.getElementById("$polje04").src="/Karte/44.png";
    }
    if($k04==24) {
        document.getElementById("$polje04").src="/Karte/45.png";
    }
    if($k04==25) {
        document.getElementById("$polje04").src="/Karte/08.png";
    }
    if($k04==26) {
        document.getElementById("$polje04").src="/Karte/09.png";
    }
    if($k04==27) {
        document.getElementById("$polje04").src="/Karte/10.png";
    }
    if($k04==28) {
        document.getElementById("$polje04").src="/Karte/11.png";
    }
    if($k04==29) {
        document.getElementById("$polje04").src="/Karte/12.png";
    }
    if($k04==30) {
        document.getElementById("$polje04").src="/Karte/13.png";
    }
    if($k04==31) {
        document.getElementById("$polje04").src="/Karte/21.png";
    }
    if($k04==32) {
        document.getElementById("$polje04").src="/Karte/22.png";
    }
    if($k04==33) {
        document.getElementById("$polje04").src="/Karte/23.png";
    }
    if($k04==34) {
        document.getElementById("$polje04").src="/Karte/24.png";
    }
    if($k04==35) {
        document.getElementById("$polje04").src="/Karte/25.png";
    }
    if($k04==36) {
        document.getElementById("$polje04").src="/Karte/26.png";
    }
    if($k04==37) {
        document.getElementById("$polje04").src="/Karte/34.png";
    }
    if($k04==38) {
        document.getElementById("$polje04").src="/Karte/35.png";
    }
    if($k04==39) {
        document.getElementById("$polje04").src="/Karte/36.png";
    }
    if($k04==40) {
        document.getElementById("$polje04").src="/Karte/37.png";
    }
    if($k04==41) {
        document.getElementById("$polje04").src="/Karte/38.png";
    }
    if($k04==42) {
        document.getElementById("$polje04").src="/Karte/39.png";
    }
    if($k04==43) {
        document.getElementById("$polje04").src="/Karte/47.png";
    }
    if($k04==44) {
        document.getElementById("$polje04").src="/Karte/48.png";
    }
    if($k04==45) {
        document.getElementById("$polje04").src="/Karte/49.png";
    }
    if($k04==46) {
        document.getElementById("$polje04").src="/Karte/50.png";
    }
    if($k04==47) {
        document.getElementById("$polje04").src="/Karte/51.png";
    }
    if($k04==48) {
        document.getElementById("$polje04").src="/Karte/52.png";
    }
}
function Karta05() {

    if($k05==1) {
        document.getElementById("$polje05").src="/Karte/01.png";
    }
    if($k05==2) {
        document.getElementById("$polje05").src="/Karte/02.png";
    }
    if($k05==3) {
        document.getElementById("$polje05").src="/Karte/03.png";
    }
    if($k05==4) {
        document.getElementById("$polje05").src="/Karte/04.png";
    }
    if($k05==5) {
        document.getElementById("$polje05").src="/Karte/05.png";
    }
    if($k05==6) {
        document.getElementById("$polje05").src="/Karte/06.png";
    }
    if($k05==7) {
        document.getElementById("$polje05").src="/Karte/14.png";
    }
    if($k05==8) {
        document.getElementById("$polje05").src="/Karte/15.png";
    }
    if($k05==9) {
        document.getElementById("$polje05").src="/Karte/16.png";
    }
    if($k05==10) {
        document.getElementById("$polje05").src="/Karte/17.png";
    }
    if($k05==11) {
        document.getElementById("$polje05").src="/Karte/18.png";
    }
    if($k05==12) {
        document.getElementById("$polje05").src="/Karte/19.png";
    }
    if($k05==13) {
        document.getElementById("$polje05").src="/Karte/27.png";
    }
    if($k05==14) {
        document.getElementById("$polje05").src="/Karte/28.png";
    }
    if($k05==15) {
        document.getElementById("$polje05").src="/Karte/29.png";
    }
    if($k05==16) {
        document.getElementById("$polje05").src="/Karte/30.png";
    }
    if($k05==17) {
        document.getElementById("$polje05").src="/Karte/31.png";
    }
    if($k05==18) {
        document.getElementById("$polje05").src="/Karte/32.png";
    }
    if($k05==19) {
        document.getElementById("$polje05").src="/Karte/40.png";
    }
    if($k05==20) {
        document.getElementById("$polje05").src="/Karte/41.png";
    }
    if($k05==21) {
        document.getElementById("$polje05").src="/Karte/42.png";
    }
    if($k05==22) {
        document.getElementById("$polje05").src="/Karte/43.png";
    }
    if($k05==23) {
        document.getElementById("$polje05").src="/Karte/44.png";
    }
    if($k05==24) {
        document.getElementById("$polje05").src="/Karte/45.png";
    }
    if($k05==25) {
        document.getElementById("$polje05").src="/Karte/08.png";
    }
    if($k05==26) {
        document.getElementById("$polje05").src="/Karte/09.png";
    }
    if($k05==27) {
        document.getElementById("$polje05").src="/Karte/10.png";
    }
    if($k05==28) {
        document.getElementById("$polje05").src="/Karte/11.png";
    }
    if($k05==29) {
        document.getElementById("$polje05").src="/Karte/12.png";
    }
    if($k05==30) {
        document.getElementById("$polje05").src="/Karte/13.png";
    }
    if($k05==31) {
        document.getElementById("$polje05").src="/Karte/21.png";
    }
    if($k05==32) {
        document.getElementById("$polje05").src="/Karte/22.png";
    }
    if($k05==33) {
        document.getElementById("$polje05").src="/Karte/23.png";
    }
    if($k05==34) {
        document.getElementById("$polje05").src="/Karte/24.png";
    }
    if($k05==35) {
        document.getElementById("$polje05").src="/Karte/25.png";
    }
    if($k05==36) {
        document.getElementById("$polje05").src="/Karte/26.png";
    }
    if($k05==37) {
        document.getElementById("$polje05").src="/Karte/34.png";
    }
    if($k05==38) {
        document.getElementById("$polje05").src="/Karte/35.png";
    }
    if($k05==39) {
        document.getElementById("$polje05").src="/Karte/36.png";
    }
    if($k05==40) {
        document.getElementById("$polje05").src="/Karte/37.png";
    }
    if($k05==41) {
        document.getElementById("$polje05").src="/Karte/38.png";
    }
    if($k05==42) {
        document.getElementById("$polje05").src="/Karte/39.png";
    }
    if($k05==43) {
        document.getElementById("$polje05").src="/Karte/47.png";
    }
    if($k05==44) {
        document.getElementById("$polje05").src="/Karte/48.png";
    }
    if($k05==45) {
        document.getElementById("$polje05").src="/Karte/49.png";
    }
    if($k05==46) {
        document.getElementById("$polje05").src="/Karte/50.png";
    }
    if($k05==47) {
        document.getElementById("$polje05").src="/Karte/51.png";
    }
    if($k05==48) {
        document.getElementById("$polje05").src="/Karte/52.png";
    }
}
function Karta06() {

    if($k06==1) {
        document.getElementById("$polje06").src="/Karte/01.png";
    }
    if($k06==2) {
        document.getElementById("$polje06").src="/Karte/02.png";
    }
    if($k06==3) {
        document.getElementById("$polje06").src="/Karte/03.png";
    }
    if($k06==4) {
        document.getElementById("$polje06").src="/Karte/04.png";
    }
    if($k06==5) {
        document.getElementById("$polje06").src="/Karte/05.png";
    }
    if($k06==6) {
        document.getElementById("$polje06").src="/Karte/06.png";
    }
    if($k06==7) {
        document.getElementById("$polje06").src="/Karte/14.png";
    }
    if($k06==8) {
        document.getElementById("$polje06").src="/Karte/15.png";
    }
    if($k06==9) {
        document.getElementById("$polje06").src="/Karte/16.png";
    }
    if($k06==10) {
        document.getElementById("$polje06").src="/Karte/17.png";
    }
    if($k06==11) {
        document.getElementById("$polje06").src="/Karte/18.png";
    }
    if($k06==12) {
        document.getElementById("$polje06").src="/Karte/19.png";
    }
    if($k06==13) {
        document.getElementById("$polje06").src="/Karte/27.png";
    }
    if($k06==14) {
        document.getElementById("$polje06").src="/Karte/28.png";
    }
    if($k06==15) {
        document.getElementById("$polje06").src="/Karte/29.png";
    }
    if($k06==16) {
        document.getElementById("$polje06").src="/Karte/30.png";
    }
    if($k06==17) {
        document.getElementById("$polje06").src="/Karte/31.png";
    }
    if($k06==18) {
        document.getElementById("$polje06").src="/Karte/32.png";
    }
    if($k06==19) {
        document.getElementById("$polje06").src="/Karte/40.png";
    }
    if($k06==20) {
        document.getElementById("$polje06").src="/Karte/41.png";
    }
    if($k06==21) {
        document.getElementById("$polje06").src="/Karte/42.png";
    }
    if($k06==22) {
        document.getElementById("$polje06").src="/Karte/43.png";
    }
    if($k06==23) {
        document.getElementById("$polje06").src="/Karte/44.png";
    }
    if($k06==24) {
        document.getElementById("$polje06").src="/Karte/45.png";
    }
    if($k06==25) {
        document.getElementById("$polje06").src="/Karte/08.png";
    }
    if($k06==26) {
        document.getElementById("$polje06").src="/Karte/09.png";
    }
    if($k06==27) {
        document.getElementById("$polje06").src="/Karte/10.png";
    }
    if($k06==28) {
        document.getElementById("$polje06").src="/Karte/11.png";
    }
    if($k06==29) {
        document.getElementById("$polje06").src="/Karte/12.png";
    }
    if($k06==30) {
        document.getElementById("$polje06").src="/Karte/13.png";
    }
    if($k06==31) {
        document.getElementById("$polje06").src="/Karte/21.png";
    }
    if($k06==32) {
        document.getElementById("$polje06").src="/Karte/22.png";
    }
    if($k06==33) {
        document.getElementById("$polje06").src="/Karte/23.png";
    }
    if($k06==34) {
        document.getElementById("$polje06").src="/Karte/24.png";
    }
    if($k06==35) {
        document.getElementById("$polje06").src="/Karte/25.png";
    }
    if($k06==36) {
        document.getElementById("$polje06").src="/Karte/26.png";
    }
    if($k06==37) {
        document.getElementById("$polje06").src="/Karte/34.png";
    }
    if($k06==38) {
        document.getElementById("$polje06").src="/Karte/35.png";
    }
    if($k06==39) {
        document.getElementById("$polje06").src="/Karte/36.png";
    }
    if($k06==40) {
        document.getElementById("$polje06").src="/Karte/37.png";
    }
    if($k06==41) {
        document.getElementById("$polje06").src="/Karte/38.png";
    }
    if($k06==42) {
        document.getElementById("$polje06").src="/Karte/39.png";
    }
    if($k06==43) {
        document.getElementById("$polje06").src="/Karte/47.png";
    }
    if($k06==44) {
        document.getElementById("$polje06").src="/Karte/48.png";
    }
    if($k06==45) {
        document.getElementById("$polje06").src="/Karte/49.png";
    }
    if($k06==46) {
        document.getElementById("$polje06").src="/Karte/50.png";
    }
    if($k06==47) {
        document.getElementById("$polje06").src="/Karte/51.png";
    }
    if($k06==48) {
        document.getElementById("$polje06").src="/Karte/52.png";
    }
}
function Karta07() {

    if($k07==1) {
        document.getElementById("$polje07").src="/Karte/01.png";
    }
    if($k07==2) {
        document.getElementById("$polje07").src="/Karte/02.png";
    }
    if($k07==3) {
        document.getElementById("$polje07").src="/Karte/03.png";
    }
    if($k07==4) {
        document.getElementById("$polje07").src="/Karte/04.png";
    }
    if($k07==5) {
        document.getElementById("$polje07").src="/Karte/05.png";
    }
    if($k07==6) {
        document.getElementById("$polje07").src="/Karte/06.png";
    }
    if($k07==7) {
        document.getElementById("$polje07").src="/Karte/14.png";
    }
    if($k07==8) {
        document.getElementById("$polje07").src="/Karte/15.png";
    }
    if($k07==9) {
        document.getElementById("$polje07").src="/Karte/16.png";
    }
    if($k07==10) {
        document.getElementById("$polje07").src="/Karte/17.png";
    }
    if($k07==11) {
        document.getElementById("$polje07").src="/Karte/18.png";
    }
    if($k07==12) {
        document.getElementById("$polje07").src="/Karte/19.png";
    }
    if($k07==13) {
        document.getElementById("$polje07").src="/Karte/27.png";
    }
    if($k07==14) {
        document.getElementById("$polje07").src="/Karte/28.png";
    }
    if($k07==15) {
        document.getElementById("$polje07").src="/Karte/29.png";
    }
    if($k07==16) {
        document.getElementById("$polje07").src="/Karte/30.png";
    }
    if($k07==17) {
        document.getElementById("$polje07").src="/Karte/31.png";
    }
    if($k07==18) {
        document.getElementById("$polje07").src="/Karte/32.png";
    }
    if($k07==19) {
        document.getElementById("$polje07").src="/Karte/40.png";
    }
    if($k07==20) {
        document.getElementById("$polje07").src="/Karte/41.png";
    }
    if($k07==21) {
        document.getElementById("$polje07").src="/Karte/42.png";
    }
    if($k07==22) {
        document.getElementById("$polje07").src="/Karte/43.png";
    }
    if($k07==23) {
        document.getElementById("$polje07").src="/Karte/44.png";
    }
    if($k07==24) {
        document.getElementById("$polje07").src="/Karte/45.png";
    }
    if($k07==25) {
        document.getElementById("$polje07").src="/Karte/08.png";
    }
    if($k07==26) {
        document.getElementById("$polje07").src="/Karte/09.png";
    }
    if($k07==27) {
        document.getElementById("$polje07").src="/Karte/10.png";
    }
    if($k07==28) {
        document.getElementById("$polje07").src="/Karte/11.png";
    }
    if($k07==29) {
        document.getElementById("$polje07").src="/Karte/12.png";
    }
    if($k07==30) {
        document.getElementById("$polje07").src="/Karte/13.png";
    }
    if($k07==31) {
        document.getElementById("$polje07").src="/Karte/21.png";
    }
    if($k07==32) {
        document.getElementById("$polje07").src="/Karte/22.png";
    }
    if($k07==33) {
        document.getElementById("$polje07").src="/Karte/23.png";
    }
    if($k07==34) {
        document.getElementById("$polje07").src="/Karte/24.png";
    }
    if($k07==35) {
        document.getElementById("$polje07").src="/Karte/25.png";
    }
    if($k07==36) {
        document.getElementById("$polje07").src="/Karte/26.png";
    }
    if($k07==37) {
        document.getElementById("$polje07").src="/Karte/34.png";
    }
    if($k07==38) {
        document.getElementById("$polje07").src="/Karte/35.png";
    }
    if($k07==39) {
        document.getElementById("$polje07").src="/Karte/36.png";
    }
    if($k07==40) {
        document.getElementById("$polje07").src="/Karte/37.png";
    }
    if($k07==41) {
        document.getElementById("$polje07").src="/Karte/38.png";
    }
    if($k07==42) {
        document.getElementById("$polje07").src="/Karte/39.png";
    }
    if($k07==43) {
        document.getElementById("$polje07").src="/Karte/47.png";
    }
    if($k07==44) {
        document.getElementById("$polje07").src="/Karte/48.png";
    }
    if($k07==45) {
        document.getElementById("$polje07").src="/Karte/49.png";
    }
    if($k07==46) {
        document.getElementById("$polje07").src="/Karte/50.png";
    }
    if($k07==47) {
        document.getElementById("$polje07").src="/Karte/51.png";
    }
    if($k07==48) {
        document.getElementById("$polje07").src="/Karte/52.png";
    }
}
function Karta08() {

    if($k08==1) {
        document.getElementById("$polje08").src="/Karte/01.png";
    }
    if($k08==2) {
        document.getElementById("$polje08").src="/Karte/02.png";
    }
    if($k08==3) {
        document.getElementById("$polje08").src="/Karte/03.png";
    }
    if($k08==4) {
        document.getElementById("$polje08").src="/Karte/04.png";
    }
    if($k08==5) {
        document.getElementById("$polje08").src="/Karte/05.png";
    }
    if($k08==6) {
        document.getElementById("$polje08").src="/Karte/06.png";
    }
    if($k08==7) {
        document.getElementById("$polje08").src="/Karte/14.png";
    }
    if($k08==8) {
        document.getElementById("$polje08").src="/Karte/15.png";
    }
    if($k08==9) {
        document.getElementById("$polje08").src="/Karte/16.png";
    }
    if($k08==10) {
        document.getElementById("$polje08").src="/Karte/17.png";
    }
    if($k08==11) {
        document.getElementById("$polje08").src="/Karte/18.png";
    }
    if($k08==12) {
        document.getElementById("$polje08").src="/Karte/19.png";
    }
    if($k08==13) {
        document.getElementById("$polje08").src="/Karte/27.png";
    }
    if($k08==14) {
        document.getElementById("$polje08").src="/Karte/28.png";
    }
    if($k08==15) {
        document.getElementById("$polje08").src="/Karte/29.png";
    }
    if($k08==16) {
        document.getElementById("$polje08").src="/Karte/30.png";
    }
    if($k08==17) {
        document.getElementById("$polje08").src="/Karte/31.png";
    }
    if($k08==18) {
        document.getElementById("$polje08").src="/Karte/32.png";
    }
    if($k08==19) {
        document.getElementById("$polje08").src="/Karte/40.png";
    }
    if($k08==20) {
        document.getElementById("$polje08").src="/Karte/41.png";
    }
    if($k08==21) {
        document.getElementById("$polje08").src="/Karte/42.png";
    }
    if($k08==22) {
        document.getElementById("$polje08").src="/Karte/43.png";
    }
    if($k08==23) {
        document.getElementById("$polje08").src="/Karte/44.png";
    }
    if($k08==24) {
        document.getElementById("$polje08").src="/Karte/45.png";
    }
    if($k08==25) {
        document.getElementById("$polje08").src="/Karte/08.png";
    }
    if($k08==26) {
        document.getElementById("$polje08").src="/Karte/09.png";
    }
    if($k08==27) {
        document.getElementById("$polje08").src="/Karte/10.png";
    }
    if($k08==28) {
        document.getElementById("$polje08").src="/Karte/11.png";
    }
    if($k08==29) {
        document.getElementById("$polje08").src="/Karte/12.png";
    }
    if($k08==30) {
        document.getElementById("$polje08").src="/Karte/13.png";
    }
    if($k08==31) {
        document.getElementById("$polje08").src="/Karte/21.png";
    }
    if($k08==32) {
        document.getElementById("$polje08").src="/Karte/22.png";
    }
    if($k08==33) {
        document.getElementById("$polje08").src="/Karte/23.png";
    }
    if($k08==34) {
        document.getElementById("$polje08").src="/Karte/24.png";
    }
    if($k08==35) {
        document.getElementById("$polje08").src="/Karte/25.png";
    }
    if($k08==36) {
        document.getElementById("$polje08").src="/Karte/26.png";
    }
    if($k08==37) {
        document.getElementById("$polje08").src="/Karte/34.png";
    }
    if($k08==38) {
        document.getElementById("$polje08").src="/Karte/35.png";
    }
    if($k08==39) {
        document.getElementById("$polje08").src="/Karte/36.png";
    }
    if($k08==40) {
        document.getElementById("$polje08").src="/Karte/37.png";
    }
    if($k08==41) {
        document.getElementById("$polje08").src="/Karte/38.png";
    }
    if($k08==42) {
        document.getElementById("$polje08").src="/Karte/39.png";
    }
    if($k08==43) {
        document.getElementById("$polje08").src="/Karte/47.png";
    }
    if($k08==44) {
        document.getElementById("$polje08").src="/Karte/48.png";
    }
    if($k08==45) {
        document.getElementById("$polje08").src="/Karte/49.png";
    }
    if($k08==46) {
        document.getElementById("$polje08").src="/Karte/50.png";
    }
    if($k08==47) {
        document.getElementById("$polje08").src="/Karte/51.png";
    }
    if($k08==48) {
        document.getElementById("$polje08").src="/Karte/52.png";
    }
}
function Karta09() {

    if($k09==1) {
        document.getElementById("$polje09").src="/Karte/01.png";
    }
    if($k09==2) {
        document.getElementById("$polje09").src="/Karte/02.png";
    }
    if($k09==3) {
        document.getElementById("$polje09").src="/Karte/03.png";
    }
    if($k09==4) {
        document.getElementById("$polje09").src="/Karte/04.png";
    }
    if($k09==5) {
        document.getElementById("$polje09").src="/Karte/05.png";
    }
    if($k09==6) {
        document.getElementById("$polje09").src="/Karte/06.png";
    }
    if($k09==7) {
        document.getElementById("$polje09").src="/Karte/14.png";
    }
    if($k09==8) {
        document.getElementById("$polje09").src="/Karte/15.png";
    }
    if($k09==9) {
        document.getElementById("$polje09").src="/Karte/16.png";
    }
    if($k09==10) {
        document.getElementById("$polje09").src="/Karte/17.png";
    }
    if($k09==11) {
        document.getElementById("$polje09").src="/Karte/18.png";
    }
    if($k09==12) {
        document.getElementById("$polje09").src="/Karte/19.png";
    }
    if($k09==13) {
        document.getElementById("$polje09").src="/Karte/27.png";
    }
    if($k09==14) {
        document.getElementById("$polje09").src="/Karte/28.png";
    }
    if($k09==15) {
        document.getElementById("$polje09").src="/Karte/29.png";
    }
    if($k09==16) {
        document.getElementById("$polje09").src="/Karte/30.png";
    }
    if($k09==17) {
        document.getElementById("$polje09").src="/Karte/31.png";
    }
    if($k09==18) {
        document.getElementById("$polje09").src="/Karte/32.png";
    }
    if($k09==19) {
        document.getElementById("$polje09").src="/Karte/40.png";
    }
    if($k09==20) {
        document.getElementById("$polje09").src="/Karte/41.png";
    }
    if($k09==21) {
        document.getElementById("$polje09").src="/Karte/42.png";
    }
    if($k09==22) {
        document.getElementById("$polje09").src="/Karte/43.png";
    }
    if($k09==23) {
        document.getElementById("$polje09").src="/Karte/44.png";
    }
    if($k09==24) {
        document.getElementById("$polje09").src="/Karte/45.png";
    }
    if($k09==25) {
        document.getElementById("$polje09").src="/Karte/08.png";
    }
    if($k09==26) {
        document.getElementById("$polje09").src="/Karte/09.png";
    }
    if($k09==27) {
        document.getElementById("$polje09").src="/Karte/10.png";
    }
    if($k09==28) {
        document.getElementById("$polje09").src="/Karte/11.png";
    }
    if($k09==29) {
        document.getElementById("$polje09").src="/Karte/12.png";
    }
    if($k09==30) {
        document.getElementById("$polje09").src="/Karte/13.png";
    }
    if($k09==31) {
        document.getElementById("$polje09").src="/Karte/21.png";
    }
    if($k09==32) {
        document.getElementById("$polje09").src="/Karte/22.png";
    }
    if($k09==33) {
        document.getElementById("$polje09").src="/Karte/23.png";
    }
    if($k09==34) {
        document.getElementById("$polje09").src="/Karte/24.png";
    }
    if($k09==35) {
        document.getElementById("$polje09").src="/Karte/25.png";
    }
    if($k09==36) {
        document.getElementById("$polje09").src="/Karte/26.png";
    }
    if($k09==37) {
        document.getElementById("$polje09").src="/Karte/34.png";
    }
    if($k09==38) {
        document.getElementById("$polje09").src="/Karte/35.png";
    }
    if($k09==39) {
        document.getElementById("$polje09").src="/Karte/36.png";
    }
    if($k09==40) {
        document.getElementById("$polje09").src="/Karte/37.png";
    }
    if($k09==41) {
        document.getElementById("$polje09").src="/Karte/38.png";
    }
    if($k09==42) {
        document.getElementById("$polje09").src="/Karte/39.png";
    }
    if($k09==43) {
        document.getElementById("$polje09").src="/Karte/47.png";
    }
    if($k09==44) {
        document.getElementById("$polje09").src="/Karte/48.png";
    }
    if($k09==45) {
        document.getElementById("$polje09").src="/Karte/49.png";
    }
    if($k09==46) {
        document.getElementById("$polje09").src="/Karte/50.png";
    }
    if($k09==47) {
        document.getElementById("$polje09").src="/Karte/51.png";
    }
    if($k09==48) {
        document.getElementById("$polje09").src="/Karte/52.png";
    }
}
function Karta10() {

    if($k10==1) {
        document.getElementById("$polje10").src="/Karte/01.png";
    }
    if($k10==2) {
        document.getElementById("$polje10").src="/Karte/02.png";
    }
    if($k10==3) {
        document.getElementById("$polje10").src="/Karte/03.png";
    }
    if($k10==4) {
        document.getElementById("$polje10").src="/Karte/04.png";
    }
    if($k10==5) {
        document.getElementById("$polje10").src="/Karte/05.png";
    }
    if($k10==6) {
        document.getElementById("$polje10").src="/Karte/06.png";
    }
    if($k10==7) {
        document.getElementById("$polje10").src="/Karte/14.png";
    }
    if($k10==8) {
        document.getElementById("$polje10").src="/Karte/15.png";
    }
    if($k10==9) {
        document.getElementById("$polje10").src="/Karte/16.png";
    }
    if($k10==10) {
        document.getElementById("$polje10").src="/Karte/17.png";
    }
    if($k10==11) {
        document.getElementById("$polje10").src="/Karte/18.png";
    }
    if($k10==12) {
        document.getElementById("$polje10").src="/Karte/19.png";
    }
    if($k10==13) {
        document.getElementById("$polje10").src="/Karte/27.png";
    }
    if($k10==14) {
        document.getElementById("$polje10").src="/Karte/28.png";
    }
    if($k10==15) {
        document.getElementById("$polje10").src="/Karte/29.png";
    }
    if($k10==16) {
        document.getElementById("$polje10").src="/Karte/30.png";
    }
    if($k10==17) {
        document.getElementById("$polje10").src="/Karte/31.png";
    }
    if($k10==18) {
        document.getElementById("$polje10").src="/Karte/32.png";
    }
    if($k10==19) {
        document.getElementById("$polje10").src="/Karte/40.png";
    }
    if($k10==20) {
        document.getElementById("$polje10").src="/Karte/41.png";
    }
    if($k10==21) {
        document.getElementById("$polje10").src="/Karte/42.png";
    }
    if($k10==22) {
        document.getElementById("$polje10").src="/Karte/43.png";
    }
    if($k10==23) {
        document.getElementById("$polje10").src="/Karte/44.png";
    }
    if($k10==24) {
        document.getElementById("$polje10").src="/Karte/45.png";
    }
    if($k10==25) {
        document.getElementById("$polje10").src="/Karte/08.png";
    }
    if($k10==26) {
        document.getElementById("$polje10").src="/Karte/09.png";
    }
    if($k10==27) {
        document.getElementById("$polje10").src="/Karte/10.png";
    }
    if($k10==28) {
        document.getElementById("$polje10").src="/Karte/11.png";
    }
    if($k10==29) {
        document.getElementById("$polje10").src="/Karte/12.png";
    }
    if($k10==30) {
        document.getElementById("$polje10").src="/Karte/13.png";
    }
    if($k10==31) {
        document.getElementById("$polje10").src="/Karte/21.png";
    }
    if($k10==32) {
        document.getElementById("$polje10").src="/Karte/22.png";
    }
    if($k10==33) {
        document.getElementById("$polje10").src="/Karte/23.png";
    }
    if($k10==34) {
        document.getElementById("$polje10").src="/Karte/24.png";
    }
    if($k10==35) {
        document.getElementById("$polje10").src="/Karte/25.png";
    }
    if($k10==36) {
        document.getElementById("$polje10").src="/Karte/26.png";
    }
    if($k10==37) {
        document.getElementById("$polje10").src="/Karte/34.png";
    }
    if($k10==38) {
        document.getElementById("$polje10").src="/Karte/35.png";
    }
    if($k10==39) {
        document.getElementById("$polje10").src="/Karte/36.png";
    }
    if($k10==40) {
        document.getElementById("$polje10").src="/Karte/37.png";
    }
    if($k10==41) {
        document.getElementById("$polje10").src="/Karte/38.png";
    }
    if($k10==42) {
        document.getElementById("$polje10").src="/Karte/39.png";
    }
    if($k10==43) {
        document.getElementById("$polje10").src="/Karte/47.png";
    }
    if($k10==44) {
        document.getElementById("$polje10").src="/Karte/48.png";
    }
    if($k10==45) {
        document.getElementById("$polje10").src="/Karte/49.png";
    }
    if($k10==46) {
        document.getElementById("$polje10").src="/Karte/50.png";
    }
    if($k10==47) {
        document.getElementById("$polje10").src="/Karte/51.png";
    }
    if($k10==48) {
        document.getElementById("$polje10").src="/Karte/52.png";
    }
}
function Karta11() {

    if($k11==1) {
        document.getElementById("$polje11").src="/Karte/01.png";
    }
    if($k11==2) {
        document.getElementById("$polje11").src="/Karte/02.png";
    }
    if($k11==3) {
        document.getElementById("$polje11").src="/Karte/03.png";
    }
    if($k11==4) {
        document.getElementById("$polje11").src="/Karte/04.png";
    }
    if($k11==5) {
        document.getElementById("$polje11").src="/Karte/05.png";
    }
    if($k11==6) {
        document.getElementById("$polje11").src="/Karte/06.png";
    }
    if($k11==7) {
        document.getElementById("$polje11").src="/Karte/14.png";
    }
    if($k11==8) {
        document.getElementById("$polje11").src="/Karte/15.png";
    }
    if($k11==9) {
        document.getElementById("$polje11").src="/Karte/16.png";
    }
    if($k11==10) {
        document.getElementById("$polje11").src="/Karte/17.png";
    }
    if($k11==11) {
        document.getElementById("$polje11").src="/Karte/18.png";
    }
    if($k11==12) {
        document.getElementById("$polje11").src="/Karte/19.png";
    }
    if($k11==13) {
        document.getElementById("$polje11").src="/Karte/27.png";
    }
    if($k11==14) {
        document.getElementById("$polje11").src="/Karte/28.png";
    }
    if($k11==15) {
        document.getElementById("$polje11").src="/Karte/29.png";
    }
    if($k11==16) {
        document.getElementById("$polje11").src="/Karte/30.png";
    }
    if($k11==17) {
        document.getElementById("$polje11").src="/Karte/31.png";
    }
    if($k11==18) {
        document.getElementById("$polje11").src="/Karte/32.png";
    }
    if($k11==19) {
        document.getElementById("$polje11").src="/Karte/40.png";
    }
    if($k11==20) {
        document.getElementById("$polje11").src="/Karte/41.png";
    }
    if($k11==21) {
        document.getElementById("$polje11").src="/Karte/42.png";
    }
    if($k11==22) {
        document.getElementById("$polje11").src="/Karte/43.png";
    }
    if($k11==23) {
        document.getElementById("$polje11").src="/Karte/44.png";
    }
    if($k11==24) {
        document.getElementById("$polje11").src="/Karte/45.png";
    }
    if($k11==25) {
        document.getElementById("$polje11").src="/Karte/08.png";
    }
    if($k11==26) {
        document.getElementById("$polje11").src="/Karte/09.png";
    }
    if($k11==27) {
        document.getElementById("$polje11").src="/Karte/10.png";
    }
    if($k11==28) {
        document.getElementById("$polje11").src="/Karte/11.png";
    }
    if($k11==29) {
        document.getElementById("$polje11").src="/Karte/12.png";
    }
    if($k11==30) {
        document.getElementById("$polje11").src="/Karte/13.png";
    }
    if($k11==31) {
        document.getElementById("$polje11").src="/Karte/21.png";
    }
    if($k11==32) {
        document.getElementById("$polje11").src="/Karte/22.png";
    }
    if($k11==33) {
        document.getElementById("$polje11").src="/Karte/23.png";
    }
    if($k11==34) {
        document.getElementById("$polje11").src="/Karte/24.png";
    }
    if($k11==35) {
        document.getElementById("$polje11").src="/Karte/25.png";
    }
    if($k11==36) {
        document.getElementById("$polje11").src="/Karte/26.png";
    }
    if($k11==37) {
        document.getElementById("$polje11").src="/Karte/34.png";
    }
    if($k11==38) {
        document.getElementById("$polje11").src="/Karte/35.png";
    }
    if($k11==39) {
        document.getElementById("$polje11").src="/Karte/36.png";
    }
    if($k11==40) {
        document.getElementById("$polje11").src="/Karte/37.png";
    }
    if($k11==41) {
        document.getElementById("$polje11").src="/Karte/38.png";
    }
    if($k11==42) {
        document.getElementById("$polje11").src="/Karte/39.png";
    }
    if($k11==43) {
        document.getElementById("$polje11").src="/Karte/47.png";
    }
    if($k11==44) {
        document.getElementById("$polje11").src="/Karte/48.png";
    }
    if($k11==45) {
        document.getElementById("$polje11").src="/Karte/49.png";
    }
    if($k11==46) {
        document.getElementById("$polje11").src="/Karte/50.png";
    }
    if($k11==47) {
        document.getElementById("$polje11").src="/Karte/51.png";
    }
    if($k11==48) {
        document.getElementById("$polje11").src="/Karte/52.png";
    }
}
