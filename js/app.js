// BioBridge Interactive Application
// Track items on plate - only ONE item per section
let plateItems = {
    fruits: null,
    vegetables: null,
    grains: null,
    protein: null,
    drink: null
};

// BioBridge data from CSV - mapping food names to their microbiome effects
const microbiomeData = {
    'oatmeal': {
        type: 'High Fiber',
        yeastEffect: 'The high fiber extract had little to no affect with yeast, only some foam at the top was formed',
        autismCorrelation: 'No specific growth of one type of microbiome. Nothing negative'
    },
    'banana': {
        type: 'High Fiber',
        yeastEffect: 'The high fiber extract had little to no affect with yeast, only some foam at the top was formed',
        autismCorrelation: 'No specific growth of one type of microbiome. Nothing negative'
    },
    'apple': {
        type: 'High Fiber',
        yeastEffect: 'The high fiber extract had little to no affect with yeast, only some foam at the top was formed',
        autismCorrelation: 'No specific growth of one type of microbiome. Nothing negative'
    },
    'orange': {
        type: 'High Fiber',
        yeastEffect: 'The high fiber extract had little to no affect with yeast, only some foam at the top was formed',
        autismCorrelation: 'No specific growth of one type of microbiome. Nothing negative'
    },
    'strawberries': {
        type: 'High Fiber',
        yeastEffect: 'The high fiber extract had little to no affect with yeast, only some foam at the top was formed',
        autismCorrelation: 'No specific growth of one type of microbiome. Nothing negative'
    },
    'blueberries': {
        type: 'High Fiber',
        yeastEffect: 'The high fiber extract had little to no affect with yeast, only some foam at the top was formed',
        autismCorrelation: 'No specific growth of one type of microbiome. Nothing negative'
    },
    'candy': {
        type: 'Sugary',
        yeastEffect: 'Reaction where foam built at the top and color was slightly changed',
        autismCorrelation: 'Can cause GI due to decreased diversity in gut. People with Autism are reported to have GI'
    },
    'chocolate': {
        type: 'Sugary',
        yeastEffect: 'Reaction where foam built at the top and color was slightly changed',
        autismCorrelation: 'Can cause GI due to decreased diversity in gut. People with Autism are reported to have GI'
    },
    'burger': {
        type: 'Processed',
        yeastEffect: 'Oils and food coloring were seperated from the processed food. Caused a bigger reaction with the yeast, though nothing compared to the control.',
        autismCorrelation: 'Also can cause GI due to the large reaction'
    },
    'fries': {
        type: 'Processed',
        yeastEffect: 'Oils and food coloring were seperated from the processed food. Caused a bigger reaction with the yeast, though nothing compared to the control.',
        autismCorrelation: 'Also can cause GI due to the large reaction'
    },
    'chicken nugget': {
        type: 'Processed',
        yeastEffect: 'Oils and food coloring were seperated from the processed food. Caused a bigger reaction with the yeast, though nothing compared to the control.',
        autismCorrelation: 'Also can cause GI due to the large reaction'
    },
    'chips': {
        type: 'Processed',
        yeastEffect: 'Oils and food coloring were seperated from the processed food. Caused a bigger reaction with the yeast, though nothing compared to the control.',
        autismCorrelation: 'Also can cause GI due to the large reaction'
    },
    'lemonade': {
        type: 'Sugary',
        yeastEffect: 'Reaction where foam built at the top and color was slightly changed',
        autismCorrelation: 'Can cause GI due to decreased diversity in gut. People with Autism are reported to have GI'
    },
    'yogurt': {
        type: 'Fermented',
        yeastEffect: 'Less of a reaction',
        autismCorrelation: 'Gut Healthy'
    },
    'pizza': {
        type: 'Processed',
        yeastEffect: 'Oils and food coloring were seperated from the processed food. Caused a bigger reaction with the yeast, though nothing compared to the control.',
        autismCorrelation: 'Also can cause GI due to the large reaction'
    },
    'sandwich': {
        type: 'Processed',
        yeastEffect: 'Oils and food coloring were seperated from the processed food. Caused a bigger reaction with the yeast, though nothing compared to the control.',
        autismCorrelation: 'Also can cause GI due to the large reaction'
    },
    'spaghetti': {
        type: 'Processed',
        yeastEffect: 'Oils and food coloring were seperated from the processed food. Caused a bigger reaction with the yeast, though nothing compared to the control.',
        autismCorrelation: 'Also can cause GI due to the large reaction'
    },
    'salad': {
        type: 'High Fiber',
        yeastEffect: 'The high fiber extract had little to no affect with yeast, only some foam at the top was formed',
        autismCorrelation: 'No specific growth of one type of microbiome. Nothing negative'
    },
    'cake': {
        type: 'Sugary',
        yeastEffect: 'Reaction where foam built at the top and color was slightly changed',
        autismCorrelation: 'Can cause GI due to decreased diversity in gut. People with Autism are reported to have GI'
    },
    'ice cream': {
        type: 'Sugary',
        yeastEffect: 'Reaction where foam built at the top and color was slightly changed',
        autismCorrelation: 'Can cause GI due to decreased diversity in gut. People with Autism are reported to have GI'
    },
    'iced tea': {
        type: 'Sugary',
        yeastEffect: 'Reaction where foam built at the top and color was slightly changed',
        autismCorrelation: 'Can cause GI due to decreased diversity in gut. People with Autism are reported to have GI'
    },
    'coke': {
        type: 'Sugary',
        yeastEffect: 'Reaction where foam built at the top and color was slightly changed',
        autismCorrelation: 'Can cause GI due to decreased diversity in gut. People with Autism are reported to have GI'
    },
    'sprite': {
        type: 'Sugary',
        yeastEffect: 'Reaction where foam built at the top and color was slightly changed',
        autismCorrelation: 'Can cause GI due to decreased diversity in gut. People with Autism are reported to have GI'
    },
    'orange juice': {
        type: 'Sugary but depends on if it is fresh or there is added sugars',
        yeastEffect: 'Reaction where foam built at the top and color was slightly changed',
        autismCorrelation: 'Can cause GI due to decreased diversity in gut. People with Autism are reported to have GI'
    },
    'grapes': {
        type: 'High Fiber',
        yeastEffect: 'The high fiber extract had little to no affect with yeast, only some foam at the top was formed',
        autismCorrelation: 'No specific growth of one type of microbiome. Nothing negative'
    },
    'pineapple': {
        type: 'High Fiber',
        yeastEffect: 'The high fiber extract had little to no affect with yeast, only some foam at the top was formed',
        autismCorrelation: 'No specific growth of one type of microbiome. Nothing negative'
    },
    'rice': {
        type: 'High Fiber',
        yeastEffect: 'The high fiber extract had little to no affect with yeast, only some foam at the top was formed',
        autismCorrelation: 'No specific growth of one type of microbiome. Nothing negative'
    },
    'curry': {
        type: 'Processed',
        yeastEffect: 'Oils and food coloring were seperated from the processed food. Caused a bigger reaction with the yeast, though nothing compared to the control.',
        autismCorrelation: 'Also can cause GI due to the large reaction'
    },
    'chicken': {
        type: 'Processed',
        yeastEffect: 'Oils and food coloring were seperated from the processed food. Caused a bigger reaction with the yeast, though nothing compared to the control.',
        autismCorrelation: 'Also can cause GI due to the large reaction'
    },
    'milk': {
        type: 'Fermented',
        yeastEffect: 'Less of a reaction',
        autismCorrelation: 'Gut Healthy'
    },
    'cheese': {
        type: 'Fermented',
        yeastEffect: 'Less of a reaction',
        autismCorrelation: 'Gut Healthy'
    },
    'mac and cheese': {
        type: 'Processed',
        yeastEffect: 'Oils and food coloring were seperated from the processed food. Caused a bigger reaction with the yeast, though nothing compared to the control.',
        autismCorrelation: 'Also can cause GI due to the large reaction'
    },
    'noodles': {
        type: 'Processed',
        yeastEffect: 'Oils and food coloring were seperated from the processed food. Caused a bigger reaction with the yeast, though nothing compared to the control.',
        autismCorrelation: 'Also can cause GI due to the large reaction'
    },
    'soup': {
        type: 'Processed',
        yeastEffect: 'Oils and food coloring were seperated from the processed food. Caused a bigger reaction with the yeast, though nothing compared to the control.',
        autismCorrelation: 'Also can cause GI due to the large reaction'
    },
    'cheesecake': {
        type: 'Sugary',
        yeastEffect: 'Reaction where foam built at the top and color was slightly changed',
        autismCorrelation: 'Can cause GI due to decreased diversity in gut. People with Autism are reported to have GI'
    },
    'pudding': {
        type: 'Sugary',
        yeastEffect: 'Reaction where foam built at the top and color was slightly changed',
        autismCorrelation: 'Can cause GI due to decreased diversity in gut. People with Autism are reported to have GI'
    },
    'mango juice': {
        type: 'Sugary',
        yeastEffect: 'Reaction where foam built at the top and color was slightly changed',
        autismCorrelation: 'Can cause GI due to decreased diversity in gut. People with Autism are reported to have GI'
    },
    'watermelon juice': {
        type: 'Sugary',
        yeastEffect: 'Reaction where foam built at the top and color was slightly changed',
        autismCorrelation: 'Can cause GI due to decreased diversity in gut. People with Autism are reported to have GI'
    }
};

