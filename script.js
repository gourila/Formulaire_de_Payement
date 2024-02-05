/*
* AFFICHER LES PATATES
*
*/
function Afficherpetake() {
    let x = document.getElementById("NbPatates").value;
    document.getElementById("PatatesQt").innerHTML = x;
}

//Verifier que le nombre de pommes est < que patates
const QTpommes = document.getElementById("NbPommes").value;
const QTPatates = document.getElementById("NbPatates").value;
function PlusDePetakes()
{
    if(QTpommes > QTPatates)
    {
        alert("You MUST have more Taters");

    }
}





function Validation()
{
//ne fonctionne pas encore
    let NumeroUtilisateur = document.getElementById("téléphoneUtilisateur").value;
    let Resultat = NumeroUtilisateur.startsWith("819");
    let ChoixProvince = document.getElementById("provinceCanada").value;
    if (ChoixProvince === "Quebec")
    {
        if (Resultat === false)
        {
            alert("Vous devez avoir 819")
        }else {return true}
    }
}

