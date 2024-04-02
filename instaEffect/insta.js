const a = document.querySelector(".btn")
const relation = document.getElementById("heading")
const b = document.querySelector("#box")
const c = document.querySelector("i")
var flag=0;
b.addEventListener("dblclick",function(){
  c.style.transform="translate(-50%,-50%)scale(3)"
  c.style.opacity=0.8
  setTimeout(function(){
    c.style.opacity=0
  },1000)
  setTimeout(function(){
    c.style.transform="translate(-50%,-50%)scale(0)"
  },2000)
})
a.addEventListener("click",function(){
  console.log("hello")
  if(flag == 0)
  { 
      
    relation.innerHTML= " Freinds"
    relation.style.color="green"
    flag= 1
  }
  else{
      
    relation.innerHTML= " Stranger"
    relation.style.color="red"
    flag=0
  }
})
