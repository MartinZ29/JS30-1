$(document).ready(function(){
    window.addEventListener('keydown',function(e){
        const audio = document.querySelector('audio[data-key="${e.keyCode}"]');
        console.log(audio);
        if(!audio) return;
        const key = 

        $('.key').addClass('.onkey');
        // audio.play();
        // stop();
        $('.key').removeClass('.onkey');
    })
})