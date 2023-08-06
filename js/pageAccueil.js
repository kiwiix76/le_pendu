

let objContainer = document.getElementById("idContainer");
    objContainer.style.alignContent = "center";

let objDiv1 = document.createElement("div");
    objContainer.appendChild(objDiv1);

// TEXTE CHOISIR LE NIVEAU DE JEU

let objBRLevel = document.createElement("br");
    objDiv1.appendChild(objBRLevel);

let objNiveau = document.createElement("h1");
    objNiveau.innerText = "Choisissez votre niveau";
    objDiv1.appendChild(objNiveau);

let objBRLevel1 = document.createElement("br");
    objDiv1.appendChild(objBRLevel1);


// --- radio 1 - Niveau facile --- //

let objLabel1 = document.createElement("label");
    objLabel1.innerText = " Facile ";
    objDiv1.appendChild(objLabel1);
  
let objRadio1 = document.createElement("input"); 
    objRadio1.type = "radio";
    objRadio1.name = "cercle";
    objRadio1.value = "facile";
    objRadio1.name = "lvl";
    objDiv1.appendChild(objRadio1);


    // --- divR1 -- //

    // --- BR  Radio 1 -- //

let objBR = document.createElement("br");
    objDiv1.appendChild(objBR);

let objBR2 = document.createElement("br");
    objDiv1.appendChild(objBR2);

// --- Radio 2 - Niveau moyen --- //

let objLabel2 = document.createElement("label");
    objLabel2.innerText = " Moyen ";
    objDiv1.appendChild(objLabel2);
  
let objRadio2 = document.createElement("input")  
    objRadio2.type = "radio";
    objRadio2.name = "cercle";
    objRadio2.value = "moyen";
    objRadio2.checked = "true";  
    objRadio2.name = "lvl";
    objDiv1.appendChild(objRadio2);

    // --- BR Radio 2 -- //

let objBR3 = document.createElement("br");
objDiv1.appendChild(objBR3);


let objBR4 = document.createElement("br");
objDiv1.appendChild(objBR4);


    // --- Radio 3 - Niveau difficile --- //

let objLabel3 = document.createElement("label");
    objLabel3.innerText = " Difficile ";
    objDiv1.appendChild(objLabel3);
  
let objRadio3 = document.createElement("input")  
    objRadio3.type = "radio";
    objRadio3.name = "cercle";
    objRadio3.value = "difficile";
    objRadio3.name = "lvl";
    objDiv1.appendChild(objRadio3);

    

  // BOUTON LANCER LE JEU

let objBRButton = document.createElement("br");
objDiv1.appendChild(objBRButton);

let objBRButton2 = document.createElement("br");
objDiv1.appendChild(objBRButton2);


 // -------------------- LIEN ---------------------

 let objChildA = document.createElement("a");
//  objChildA.href = "html/pageJeux.html";
 objContainer.appendChild(objChildA);

 // -------------- BUTTON ------------------------

let objChild = document.createElement("button");

    objChild.innerText = "JOUER";
    objChild.id = "launch";     
    objChildA.appendChild(objChild);

// --- Radio 4 - contre-la-montre --- //

let objLabel4 = document.createElement("label");
objLabel4.innerText = " Contre la montre ";
objDiv1.appendChild(objLabel4);

let objRadio4 = document.createElement("input")  
objRadio4.type = "checkbox";
objRadio4.name = "montre";
objRadio4.value = "true";
objDiv1.appendChild(objRadio4);



let lvl = document.getElementsByName("lvl");

let launch = document.getElementById("launch");

launch.addEventListener("click",()=>{
   let valeur;
    for(let i = 0; i < lvl.length; i++){
        if(lvl[i].checked){
            valeur = lvl[i].value;
        }
    }
    if( objRadio4.checked ){
        montre=true;
    }else{
        montre=false;
    }
    window.location.href=`./html/pageJeux.html?lvl=${valeur}&montre=${montre}`;
})


    


    

  


 
