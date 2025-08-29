// Classification des espèces par culture
const speciesData = {
    // Cultures Maraîchères
    cruciferes: [
        {
            name: "Ceutorhynchus assimilis",
            author: "(Paykull 1792)",
            order: "Coléoptères",
            family: "Curculionidae",
            cultures: "Chou et autres crucifères",
            icon: "🪲",
            description: "Charançon des crucifères causant des dégâts importants sur les cultures de choux.",
            image: "images/ceutorhynchus_assimilis.jpg"
        },
        // ... autres espèces crucifères
    ],

    solanacees: [
        // ... espèces solanacées
    ],

    cucurbitacees: [
        // ... espèces cucurbitacées
    ],

    legumineuses: [
        // ... espèces légumineuses
    ],

    betterave: [
        // ... espèces betterave
    ],

    // Arboriculture Fruitière
    rosacees_noyaux: [
        {
            name: "Capnodis tenebrionis",
            author: "(Linnaeus, 1760)",
            order: "Coléoptères",
            family: "Buprestidae",
            cultures: "Rosacées fruitières à noyaux",
            icon: "🪲",
            description: "Bupreste des arbres fruitiers à noyaux.",
            image: "images/capnodis_tenebrionis.jpg"
        },
        // ... autres espèces rosacées à noyaux
    ],

    rosacees_pepins: [
        {
            name: "Cydia pomonella",
            author: "(Linnaeus 1758)",
            order: "Lépidoptères",
            family: "Tortricidae",
            cultures: "Pommes, poires, prunes, etc.",
            icon: "🦋",
            description: "Carpocapse des pommes, ravageur majeur des fruits à pépins.",
            image: "images/cydia_pomonella.jpg"
        },
        // ... autres espèces rosacées à pépins
    ],

    agrumes: [
        // ... espèces agrumes
    ],

    vigne: [
        // ... espèces vigne
    ],

    fruits_rouges: [
        // ... espèces fruits rouges
    ],

    // Cultures Ornementales
    olivier: [
        // ... espèces olivier
    ],

    ornementaux: [
        // ... espèces ornementaux
    ],

    palmiers: [
        // ... espèces palmiers
    ],

    // Grandes Cultures
    cereales: [
        // ... espèces céréales
    ],

    cotonnier: [
        // ... espèces cotonnier
    ],

    luzerne: [
        // ... espèces luzerne
    ]
};

// Données pour les espèces polyphages
const polyphageSpecies = [
    // ... espèces polyphages
];

// Export des données
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { speciesData, polyphageSpecies };
}