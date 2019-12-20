var destination = {
    pays : ["France","Italie"],
    description : ["Baguette et berret","O sole mio"],
    image : ["ressources/france.png","ressources/italie.png"],
    prix : ["très peu cher","très cher"]
};

//Récupérer la table
var table = document.getElementById("tableDestination");

for (var i = 0; i < destination.pays.length; i++){
    //Creation ligne
    var tr = document.createElement("tr");
    var textId = "ligne"+i;
    tr.setAttribute("id","textId")

    //Creation cellule
    var tdPays = document.createElement("td");
    var tdDescription = document.createElement("td");
    var tdPrix = document.createElement("td");
    var tdBouton = document.createElement("td");

    //Creations boutons
    var boutonReserver=document.createElement("button");
    var txt = document.createTextNode("Réserver");
    boutonReserver.appendChild(txt);
    var textClass = "ligne"+i;
    var boutonSupprimer=document.createElement("button");
    boutonSupprimer.setAttribute("id","boutonSupprimer")
    boutonSupprimer.setAttribute("class",textClass);
    var txt2 = document.createTextNode("Supprimer");
    boutonSupprimer.appendChild(txt2);

    //Recuperation de données
    var textPays = document.createTextNode(destination.pays[i]);
    var textDescription  = document.createTextNode(destination.description[i]);
    var textPrix  = document.createTextNode(destination.prix[i]);

    //Creation image
    var img=document.createElement("img");
    img.src = destination.image[i];

    //Insertion dans cellule
    tdPays.appendChild(textPays);
    tdPays.appendChild(document.createElement("br"));
    tdPays.appendChild(img);
    tdDescription.appendChild(textDescription);
    tdPrix.appendChild(textPrix);
    tdBouton.appendChild(boutonReserver);
    tdBouton.appendChild(document.createElement("br"));
    tdBouton.appendChild(boutonSupprimer);

    //Insertion dans lignes
    tr.appendChild(tdPays);
    tr.appendChild(tdDescription);
    tr.appendChild(tdPrix);
    tr.appendChild(tdBouton);

    table.appendChild(tr);

}

//Bouton Ajouter
var boutonAjouter=document.createElement("button");
var txt = document.createTextNode("Ajouter");
boutonAjouter.appendChild(txt);
var div = document.getElementById("boutonAjouter");
div.appendChild(boutonAjouter);
boutonAjouter.setAttribute("id","boutonAjouter")

//Chargement de la page
window.addEventListener("load", run);

function supprimerLigne() {

}

function run() {
    document.getElementById("boutonAjouter").addEventListener("click", formulaireAjout);
    document.getElementById("boutonSupprimer").addEventListener("click", supprimerLigne);
    document.getElementById("le_formulaire").addEventListener("submit", ajouter);
}

function formulaireAjout() {
    node = document.getElementById("foo");
    if (node.style.display=="none")
    {
        // Contenu caché, le montrer
        node.style.display = "block";
        node.style.height = "auto";			// Optionnel rétablir la hauteur
    }
    else
    {
        // Contenu visible, le cacher
        node.style.display = "none";
        node.style.height = "0";			// Optionnel libérer l'espace
    }
}

function ajouter() {
    pays = document.getElementById("pays").value;
    circuit = document.getElementById("circuit").value;
    prix = document.getElementById("prix").value;
    srcImage = document.getElementById("image").value;

    if ( confirm( "Voulez vous ajouter ce pays: "+ pays + " ?") ) {
        // Code à éxécuter si le l'utilisateur clique sur "OK"
        event.preventDefault()
        //Creer une ligne
        var tr1Ajout = document.createElement("tr")

        //Creer les cellules
        var td1Ajout = document.createElement("td");
        var td2Ajout = document.createElement("td");
        var td3Ajout = document.createElement("td");
        var td4Ajout = document.createElement("td");

        //Création de l'image
        var img=document.createElement("img");
        img.src = srcImage;

        //Récuperer les données
        var textPaysAjouter = document.createTextNode(pays);
        var textDescriptionAjouter = document.createTextNode(circuit);
        var textPrixAjouter = document.createTextNode(prix);

        //Créer bouton
        var bouton=document.createElement("button");
        var txt = document.createTextNode("Réserver");
        bouton.appendChild(txt);

        td1Ajout.appendChild(textPaysAjouter);
        td1Ajout.appendChild(document.createElement("br"));
        td1Ajout.appendChild(img);
        td2Ajout.appendChild(textDescriptionAjouter);
        td3Ajout.appendChild(textPrixAjouter);
        td4Ajout.appendChild(bouton);

        tr1Ajout.appendChild(td1Ajout);
        tr1Ajout.appendChild(td2Ajout);
        tr1Ajout.appendChild(td3Ajout);
        tr1Ajout.appendChild(td4Ajout);

        table.appendChild(tr1Ajout);

        formulaireAjout();
    } else {
        // On fait rien
    }



}