// Map food names to their emoji icons
const foodIcons = {
    'oatmeal': '🥣',
    'banana': '🍌',
    'candy': '🍬',
    'chocolate': '🍫',
    'rice': '🍚',
    'curry': '🍛',
    'burger': '🍔',
    'fries': '🍟',
    'chicken': '🍗',
    'chips': '🥔',
    'lemonade': '🥤',
    'yogurt': '🥛',
    'milk': '🥛',
    'cheese': '🧀',
    'mac and cheese': '🧈',
    'pizza': '🍕',
    'sandwich': '🥪',
    'spaghetti': '🍝',
    'salad': '🥗',
    'chicken nugget': '🍗',
    'soup': '🍲',
    'noodles': '🍜',
    'cheesecake': '🍰',
    'pudding': '🍮',
    'cake': '🍰',
    'ice cream': '🍦',
    'mango juice': '🥭',
    'watermelon juice': '🍉',
    'iced tea': '🧊',
    'coke': '🥤',
    'sprite': '🥤',
    'orange juice': '🍊',
    'raspberry lemonade': '🥤',
    'apple': '🍎',
    'orange': '🍊',
    'pineapple': '🍍',
    'strawberries': '🍓',
    'grapes': '🍇',
    'blueberries': '🫐'
};

// Microbiome data mapping (Column 2 from BioBridge data sets.xlsx)
const microbiomeData1 = {
    'oatmeal': 'Increases Bifidobacterium and Lactobacillus. Rich in beta-glucan fiber that promotes beneficial bacteria growth and improves gut barrier function.',
    'banana': 'Boosts Bifidobacterium levels. Contains prebiotic resistant starch and inulin that feed beneficial gut bacteria and improve digestive health.',
    'apple': 'Enhances Lactobacillus and reduces harmful bacteria. Pectin fiber promotes short-chain fatty acid production and gut barrier integrity.',
    'orange': 'Increases microbial diversity. Vitamin C and flavonoids support beneficial bacteria while reducing inflammation in the gut lining.',
    'pineapple': 'Promotes Lactobacillus growth. Bromelain enzyme aids digestion and anti-inflammatory compounds support gut health.',
    'strawberries': 'Boosts Bifidobacterium and antioxidant-producing bacteria. Polyphenols promote beneficial microbial communities.',
    'grapes': 'Increases polyphenol-metabolizing bacteria. Resveratrol and other compounds promote gut barrier function and reduce inflammation.',
    'blueberries': 'Enhances Bifidobacterium and Akkermansia. High anthocyanin content promotes beneficial bacteria and gut barrier integrity.',
    'candy': 'Reduces beneficial bacteria diversity. High sugar content promotes harmful bacteria growth and can disrupt gut barrier function.',
    'chocolate': 'Mixed effects - dark chocolate promotes Bifidobacterium, but high sugar varieties can reduce beneficial bacteria diversity.',
    'rice': 'Provides resistant starch when cooled. Feeds beneficial bacteria and promotes short-chain fatty acid production in the colon.',
    'curry': 'Increases anti-inflammatory bacteria. Turmeric and spices promote beneficial microbial growth and reduce gut inflammation.',
    'burger': 'May reduce beneficial bacteria. High saturated fat can alter gut microbiome composition and promote inflammatory bacteria.',
    'fries': 'Decreases microbial diversity. High fat and processing can reduce beneficial bacteria and promote harmful bacterial growth.',
    'chicken': 'Provides protein for gut barrier repair. Lean protein supports beneficial bacteria when part of balanced diet.',
    'chips': 'Reduces beneficial bacteria diversity. High fat and salt content can disrupt gut microbiome balance and promote inflammation.',
    'lemonade': 'High sugar reduces beneficial bacteria. Artificial ingredients may negatively impact gut microbiome diversity.',
    'yogurt': 'Significantly increases Lactobacillus and Bifidobacterium. Live probiotics directly add beneficial bacteria to gut microbiome.',
    'milk': 'Provides nutrients for beneficial bacteria. Lactose feeds certain beneficial bacteria, though effects vary by individual tolerance.',
    'cheese': 'Contains beneficial bacteria cultures. Aged cheeses provide probiotics and support gut microbiome diversity.',
    'mac and cheese': 'Processed nature may reduce beneficial bacteria. High fat and additives can negatively impact gut microbiome balance.',
    'pizza': 'Mixed effects depending on toppings. Processed ingredients may reduce beneficial bacteria, but vegetable toppings can help.',
    'sandwich': 'Effects depend on ingredients. Whole grain bread and vegetables promote beneficial bacteria, processed meats may not.',
    'spaghetti': 'Whole grain varieties feed beneficial bacteria. Refined pasta provides less benefit for gut microbiome health.',
    'salad': 'Significantly increases microbial diversity. Fiber-rich vegetables promote beneficial bacteria growth and gut health.',
    'chicken nugget': 'Processing may reduce beneficial bacteria. High fat and additives can negatively impact gut microbiome composition.',
    'soup': 'Vegetable-based soups promote beneficial bacteria. Fiber and nutrients support gut microbiome diversity and health.',
    'noodles': 'Whole grain varieties support beneficial bacteria. Refined noodles provide less benefit for gut microbiome health.',
    'cheesecake': 'High sugar and fat may reduce beneficial bacteria. Processed ingredients can negatively impact gut microbiome balance.',
    'pudding': 'High sugar content reduces beneficial bacteria diversity. Artificial ingredients may disrupt gut microbiome balance.',
    'cake': 'High sugar and processing reduce beneficial bacteria. Can promote harmful bacterial growth and gut inflammation.',
    'ice cream': 'High sugar and fat may reduce beneficial bacteria diversity. Cold temperature and additives can impact gut health.',
    'mango juice': 'Natural fruit enzymes support digestion. However, high sugar content may reduce some beneficial bacteria.',
    'watermelon juice': 'Provides hydration and some beneficial compounds. Lower sugar than other juices, less negative impact on gut bacteria.',
    'iced tea': 'Polyphenols in tea promote beneficial bacteria. Unsweetened varieties support gut microbiome better than sweetened versions.',
    'coke': 'High sugar significantly reduces beneficial bacteria diversity. Artificial ingredients can disrupt gut microbiome balance.',
    'sprite': 'High sugar content reduces beneficial bacteria. Artificial ingredients and additives negatively impact gut microbiome health.',
    'orange juice': 'Vitamin C supports gut health, but high sugar content may reduce some beneficial bacteria diversity.'
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeTabs();
    initializeDragAndDrop();
    initializeCharts();
    // Initialize microbiome and correlation displays in case there are already items
    updateMicrobiomePlate();
    updateCorrelationPlate();
});

