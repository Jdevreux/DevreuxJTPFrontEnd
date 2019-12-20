var destination = {
    pays : ["France","Italie"],
    description : ["Baguette et berret","O sole mio"],
    image : ["ressources/france.png","ressources/italie.png"],
    prix : ["très peu cher","très cher"]
};

//Récupérer la table
var catalogue = document.getElementById("catalogue");

//Bouton Ajouter
var boutonAjouter=document.createElement("button");
var txt = document.createTextNode("Ajouter");
boutonAjouter.appendChild(txt);
var div = document.getElementById("boutonAjouter");
div.appendChild(boutonAjouter);
boutonAjouter.setAttribute("id","boutonAjouter");

for (var i = 0; i < destination.pays.length; i++){
    //Creation div col-sm
    var divCol = document.createElement("div");
    divCol.setAttribute("class","col-sm-3");

    //Creation card
    var card = document.createElement("div");
    card.setAttribute("class","card");
    card.style.width = "18rem";

    //Creation de l'image
    var cardImage = document.createElement("img");
    cardImage.setAttribute("class","card-img-top");
    cardImage.src = destination.image[i];

    //Creation cardBody
    var cardBody = document.createElement("div");
    cardBody.setAttribute("class","card-body");

    //Creation cardTitle
    var cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class","card-title");

    //Text du cardTitle
    var textCardTitle = document.createTextNode(destination.pays[i]);
    cardTitle.appendChild(textCardTitle);

    //Creation cardText
    var cardText = document.createElement("p");
    cardText.setAttribute("class","card-text");

    //Text cardText
    var textCardText = document.createTextNode(destination.description[i]);
    cardText.appendChild(textCardText)
    cardText.appendChild(document.createElement("br"))
    var prixCardText = document.createTextNode(destination.prix[i]);
    cardText.appendChild(prixCardText);

    //Creation bouton
    var btnReserver = document.createElement("a");
    btnReserver.setAttribute("class","btn btn-primary");
    btnReserver.appendChild(document.createTextNode("Réserver"));

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(btnReserver);

    card.appendChild(cardImage);
    card.appendChild(cardBody);
    divCol.appendChild(card);

    catalogue.appendChild(divCol);
}


//Chargement de la page
window.addEventListener("load", run);

function supprimerLigne() {

}

function run() {
    document.getElementById("boutonAjouter").addEventListener("click", formulaireAjout);
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

        //Creation div col-sm
        var divCol = document.createElement("div");
        divCol.setAttribute("class","col-sm-3");

        //Creation card
        var card = document.createElement("div");
        card.setAttribute("class","card");
        card.style.width = "18rem";

        //Creation de l'image
        var cardImage = document.createElement("img");
        cardImage.setAttribute("class","card-img-top");
        cardImage.src = srcImage;

        //Creation cardBody
        var cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body");

        //Creation cardTitle
        var cardTitle = document.createElement("h5");
        cardTitle.setAttribute("class","card-title");

        //Text du cardTitle
        var textCardTitle = document.createTextNode(pays);
        cardTitle.appendChild(textCardTitle);

        //Creation cardText
        var cardText = document.createElement("p");
        cardText.setAttribute("class","card-text");

        //Text cardText
        var textCardText = document.createTextNode(circuit);
        cardText.appendChild(textCardText)
        cardText.appendChild(document.createElement("br"))
        var prixCardText = document.createTextNode(prix);
        cardText.appendChild(prixCardText);

        //Creation bouton
        var btnReserver = document.createElement("a");
        btnReserver.setAttribute("class","btn btn-primary");
        btnReserver.appendChild(document.createTextNode("Réserver"));

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(btnReserver);

        card.appendChild(cardImage);
        card.appendChild(cardBody);
        divCol.appendChild(card);

        catalogue.appendChild(divCol);


        formulaireAjout();
    } else {
        // On fait rien
    }



}