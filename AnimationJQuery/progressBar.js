//Chargement de la page
window.addEventListener("load", run);



function run() {
    document.getElementById("moins").addEventListener("click", retirer);
    document.getElementById("plus").addEventListener("click", ajouter);
    document.getElementById("reset").addEventListener("click", reset);
}

function retirer() {
    event.preventDefault()
    var progressBar = document.getElementById("progressBar");

    if (progressBar.style.width == "100%"){
        progressBar.style.width = "75%";
        progressBar.style.backgroundColor = "orange"

        //Supprimer attribut
        progressBar.removeAttribute("aria-valuenow");

        //Reattribuer attribut
        progressBar.setAttribute("aria-valuenow","75");
    } else if (progressBar.style.width == "75%"){
        progressBar.style.width = "50%";
        progressBar.style.backgroundColor = "green"

        //Supprimer attribut
        progressBar.removeAttribute("aria-valuenow");

        //Reattribuer attribut
        progressBar.setAttribute("aria-valuenow","50");
    } else if (progressBar.style.width == "50%"){
        progressBar.style.width = "25%";
        progressBar.style.backgroundColor = "green"

        //Supprimer attribut
        progressBar.removeAttribute("aria-valuenow");

        //Reattribuer attribut
        progressBar.setAttribute("aria-valuenow","25");
    }else if (progressBar.style.width == "25%"){
        progressBar.style.width = "0%";

        //Supprimer attribut
        progressBar.removeAttribute("aria-valuenow");

        //Reattribuer attribut
        progressBar.setAttribute("aria-valuenow","0");
    }}

function ajouter() {
    event.preventDefault()
    var progressBar = document.getElementById("progressBar");

    if (progressBar.style.width == "0%"){
        progressBar.style.width = "25%";
        progressBar.style.backgroundColor = "green"

        //Supprimer attribut
        progressBar.removeAttribute("aria-valuenow");

        //Reattribuer attribut
        progressBar.setAttribute("aria-valuenow","25");
    } else if (progressBar.style.width == "25%"){
        progressBar.style.width = "50%";
        progressBar.style.backgroundColor = "green"

        //Supprimer attribut
        progressBar.removeAttribute("aria-valuenow");

        //Reattribuer attribut
        progressBar.setAttribute("aria-valuenow","50");
    } else if (progressBar.style.width == "50%"){
        progressBar.style.width = "75%";
        progressBar.style.backgroundColor = "orange"

        //Supprimer attribut
        progressBar.removeAttribute("aria-valuenow");

        //Reattribuer attribut
        progressBar.setAttribute("aria-valuenow","75");
    }else if (progressBar.style.width == "75%"){
        progressBar.style.width = "100%";
        progressBar.style.backgroundColor = "red"

        //Supprimer attribut
        progressBar.removeAttribute("aria-valuenow");

        //Reattribuer attribut
        progressBar.setAttribute("aria-valuenow","100");
    }
}

function reset() {
    event.preventDefault()
    var progressBar = document.getElementById("progressBar");

    progressBar.style.width="0%";

    //Supprimer attribut
    progressBar.removeAttribute("aria-valuenow");

    //Reattribuer attribut
    progressBar.setAttribute("aria-valuenow","0");
}