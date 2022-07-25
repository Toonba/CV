//Afficher l'article formation quand on click sur le lien formation du nav 
document.getElementById('linkFormation').addEventListener('click', (e) => {
    document.getElementById("formation").classList.add("afficher");
    document.getElementById("miseEnForme").style.filter = "blur(20px)";
});

//Afficher l'article Experience  quand on click sur le lien Experience  du nav 
document.getElementById('linkExperience').addEventListener('click', (e) => {
    document.getElementById("experience").classList.add("afficher");
    document.getElementById("miseEnForme").style.filter = "blur(20px)";
    document.getElementsById("background").style.filter = "blur(20px)";
});

//Afficher l'article Compétence quand on click sur le lien Compétence du nav 
document.getElementById('linkCompetence').addEventListener('click', (e) => {
    document.getElementById("competence").classList.add("afficher");
    document.getElementById("miseEnForme").style.filter = "blur(20px)";
});

//Afficher l'article contacter quand on click sur le lien contacter du nav 
document.getElementById('linkContacter').addEventListener('click', (e) => {
    document.getElementById("contacter").classList.add("afficher");
    document.getElementById("miseEnForme").style.filter = "blur(20px)";
});


//Fermer l'article avec la croix
document.getElementsByClassName('croix')[0].addEventListener('click', (e) => {
    document.getElementById('formation').classList.remove("afficher");
    document.getElementById("miseEnForme").style.visibility = "visible";
    document.getElementById("miseEnForme").style.filter = "blur(0px)"
});

document.getElementsByClassName('croix')[1].addEventListener('click', (e) => {
    document.getElementById('experience').classList.remove("afficher");
    document.getElementById("miseEnForme").style.visibility = "visible";
    document.getElementById("miseEnForme").style.filter = "blur(0px)"
});

document.getElementsByClassName('croix')[2].addEventListener('click', (e) => {
    document.getElementById('competence').classList.remove("afficher");
    document.getElementById("miseEnForme").style.visibility = "visible";
    document.getElementById("miseEnForme").style.filter = "blur(0px)"
});

document.getElementsByClassName('croix')[3].addEventListener('click', (e) => {
    document.getElementById('contacter').classList.remove("afficher");
    document.getElementById("miseEnForme").style.visibility = "visible";
    document.getElementById("miseEnForme").style.filter = "blur(0px)"
});






/* I have to work on this JS script to be able to make appears or disapears the article on my webpage*/
/* Apperement .toggle permet de supprimer, ajouter une class à une balise, est ce que je pourrais pas m'en servir pour 
ajouter une classe à mes articles que je veux faire apparaitre sur mes liens genre 
si je clic j'ajoute la classe .active qui aura des paramètre en CSS qui permettrons de la faire apparaitre comme je veux*/
