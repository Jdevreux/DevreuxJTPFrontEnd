//Chargement de la page
window.addEventListener("load", run);

function run() {
    //document.getElementById("le_formulaire").addEventListener("submit", verifier);
    $("#le_formulaire").submit(verifier);
}

/*
Verifie que la réponse est dans le tableau de ville.
 */
function verifier() {
    event.preventDefault();
    // reponse = document.getElementById("ville").value;
    reponse = $("#ville").val();
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
    $('body').append(document.createTextNode("Vous pouvez également visiter : "));
    var listVille = '<ul id="listVille"> ';
    lePays.forEach(uneVille => {
        if (uneVille != reponse) {
            listVille += '<li> ';
            listVille += uneVille + ' </li>';
        }
    });
    listVille += '</ul>';
    $('body').append(listVille);
}

/*
Ajouter la ville à la liste
 */
function ajouterVille() {
    event.preventDefault()
    var reponse2 = $("#ville").val();
    if (confirm("Voulez vous ajouter cette ville: " + reponse2 + " ?")) {
        // Code à éxécuter si le l'utilisateur clique sur "OK"
        var addVille = '<li>' + reponse2 + '</li>';
        $('#listVille').append(addVille);

    }
}

/*
Modifier le texte du bouton
 */
function modifierBouton() {
    //document.getElementById("bouton_envoyer").textContent = "Ajouter une autre destination";
    $('#bouton_envoyer').text("Ajouter une nouvelle destination");
    $("#le_formulaire").off("submit", verifier);
    $("#le_formulaire").submit(ajouterVille);

}

/*
Methode qui affiche le bon message en fonction de la ville.
 */
function verifierVille(uneVille, lesPays) {
    if (uneVille == reponse) {
        trouve = true;
        if (lesPays[0].includes(uneVille)) {
            $('body').append('<h2>Bienvenu en France</h2>');
            afficherList(lesPays[0]);
            modifierBouton();
        } else if (lesPays[1].includes(uneVille)) {
            $('body').append('<h2>Bienvenu en Belgique</h2>');
            afficherList(lesPays[1]);
            modifierBouton();
        } else if (lesPays[2].includes(uneVille)) {
            $('body').append('<h2>Bienvenu en Italie</h2>');
            afficherList(lesPays[2]);
            modifierBouton();
        } else if (lesPays[3].includes(uneVille)) {
            $('body').append('<h2>Bienvenu en Espagne</h2>');
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


