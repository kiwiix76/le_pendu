let erreurs_commises =0;
let erreurs_autorisees=10;
let longueur;
let mot_trouve=[];
let mot_a_trouver=[];
let listeTouche=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
let dejaJouer=[];
let tabFond=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg",]
let divFond=document.getElementById("divFond");
let objMusic = new Audio("../sons/groot-no.mp3");
let lvl ="";
let nbWord=0;
let montre=false;

launch();

function launch(){ 
let url = new URL(window.location.href);
lvl = url.searchParams.get("lvl");
montre = url.searchParams.get("montre");
findWord(lvl);
initMot(longueur);
afficheTentative();
createClavier();
clavierReel();
initFond();
}

// fonction qui retourne un tableau de lettre. Prend en param la difficulte et choisi le tableau en fonction
//on utilisera juste mot(lvl) par la suite le traitement étant deplacé.
function findWord(lvl){
    mot_a_trouver = mot(lvl);
    longueur = mot_a_trouver.length;
}

// fonction qui affiche le nombre de lettre a l'ecran
function initMot(longueur){
    let parent = document.getElementById("mot_a_trouver");
    for( let i=0;i<longueur;i++){
        mot_trouve.push("_");
        let div = document.createElement("div");
        div.id = "lettre"+i;
        div.className = "lettreATrouver";
        div.style.height="50px";
        div.style.width="50px";
        div.textContent="__";
        parent.appendChild(div);
    }   
}

//function qui genere les ecouteur du clavier virtuel
function createClavier(){
    let limit = 0;
    let clavierVirtuel = document.getElementById("clavierVirtuel");
    for(let i=0;i<3;i++){
        let ligne = document.createElement("div");
        ligne.className="ligne";

        clavierVirtuel.appendChild(ligne);               
        for(let j=0;j<10 && limit<26;j++){
            let toucheClavier = document.createElement("div");
            toucheClavier.className="toucheClavier";
            toucheClavier.textContent=listeTouche[limit];
            toucheClavier.addEventListener("click",verifGlobal)
            ligne.appendChild(toucheClavier);
            limit++;
        }
    }
}

function clavierReel(){
    document.addEventListener('keyup', (e) => {
        let lettre = e.key.toUpperCase();
        verifGlobalReel(lettre);
    });
}

//fonction qui initialise le fond d'écran
function initFond(){
    divFond.style.backgroundImage="url(../img/"+ tabFond[0] + ")";
}

// fonction acitvée par les ecouter du clavier ( virtuelle et reel), elle recup la lettre
// lance la verif si la lettre et présente
// lance la verif l'état du jeux ( fin ou pas)
function verifGlobal(e){
    let lettre = e.target.textContent;
    if( !verifDejaJouer(lettre) ){
        verifPresence(lettre,e);
        afficheMot();
        verifEndGame();
    }  
}
function verifGlobalReel(lettre){
    if( !verifDejaJouer(lettre) ){
        verifPresenceReel(lettre);
        afficheMot();
        verifEndGame();
    }  
}
function verifPresenceReel(lettre){
    let find=false;
    let tabTouche = document.getElementsByClassName("toucheClavier");
    let div;
    for(let i=0;i<tabTouche.length;i++){
        if( tabTouche[i].textContent == lettre ){
            div = tabTouche[i];
        }
    }
    for(let i=0; i<mot_a_trouver.length ;i++){
        if( mot_a_trouver[i]==lettre){
            mot_trouve[i] = lettre;
            find=true;
            //let div = e.target;
            div.style.border="1px dashed green"
            div.style.color="green"
            objMusic.play();
            setTimeout(()=>{
                objMusic.pause();
                objMusic.currentTime=1;
            },500)
        }
    }
    if(!find){
        erreurs_commises++;
        //let div = e.target;
        div.style.border="1px dashed Crimson"
        div.style.color="Crimson"
        divFond.style.backgroundImage="url(../img/"+ tabFond[erreurs_commises] + ")";  
        objMusic.play();
        objMusic.currentTime=1;
    }
}

