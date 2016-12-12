function stocker() {
    //set storage
    localStorage.setItem('nom', document.getElementById("nom").value);
    localStorage.setItem('valeur', document.getElementById('valeur').value);
    localStorage.setItem('message', document.getElementById('message').value);
}
function lire() {
    //get storage
    var getnom = localStorage.getItem('nom');
    var getvaleur = localStorage.getItem('valeur');
    var getmessage = localStorage.getItem('message');

    document.getElementById('textnom').innerText = getnom;
    document.getElementById('textvaleur').innerText = getvaleur;
    document.getElementById('textmessage').innerText = getmessage;
}
function reset() {
    // clear localStorage
    localStorage.clear();

    document.getElementById('textnom').innerText = "";
    document.getElementById('textvaleur').innerText = "";
    document.getElementById('textmessage').innerText = "";
}

// style
function range() {
    // taille
    var taille = document.getElementById('size').value;

    document.getElementById('textmessage').style.fontSize = taille +"px";
    document.getElementById('nomrange').innerHTML = taille;

}
function couleur() {
    // couleur
    var hexa = document.getElementById('couleur').value;

    document.getElementById('textmessage').style.color = hexa;
}

    // align
function alignleft() {
    document.getElementById('textmessage').style.textAlign = "left";
}
function aligncentre() {
    document.getElementById('textmessage').style.textAlign = "center";
}
function alignrignt() {
    document.getElementById('textmessage').style.textAlign = "right";
}