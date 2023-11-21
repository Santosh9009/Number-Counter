// const num=document.querySelector(".num");

// const plus=document.querySelector(".incre");
// const reset=document.querySelector(".reset");
// const minus=document.querySelector(".decre");

// plus.addEventListener("click",function(){
// const x=parseInt(num.textContent);
// num.textContent=x+1;
// num.style.color="#39ff14";
// })

// minus.addEventListener("click",function(){
//   const x=parseInt(num.textContent);
//   num.textContent=x-1;
//   num.style.color="red";
// })
// reset.addEventListener("click",function(){
//   const x=parseInt(num.textContent);
//   num.textContent=0;
//   num.style.color="black";
// })


let count=0;

const num=document.querySelector(".num");
const btns=document.querySelectorAll(".btn");

btns.forEach(function(btn){
  btn.addEventListener("click",function(e){
    const list =e.currentTarget.classList;
    if(list.contains("incre")){
      count++; 
    }else if(list.contains("decre")){
      count--;
    }else{
      count=0;
    }

    if(count>0){
      num.style.color="#39ff14";
    }else if(count<0){
      num.style.color="red";
    }else{
      num.style.color="black";
    }
    num.textContent=count;
  })
})