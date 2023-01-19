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

        Biranjekarata();
    
        while($k1==$k2||$k1==$k3||$k1==$k4||$k1==$k5||$k2==$k3||
            $k2==$k4||$k2==$k5||$k3==$k4||$k3==$k5||$k4==$k5) {
             
            Biranjekarata();
        }
    
    }
    function Biranjekarata() {

        $k1 = Math.floor(Math.random() * 53);
        $k2 = Math.floor(Math.random() * 53);
        $k3 = Math.floor(Math.random() * 53);
        $k4 = Math.floor(Math.random() * 53);
        $k5 = Math.floor(Math.random() * 53);
        /*
        $k1=1;
        $k2=3;
        $k3=6;
        $k4=15;
        $k5=14;
        */
    }

}