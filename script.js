let play = document.querySelector('.play');
let pause = document.querySelector('.pause');

play.addEventListener('click', () =>{
    if(pause.classList.contains('seePause')){
        pause.classList.toggle('seePause')
    }
})