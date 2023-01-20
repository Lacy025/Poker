if($deljenje==0) {

    if($deljenje==0) {
        timerCekanje12 = setInterval(cekanje, 500);
    }    
    function cekanje() {
        console.log($deljenje);
    
        if($deljenje==11) {
            clearInterval(timerCekanje12);
            $deljenje=12;
            timerPobeda1 = setInterval($Pobeda1,500);
            timerPobeda2 = setInterval(Pobeda2,1000);
            Kasiranje();
        }
    }
    function $Pobeda1() {
        pobeda.style.visibility = "hidden";
    }
    function Pobeda2() {
        pobeda.style.visibility = "visible";
    }
    function Kasiranje() {
        $c = $c + 1;
        document.getElementById("credit").innerHTML = $c;
        $vrednostKredita();
        $d = $d - 1;
        document.getElementById("vrednostdobitka").innerHTML = $d;
        document.getElementById("audioCount1").play();
        audioCount1.currentTime = 0;

        timerProvera = setInterval(Provera,60);

        function Provera() {
            if((Math.round($d/100) != $d/100) && $d>0) {
                document.getElementById("audioCount1").play();
                audioCount1.currentTime = 0;
                Minusjedan();
            }
            else {
                clearInterval(timerProvera);
                if($d>0) {
                    Minussto();
                }
                if($d>0) {

                    timerMinussto = setInterval(Minussto,1000);
                }
                else {
                    pobeda.style.visibility = "visible";
                    clearInterval(timerPobeda1);
                    clearInterval(timerPobeda2);
                    document.getElementById("audioCount2").play();
                    audioCount2.currentTime = 0;
                    $deljenje = 0;
			        timerOdbrojano = setInterval(Odbrojano,1000);
                    timerNula = setInterval(Nula,1000);
                }
            }
        }
        function Minusjedan() {
            $c = $c + 1;
            document.getElementById("credit").innerHTML = $c;
            $vrednostKredita();
            $d = $d - 1;
            document.getElementById("vrednostdobitka").innerHTML = $d;
        }
        function Minussto() {
            if($d>99) {
                $c = $c + 100;
                document.getElementById("credit").innerHTML = $c;
                $vrednostKredita();
                $d = $d - 100;
                document.getElementById("vrednostdobitka").innerHTML = $d;
                document.getElementById("audioCount2").play();
                audioCount2.currentTime = 0;
            }
            else {
                clearInterval(timerMinussto);
                pobeda.style.visibility = "visible";
                clearInterval(timerPobeda1);
                clearInterval(timerPobeda2);
                timerOdbrojano = setInterval(Odbrojano,1000);
                timerNula = setInterval(Nula,100);
            }
        }
        function Nula() {
            clearInterval(timerNula);
            document.getElementById("audioIntro").play();
            audioIntro.currentTime = 0;
        }
        function Odbrojano() {
            clearInterval(timerOdbrojano);
            $deljenje = 0;
            $includeJs("Poker.js");
		}
    }  
}