var importantandurgency = document.getElementsByClassName("important-and-urgency");
var importantnoturgency = document.getElementsByClassName("important-not-urgency");
var notimportantnoturgency = document.getElementsByClassName("not-important-not-urgency");
var notimportantbuturgency = document.getElementsByClassName("not-important-but-urgency");

function showList(){
    for (let j = 0; j < importantandurgency.length; j++){
        importantandurgency[j].style.display = "block";
        importantnoturgency[j].style.display = "block";
        notimportantnoturgency[j].style.display = "block";
        notimportantbuturgency[j].style.display = "block";
    }
}


function addToList(){
    let nouveau = document.getElementById("nouveau").value; 
    let choix = document.getElementById("choix").value;  
    let newElement = document.createElement("li");
    newElement.textContent = nouveau;
    if (choix === "important-and-urgency") {
        document.querySelector(".important-and-urgency-list").appendChild(newElement);
    } else if (choix === "important-not-urgency") {
        document.querySelector(".important-not-urgency-list").appendChild(newElement);
    } else if (choix === "not-important-not-urgency") {
        document.querySelector(".not-important-not-urgency-list").appendChild(newElement);
    } else if (choix === "not-important-but-urgency") {
        document.querySelector(".not-important-but-urgency-list").appendChild(newElement);
    }

    showList();
}
