/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

    
var aanmaken = document.querySelector("#aanmaken");
var checkbox = document.querySelector ("#akkoord");


/* MICROINTERACTIE 1 - BEVESTIGING VOORWAARDEN OM ACCOUNT AAN TE MAKEN */

/* Als de voorwaarden bij het formulier om een account aan te maken worden geaccepteerd verschijnt de optie om door te gaan en het account aan te maken.  */
checkbox.addEventListener('change', function(){
    if(this.checked) {
       aanmaken.classList.add("visible"); 
    }
    else{
        aanmaken.classList.remove("visible");
    }

})






























var search = document.querySelector("");
var header = document.querySelector("header");
var container = document.querySelector(".container");
    
checkbox.addEventListener('click', function(){
    aanmaken.classList.add("movein"); 
})
   
