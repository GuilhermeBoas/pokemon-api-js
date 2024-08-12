const btns = document.querySelectorAll('.menu-lateral button')
const videosFundo = document.querySelectorAll('.background-animado video')

btns.forEach(btn => {
    btn.addEventListener('click',()=> mudarFundo(btn.id));
});

function mudarFundo(tema){
    videosFundo.forEach(video => video.classList.remove('sumir'));
    videosFundo.forEach(video => {
        video.classList == tema? '': video.classList.add('sumir')   
    });
    
}