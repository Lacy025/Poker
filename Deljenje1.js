let $k1;
let $k2;
let $k3;
let $k4;
let $k5;

let $n1;
let $n2;
let $n3;
let $n4;
let $n5;

let $b1;
let $b2;
let $b3;
let $b4;
let $b5;

if($deljenje==0) {

    if($deljenje==0) {
        timerCekanje1 = setInterval(cekanje, 500);
    }    
    function cekanje() {
        console.log($deljenje);
    
        if($deljenje==1) {
            clearInterval(timerCekanje1);
            prvoDeljenje();
            console.log($k1);
            console.log($k2);
            console.log($k3);
            console.log($k4);
            console.log($k5);
            $deljenje = 2;
        }
    
    }
    function prvoDeljenje() {
    
        while($k1==$k2||$k1==$k3||$k1==$k4||$k1==$k5||$k2==$k3||
            $k2==$k4||$k2==$k5||$k3==$k4||$k3==$k5||$k4==$k5) {
            $k1 = Math.floor(Math.random() * 52);
            $k2 = Math.floor(Math.random() * 52);
            $k3 = Math.floor(Math.random() * 52);
            $k4 = Math.floor(Math.random() * 52);
            $k5 = Math.floor(Math.random() * 52);
        }
    
    }

}