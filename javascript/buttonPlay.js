buttonPlay = document.getElementById("play")
videoDemo = document.getElementById("videoDemo");

function playPause(){

    /** le bouton PAUSE/PLAY disparait après 1,75 seconde de l'action sur le bouton */
    setTimeout(()=>{
        buttonPlay.style.display="none";

    },1750)

    if(videoDemo.paused){
        videoDemo.play();
    }
    else{
        videoDemo.pause();
    }

    
}



/*

    // Lorsque la souris survole dans la surface de la video, le bouton PAUSE/PLAY est visible


    videoDemo.addEventListener('mousemove', ()=>{
        buttonPlay.style.display="flex";


    });


    // Lorsque la souris survole dans la surface de la video, le bouton PAUSE/PLAY est invisible


    videoDemo.addEventListener('mouseleave', ()=>{
        buttonPlay.style.display="none";

    });

    buttonPlay.addEventListener('mousemove', ()=>{
        buttonPlay.style.display="flex";

    });

    buttonPlay.addEventListener('mouseleave', ()=>{
        buttonPlay.style.display="none";


    });
*/