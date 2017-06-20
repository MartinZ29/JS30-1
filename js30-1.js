$(document).ready(function(){
    window.addEventListener('keydown',function(e){
        $('').addClass('.onkey');
        audio.play();
        stop();
        $('').removeClass('.onkey');
    })
})