// ===== TAB SWITCHING FUNCTIONALITY =====
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const foodScrollBar = document.querySelector('.food-scroll-bar');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
            
            // Show/hide food scroll bar based on active tab
            if (targetTab === 'diet') {
                foodScrollBar.style.display = 'block';
            } else {
                foodScrollBar.style.display = 'none';
            }
            
            // Update plates when switching to microbiome or correlation tabs
            if (targetTab === 'microbiome') {
                updateMicrobiomePlate();
            } else if (targetTab === 'correlation') {
                updateCorrelationPlate();
            }
        });
    });
    
    // Initially hide food scroll bar if diet tab is not active
    const activeDietTab = document.querySelector('.tab-button[data-tab="diet"].active');
    if (!activeDietTab) {
        foodScrollBar.style.display = 'none';
    }
}

// ===== DRAG AND DROP FUNCTIONALITY =====
function initializeDragAndDrop() {
    const foodItems = document.querySelectorAll('.food-item');
    const dropZones = document.querySelectorAll('.plate-section, .drink-circle');
    
    // Set up drag events for food items
    foodItems.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
        
        // Add click-to-add functionality as alternative to drag-and-drop
        item.addEventListener('click', (e) => {
            const foodName = item.getAttribute('data-food');
            const category = item.getAttribute('data-category');
            addFoodToPlate(foodName, category);
            showFeedback(`✓ ${capitalizeFirst(foodName)} added to ${capitalizeFirst(category)}!`, 'success');
        });
    });
    
    // Set up drop zones
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('dragleave', handleDragLeave);
        zone.addEventListener('drop', handleDrop);
    });
}

function handleDragStart(e) {
    e.currentTarget.classList.add('dragging');
    const foodName = e.currentTarget.getAttribute('data-food');
    const category = e.currentTarget.getAttribute('data-category');
    e.dataTransfer.setData('food', foodName);
    e.dataTransfer.setData('category', category);
    e.dataTransfer.effectAllowed = 'copy';
}

function handleDragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    
    const foodName = e.dataTransfer.getData('food');
    const category = e.dataTransfer.getData('category');
    const dropZoneCategory = e.currentTarget.getAttribute('data-category');
    
    // Allow food to be dropped anywhere - use drop zone category instead of original category
    addFoodToPlate(foodName, dropZoneCategory);
    showFeedback(`✓ ${capitalizeFirst(foodName)} added to ${capitalizeFirst(dropZoneCategory)}!`, 'success');
}

