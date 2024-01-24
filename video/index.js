let videoContainer=document.querySelector(".video-container");
let switchBtn=document.querySelector(".switch-btn");
switchBtn.addEventListener("click",()=>{
    if(!switchBtn.classList.contains("slide")){
        switchBtn.classList.add("slide");
        videoContainer.pause();
    }
    else{
        switchBtn.classList.remove("slide");
        videoContainer.play();
    }
})

let preloader=document.querySelector(".preloader");
window.addEventListener("load",()=>{
    if(!preloader.classList.contains("hide-preloader")){
        preloader.classList.add("hide-preloader")
    }
})