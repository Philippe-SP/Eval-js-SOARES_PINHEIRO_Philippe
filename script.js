let dé = document.getElementById("dé")
let nbAleatoire = 0
// variables joueur 1
let joueur1 = document.getElementById("joueur-1")
let ground1 = document.getElementById("ground-j1")
let gndScore1 = 0
let global1 = document.getElementById("global-j1")
let gblScore1 = 0
// variables joueur 2
let joueur2 = document.getElementById("joueur-2")
let ground2 = document.getElementById("ground-j2")
let gndScore2 = 0
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
        gndScore1 = 0
        ground1.innerHTML = gndScore1
    } else if (nbAleatoire === 1 && joueurActif === false) {
        joueurActif = true
        gndScore2 = 0
        ground2.innerHTML = gndScore2
    }
}
// fonction ground
function GroundScore() {
    if (joueurActif === true) {
        gndScore1 = gndScore1 + nbAleatoire
        ground1.innerHTML = gndScore1
    } else {
        gndScore2 = gndScore2 + nbAleatoire
        ground2.innerHTML = gndScore2
    }
}
// fonction du bouton hold
function HoldBtn() {
    if (joueurActif === true) {
        gblScore1 = gblScore1 + gndScore1
        gndScore1 = 0
        ground1.innerHTML = gndScore1
        global1.innerHTML = gblScore1
        joueurActif = false
    } else {
        gblScore2 = gblScore2 + gndScore2
        gndScore2 = 0
        ground2.innerHTML = gndScore2
        global2.innerHTML = gblScore2
        joueurActif = true
    }
}
//appel de la fonction pour que ce soit au tour du Joueur 1
TourJoueur()

hold.addEventListener('click', () => {
    HoldBtn()
    TourJoueur()
})

lancerDé.addEventListener('click', () => {
    NombreAleatoire()
    CreationDé()
    GroundScore()
    SwitchJoueur()
    TourJoueur()
})