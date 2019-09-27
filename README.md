# Traitement-de-Donn-es-Embarqu-

Contrôle de projet via leap motion:             Florian Bouissonnié

Ce projet consiste à manipuler des projets de robotique à l'aide des mouvements de la main.
Pour le réaliser nous utiliserons la leap motion comme matériel.
Il faudra donc concevoir le logiciel permettant d'envoyer des signaux et différents types de données permettant
de contrôler les autres projets convenablement à partir des mouvements de la main.
Une interface affichant le squelette des mains sera aussi nécessaire.

Le contrôle de plusieurs projets sera possible:

-Un drone à déplacer et manipuler sa caméra.
-Projet légo (à compléter)

les composants du programme sont donc :

Allumage et extinction du programme.
Sélection du projet à contrôler via interface.
Gestion de l'affichage des squelettes des mains.
Interprétation des signes de la main.
Envoi des données vers les projets distants.


Structure de données à envoyer

tireur motorisé en lego:

On envoie: 
- un flottant correspondant au moteur gauche actionnant le pied gauche (pourcentage de puissance du moteur) pouvant être négatif pour la marche arrière.
- un flottant correspondant au moteur droit actionnant le pied droit (pourcentage de puissance du moteur) pouvant être négatif pour la marche arrière.
- un flottant correspondant à un moteur permettant de diriger le canon (pourcentage).
- un boolean pour tirer.
- un boolean pour passer en mode tir automatique.

Structure:

{float Moteurgauche;
 float Moteurdroit;
 float Moteurhauteur;
 bool Tirer;
 bool auto;}


 Drone: (reste a déterminer)


Les technologies qui permettront de réaliser le projets sont les suivantes:

-Python comme langage de programmation.
-Leap motion SDK sera la librairie utilisée pour pouvoir se servir de la leap motion.


pseudo code de la boucle de détection d'un mouvement:

var projet = projet selectionner par l'utilisateur
var mapprojectdrone = (clé = signal_leap, données_à_envoyer)
var mapprojecttir = (clé = signal_leap, données_à_envoyer)

waitforsignal();

//fonction attendant un signal de la leap motion

	function waitforsignal(){
		if(signalrecieve == 1){
			interpretsignal(projet,signal)
		}else{
			waitforsignal()
		}
		updatehandvideo()
	}

//fonction envoyant des données en fonction du projet et du signal envoyé par la leap

function interpretsignal(projet,signal){
    if(projet = drone){
        //envoyer la donnée correspondant dans la map mapprojectdrone avec la clé signal
    }
    elseif(projet = tir){
        //envoyer la donnée correspondant dans la map mapprojecttir avec la clé signal
    }
}

//fonction envoyant le flux vidéo des squellettes des mains\n
function updatehandvideo(){
    //envoyer au serveur la vidéo des squelettes des mains
}
