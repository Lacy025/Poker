if($deljenje==0) {
    timerCekanje11 = setInterval(cekanje, 500);
}    
function cekanje() {
    console.log($deljenje);

    if($deljenje==10) {
        clearInterval(timerCekanje11);
        
    }
    else {
        clearInterval(timerCekanje11);
    }

}
   
   