//fonction qui verifie si la lettre a deja été jouée
function verifDejaJouer(lettre){
    if(dejaJouer.includes(lettre)){
        return true;
    }else{
        dejaJouer.push(lettre);
        return false;
    }
}

//fonction qui verifie la presence d'une lettre dans le mot_a_trouve
//si present l'ajoute aux emplacement de mot-trouver sinon incremente erreurs_commises
function verifPresence(lettre,e){
    let find=false;
    for(let i=0; i<mot_a_trouver.length ;i++){
        if( mot_a_trouver[i]==lettre){
            mot_trouve[i] = lettre;
            find=true;
            let div = e.target;
            div.style.border="1px dashed green"
            div.style.color="green"
            objMusic.play();
            setTimeout(()=>{
                objMusic.pause();
                objMusic.currentTime=1;
            },500)
        }
    }
    if(!find){
        erreurs_commises++;
        let div = e.target;
        div.style.border="1px dashed Crimson"
        div.style.color="Crimson"
        divFond.style.backgroundImage="url(../img/"+ tabFond[erreurs_commises] + ")";  
        objMusic.play();
        objMusic.currentTime=1;
    }
}
// affiche mot_trouve a l'ecran
function afficheMot(){
    for(let i=0;i<mot_trouve.length; i++){
        let div = document.getElementById("lettre"+i);
        div.textContent = mot_trouve[i];
    }
}


//calcul et affiche le nombre de tentative restante
function afficheTentative(){
    let text = document.getElementById("tentative");
    text.textContent = `Il vous reste ${erreurs_autorisees-erreurs_commises} essais`;
}

//fonction qui génères un timer
let timer=document.createElement("p");
timer.id="timer";
divFond.appendChild(timer);
let time=0;
function myCallback(){
    time++;
    timer.innerHTML=`time: ${time}`;
 return time;
}

setInterval(myCallback, 1000)

//verif les condition de fin de jeu et agis en conséquence
//lance la page de score et lui transmet : mot_a_trouver , mot_trouve ,  erreurs_commise , resultat
function verifEndGame(){
    afficheTentative();

    if(erreurs_autorisees <= erreurs_commises){
        window.location.href=`./pageScore.html?erreurs_commises=${erreurs_commises}&resultat=false&mot_a_trouver=${mot_a_trouver}&mot_trouve=${mot_trouve}&time=${time}&nbWord=${nbWord}&montre=${montre}`;
        resetGame();
    }else if(verifMot()){
        if(montre == "true"){
            longueur=0;
            mot_trouve=[];
            mot_a_trouver=[];
            dejaJouer=[];

            let ligne = document.getElementsByClassName("ligne");
            for(let i = ligne.length-1; i>=0; i--){
                ligne[i].remove();
            }
            let touche = document.getElementsByClassName("lettreATrouver");
            for(let i = touche.length-1; i>=0; i--){
                touche[i].remove();
            }
            newWord();
        }else{
            window.location.href=`./pageScore.html?erreurs_commises=${erreurs_commises}&resultat=true&mot_a_trouver=${mot_a_trouver}&mot_trouve=${mot_trouve}&time=${time}&nbWord=${nbWord}&montre=${montre}`;
        }    
    }
}

function verifMot(){
    for(let i=0;i<mot_a_trouver.length;i++){
        if(mot_a_trouver[i] != mot_trouve[i]){
            return false;
        }
    }
    return true;
}

function resetGame(){
    erreurs_commises =0;
    erreurs_autorisees=10;
    longueur=0;
    mot_trouve=[];
    mot_a_trouver=[];
    dejaJouer=[];
 
}

function newWord(){
    findWord(lvl);
    initMot(longueur);
    afficheTentative();
    createClavier();
    nbWord++;
}


