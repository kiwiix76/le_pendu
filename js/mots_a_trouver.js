let facile=["plante", "feuille", "arbre", "racine", "foret", "tronc", "tige", "seve", "pousse"]
let moyen=["groot", "sapin", "laurier","herbe", "weed", "bouleau", "saule"]
let difficile=["croissance", "arborescence", "totipotence", "phloeme", "xyleme", "cellulose", "photosynthese", "chlorophylle", "gluten" ]


function mot(level){  //level est un string
   let tab = getMot(level);
   i= Math.floor(Math.random()*tab.length)
   mot_a_trouver=tab[i].toUpperCase().split("")
   return mot_a_trouver
}

function getMot(lvl){

   switch(lvl){
       case "facile" :
           return facile;
       case "moyen" :
           return moyen;
       case "difficile" :
           return difficile;
       default:
        return moyen;
   }

}
