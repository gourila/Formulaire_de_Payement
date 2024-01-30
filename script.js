/*
* AFFICHER LES PATATES
* */


let slider = document.getElementById("nbPatates");
let output = document.getElementById("PatatesQt");

output.innerHTML =slider.value
/*
output.innerHTML = slider.value;

slider.oninput = function () {
        output.innerHTML =this.value
    }
*/
function ValidationNumeroTel()
{
    let SelectOntario = document.getElementById("provinceCanada").value
    if(SelectOntario.value !== "Ontario")
    {
        alert("votre numéro doit commence par 613-xxx-xxxx")

    }
}
