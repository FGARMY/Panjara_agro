const fs = require('fs');

async function run() {
    const productsPath = 'frontend/src/data/products.json';
    const data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

    const keywordMap = {
        "turmeric-powder": "Turmeric",
        "red-chilli-powder": "Chili_powder",
        "coriander-powder": "Coriander",
        "cumin-seeds": "Cumin",
        "black-pepper": "Black_pepper",
        "cloves": "Clove",
        "cardamom": "Cardamom",
        "cinnamon-sticks": "Cinnamon",
        "mustard-seeds": "Mustard_seed",
        "garam-masala": "Garam_masala",
        "fennel-seeds": "Fennel",
        "chaat-masala": "Chaat_masala",
        "white-onion-powder": "Onion_powder",
        "white-onion-flakes": "Onion",
        "red-onion-flakes": "Red_onion",
        "red-onion-powder": "Onion_powder",
        "ginger-powder": "Ginger",
        "ginger-flakes": "Ginger",
        "garlic-powder": "Garlic_powder",
        "garlic-flakes": "Garlic",
        "amchur-powder": "Amchoor",
        "pumpkin-powder": "Pumpkin",
        "pumpkin-flakes": "Pumpkin",
        "cabbage-powder": "Cabbage",
        "cabbage-flakes": "Cabbage",
        "spinach-powder": "Spinach",
        "curry-powder": "Curry_powder",
        "sprouted-chana": "Chickpea",
        "bitter-gourd-powder": "Momordica_charantia",
        "beetroot-powder": "Beetroot",
        "moringa-powder": "Moringa_oleifera",
        "sprouted-matki": "Moth_bean",
        "carrot-powder": "Carrot",
        "carrot-flakes": "Carrot",
        "mint-powder": "Mint",
        "tamarind-powder": "Tamarind",
        "potato-powder": "Potato",
        "potato-flakes": "Potato",
        "banana-powder": "Banana_powder",
        "sprouted-ragi": "Eleusine_coracana",
        "french-beans-flakes": "Green_bean",
        "kasuri-methi": "Fenugreek",
        "amla-powder": "Phyllanthus_emblica",
        "shikai-powder": "Senegalia_rugata",
        "aloevera-powder": "Aloe_vera",
        "hina-powder": "Henna",
        "tulsi-powder": "Ocimum_tenuiflorum",
        "ashwagandha-powder": "Ashwagandha",
        "dalchini-powder": "Cinnamon",
        "beetroot-flakes": "Beetroot",
        "fried-onion-flakes": "Fried_onion"
    };

    console.log("Fetching images from Wikipedia API...");
    for (let p of data) {
        let topic = keywordMap[p.id] || p.name.split(' ')[0];
        try {
            let url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(topic)}&prop=pageimages&format=json&pithumbsize=600`;
            let res = await fetch(url);
            let json = await res.json();
            let pages = json.query.pages;
            let pageId = Object.keys(pages)[0];
            
            if (pageId !== "-1" && pages[pageId].thumbnail) {
                p.image = pages[pageId].thumbnail.source;
                console.log(`[OK] ${p.id} -> ${topic}`);
            } else {
                console.log(`[MISSING] ${p.id} (Tried: ${topic})`);
                // generic fallback
                p.image = 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
            }
        } catch (e) {
            console.log(`[ERROR] ${p.id}: ${e.message}`);
            p.image = 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
        }
        // Small delay to prevent rate-limiting
        await new Promise(r => setTimeout(r, 100));
    }

    fs.writeFileSync(productsPath, JSON.stringify(data, null, 4));
    console.log("SUCCESS: Successfully added real images to products.json");
}

run();
