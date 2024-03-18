const inputArea = document.getElementById("input-area");
const listContain = document.getElementById("list-contain");

function addTask(){
    if(inputArea.value === ''){
        alert("You'll wanna write something here!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputArea.value;
        listContain.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputArea.value = "";
}

listContain.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContain.innerHTML);
}
function showTask(){
    listContain.innerHTML = localStorage.getItem("data");
}
showTask();