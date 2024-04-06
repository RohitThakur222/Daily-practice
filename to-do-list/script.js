const inputBox = document.querySelector("#input-box")
const listContainer = document.querySelector("#list-container")
const clBtn = document.querySelector("#button")

// Event listener for add task button
clBtn.addEventListener("click",function(){
    if(inputBox.value === '')
    {
        alert("Write something !")
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputBox.value=''
    saveData()
    
})
  // Event listener for marking task as completed
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked")
        saveData()
    }
      // Event listener for removing task
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove()
        saveData()

    }
    
} ,false )

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()