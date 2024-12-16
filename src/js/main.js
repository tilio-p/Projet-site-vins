document.addEventListener("DOMContentLoaded", () => {
  const pinotNoir = document.querySelector(".pinot-noir");
  const pinotNoirPhoto = document.querySelector(".pinot-noir-photo");

  // Ajoute un gestionnaire d'événement de clic à chaque élément
  [pinotNoir, pinotNoirPhoto].forEach((element) => {
    element.addEventListener("click", () => {
      // Inverse les z-index des deux éléments
      const zIndex1 = window.getComputedStyle(pinotNoir).zIndex;
      const zIndex2 = window.getComputedStyle(pinotNoirPhoto).zIndex;

      pinotNoir.style.zIndex = zIndex2;
      pinotNoirPhoto.style.zIndex = zIndex1;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const currentLang = document.getElementById("current-lang");
  const langOptions = document.getElementById("lang-options");

  // Affiche ou cache le menu au clic sur la langue principale
  currentLang.addEventListener("click", () => {
    langOptions.style.display =
      langOptions.style.display === "block" ? "none" : "block";
  });

  // Gestion du clic sur une langue
  langOptions.addEventListener("click", (event) => {
    if (event.target.classList.contains("lang-option")) {
      // Met à jour l'affichage de la langue sélectionnée
      currentLang.textContent = event.target.textContent;
      langOptions.style.display = "none";
    }
  });

  // Ferme le menu si on clique en dehors
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".language-selector")) {
      langOptions.style.display = "none";
    }
  });
});
