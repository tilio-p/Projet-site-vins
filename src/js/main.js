//articles

document.addEventListener("DOMContentLoaded", () => {
  const pinotNoir = document.querySelector(".pinot-noir");
  pinotNoir.addEventListener("click", () => {
    pinotNoir.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const philosophie = document.querySelector(".philosophie");
  philosophie.addEventListener("click", () => {
    philosophie.classList.toggle("active");
  });
});

// langue

document.addEventListener("DOMContentLoaded", () => {
  const currentLang = document.getElementById("current-lang");
  const langOptions = document.getElementById("lang-options");

  langOptions.style.display = "none";

  // Affiche ou cache le menu au clic sur la langue principale
  currentLang.addEventListener("click", () => {
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

//copie du numéro

document.addEventListener("DOMContentLoaded", () => {
  const phoneNumber = document.getElementById("copy-number");

  phoneNumber.addEventListener("click", () => {
    // Crée une zone temporaire pour copier le texte
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = phoneNumber.textContent.trim();
    document.body.appendChild(tempTextarea);

    // Sélectionne et copie le texte
    tempTextarea.select();
    document.execCommand("copy");

    // Nettoie l'élément temporaire
    document.body.removeChild(tempTextarea);

    // Optionnel : Feedback à l'utilisateur
    alert("Numéro copié : " + phoneNumber.textContent.trim());
  });
});
