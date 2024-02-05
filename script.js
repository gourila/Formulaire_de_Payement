const patates =document.getElementById("PatatesQt");
const pommes =document.getElementById("PommesQt");
const province =document.getElementById("provinceCanada")
const telephone =document.getElementById("téléphoneUtilisateur")

/*-- AFFICHER LES PATATES --*/
function Afficherpetake() {
    let SliderQt = document.getElementById("NbPatates").value;
    document.getElementById("PatatesQt").innerHTML = SliderQt;
}

//Verifier que le nombre de pommes est < que patates




//Function da validation
//ne fonctionne pas encore *****
function Validation()
{
    if (province.value !== "819" )
    {
       alert("md")
    }
    if (province.value !== "613" )
    {
        alert("yt")
    }
    if (province.value !== "204" )
    {
       alert("fnf2")
    }

}

