let dé = document.getElementById("dé")
let nbAleatoire = 0
// variables joueur 1
let joueur1 = document.getElementById("joueur-1")
let round1 = document.getElementById("round-j1")
let rndScore1 = 0
let global1 = document.getElementById("global-j1")
let gblScore1 = 0
// variables joueur 2
let joueur2 = document.getElementById("joueur-2")
let round2 = document.getElementById("round-j2")
let rndScore2 = 0
let global2 = document.getElementById("global-j2")
let gblScore2 = 0
// variable pour le joueur actif
let joueurActif = true
// variable boutons
let lancerDé = document.getElementById("lancer")
let hold = document.getElementById("hold")

function NombreAleatoire() {
    nbAleatoire = Math.floor(Math.random() * 6) + 1
}

function CreationDé() {
    switch (nbAleatoire) {
        case 1:
            dé.innerHTML = "&#9856;"
            break;
        case 2:
            dé.innerHTML = "&#9857;"
            break;
        case 3:
            dé.innerHTML = "&#9858;"
            break;
        case 4:
            dé.innerHTML = "&#9859;"
            break;
        case 5:
            dé.innerHTML = "&#9860;"
            break;
        case 6:
            dé.innerHTML = "&#9861;"
            break;
    }
}
// fonctions concernant le tour des joueurs
// Si joueurActif = true --> Au tour du joueur 1
function TourJoueur() {
    if (joueurActif === true) {
        joueur1.style.background = "rgba(139, 0, 0, 0.393)"
        joueur2.style.background = "transparent"
    } else {
        joueur2.style.background = "rgba(139, 0, 0, 0.393)"
        joueur1.style.background = "transparent"
    }
}
// fonction --> si le dé tombe sur 1
function SwitchJoueur() {
    if (nbAleatoire === 1 && joueurActif === true) {
        joueurActif = false
        rndScore1 = 0
        round1.innerHTML = rndScore1
    } else if (nbAleatoire === 1 && joueurActif === false) {
        joueurActif = true
        rndScore2 = 0
        round2.innerHTML = rndScore2
    }
}
// fonction ground
function RoundScore() {
    if (joueurActif === true) {
        rndScore1 = rndScore1 + nbAleatoire
        round1.innerHTML = rndScore1
    } else {
        rndScore2 = rndScore2 + nbAleatoire
        round2.innerHTML = rndScore2
    }
}
// fonction du bouton hold
function HoldBtn() {
    if (joueurActif === true) {
        gblScore1 = gblScore1 + rndScore1
        rndScore1 = 0
        round1.innerHTML = rndScore1
        global1.innerHTML = gblScore1
        joueurActif = false
    } else {
        gblScore2 = gblScore2 + rndScore2
        rndScore2 = 0
        round2.innerHTML = rndScore2
        global2.innerHTML = gblScore2
        joueurActif = true
    }
}
// fonction pour le gagnant
function Result() {
    if (gblScore1 >= 100) {
        alert("Le joueur 1 a gagné!")
        document.location.href = "Index.html"
    } else if (gblScore2 >= 100) {
        alert("Le joueur 2 a gagné!")
        document.location.href = "Index.html"
    }
}
//appel de la fonction pour que ce soit au tour du Joueur 1
TourJoueur()

hold.addEventListener('click', () => {
    HoldBtn()
    TourJoueur()
    Result()
})

lancerDé.addEventListener('click', () => {
    NombreAleatoire()
    CreationDé()
    RoundScore()
    SwitchJoueur()
    TourJoueur()
})
