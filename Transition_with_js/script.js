var head=document.querySelectorAll(".heading")
var Eimg = document.querySelector("#h1 img")
head.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity = 1
    
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity = 0
    
    })
    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left= dets.x+"px"
    
    })


})
