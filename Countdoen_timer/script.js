const endDate = "9 April 2024 18:30"
document.getElementById("end-date").innerText= endDate
const input = document.querySelectorAll("input")

function clock()
{
    const end =new Date(endDate)
    const now = new Date()
    console.log(end,now);
    const diff = (end - now) / 1000
    if(diff < 0) return;
    
    //days
    input[0].value=(Math.floor(diff/3600/24))
    //hour
    input[1].value =(Math.floor(diff / 3600) % 24)
    //minutes
    input[2].value =(Math.floor(diff / 60) % 60)
    //second
    input[3].value =(Math.floor(diff % 60))
    //convert in days

}
clock()
setInterval(() => {
    clock() 
}, 1000);
