let url=new URL(window.location.href);
let resultat=url.searchParams.get("resultat");
let erreurs_commises=url.searchParams.get("erreurs_commises");
let mot_trouve=url.searchParams.get("mot_trouve");
let mot_a_trouver=url.searchParams.get("mot_a_trouver");
let nbWord=url.searchParams.get("nbWord");
let timer=url.searchParams.get("time")
let montre=url.searchParams.get("montre")
let mainDiv=document.getElementById("OG")

let fondNeutre=document.createElement("img")
mainDiv.appendChild(fondNeutre)

let win=document.createElement("p")
win.id=("msgWin")
mainDiv.appendChild(win)
if(montre=="true"){
    let moot= mot_a_trouver.split(",").join("");
    win.innerHTML=`Bravo vous avez trouvé ${nbWord} mots! <br><br> le dernier mot était ${moot}`;
}else{
    if(resultat=="true"){
        if( erreurs_commises==0 ){
            win.innerHTML=`Bravo et sans aucune erreur !!!!! <br>
            Vous avez mis ${timer} secondes pour trouver la solution!` 
            
        }else{
            win.innerHTML=`Gagne ! <br> Vous vous etes trompes ${erreurs_commises} fois! <br>
            Vous avez mis ${timer} secondes pour trouver la solution!` 
    
        }
    }else{
        let moot= mot_a_trouver.split(",").join("");
        win.innerHTML=`   Perdu !<br><br> LE MOT A TROUVER<br> ETAIT ${moot} ` 
    }
}








