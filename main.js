let sound = new Audio('./sounds/Scared of the Dark.mp3');

playBtn.addEventListener('click', ()=>{
    sound.play();
});

pauseBtn.addEventListener('click', ()=>{
    sound.pause();
});