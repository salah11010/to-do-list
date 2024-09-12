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


function addToList() {
    let nouveau = document.getElementById("nouveau").value;
    let choix = document.getElementById("choix").value;
    
    // Créer un nouvel élément <li> pour la tâche
    let newElement = document.createElement("li");
    
    // Créer un élément <p> pour le contenu de la tâche
    let newElementContent = document.createElement("p");
    newElementContent.textContent = nouveau;

    // Créer un bouton pour "modifier"
    let newElementButton = document.createElement("button");
    newElementButton.textContent = "modifier";

    // créer un boutton pour "supprimer"
    let newElementRemove = document.createElement("button");
    newElementRemove.textContent = "Supprimer";

    // Style du <li> pour aligner le texte et le bouton
    newElement.style.display = "flex";
    newElement.style.justifyContent = "space-between";
    newElement.style.alignItems = "center";
    newElementButton.style.backgroundColor = "#4CAF50"; // Couleur de fond
    newElementButton.style.color = "white"; // Couleur du texte
    newElementButton.style.border = "none"; // Pas de bordure
    newElementButton.style.padding = "12px 24px"; // Espacement interne
    newElementButton.style.textAlign = "center"; // Alignement du texte
    newElementButton.style.textDecoration = "none"; // Pas de soulignement
    newElementButton.style.display = "inline-block"; // Alignement en ligne
    newElementButton.style.fontSize = "16px"; // Taille du texte
    newElementButton.style.borderRadius = "8px"; // Coins arrondis
    newElementButton.style.transition = "background-color 0.3s ease"; // Transition douce pour la couleur de fond
    newElementButton.style.cursor = "pointer"; // Curseur en forme de main
    newElementButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"; // Ombre portée
    newElementRemove.style.backgroundColor = "#f44336"; // Couleur de fond rouge (suppression)
    newElementRemove.style.color = "white"; // Couleur du texte en blanc
    newElementRemove.style.border = "none"; // Pas de bordure
    newElementRemove.style.padding = "12px 24px"; // Espacement interne
    newElementRemove.style.textAlign = "center"; // Centrer le texte
    newElementRemove.style.textDecoration = "none"; // Pas de soulignement
    newElementRemove.style.display = "inline-block"; // Inline pour l'alignement
    newElementRemove.style.fontSize = "16px"; // Taille du texte
    newElementRemove.style.borderRadius = "8px"; // Coins arrondis
    newElementRemove.style.transition = "background-color 0.3s ease"; // Transition douce pour les changements
    newElementRemove.style.cursor = "pointer"; // Curseur en forme de main
    newElementRemove.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"; // Ombre portée
    newElementContent.style.paddingRight = "100px"
    // Ajouter le contenu et le bouton à l'élément <li>
    newElement.appendChild(newElementContent);
    newElement.appendChild(newElementButton);
    newElement.appendChild(newElementRemove);

    // Ajouter un événement au bouton "modifier"
    newElementButton.addEventListener("click", 
        function () {
    // Créer un champ input pour modifier le texte
            let inputForEdit = document.createElement("input");
            inputForEdit.type = "text";
            inputForEdit.value = newElementContent.textContent; // Assigner la valeur actuelle du texte

    // Créer un bouton "Enregistrer"
            let saveButton = document.createElement("button");
            saveButton.textContent = "Enregistrer"; // Utiliser textContent pour le texte du bouton

    // Remplacer le paragraphe et le bouton "modifier" par le champ texte et le bouton "Enregistrer"
            newElement.replaceChild(inputForEdit, newElementContent); // Remplacer le texte par le champ input
            newElement.replaceChild(saveButton, newElementButton); // Remplacer le bouton "modifier" par "Enregistr er"

        // Sauvegarder la nouvelle valeur lorsque l'on clique sur "Enregistrer"
            saveButton.addEventListener("click", function () {
            // Mettre à jour le texte avec la nouvelle valeur entrée
            newElementContent.textContent = inputForEdit.value;

             // Remplacer à nouveau l'input et le bouton "Enregistrer" par le paragraphe et le bouton "modifier"
            newElement.replaceChild(newElementContent, inputForEdit);
            newElement.replaceChild(newElementButton, saveButton);
        });
});

newElementRemove.addEventListener("click", 
    function(){
        newElement.removeChild(newElementButton);
        newElement.removeChild(newElementRemove);
        newElement.removeChild(newElementContent);
    }
)

         //Ajouter l'élément <li> à la liste correspondante
    if (choix === "important-and-urgency") {
            document.querySelector(".important-and-urgency-list").appendChild(newElement);
    } else if (choix === "important-not-urgency") {
        document.querySelector(".important-not-urgency-list").appendChild(newElement);
    } else if (choix === "not-important-not-urgency") {
        document.querySelector(".not-important-not-urgency-list").appendChild(newElement);
    } else if (choix === "not-important-but-urgency") {
        document.querySelector(".not-important-but-urgency-list").appendChild(newElement);
    }

    // Réinitialiser le champ d'entrée après ajout
    document.getElementById("nouveau").value = '';

    // Afficher la liste (si nécessaire)
    showList();
}

