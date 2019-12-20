// Variables
var reponse;
var essai = 0;
var nb2 = getNbAleatoire(); // Génération d'un nombre aléatoire


window.addEventListener("load",runGame);

function runGame() {
    while (!isEquals() && essai != 3) {
        var rep = window.prompt("Devine le numéro auquel je pense ( Entre 1 et 10 )\n Attention tu as trois chances !");
        reponse = parseInt(rep);
        comparaison();
    }

    if (isEquals()) {
        window.confirm("Bravo !");
    }

    if (essai == 3) {
        window.confirm("Perdu...")
    }
}

//Compare les nombres
function comparaison() {
    if (isSuperior()) {
        essai++;
        window.alert("Trop haut");
    } else if (isInferior()) {
        essai++
        window.alert("Trop bas");
    }
}

// Verifie si c'est egal
function isEquals() {
    return reponse == nb2;
}

// Verifie si c'est strictement supérieur
function isSuperior() {
    return reponse > nb2;
}

// Verifie si c'est strictement inférieur
function isInferior() {
    return reponse < nb2;
}

//Renvoie un nombre aléatoire entre 0 et 10 ( 11 non inclus )
function getNbAleatoire() {
    return Math.floor(Math.random() * 11);
}