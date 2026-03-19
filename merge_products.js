const fs = require('fs');

const existing = JSON.parse(fs.readFileSync('frontend/src/data/products.json', 'utf8'));
const newProds = JSON.parse(fs.readFileSync('new_products.json', 'utf8'));

// Avoid duplicates just in case
const combined = [...existing];
newProds.forEach(p => {
    if (!combined.find(c => c.id === p.id)) {
        combined.push(p);
    }
});

fs.writeFileSync('frontend/src/data/products.json', JSON.stringify(combined, null, 4));
console.log('Successfully merged ' + newProds.length + ' products.');
