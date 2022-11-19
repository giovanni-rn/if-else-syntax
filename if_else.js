// variables
const poulet = false;
let reponse;

// IF A L'ANCIENNE
if (poulet) {
  reponse = "J'ai plus faim.";
} else {
  reponse = "J'ai encore faim !";
}

// IF RACCOURCI
if (poulet) reponse = "J'ai plus faim.";
else reponse = "J'ai encore faim !";

// IF POINT D'INTERROGATION
reponse = poulet ? "J'ai plus faim." : "J'ai encore faim !";
poulet ? console.log("J'ai plus faim.") : console.log("J'ai encore faim !");

// IF ESPERLUETTE
poulet && console.log("J'ai plus faim.");

// IF BARRE VERTICALE (c'est quoi ce nom??, mettez vos idées en commentaire svp)
poulet || console.log("J'ai encore faim !");

// résultat
console.log(reponse);
