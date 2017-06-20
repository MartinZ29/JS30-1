$(document).ready(function(){
    window.addEventListener('keydown',function(e){
        $('.key').addClass('.onkey');
        audio.play();
        stop();
        $('.key').removeClass('.onkey');
    })
})