// Tableau de données spécifiques pour chaque carré
const stores = [
    {
        id: 1,
        name: "Intermarché",
        logo: "intermarche.png",
        catégorie: "Hypermarché",
        description: "Intermarché est une enseigne de grande distribution française fondée par Jean-Pierre Le Roch. Créée par le groupement Les Mousquetaires en 1969, sous le nom EX offices de distribution, elle deviendra Intermarché en 1972. Le siège social est situé à Paris.20 oct. 2021",
        backgroundColor: "grey", // Or custom styles
    },
];

// Cible le conteneur de la grille
const gridContainer = document.getElementById("grid-container");

// Génère les carrés pour chaque magasin
stores.forEach(store => {
    const square = document.createElement("div");
    square.className = "square";
    square.style.backgroundColor = store.backgroundColor; // Couleur de fond personnalisée
    square.innerHTML = `
        <img src="${store.logo}" alt="${store.name}">
        <h3>${store.name}</h3>
        <h4>${store.catégorie}</h4>
    `;
    square.addEventListener("click", () => openModal(store)); // Gestion de l'événement clic
    gridContainer.appendChild(square);
});

// Fonction pour afficher les détails dans la modale
function openModal(store) {
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modal = document.getElementById("modal");
    const modalCategorie = document.getElementById("modal-categorie");
    
    modalCategorie.textContent = store.catégorie;
    modalTitle.textContent = store.name;    
    modalDescription.textContent = store.description;
    modal.style.display = "flex";
}

// Gestion de la fermeture de la modale
document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});

// Gestion de la fermeture de la modale lorsqu'on clique à l'extérieur
window.addEventListener("click", (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none"; // Ferme la modale
    }
});

