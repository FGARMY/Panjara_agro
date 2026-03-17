// ===== PANJARA AGRO — Structured Company Data =====
// Central data file for compliance, leadership, FPO stats, trade platforms, and infrastructure.
// Edit this file to update content across all pages dynamically.

export const compliance = {
    iec: {
        label: 'Import Export Code (IEC)',
        value: 'XXXXXXXX',
        status: 'Active',
        issuedBy: 'Directorate General of Foreign Trade (DGFT)',
        icon: '🏛️',
        description: 'Mandatory license for all import/export operations in India. Enables international trade transactions.'
    },
    apeda: {
        label: 'APEDA Registration',
        value: 'APEDA/XXXXX',
        status: 'Active',
        issuedBy: 'Agricultural & Processed Food Products Export Development Authority',
        icon: '🌾',
        description: 'Registration for export of scheduled agricultural products under APEDA guidelines.'
    },
    gst: {
        label: 'GST Registration',
        value: 'XXXXXXXXXXXX',
        status: 'Active',
        issuedBy: 'Government of India — GST Council',
        icon: '📋',
        description: 'Goods and Services Tax registration for compliant domestic and export billing.'
    },
    fpo: {
        label: 'FPO Incorporation',
        value: 'Panjara Agro Farmers Producer Company Limited',
        status: 'Active',
        issuedBy: 'Ministry of Corporate Affairs (MCA)',
        icon: '🏢',
        description: 'Registered as a Farmer Producer Company under the Companies Act, 2013 (Part IXA).'
    },
    fssai: {
        label: 'FSSAI License',
        value: 'XXXXXXXXXXXXXXXX',
        status: 'Active',
        issuedBy: 'Food Safety and Standards Authority of India',
        icon: '✅',
        description: 'Food safety certification ensuring all products meet national quality and hygiene standards.'
    },
};

export const leadership = [
    {
        name: 'Chairman',
        role: 'Chairman & Managing Director',
        department: 'Board of Directors',
        bio: 'Visionary leader with 15+ years in agricultural trade and rural development. Spearheads FPO growth strategy and international market expansion.',
        initials: 'CMD',
    },
    {
        name: 'Director — Operations',
        role: 'Director of Operations',
        department: 'Board of Directors',
        bio: 'Oversees end-to-end supply chain operations, farmer coordination, and quality control systems across all production centers.',
        initials: 'DO',
    },
    {
        name: 'Director — Finance',
        role: 'Director of Finance & Compliance',
        department: 'Board of Directors',
        bio: 'Manages financial governance, export documentation, regulatory compliance, and banking relationships for international trade.',
        initials: 'DF',
    },
    {
        name: 'Director — Procurement',
        role: 'Director of Procurement & Farmer Relations',
        department: 'Board of Directors',
        bio: 'Leads farmer engagement programs, crop procurement strategy, and fair-trade practices across collection centers.',
        initials: 'DP',
    },
];

export const operationsTeam = [
    {
        name: 'Export Manager',
        role: 'Head of Export Operations',
        department: 'Trade & Logistics',
        responsibilities: 'International buyer relations, trade documentation, shipping coordination, and market development.',
    },
    {
        name: 'Quality Manager',
        role: 'Quality Assurance Lead',
        department: 'Quality Control',
        responsibilities: 'Product testing, lab coordination, certification management, and compliance with export standards.',
    },
    {
        name: 'Procurement Head',
        role: 'Senior Procurement Officer',
        department: 'Farmer Relations',
        responsibilities: 'Farmer network coordination, crop sourcing, aggregation planning, and fair pricing.',
    },
    {
        name: 'Logistics Coordinator',
        role: 'Logistics & Shipping Manager',
        department: 'Supply Chain',
        responsibilities: 'Container booking, warehouse management, freight forwarding, and cold chain operations.',
    },
    {
        name: 'Accounts Officer',
        role: 'Finance & Documentation',
        department: 'Finance',
        responsibilities: 'Export billing, LC management, GST compliance, and financial reporting.',
    },
];

