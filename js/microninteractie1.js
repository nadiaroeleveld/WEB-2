/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var checkbox = document.querySelector("#checkBox");
var button = document.querySelector(".normal");


checkbox.addEventListener("click", function(){
    
    if(this.checked){
        button.classList.add("transitioning");
    }
    else{
        button.classList.remove("transitioning");
    }
    
})

