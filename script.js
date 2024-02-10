function city() {
    alert("Loading weather report...");    
}
function dismiss(){
var fixedelement = document.querySelector("#cookies")
fixedelement.remove();
}
function test(){
    document.getElementById("#cookies").style.position = "fixed";
}

var temprtures = document.querySelectorAll(".temps")


function myFunction(){
    var selectedtemp = document.getElementById("selecttemp").value;
    if (selectedtemp=="C"){
        for ( var i = 0 ; i < temprtures.length ; i++){
            temprtures[i].innerText = CelToFih(temprtures[i].innerText );
        }
    }
    else if(selectedtemp=="FHN")
    for ( var i = 0 ; i < temprtures.length ; i++){
        temprtures[i].innerText = FihToCel(temprtures[i].innerText );
    }
}
function CelToFih(temprture){
    return Math.floor((parseInt(temprture) - 32) * 5 / 9);
}

function FihToCel(temprture){
    return Math.floor((parseInt(temprture) * 9/5)+32);
}