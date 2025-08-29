// Classification Script - EntomMaster

document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Smooth scroll to content
            document.getElementById(targetTab).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('culture-search');
    const searchBtn = document.getElementById('search-btn');
    const searchResults = document.getElementById('search-results');
    
    // Database of species and their associated cultures
    const speciesDatabase = {
        'colza': [
            {
                name: 'Ceutorhynchus napi',
                scientific: 'Gyllenhal 1837',
                description: 'Charançon spécifique au colza, élytres avec squamules blanchâtres',
                size: '3,2 à 4 mm',
                color: 'noire'
            },
            {
                name: 'Baris quadraticollis',
                scientific: 'Boheman, 1836',
                description: 'Ravageur du colza, corps non pubescent à reflet bleu-vert',
                size: '3 à 3,5 mm',
                color: 'noire à reflet bleu vert'
            },
            {
                name: 'Baris coerulescens',
                scientific: 'Scopoli 1763',
                description: 'Charançon du colza, couleur bleu-vert métallique',
                size: '2,3 à 4,5 mm',
                color: 'bleu-vert métallique'
            }
        ],
        'crucifères': [
            {
                name: 'Ceutorhynchus picitarsis',
                scientific: 'Gyllenhal 1837',
                description: 'Ravageur des crucifères, corps pubescent avec dimorphisme sexuel',
                size: '2,2 à 3,5 mm',
                color: 'noir brillant'
            },
            {
                name: 'Ceutorhynchus quadridens',
                scientific: 'Panzer, 1795',
                description: 'Charançon des crucifères, élytres avec soies rousses',
                size: '2,5 à 3,5 mm',
                color: 'noire'
            }
        ],
        'olivier': [
            {
                name: 'Phloeotribus scarabaeoides',
                scientific: 'Bernard 1788',
                description: 'Scolyte de l\'olivier, petit insecte ovale avec taches sombres',
                size: '2 mm environ',
                color: 'sombre'
            },
            {
                name: 'Hylesinus oleiperda',
                scientific: 'Fabricius, 1792',
                description: 'Ravageur de l\'olivier, forme ovoïde avec pilosité rousse',
                size: '2,5 à 3,5 mm',
                color: 'noire avec pilosité rousse'
            }
        ],
        'arbres fruitiers': [
            {
                name: 'Ruguloscolytus amygdali',
                scientific: 'De Geer',
                description: 'Scolyte des arbres fruitiers à noyaux, pronotum ponctué',
                size: '2 à 3 mm',
                color: 'noir profond'
            },
            {
                name: 'Ruguloscolytus mediterraneus',
                scientific: 'Eggert',
                description: 'Ravageur des arbres fruitiers, corps trapu',
                size: '1,8 à 2,4 mm',
                color: 'brun foncé'
            }
        ],
        'céréales': [
            {
                name: 'Locusta migratoria',
                scientific: 'Criquet migrateur',
                description: 'Grand ravageur des céréales et graminées, très mobile',
                size: 'Variable selon phase',
                color: 'vert vif avec tibias postérieurs rouges'
            },
            {
                name: 'Calliptamus wattenwylianus',
                scientific: 'Saussure',
                description: 'Criquet ravageur des graminées et céréales',
                size: 'Moyenne à grande',
                color: 'Variable, souvent brunâtre'
            }
        ],
        'graminées': [
            {
                name: 'Locusta migratoria',
                scientific: 'Criquet migrateur',
                description: 'Ravageur majeur des graminées et prairies',
                size: 'Variable selon phase',
                color: 'vert vif avec tibias postérieurs rouges'
            },
            {
                name: 'Dociostaurus maroccanus',
                scientific: 'Criquet marocain',
                description: 'Criquet des zones arides, ravageur des graminées',
                size: '17-33mm',
                color: 'Variable, souvent jaunâtre'
            }
        ],
        'lilas': [
            {
                name: 'Phloeotribus scarabaeoides',
                scientific: 'Bernard 1788',
                description: 'Scolyte polyphage attaquant lilas, olivier et troène',
                size: '2 mm environ',
                color: 'sombre'
            },
            {
                name: 'Hylesinus oleiperda',
                scientific: 'Fabricius, 1792',
                description: 'Ravageur du lilas et autres plantes ornementales',
                size: '2,5 à 3,5 mm',
                color: 'noire avec pilosité rousse'
            }
        ]
    };
    
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        searchResults.innerHTML = '';
        
        if (query.length < 2) {
            searchResults.innerHTML = '<p style="text-align: center; color: #6c757d;">Veuillez saisir au moins 2 caractères pour effectuer une recherche.</p>';
            return;
        }
        
        let results = [];
        
        // Search in database
        for (const [culture, species] of Object.entries(speciesDatabase)) {
            if (culture.includes(query)) {
                species.forEach(specie => {
                    results.push({
                        culture: culture,
                        ...specie
                    });
                });
            }
        }
        
        // Also search in species names
        for (const [culture, species] of Object.entries(speciesDatabase)) {
            species.forEach(specie => {
                if (specie.name.toLowerCase().includes(query) || 
                    specie.scientific.toLowerCase().includes(query)) {
                    if (!results.some(r => r.name === specie.name && r.culture === culture)) {
                        results.push({
                            culture: culture,
                            ...specie
                        });
                    }
                }
            });
        }
        
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div style="text-align: center; padding: 40px;">
                    <h3 style="color: #6c757d; margin-bottom: 15px;">Aucun résultat trouvé</h3>
                    <p style="color: #6c757d;">Essayez avec des termes comme : colza, olivier, céréales, crucifères, arbres fruitiers</p>
                </div>
            `;
            return;
        }
        
        const resultsHTML = results.map(result => `
            <div class="search-result-item">
                <h4>${result.name}</h4>
                <p><strong>Nom scientifique:</strong> ${result.scientific}</p>
                <p><strong>Culture:</strong> ${result.culture.charAt(0).toUpperCase() + result.culture.slice(1)}</p>
                <p><strong>Taille:</strong> ${result.size}</p>
                <p><strong>Couleur:</strong> ${result.color}</p>
                <p><strong>Description:</strong> ${result.description}</p>
            </div>
        `).join('');
        
        searchResults.innerHTML = `
            <h3 style="text-align: center; color: #2c5530; margin-bottom: 30px;">
                ${results.length} résultat${results.length > 1 ? 's' : ''} trouvé${results.length > 1 ? 's' : ''} pour "${query}"
            </h3>
            ${resultsHTML}
        `;
        
        // Smooth scroll to results
        searchResults.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    searchBtn.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Auto-suggest functionality
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (query.length >= 2) {
            const suggestions = [];
            
            // Get culture suggestions
            for (const culture of Object.keys(speciesDatabase)) {
                if (culture.includes(query) && !suggestions.includes(culture)) {
                    suggestions.push(culture);
                }
            }
            
            // Limit suggestions
            if (suggestions.length > 0) {
                // You could implement a dropdown here for suggestions
                console.log('Suggestions:', suggestions);
            }
        }
    });
    
    // Smooth scrolling for species cards
    const speciesCards = document.querySelectorAll('.species-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    speciesCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add loading animation for images
    const speciesImages = document.querySelectorAll('.species-image img');
    
    speciesImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.parentElement.innerHTML = `
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: #6c757d;">
                    <span style="font-size: 3rem; margin-bottom: 10px;">🔍</span>
                    <span style="font-size: 0.9rem;">Image non disponible</span>
                </div>
            `;
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
    
    // Add hover effects for better interactivity
    const cultureGroups = document.querySelectorAll('.culture-group');
    
    cultureGroups.forEach(group => {
        group.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        group.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

