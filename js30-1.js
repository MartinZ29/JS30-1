$(document).ready(function(){
    window.addEventListener('keydown',function(e){
        $('').addClass('.onkey');
        play();
        stop();
        $('').removeClass('.onkey');
    })
})