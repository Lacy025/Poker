if($deljenje==0) {
    timerCekanje9 = setInterval(cekanje, 500);
}    
function cekanje() {
    console.log($deljenje);

    if($deljenje==10) {
        clearInterval(timerCekanje9);
        
    }
    else {
        clearInterval(timerCekanje9);
    }

}
   
   