export const fpoStats = {
    registeredFarmers: 2500,
    totalAcreage: 15000,
    cropClusters: [
        { region: 'Vidarbha, Maharashtra', crops: 'Soybean, Tur Dal, Cotton', farmers: 600, acreage: 3500 },
        { region: 'Western Maharashtra', crops: 'Onion, Sugarcane, Fruits', farmers: 450, acreage: 2800 },
        { region: 'Madhya Pradesh', crops: 'Wheat, Chana, Soybean', farmers: 500, acreage: 3200 },
        { region: 'Rajasthan', crops: 'Cumin, Coriander, Mustard', farmers: 350, acreage: 2500 },
        { region: 'Karnataka & AP', crops: 'Red Chilli, Turmeric, Rice', farmers: 400, acreage: 2000 },
        { region: 'Gujarat', crops: 'Groundnut, Cumin, Castor', farmers: 200, acreage: 1000 },
    ],
    monthlyEstimates: [
        { product: 'Rice (Basmati + Non-Basmati)', quantity: '1,500 MT' },
        { product: 'Wheat', quantity: '800 MT' },
        { product: 'Pulses (All varieties)', quantity: '1,200 MT' },
        { product: 'Spices', quantity: '750 MT' },
        { product: 'Oilseeds', quantity: '1,100 MT' },
        { product: 'Fresh Produce (Seasonal)', quantity: '1,200 MT' },
    ],
    collectionCenters: 12,
    processingUnits: 4,
    warehouseCapacity: '25,000 MT',
    aggregationSteps: [
        { step: 1, title: 'Farmer Registration', desc: 'Onboarding farmers, recording land & crop details, assigning IDs' },
        { step: 2, title: 'Crop Planning', desc: 'Season-wise crop advisory, input supply coordination, quality guidance' },
        { step: 3, title: 'Procurement & Collection', desc: 'Harvest-time procurement at fair prices through collection centers' },
        { step: 4, title: 'Quality Grading', desc: 'Testing, grading, and segregating by export-ready quality parameters' },
        { step: 5, title: 'Processing & Packaging', desc: 'Cleaning, sorting, processing, and packaging per buyer specifications' },
        { step: 6, title: 'Export Dispatch', desc: 'Documentation, container loading, and shipment to destination port' },
    ],
};

export const tradePlatforms = [
    {
        name: 'Alibaba.com',
        url: '#',
        icon: '🌐',
        description: 'Leading global B2B marketplace — connecting Indian agri exporters to worldwide buyers.',
        status: 'Coming Soon',
    },
    {
        name: 'TradeIndia',
        url: '#',
        icon: '🇮🇳',
        description: 'India\'s largest B2B marketplace for agricultural commodities and raw materials trade.',
        status: 'Coming Soon',
    },
    {
        name: 'APEDA Directory',
        url: 'https://apeda.gov.in',
        icon: '🌾',
        description: 'Official agricultural export directory under the Government of India — APEDA registered exporters.',
        status: 'Active',
    },
    {
        name: 'Global Sources',
        url: '#',
        icon: '🌏',
        description: 'Asia-based B2B sourcing platform for agricultural products and food ingredients.',
        status: 'Coming Soon',
    },
    {
        name: 'DGFT / DGCI&S',
        url: 'https://dgft.gov.in',
        icon: '🏛️',
        description: 'Directorate General of Foreign Trade — official trade regulatory body and IEC registry.',
        status: 'Active',
    },
    {
        name: 'IndiaMART',
        url: '#',
        icon: '🛒',
        description: 'India\'s largest online marketplace for business products and agricultural commodities.',
        status: 'Coming Soon',
    },
];

export const infrastructure = [
    {
        name: 'Central Warehouse — Maharashtra',
        type: 'Warehouse',
        capacity: '10,000 MT',
        features: 'Temperature-controlled, pest management, FSSAI compliant storage',
        icon: '🏭',
    },
    {
        name: 'Grain Processing Unit',
        type: 'Processing',
        capacity: '50 MT/day',
        features: 'Sortex machines, de-stoning, grading lines, packaging stations',
        icon: '⚙️',
    },
    {
        name: 'Spice Processing Facility',
        type: 'Processing',
        capacity: '20 MT/day',
        features: 'Grinding, blending, sterilization, vacuum packing',
        icon: '🌶️',
    },
    {
        name: 'Cold Storage Facility',
        type: 'Cold Chain',
        capacity: '2,000 MT',
        features: 'Multi-chamber, 0°–15°C range, for fresh produce and perishables',
        icon: '❄️',
    },
];

export const logisticsPartners = [
    { name: 'Container Corporation of India (CONCOR)', type: 'Inland Container Depot' },
    { name: 'JNPT (Nhava Sheva)', type: 'Primary Sea Port' },
    { name: 'Mundra Port', type: 'Sea Port' },
    { name: 'Vizag Port', type: 'Sea Port' },
    { name: 'Maersk / MSC / Hapag-Lloyd', type: 'Shipping Line Partners' },
    { name: 'Blue Dart / DHL', type: 'Sample & Document Courier' },
];