function addFoodToPlate(foodName, category) {
    // Check if this section already has a food item
    if (plateItems[category] !== null) {
        // Remove the existing item first
        removeFoodFromPlate(plateItems[category], category);
    }
    
    // Add the new item to the section
    plateItems[category] = foodName;
    updatePlateDisplay();
    
    // Add visual food icon on the plate
    addFoodIconToPlate(foodName, category);
    animateAddition(category);
}

function addFoodIconToPlate(foodName, category) {
    // Create a food icon element to display on the plate
    const foodIcon = document.createElement('div');
    foodIcon.className = `plate-food-icon plate-food-${category}`;
    foodIcon.textContent = foodIcons[foodName] || '🍽️';
    foodIcon.setAttribute('data-food', foodName);
    foodIcon.setAttribute('data-category', category);
    
    // Position the icon on the appropriate section
    const myplate = document.querySelector('.myplate');
    const plateWrapper = myplate.parentElement;
    
    // Create wrapper if it doesn't exist
    let plateIconWrapper = document.querySelector('.plate-icon-wrapper');
    if (!plateIconWrapper) {
        plateIconWrapper = document.createElement('div');
        plateIconWrapper.className = 'plate-icon-wrapper';
        myplate.parentNode.insertBefore(plateIconWrapper, myplate);
        plateIconWrapper.appendChild(myplate);
    }
    
    plateIconWrapper.appendChild(foodIcon);
    
    // Calculate position based on category and number of items
    positionFoodIcon(foodIcon, category);
    
    // Add click handler to remove item
    foodIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        removeFoodFromPlate(foodName, category);
    });
}

function positionFoodIcon(iconElement, category) {
    // Positions are now handled by CSS classes
    // No JavaScript calculation needed - CSS will handle the fixed positions
}

function removeFoodFromPlate(foodName, category) {
    // Remove from tracking
    plateItems[category] = null;
    
    // Remove visual icon from plate
    const iconElement = document.querySelector(`.plate-food-icon[data-food="${foodName}"][data-category="${category}"]`);
    if (iconElement) {
        iconElement.remove();
    }
    
    updatePlateDisplay();
    showFeedback(`${capitalizeFirst(foodName)} removed!`, 'success');
}

function updatePlateDisplay() {
    const displayElement = document.getElementById('plate-items-list');
    
    let displayHTML = '';
    let itemsList = [];
    
    // Collect all items that are not null
    for (const [category, item] of Object.entries(plateItems)) {
        if (item !== null) {
            const emoji = foodIcons[item] || '🍽️';
            itemsList.push(`${emoji} ${capitalizeFirst(item)}`);
        }
    }
    
    if (itemsList.length === 0) {
        displayHTML = 'Click or drag foods to your plate!';
    } else {
        displayHTML = `<div style="font-size: 1.2rem; color: #667eea; margin-bottom: 15px;">
            <strong>Your Plate (${itemsList.length}/5):</strong>
        </div>
        <div style="font-size: 1.1rem; line-height: 2;">
            ${itemsList.join(' • ')}
        </div>`;
        
        // Add clear button
        displayHTML += `<button onclick="clearPlate()" style="
            margin-top: 15px;
            padding: 10px 20px;
            background: #ff6b6b;
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-weight: 600;
            font-size: 1rem;
        ">Clear Plate</button>`;
    }
    
    displayElement.innerHTML = displayHTML;
    
    // Also update microbiome display
    updateMicrobiomePlateDisplay();
}

function updateMicrobiomePlateDisplay() {
    const microbiomeDisplayElement = document.getElementById('microbiome-items-list');
    if (!microbiomeDisplayElement) return;
    
    let displayHTML = '';
    let itemsList = [];
    
    // Collect all items that are not null
    for (const [category, item] of Object.entries(plateItems)) {
        if (item !== null) {
            const emoji = foodIcons[item] || '🍽️';
            itemsList.push(`${emoji} ${capitalizeFirst(item)} (${capitalizeFirst(category)})`);
        }
    }
    
    if (itemsList.length === 0) {
        displayHTML = 'No items selected yet. Go to the Diet tab to add foods!';
    } else {
        displayHTML = `<div style="font-size: 1.2rem; color: #667eea; margin-bottom: 15px;">
            <strong>Your Selected Foods (${itemsList.length}/5):</strong>
        </div>
        <div style="font-size: 1.1rem; line-height: 2;">
            ${itemsList.join(' • ')}
        </div>`;
    }
    
    microbiomeDisplayElement.innerHTML = displayHTML;
}

function updateMicrobiomePlate() {
    // Remove existing food icons from microbiome plate
    const existingIcons = document.querySelectorAll('#microbiome-tab .plate-food-icon-microbiome');
    existingIcons.forEach(icon => icon.remove());
    
    // Remove existing textboxes and arrows
    const existingTextboxes = document.querySelectorAll('.microbiome-textbox');
    const existingArrows = document.querySelectorAll('.microbiome-arrow');
    existingTextboxes.forEach(box => box.remove());
    existingArrows.forEach(arrow => arrow.remove());
    
    // Add food icons and textboxes for each category
    for (const [category, item] of Object.entries(plateItems)) {
        if (item !== null) {
            addFoodIconToMicrobiomePlate(item, category);
            addMicrobiomeTextbox(item, category);
        }
    }
    
    updateMicrobiomePlateDisplay();
}

function addMicrobiomeTextbox(foodName, category) {
    const foodData = microbiomeData[foodName] || { type: 'Unknown', yeastEffect: 'No data available' };
    const container = document.getElementById('microbiome-info-container');
    
    // Create textbox
    const textbox = document.createElement('div');
    textbox.className = `microbiome-textbox ${category}`;
    textbox.innerHTML = `
        <h4>${capitalizeFirst(foodName)}</h4>
        <p><strong>Type:</strong> ${foodData.type}</p>
        <p class="gut-health-info">${getGutHealthDescription(foodData.type)}</p>
        <p class="experiment-description"><strong>Research:</strong> ${getExperimentDescription(foodData.yeastEffect)}</p>
    `;
    
    // Create arrow
    const arrow = document.createElement('div');
    arrow.className = `microbiome-arrow ${category}`;
    
    // Add to container
    container.appendChild(textbox);
    container.appendChild(arrow);
}

