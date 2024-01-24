console.log("coming")
const colors=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let btn=document.getElementById("btn");
let color=document.querySelector(".color");

btn.addEventListener("click",()=>{
    let hash='#';
    for(let i=0;i<6;i++){
        hash+=colors[getRandomNumber()];

    }
    document.body.style.backgroundColor=hash;
    color.textContent=hash;
})
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}