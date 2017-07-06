$(document).ready(function(){
    window.addEventListener('keydown',function(e){
        const audio = document.querySelector('audio[data-key="${e.keyCode}"]');
        const key = document.querySelector('.key[data-key="${e.keyCode}"]');
        console.log(audio);
        if (!audio) return;
        audio.play();
        audio.currentTime = 0;
    

        $('.key').addClass('.onkey');
        
        $('.key').removeClass('.onkey');
    })
})