const input = document.getElementById("taskWriting");
const button = document.getElementById("taskButton");
const list = document.getElementById("taskList");
const error = document.getElementById("divERROR");
const p = document.createElement("p");
button.addEventListener("click", function(){
   
    const inputText = input.value;
     if(inputText == ""){
        p.textContent = "Enter a text here, old man";
        error.appendChild(p);
        return;
    }
    const li = document.createElement("li");
    li.textContent = inputText;
    list.appendChild(li);
    input.value = "";
    
});
input.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        button.click();
    }
})
