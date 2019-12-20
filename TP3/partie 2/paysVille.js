//Chargement de la page
window.addEventListener("load", run);

function run() {
    document.getElementById("le_formulaire").addEventListener("submit", verifier);
}

/*
Verifie que la réponse est dans le tableau de ville.
 */
function verifier() {
    event.preventDefault();
    reponse = document.getElementById("ville").value;
    comparaisonPays();
    if (trouve == false) {
        alert("Cette ville ne fait pas partie de notre catalogue")
        event.preventDefault();
    }
}

/*
Parcours des villes par pays
 */
function comparaisonPays() {
    var lesPays = [France, Belgique, Italie, Espagne];
    lesPays.forEach(unPays => unPays.forEach(uneVille => verifierVille(uneVille, lesPays)))
}

/*
Afficher la liste des villes visitable
 */
function afficherList(lePays) {
    var text = document.createTextNode("Vous pouvez également visiter : ");
    document.getElementById("body").appendChild(text);
    var ul = document.createElement("ul");
    ul.setAttribute("id","listVille")
    lePays.forEach(uneVille => {
        if (uneVille != reponse){
            var li = document.createElement("li");
            var texte = document.createTextNode(uneVille);
            li.appendChild(texte);
            ul.appendChild(li);
        }
    });
    document.getElementById("body").appendChild(ul);
}

/*
Ajouter la ville à la liste
 */
function ajouterVille() {
    event.preventDefault()
    var reponse2 = document.getElementById("ville").value;
    if ( confirm( "Voulez vous ajouter cette ville: "+ reponse2 + " ?") ) {
        // Code à éxécuter si le l'utilisateur clique sur "OK"
        var ul = document.getElementById("listVille")
        var li = document.createElement("li");
        var texte = document.createTextNode(reponse2);
        li.appendChild(texte);
        ul.appendChild(li)
        document.getElementById("body").appendChild(ul);
    } else {
        // On fait rien
    }
}

/*
Modifier le texte du bouton
 */
function modifierBouton() {
    document.getElementById("bouton_envoyer").textContent = "Ajouter une autre destination";
    document.getElementById("le_formulaire").removeEventListener("submit",verifier);
    document.getElementById("le_formulaire").addEventListener("submit",ajouterVille);
}

/*
Methode qui affiche le bon message en fonction de la ville.
 */
function verifierVille(uneVille, lesPays) {
    if (uneVille == reponse) {
        trouve = true;
        if (lesPays[0].includes(uneVille)) {
            var titre = document.createElement("h2");
            var texte = document.createTextNode("Bienvenu en France");
            titre.appendChild(texte);
            document.getElementById("body").appendChild(titre);
            afficherList(lesPays[0]);
            modifierBouton();
        } else if (lesPays[1].includes(uneVille)) {
            var titre = document.createElement("h2");
            var texte = document.createTextNode("Bienvenu en Belgique");
            titre.appendChild(texte);
            document.getElementById("body").appendChild(titre);
            afficherList(lesPays[1]);
            modifierBouton();
        } else if (lesPays[2].includes(uneVille)) {
            var titre = document.createElement("h2");
            var texte = document.createTextNode("Bienvenu en Italie");
            titre.appendChild(texte);
            document.getElementById("body").appendChild(titre);
            afficherList(lesPays[2]);
            modifierBouton();
        } else if (lesPays[3].includes(uneVille)) {
            var titre = document.createElement("h2");
            var texte = document.createTextNode("Bienvenu en Espagne");
            titre.appendChild(texte);
            document.getElementById("body").appendChild(titre);
            afficherList(lesPays[3]);
            modifierBouton();
        }
    }
}

//Variables
var France = ['Paris', 'Grenoble', 'Lille', 'Toulouse'];
var Belgique = ['Bruxelle', 'Nivelles', 'Mons', 'Namur'];
var Italie = ['Rome', 'Venise', 'Turin', 'Milan'];
var Espagne = ['Madrid', 'Barcelone', 'Seville', 'Palma'];
var reponse;
var trouve = false;


