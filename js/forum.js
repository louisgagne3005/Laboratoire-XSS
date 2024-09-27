$(document).ready(function () {
    $("#btnSoumettre").click(afficher);
	
	document.cookie = "username=votreIdentifiantPersonnelConfidentiel";
	
	// On met des textes initiaux bidons dans le forum
    ajouterTextesBidons($('#contenu'));
});

function afficher() {
   if($('#ajout').val() != '')
   {
	   ajouterTexte($('#contenu'), $('#ajout').val());
   }
}

function ajouterTextesBidons(table)
{
	// On met des textes initiaux bidons dans le forum
	ajouterTexte(table, 'Fernand03 : Salut tout le monde, est-ce que quelqu\'un a déjà entendu parler du XSS?');
    ajouterTexte(table, 'Bob: Ouin, y paraît qu\'cé dangereux!');
    ajouterTexte(table, 'Jérôme Cégep Riki: Seulement si l\'application Web est mal protégée. Si vous créez une application ASP.net avec Razor dans Visual Studio, l\'IDE vous protège du XSS. Toutefois, les applications en PHP ou en javascript sont plus vulnérables et nécessitent l\'intervention du développeur.');
}

function ajouterTexte(table, txt)
{
	var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.textContent = txt;
    tr.appendChild(td);
	table.append(tr);
}