function getGutHealthDescription(type) {
    const descriptions = {
        'High Fiber': 'Promotes beneficial bacteria growth and increases microbiome diversity',
        'Sugary': 'May reduce microbiome diversity and cause gastrointestinal issues',
        'Processed': 'Can disrupt gut bacteria balance and decrease beneficial microbes',
        'Fermented': 'Contains probiotics that support healthy gut bacteria and diversity',
        'Sugary but depends on if it is fresh or there is added sugars': 'Fresh versions support gut health better than processed versions'
    };
    return descriptions[type] || 'Effect on gut microbiome varies';
}

function getExperimentDescription(yeastEffect) {
    // Rephrase the experiment descriptions to be more readable
    if (yeastEffect.includes('little to no affect with yeast')) {
        return 'During an experiment using yeast to model gut bacteria, students found minimal reaction, suggesting these foods are gentle on digestive systems.';
    } else if (yeastEffect.includes('foam built at the top and color was slightly changed')) {
        return 'During an experiment using yeast to model gut bacteria, students observed foam formation and color changes, indicating potential digestive disruption.';
    } else if (yeastEffect.includes('Oils and food coloring were seperated')) {
        return 'During an experiment using yeast to model gut bacteria, students found oils and additives separated out, causing significant reactions that suggest digestive stress.';
    } else if (yeastEffect.includes('Less of a reaction')) {
        return 'During an experiment using yeast to model gut bacteria, students found reduced reactions, indicating these foods may support digestive balance.';
    } else {
        return `During an experiment using yeast to model gut bacteria, students found ${yeastEffect.toLowerCase()}`;
    }
}

function getMicrobiomeDescription(type) {
    const descriptions = {
        'High Fiber': 'Promotes beneficial bacteria growth and gut health',
        'Sugary': 'May reduce microbiome diversity and cause GI issues',
        'Processed': 'Can disrupt gut bacteria balance and cause inflammation',
        'Fermented': 'Contains probiotics that support healthy gut bacteria',
        'Sugary but depends on if it is fresh or there is added sugars': 'Fresh is better for gut health than processed versions'
    };
    return descriptions[type] || 'Effect on gut microbiome varies';
}

function addFoodIconToMicrobiomePlate(foodName, category) {
    const foodIcon = document.createElement('div');
    foodIcon.className = `plate-food-icon-microbiome plate-food-${category}-microbiome`;
    foodIcon.textContent = foodIcons[foodName] || '🍽️';
    foodIcon.setAttribute('data-food', foodName);
    foodIcon.setAttribute('data-category', category);
    
    const myplate = document.querySelector('#microbiome-tab .myplate');
    if (!myplate) return;
    
    const plateWrapper = myplate.parentElement;
    
    // Create wrapper if it doesn't exist
    let plateIconWrapper = document.querySelector('#microbiome-tab .plate-icon-wrapper-microbiome');
    if (!plateIconWrapper) {
        plateIconWrapper = document.createElement('div');
        plateIconWrapper.className = 'plate-icon-wrapper-microbiome';
        myplate.parentNode.insertBefore(plateIconWrapper, myplate);
        plateIconWrapper.appendChild(myplate);
    }
    
    plateIconWrapper.appendChild(foodIcon);
}

function updateCorrelationPlate() {
    // Remove existing food icons from correlation plate
    const existingIcons = document.querySelectorAll('#correlation-tab .plate-food-icon-correlation');
    existingIcons.forEach(icon => icon.remove());
    
    // Remove existing textboxes and arrows
    const existingTextboxes = document.querySelectorAll('.correlation-textbox');
    const existingArrows = document.querySelectorAll('.correlation-arrow');
    existingTextboxes.forEach(box => box.remove());
    existingArrows.forEach(arrow => arrow.remove());
    
    // Add food icons and textboxes for each category
    for (const [category, item] of Object.entries(plateItems)) {
        if (item !== null) {
            addFoodIconToCorrelationPlate(item, category);
            addCorrelationTextbox(item, category);
        }
    }
}

function addCorrelationTextbox(foodName, category) {
    const foodData = microbiomeData[foodName] || { type: 'Unknown', autismCorrelation: 'No data available' };
    const container = document.getElementById('correlation-info-container');
    
    // Determine if food is good or bad based on correlation data
    const isGoodFood = isHealthyFood(foodData.autismCorrelation);
    const borderColor = isGoodFood ? 'good-food' : 'bad-food';
    
    // Create textbox
    const textbox = document.createElement('div');
    textbox.className = `correlation-textbox ${category} ${borderColor}`;
    textbox.innerHTML = `
        <h4>${capitalizeFirst(foodName)}</h4>
        <p><strong>Food Category:</strong> ${foodData.type}</p>
        <p class="correlation-description"><strong>Correlation to Autism:</strong> ${getAutismCorrelationDescription(foodData.autismCorrelation)}</p>
    `;
    
    // Create arrow with appropriate color
    const arrow = document.createElement('div');
    arrow.className = `correlation-arrow ${category} ${borderColor}`;
    
    // Add to container
    container.appendChild(textbox);
    container.appendChild(arrow);
}

function isHealthyFood(correlation) {
    // Determine if food is healthy based on correlation data
    if (correlation.includes('Gut Healthy') || 
        correlation.includes('No specific growth of one type of microbiome. Nothing negative')) {
        return true;
    }
    return false;
}

function getAutismCorrelationDescription(correlation) {
    // Rephrase the correlation descriptions to be more professional
    if (correlation.includes('No specific growth of one type of microbiome. Nothing negative')) {
        return 'No specific correlation was found between this food and autism-related gastrointestinal symptoms in current research studies.';
    } else if (correlation.includes('Can cause GI due to decreased diversity in gut. People with Autism are reported to have GI')) {
        return 'Studies suggest this food type may contribute to reduced gut microbiome diversity, potentially exacerbating gastrointestinal symptoms commonly observed in individuals with autism spectrum disorders.';
    } else if (correlation.includes('Also can cause GI due to the large reaction')) {
        return 'Research indicates this processed food may trigger significant gastrointestinal responses, potentially contributing to digestive complications frequently reported in autism spectrum disorder populations.';
    } else if (correlation.includes('Gut Healthy')) {
        return 'Clinical evidence supports this food\'s beneficial impact on gastrointestinal health, promoting optimal gut microbiome balance and digestive function.';
    } else {
        return `Clinical research findings: ${correlation}`;
    }
}

