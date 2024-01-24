let btn=document.querySelectorAll(".question-btn");
btn.forEach((buttons)=>{
buttons.addEventListener("click",(element)=>{
//console.log(element.currentTarget)
let question=element.currentTarget.parentElement.parentElement;
// if(question.classList.contains("show-text")){
//     question.classList.remove("show-text")
// }
// else{
//     question.classList.add("show-text")
// }
let question1=document.querySelector('minus-icon').parentElement.parentElement;
console.log(question)
question.classList.toggle("show-text")
})
})
