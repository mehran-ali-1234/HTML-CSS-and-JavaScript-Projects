const items=[...document.querySelectorAll('.number')];
console.log(items)
const updateCount=(element)=>{
const value=parseInt(element.dataset.value) //17140
const increment=Math.ceil(value/1000);     //18

let initialValue=0;
const increaseCount = setInterval(()=>{
    initialValue+=increment; //0+18=> 18=>18+18=>36=>36+18=>54
    console.log(initialValue) 
    if(initialValue>value)
    {
        element.textContent=`${value}`;
        clearInterval(increaseCount);
        return ;
    }    
    element.textContent=`${initialValue}`
},1)


}
items.forEach((item)=>{
    updateCount(item)
})
//updateCount(items[1])