function addFoodIconToCorrelationPlate(foodName, category) {
    const foodIcon = document.createElement('div');
    foodIcon.className = `plate-food-icon-correlation plate-food-${category}-correlation`;
    foodIcon.textContent = foodIcons[foodName] || '🍽️';
    foodIcon.setAttribute('data-food', foodName);
    foodIcon.setAttribute('data-category', category);
    
    const myplate = document.querySelector('#correlation-tab .myplate');
    if (!myplate) return;
    
    const plateWrapper = myplate.parentElement;
    
    // Create wrapper if it doesn't exist
    let plateIconWrapper = document.querySelector('#correlation-tab .plate-icon-wrapper-correlation');
    if (!plateIconWrapper) {
        plateIconWrapper = document.createElement('div');
        plateIconWrapper.className = 'plate-icon-wrapper-correlation';
        myplate.parentNode.insertBefore(plateIconWrapper, myplate);
        plateIconWrapper.appendChild(myplate);
    }
    
    plateIconWrapper.appendChild(foodIcon);
}

function clearPlate() {
    plateItems = {
        fruits: null,
        vegetables: null,
        grains: null,
        protein: null,
        drink: null
    };
    
    // Remove all food icons from plate
    const allFoodIcons = document.querySelectorAll('.plate-food-icon');
    allFoodIcons.forEach(icon => icon.remove());
    
    updatePlateDisplay();
    showFeedback('Plate cleared!', 'success');
}

function getCategoryIcon(category) {
    const icons = {
        fruits: '🍎',
        vegetables: '🥦',
        grains: '🌾',
        protein: '🥩',
        drink: '🥤'
    };
    return icons[category] || '🍽️';
}

function animateAddition(category) {
    // Find the corresponding section and add a brief animation
    const section = document.querySelector(`[data-category="${category}"]`);
    if (section) {
        section.style.transition = 'all 0.3s ease';
        section.style.transform = 'scale(1.1)';
        setTimeout(() => {
            section.style.transform = 'scale(1)';
        }, 300);
    }
}

function showFeedback(message, type) {
    // Create temporary feedback element
    const feedback = document.createElement('div');
    feedback.textContent = message;
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 15px 30px;
        background: ${type === 'success' ? '#51cf66' : '#ff6b6b'};
        color: white;
        border-radius: 10px;
        font-weight: 600;
        font-size: 1.1rem;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => feedback.remove(), 300);
    }, 2000);
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// ===== CHART VISUALIZATIONS =====
let microbiomeChart = null;
let correlationChart = null;

function initializeCharts() {
    // Initialize Microbiome Chart
    const microbiomeCtx = document.getElementById('microbiomeChart');
    if (microbiomeCtx) {
        microbiomeChart = new Chart(microbiomeCtx, {
            type: 'doughnut',
            data: {
                labels: ['Lactobacillus', 'Bifidobacterium', 'Bacteroides', 'Firmicutes', 'Other Bacteria'],
                datasets: [{
                    label: 'Bacterial Composition (%)',
                    data: [25, 20, 22, 18, 15],
                    backgroundColor: [
                        '#ff6b6b',
                        '#51cf66',
                        '#ffd43b',
                        '#845ef7',
                        '#74b9ff'
                    ],
                    borderColor: '#fff',
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            font: {
                                size: 14,
                                weight: '600'
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Gut Microbiome Diversity',
                        font: {
                            size: 20,
                            weight: '700'
                        },
                        padding: 20,
                        color: '#667eea'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.parsed}%`;
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Initialize Correlation Chart
    const correlationCtx = document.getElementById('correlationChart');
    if (correlationCtx) {
        correlationChart = new Chart(correlationCtx, {
            type: 'bar',
            data: {
                labels: ['Yogurt', 'Bananas', 'Oatmeal', 'Chicken', 'Rice', 'Fries', 'Candy', 'Chips'],
                datasets: [{
                    label: 'Microbiome Diversity Impact',
                    data: [85, 75, 80, 70, 60, 40, 25, 35],
                    backgroundColor: [
                        '#51cf66',
                        '#51cf66',
                        '#51cf66',
                        '#51cf66',
                        '#ffd43b',
                        '#ff8787',
                        '#ff6b6b',
                        '#ff8787'
                    ],
                    borderColor: [
                        '#2f9e44',
                        '#2f9e44',
                        '#2f9e44',
                        '#2f9e44',
                        '#f59f00',
                        '#f03e3e',
                        '#c92a2a',
                        '#f03e3e'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            },
                            font: {
                                size: 12,
                                weight: '600'
                            }
                        },
                        title: {
                            display: true,
                            text: 'Positive Impact on Gut Health',
                            font: {
                                size: 14,
                                weight: '700'
                            },
                            color: '#667eea'
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 12,
                                weight: '600'
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Food Impact on Microbiome Health',
                        font: {
                            size: 20,
                            weight: '700'
                        },
                        padding: 20,
                        color: '#667eea'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Impact: ${context.parsed.y}% `;
                            }
                        }
                    }
                }
            }
        });
    }
}

