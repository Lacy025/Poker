waiting_0 = setInterval(Cekanje1, 200);
  
function Cekanje1() {
    console.log($deal);

    if($deal==1) {
        clearInterval(waiting_0);
        $First_Deal = setInterval(First_Deal,100);
    }

}
function First_Deal() {
    clearInterval($First_Deal);
    Biranjekarata();

    while($k1==$k2||$k1==$k3||$k1==$k4||$k1==$k5||$k2==$k3||
        $k2==$k4||$k2==$k5||$k3==$k4||$k3==$k5||$k4==$k5) {
            
        Biranjekarata();
    }
    console.log($k1);
    console.log($k2);
    console.log($k3);
    console.log($k4);
    console.log($k5);
    $deal = 2;
}
function Biranjekarata() {
    
    $k1 = Math.floor(Math.random() * 53);
    $k2 = Math.floor(Math.random() * 53);
    $k3 = Math.floor(Math.random() * 53);
    $k4 = Math.floor(Math.random() * 53);
    $k5 = Math.floor(Math.random() * 53);
   
}