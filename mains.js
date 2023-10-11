let Personnage = {
  name: "John",
  mentalHealth: 10,
};

let Musique = [
  "wejdene - Anissa",
  "Justin Timberlake - cry me a river",
  "Radiohead - Creep",
  "Imany - Don't be so shy",
  "guy2bezbar - Fendi Love",
];

let Trajet = {
  feux_rouge: 30,
  nb_changement: 0,
};

function musiqueAleatoire(musiques) {
  return musiques[Math.floor(Math.random() * musiques.length)];
}

while (Trajet.feux_rouge > 0 && Personnage.mentalHealth > 0) {
  Trajet.feux_rouge--;
  console.log(
    "Il reste " +
      Trajet.feux_rouge +
      " feux rouges et tu écoutes " +
      musiqueAleatoire(Musique)
  );

  let musiqueJouee = musiqueAleatoire(Musique);
  if (musiqueJouee === "wejdene - Anissa") {
    Personnage.mentalHealth--;
    console.log("Ce n'est pas sérieux tout ça, tu perds un point de vie.");
    Trajet.nb_changement++;
  }

  if (Trajet.feux_rouge === 0) {
    console.log(
      "Bien arrivé à destination après " +
        Trajet.nb_changement +
        " changements de taxi."
    );
  } else if (Personnage.mentalHealth === 0) {
    console.log("Tu as déconné, chef. Explosion !");
  }
}
