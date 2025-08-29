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
        // ... (autres espèces avec icônes corrigées)
    ],

    // ... (autres catégories avec icônes corrigées)

    cereales: [
        {
            name: "Oulema melanopus",
            author: "(Linnaeus, 1758)",
            order: "Coléoptères",
            family: "Chrysomelidae",
            cultures: "Céréales",
            icon: "🪲",
            description: "Léma des céréales.",
            image: "images/oulema_melanopus.jpg"
        },
        {
            name: "Zabrus tenebrioides",
            author: "(Goeze, 1777)",
            order: "Coléoptères",
            family: "Carabidae",
            cultures: "Céréales",
            icon: "🪲",
            description: "Zabre des céréales.",
            image: "images/zabrus_tenebrioides.jpg"
        },
        {
            name: "Sesamia nonagrioides",
            author: "(Lefebvre, 1827)",
            order: "Lépidoptères",
            family: "Noctuidae",
            cultures: "Céréales (Maïs, Sorgho, etc.)",
            icon: "🦋",
            description: "Sésamie du maïs.",
            image: "images/sesamia_nonagrioides.jpg"
        },
        {
            name: "Mayetiola destructor",
            author: "(Say, 1817)",
            order: "Diptères",
            family: "Cecidomyiidae",
            cultures: "Blé, orge, avoine",
            icon: "🪰",
            description: "Cécidomyie destructrice des céréales.",
            image: "images/mayetiola_destructor.jpg"
        },
        {
            name: "Mayetiola hordei",
            author: "(Kieffer, 1909)",
            order: "Diptères",
            family: "Cecidomyiidae",
            cultures: "Orge",
            icon: "🪰",
            description: "Cécidomyie de l'orge.",
            image: "images/mayetiola_hordei.jpg"
        },
        {
            name: "Mayetiola avenae",
            author: "(Marchal, 1895)",
            order: "Diptères",
            family: "Cecidomyiidae",
            cultures: "Avoine",
            icon: "🪰",
            description: "Cécidomyie de l'avoine.",
            image: "images/mayetiola_avenae.jpg"
        },
        {
            name: "Cephus pygmaeus",
            author: "(Linnaeus, 1767)",
            order: "Hyménoptères",
            family: "Cephidae",
            cultures: "Blé",
            icon: "🐝",
            description: "Cèphe du blé.",
            image: "images/cephus_pygmaeus.jpg"
        },
        {
            name: "Aelia acuminata",
            author: "(Linnaeus, 1758)",
            order: "Hémiptères",
            family: "Pentatomidae",
            cultures: "Céréales",
            icon: "🐞",
            description: "Punaise des céréales.",
            image: "images/aelia_acuminata.jpg"
        },
        {
            name: "Aelia germari",
            author: "(Küster, 1852)",
            order: "Hémiptères",
            family: "Pentatomidae",
            cultures: "Céréales",
            icon: "🐞",
            description: "Punaise de Germar des céréales.",
            image: "images/aelia_germari.jpg"
        },
        {
            name: "Aelia rostrata cognata",
            author: "Fieber, 1868",
            order: "Hémiptères",
            family: "Pentatomidae",
            cultures: "Céréales",
            icon: "🐞",
            description: "Punaise à rostre des céréales.",
            image: "images/aelia_rostrata_cognata.jpg"
        },
        {
            name: "Eurygaster maura",
            author: "(Linnaeus, 1758)",
            order: "Hémiptères",
            family: "Scutelleridae",
            cultures: "Céréales",
            icon: "🐞",
            description: "Eurygastre maure des céréales.",
            image: "images/eurygaster_maura.jpg"
        },
        {
            name: "Eurygaster austriaca",
            author: "(Schrank, 1776)",
            order: "Hémiptères",
            family: "Scutelleridae",
            cultures: "Céréales",
            icon: "🐞",
            description: "Eurygastre autrichien des céréales.",
            image: "images/eurygaster_austriaca.jpg"
        },
        {
            name: "Eurygaster hottentotta",
            author: "(Fabricius, 1775)",
            order: "Hémiptères",
            family: "Scutelleridae",
            cultures: "Céréales",
            icon: "🐞",
            description: "Eurygastre hottentot des céréales.",
            image: "images/eurygaster_hottentotta.jpg"
        }
    ],

    // ... (autres catégories)
};

// Données pour les espèces polyphages
const polyphageSpecies = [
    // ... (espèces polyphages avec icônes corrigées)
];

// Export des données
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { speciesData, polyphageSpecies };
}