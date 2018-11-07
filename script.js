var maison = document.getElementById("canvas");
// création d'un objet getContext pour définir les propriétés de celui-ci (dessin en 2d ici)
var ctx = maison.getContext("2d");
  // corps de la maison
// .beginPath indique le début du chemin
ctx.beginPath();
// .moveTo indique le début du tracé
ctx.moveTo(100, 120);
// .lineTo ajoute un segment
ctx.lineTo(100, 350);
ctx.lineTo(300, 350);
ctx.lineTo(300, 120);
ctx.lineTo(100, 120);
// .strokeStyle définit la couleur des contours
ctx.strokeStyle = "lightblue";
// .stroke ajoute la couleur des contours
ctx.stroke();
// .fillStyle définit la couleur de remplissage
ctx.fillStyle = "lightblue";
// .fill ajoute la couleur de remplissage
ctx.fill();
  // fenêtre gauche
ctx.beginPath();
ctx.moveTo(130, 150);
ctx.lineTo(130, 185);
ctx.lineTo(165, 185);
ctx.lineTo(165, 150);
ctx.lineTo(130, 150);
ctx.strokeStyle = "pink";
ctx.stroke();
ctx.fillStyle = "pink";
ctx.fill();
  // fenêtre droite
ctx.beginPath();
ctx.moveTo(270, 150);
ctx.lineTo(270, 185);
ctx.lineTo(235, 185);
ctx.lineTo(235, 150);
ctx.lineTo(270, 150);
ctx.strokeStyle = "pink";
ctx.stroke();
ctx.fillStyle = "pink";
ctx.fill();
  // porte
ctx.beginPath();
ctx.moveTo(170, 350);
ctx.lineTo(170, 270);
ctx.lineTo(230, 270);
ctx.lineTo(230, 350);
ctx.lineTo(170, 350);
ctx.strokeStyle = "pink";
ctx.stroke();
ctx.fillStyle = "pink";
ctx.fill();
  // toît
ctx.beginPath();
ctx.moveTo(100, 120);
ctx.lineTo(200, 30);
ctx.lineTo(300, 120);
ctx.lineTo(100, 120);
ctx.strokeStyle = "peru";
ctx.stroke();
ctx.fillStyle = "peru";
ctx.fill();
