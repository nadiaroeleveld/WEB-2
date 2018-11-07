/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var search = document.querySelector('body header form');
var button = document.querySelector('html body header ul li button');
var icon = document.querySelector('html header form fieldset div a#searchIcon');
var input = document.querySelector('html header form#search input');
var h1 = document.querySelector('html header form#search legend');

button.addEventListener('click', openSearch);
input.addEventListener('search', moveSearch);


/* KLAPT ZOEK FUNCTIE UIT  */
function openSearch(){
    search.classList.toggle('show');
}


/* VERANDERT TITEL EN ZOEK-ICON WANNEER DE INPUT FOCUS KRIJGT */
function moveSearch(){
        icon.classList.add('move');
        input.classList.add('bigger');
        h1.classList.add('fontBigger'); 
}
