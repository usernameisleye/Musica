const playBtn = document.querySelector('.music-items i');
const trackImg = document.querySelector('.track-img');

playBtn.addEventListener('click', playAnime)

function playAnime(){
    playBtn.classList.toggle('fa-circle-pause')
    playBtn.classList.toggle('fa-circle-play')

    if(playBtn.classList.contains('fa-circle-pause')){
        trackImg.classList.add('animate');
    }else{
        trackImg.classList.remove('animate');
    }
}