const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(srcDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  const heroBgImport = "import heroBg from '../assets/hero-banner.png';";
  if (content.includes(heroBgImport)) {
    content = content.replace(
      heroBgImport,
      "const heroBg = 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80';"
    );
    changed = true;
  }

  const productsBgImport = "import productsBg from '../assets/products-hero.png';";
  if (content.includes(productsBgImport)) {
    content = content.replace(
      productsBgImport,
      "const productsBg = 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80';"
    );
    changed = true;
  }

  const farmerBgImport = "import farmerBg from '../assets/farmer-network.png';";
  if (content.includes(farmerBgImport)) {
    content = content.replace(
      farmerBgImport,
      "const farmerBg = 'https://images.unsplash.com/photo-1592982537447-6f2c6e6eb12d?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80';"
    );
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + file);
  }
}
