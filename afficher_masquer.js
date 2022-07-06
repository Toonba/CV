let linkFormation = document.getElementById("linkFormation");
let formation = document.getElementById("formation");
let linkExperience = document.getElementById("linkExperience");
let experience = document.getElementById("experience");
let linkCompetence = document.getElementById("linkCompetence");
let competence = document.getElementById("competence");
let miseEnForme = document.getElementById("miseEnForme");
let croix = document.getElementById("croix");

function togg1(){
  miseEnForme.style.visibility = "hidden";
  formation.style.display = "block";
};
linkFormation.onclick = togg1;

function togg2(){
  miseEnForme.style.visibility = "hidden";
  experience.style.display = "block";
};
linkExperience.onclick = togg2;

function togg3(){
  miseEnForme.style.visibility = "hidden";
  competence.style.display = "block";
};

linkCompetence.onclick = togg3;

function close1() {
  miseEnForme.style.visibility="visible"
  formation.style.display = "none";
}
croix.onclick = close1

/* I have to work on this JS script to be able to make appears or disapears the article on my webpage*/
