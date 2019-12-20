//Chargement de la page
window.addEventListener("load", run);

function run() {
    document.getElementById("le_formulaire").addEventListener("submit", function () {
        verifier();
    })
}

/*
Verifie que la réponse est dans le tableau de ville.
 */
function verifier() {
    reponse = document.getElementById("ville").value;
    comparaisonPays();
    if (trouve == false) {
        alert("faux")
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
Methode qui affiche le bon message en fonction de la ville.
 */
function verifierVille(uneVille, lesPays) {
    if (uneVille == reponse) {
        trouve = true;
        if (lesPays[0].includes(uneVille)) {
            alert("Bienvenue en France");
        } else if (lesPays[1].includes(uneVille)) {
            alert("Bienvenue en Belgique");
        } else if (lesPays[2].includes(uneVille)) {
            alert("Bienvenue en Italie");
        } else if (lesPays[3].includes(uneVille)) {
            alert("Bienvenue en Espagne");
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