// Add fadeOut animation and food icon styles to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
        }
    }
    
    .plate-icon-wrapper {
        position: relative;
        width: 100%;
        max-width: 400px;
    }
    
    .plate-food-icon {
        position: absolute;
        font-size: 3.5rem;
        cursor: pointer;
        z-index: 10;
        transition: transform 0.2s ease, filter 0.2s ease;
        animation: popIn 0.3s ease;
        user-select: none;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        pointer-events: auto;
    }
    
    /* Centered positions for each category - aligned with plate sections */
    .plate-food-vegetables {
        top: 32%;
        left: 68%;
        transform: translate(-50%, -50%);
    }
    
    .plate-food-protein {
        top: 32%;
        left: 32%;
        transform: translate(-50%, -50%);
    }
    
    .plate-food-grains {
        top: 68%;
        left: 32%;
        transform: translate(-50%, -50%);
    }
    
    .plate-food-fruits {
        top: 68%;
        left: 68%;
        transform: translate(-50%, -50%);
    }
    
    .plate-food-drink {
        top: 40%;
        left: 125%;
        transform: translate(-50%, -50%);
    }
    
    .plate-food-icon:hover {
        filter: brightness(1.2);
    }
    
    .plate-food-vegetables:hover {
        transform: translate(-50%, -50%) scale(1.3) rotate(10deg);
    }
    
    .plate-food-protein:hover {
        transform: translate(-50%, -50%) scale(1.3) rotate(10deg);
    }
    
    .plate-food-grains:hover {
        transform: translate(-50%, -50%) scale(1.3) rotate(10deg);
    }
    
    .plate-food-fruits:hover {
        transform: translate(-50%, -50%) scale(1.3) rotate(10deg);
    }
    
    .plate-food-drink:hover {
        transform: translate(-50%, -50%) scale(1.3) rotate(10deg);
    }
    
    @keyframes popIn {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 1;
        }
    }
    
    /* Microbiome tab plate styling */
    .plate-icon-wrapper-microbiome {
        position: relative;
        width: 100%;
        max-width: 400px;
    }
    
    .plate-food-icon-microbiome {
        position: absolute;
        font-size: 3.5rem;
        z-index: 10;
        animation: popIn 0.3s ease;
        user-select: none;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        pointer-events: none;
    }
    
    .plate-food-vegetables-microbiome {
        top: 32%;
        left: 68%;
        transform: translate(-50%, -50%);
    }
    
    .plate-food-protein-microbiome {
        top: 32%;
        left: 32%;
        transform: translate(-50%, -50%);
    }
    
    .plate-food-grains-microbiome {
        top: 68%;
        left: 32%;
        transform: translate(-50%, -50%);
    }
    
    .plate-food-fruits-microbiome {
        top: 68%;
        left: 68%;
        transform: translate(-50%, -50%);
    }
    
    .plate-food-drink-microbiome {
        top: 50%;
        left: 145%;
        transform: translate(-50%, -50%);
    }
    
    /* Correlation tab plate styling */
    .plate-icon-wrapper-correlation {
        position: relative;
        width: 100%;
        max-width: 400px;
    }
    
    .plate-food-icon-correlation {
        position: absolute;
        font-size: 3.5rem;
        z-index: 10;
        animation: popIn 0.3s ease;
        user-select: none;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        pointer-events: none;
    }
    
    .plate-food-vegetables-correlation {
        top: 32%;
        left: 68%;
        transform: translate(-50%, -50%);
    }
    
    .plate-food-protein-correlation {
        top: 32%;
        left: 32%;
        transform: translate(-50%, -50%);
    }
    
    .plate-food-grains-correlation {
        top: 68%;
        left: 32%;
        transform: translate(-50%, -50%);
    }
    
    .plate-food-fruits-correlation {
        top: 68%;
        left: 68%;
        transform: translate(-50%, -50%);
    }
    
    .plate-food-drink-correlation {
        top: 50%;
        left: 145%;
        transform: translate(-50%, -50%);
    }
    
    .microbiome-textbox {
        position: absolute;
        background: white;
        border: 2px solid #667eea;
        border-radius: 10px;
        padding: 15px;
        max-width: 280px;
        min-width: 240px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        font-size: 0.8rem;
        line-height: 1.3;
        z-index: 20;
        animation: fadeIn 0.5s ease;
    }
    
    .microbiome-textbox h4 {
        color: #667eea;
        margin: 0 0 8px 0;
        font-size: 1rem;
        font-weight: 600;
    }
    
    .microbiome-textbox p {
        margin: 0 0 8px 0;
        color: #333;
        font-size: 0.75rem;
    }
    
    .microbiome-textbox .gut-health-info {
        color: #2d5a27;
        font-weight: 500;
        background: rgba(76, 175, 80, 0.1);
        padding: 6px;
        border-radius: 5px;
        margin: 8px 0;
    }
    
    .microbiome-textbox .experiment-description {
        color: #555;
        font-style: italic;
        line-height: 1.2;
    }
    
    .microbiome-arrow {
        position: absolute;
        background: #667eea;
        z-index: 15;
    }
    
    .microbiome-arrow::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
    }
    
    /* Positioning around the plate - side by side layout */
    /* Vegetables (top-right of plate) - textbox to the right */
    .microbiome-textbox.vegetables {
        top: 50px;
        left: 450px;
    }
    
    .microbiome-arrow.vegetables {
        top: 110px;
        left: 420px;
        width: 30px;
        height: 2px;
    }
    
    .microbiome-arrow.vegetables::after {
        border-left: 8px solid #667eea;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        right: -8px;
        top: -4px;
    }
    
    /* Fruits (bottom-right of plate) - textbox to the right */
    .microbiome-textbox.fruits {
        top: 280px;
        left: 450px;
    }
    
    .microbiome-arrow.fruits {
        top: 340px;
        left: 420px;
        width: 30px;
        height: 2px;
    }
    
    .microbiome-arrow.fruits::after {
        border-left: 8px solid #667eea;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        right: -8px;
        top: -4px;
    }
    
    /* Grains (bottom-left of plate) - textbox to the left */
    .microbiome-textbox.grains {
        top: 280px;
        left: 20px;
    }
    
    .microbiome-arrow.grains {
        top: 340px;
        left: 270px;
        width: 30px;
        height: 2px;
    }
    
    .microbiome-arrow.grains::after {
        border-right: 8px solid #667eea;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        left: -8px;
        top: -4px;
    }
    
    /* Protein (top-left of plate) - textbox to the left */
    .microbiome-textbox.protein {
        top: 50px;
        left: 20px;
    }
    
    .microbiome-arrow.protein {
        top: 110px;
        left: 270px;
        width: 30px;
        height: 2px;
    }
    
    .microbiome-arrow.protein::after {
        border-right: 8px solid #667eea;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        left: -8px;
        top: -4px;
    }
    
    /* Drink (right side of plate) - textbox further to the right */
    .microbiome-textbox.drink {
        top: 165px;
        left: 600px;
    }
    
    .microbiome-arrow.drink {
        top: 200px;
        left: 570px;
        width: 30px;
        height: 2px;
    }
    
    .microbiome-arrow.drink::after {
        border-left: 8px solid #667eea;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        right: -8px;
        top: -4px;
    }
    
    /* Responsive adjustments for smaller screens */
    @media (max-width: 768px) {
        .microbiome-textbox {
            max-width: 220px;
            
            font-size: 0.7rem;
            padding: 10px;
        }
        
        .microbiome-textbox.vegetables,
        .microbiome-textbox.fruits {
            left: 300px;
            top: 10px;
        }
        
        .microbiome-textbox.grains,
        .microbiome-textbox.protein {
            left: 10px;
        }
        
        .microbiome-textbox.drink {
            left: 320px;
            top: 450px;
        }
        
        .microbiome-arrow.vegetables,
        .microbiome-arrow.fruits {
            left: 270px;
            width: 30px;
        }
        
        .microbiome-arrow.grains,
        .microbiome-arrow.protein {
            left: 230px;
            width: 30px;
        }
        
        .microbiome-arrow.drink {
            left: 290px;
            top: 480px;
            width: 30px;
        }
    }
    
    /* Correlation Info Textboxes */
    .correlation-info-container {
        position: relative;
        width: 100%;
        max-width: 1200px;
        margin: 40px auto 0;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
    
    .correlation-textbox {
        position: absolute;
        background: white;
        border: 2px solid #e74c3c;
        border-radius: 10px;
        padding: 15px;
        max-width: 300px;
        min-width: 260px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        font-size: 0.8rem;
        line-height: 1.3;
        z-index: 20;
        animation: fadeIn 0.5s ease;
    }
    
    /* Good food styling (green) */
    .correlation-textbox.good-food {
        border-color: #27ae60;
    }
    
    .correlation-textbox.good-food h4 {
        color: #27ae60;
    }
    
    .correlation-textbox.good-food .correlation-description {
        background: rgba(39, 174, 96, 0.1);
    }
    
    /* Bad food styling (red) */
    .correlation-textbox.bad-food {
        border-color: #e74c3c;
    }
    
    .correlation-textbox.bad-food h4 {
        color: #e74c3c;
    }
    
    .correlation-textbox.bad-food .correlation-description {
        background: rgba(231, 76, 60, 0.1);
    }
    
    .correlation-textbox h4 {
        color: #e74c3c;
        margin: 0 0 8px 0;
        font-size: 1rem;
        font-weight: 600;
    }
    
    .correlation-textbox p {
        margin: 0 0 8px 0;
        color: #333;
        font-size: 0.75rem;
    }
    
    .correlation-textbox .correlation-description {
        color: #555;
        background: rgba(231, 76, 60, 0.1);
        padding: 8px;
        border-radius: 5px;
        margin: 8px 0;
        line-height: 1.3;
        font-weight: 400;
    }
    
    .correlation-arrow {
        position: absolute;
        background: #e74c3c;
        z-index: 15;
    }
    
    /* Good food arrow styling (green) */
    .correlation-arrow.good-food {
        background: #27ae60;
    }
    
    /* Bad food arrow styling (red) */
    .correlation-arrow.bad-food {
        background: #e74c3c;
    }
    
    .correlation-arrow::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
    }
    
    /* Positioning based on actual food icon positions */
    .correlation-textbox.vegetables {
        top: 50px;
        left: 450px;
    }
    
    .correlation-arrow.vegetables {
        top: 110px;
        left: 420px;
        width: 30px;
        height: 2px;
    }
    
    .correlation-arrow.vegetables::after {
        border-left: 8px solid #e74c3c;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        right: -8px;
        top: -4px;
    }
    
    .correlation-arrow.vegetables.good-food::after {
        border-left-color: #27ae60;
    }
    
    .correlation-textbox.fruits {
        top: 280px;
        left: 450px;
    }
    
    .correlation-arrow.fruits {
        top: 200px;
        left: 445px;
        width: 35px;
        height: 2px;
        transform: rotate(20deg);
        transform-origin: left;
    }
    
    .correlation-arrow.fruits::after {
        border-left: 8px solid #e74c3c;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        right: -8px;
        top: -4px;
    }
    
    .correlation-arrow.fruits.good-food::after {
        border-left-color: #27ae60;
    }
    
    .correlation-textbox.grains {
        top: 280px;
        left: 20px;
    }
    
    .correlation-arrow.grains {
        top: 340px;
        left: 270px;
        width: 30px;
        height: 2px;
    }
    
    .correlation-arrow.grains::after {
        border-right: 8px solid #e74c3c;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        left: -8px;
        top: -4px;
    }
    
    .correlation-arrow.grains.good-food::after {
        border-right-color: #27ae60;
    }
    
    .correlation-textbox.protein {
        top: 50px;
        left: 20px;
    }
    
    .correlation-arrow.protein {
        top: 110px;
        left: 270px;
        width: 30px;
        height: 2px;
    }
    
    .correlation-arrow.protein::after {
        border-right: 8px solid #e74c3c;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        left: -8px;
        top: -4px;
    }
    
    .correlation-arrow.protein.good-food::after {
        border-right-color: #27ae60;
    }
    
    .correlation-textbox.drink {
        top: 165px;
        left: 600px;
    }
    
    .correlation-arrow.drink {
        top: 140px;
        left: 480px;
        width: 40px;
        height: 2px;
    }
    
    .correlation-arrow.drink::after {
        border-left: 8px solid #e74c3c;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        right: -8px;
        top: -4px;
    }
    
    /* Responsive adjustments for correlation tab */
    @media (max-width: 768px) {
        .correlation-info-container {
            height: 700px;
            overflow-x: auto;
        }
        
        .correlation-textbox {
            max-width: 240px;
            min-width: 220px;
            font-size: 0.7rem;
            padding: 10px;
        }
        
        .correlation-textbox.vegetables,
        .correlation-textbox.fruits {
            left: 320px;
        }
        
        .correlation-textbox.grains,
        .correlation-textbox.protein {
            left: 10px;
        }
        
        .correlation-textbox.drink {
            left: 350px;
            top: 450px;
        }
        
        .correlation-arrow.vegetables,
        .correlation-arrow.fruits {
            left: 270px;
            width: 30px;
        }
        
        .correlation-arrow.grains,
        .correlation-arrow.protein {
            left: 230px;
            width: 30px;
        }
        
        .correlation-arrow.drink {
            left: 290px;
            top: 480px;
            width: 30px;
        }
    }
`;
document.head.appendChild(style);

// Make clearPlate function globally accessible
window.clearPlate = clearPlate;

console.log('BioBridge initialized successfully! 🎉');
