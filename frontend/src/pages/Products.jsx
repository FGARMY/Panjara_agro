import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';
import products from '../data/products.json';
const productsBg = 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80';
import './Products.css';

const CATEGORIES = ['Whole Spices', 'Ground Spices', 'Blended Spices'];
const SORT_OPTIONS = [
    { value: 'popularity', label: 'Popularity' },
    { value: 'price-asc', label: 'Price: Low → High' },
    { value: 'price-desc', label: 'Price: High → Low' },
    { value: 'alpha', label: 'Alphabetical' },
];

export default function Products() {
    useScrollAnimation();

    const [search, setSearch] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortBy, setSortBy] = useState('popularity');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [filtersOpen, setFiltersOpen] = useState(false);

    const toggleCategory = (cat) => {
        setSelectedCategories(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    const clearFilters = () => {
        setSearch('');
        setSelectedCategories([]);
        setMinPrice('');
        setMaxPrice('');
        setSortBy('popularity');
    };

    const filtered = useMemo(() => {
        let result = [...products];

        // Search
        if (search.trim()) {
            const q = search.toLowerCase();
            result = result.filter(p =>
                p.name.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                p.keywords.some(k => k.toLowerCase().includes(q))
            );
        }

        // Category filter
        if (selectedCategories.length > 0) {
            result = result.filter(p => selectedCategories.includes(p.category));
        }

        // Price filter
        const min = parseFloat(minPrice);
        const max = parseFloat(maxPrice);
        if (!isNaN(min)) result = result.filter(p => p.price >= min);
        if (!isNaN(max)) result = result.filter(p => p.price <= max);

        // Sort
        switch (sortBy) {
            case 'price-asc': result.sort((a, b) => a.price - b.price); break;
            case 'price-desc': result.sort((a, b) => b.price - a.price); break;
            case 'alpha': result.sort((a, b) => a.name.localeCompare(b.name)); break;
            case 'popularity': default: result.sort((a, b) => b.popularity - a.popularity); break;
        }

        return result;
    }, [search, selectedCategories, minPrice, maxPrice, sortBy]);

    const hasActiveFilters = selectedCategories.length > 0 || minPrice || maxPrice || sortBy !== 'popularity';

    return (
        <>
            <SEO
                title="Spices Catalog | Premium Indian Spices for Export"
                description="Browse our premium catalog of Indian spices — turmeric, red chilli, cumin, black pepper, cardamom, cinnamon & blended masalas. Bulk export supply with quality certification."
                path="/products"
                keywords="Indian spices exporter, turmeric powder, red chilli powder, cumin seeds, black pepper, garam masala, bulk spices supplier"
            />

            <section className="hero hero--inner" style={{ backgroundImage: `url(${productsBg})` }} id="products-hero">
                <div className="hero__overlay" />
                <div className="hero__content container">
                    <h1 className="hero__title">Our Spices Collection</h1>
                    <p className="hero__subtitle">Premium Indian spices sourced directly from farmer clusters — export-ready & quality certified.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-heading fade-in">
                        <span className="section-heading__label">Spice Catalog</span>
                        <h2 className="section-heading__title">Premium Indian Spices</h2>
                        <div className="section-heading__bar" />
                    </div>

                    {/* Search Bar */}
                    <div className="products-search fade-in">
                        <div className="products-search__input-wrap">
                            <span className="products-search__icon">🔍</span>
                            <input
                                type="text"
                                className="products-search__input"
                                placeholder="Search spices by name, category, or keyword..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                id="spice-search"
                            />
                            {search && (
                                <button className="products-search__clear" onClick={() => setSearch('')}>✕</button>
                            )}
                        </div>
                        <button
                            className={`products-filter-toggle ${filtersOpen ? 'products-filter-toggle--active' : ''}`}
                            onClick={() => setFiltersOpen(!filtersOpen)}
                        >
                            ⚙ Filters {hasActiveFilters && <span className="products-filter-badge">●</span>}
                        </button>
                    </div>

                    {/* Filter Panel */}
                    <div className={`products-filters fade-in ${filtersOpen ? 'products-filters--open' : ''}`}>
                        <div className="products-filters__section">
                            <h4 className="products-filters__label">Category</h4>
                            <div className="products-filters__checks">
                                {CATEGORIES.map(cat => (
                                    <label key={cat} className="products-filter-check">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(cat)}
                                            onChange={() => toggleCategory(cat)}
                                        />
                                        <span className="products-filter-check__box" />
                                        {cat}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="products-filters__section">
                            <h4 className="products-filters__label">Price Range (₹/kg)</h4>
                            <div className="products-filters__price">
                                <input
                                    type="number"
                                    className="products-filters__price-input"
                                    placeholder="Min"
                                    value={minPrice}
                                    onChange={e => setMinPrice(e.target.value)}
                                    min="0"
                                />
                                <span className="products-filters__price-sep">—</span>
                                <input
                                    type="number"
                                    className="products-filters__price-input"
                                    placeholder="Max"
                                    value={maxPrice}
                                    onChange={e => setMaxPrice(e.target.value)}
                                    min="0"
                                />
                            </div>
                        </div>
                        <div className="products-filters__section">
                            <h4 className="products-filters__label">Sort By</h4>
                            <select
                                className="products-filters__select"
                                value={sortBy}
                                onChange={e => setSortBy(e.target.value)}
                            >
                                {SORT_OPTIONS.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>
                        {hasActiveFilters && (
                            <button className="products-filters__clear" onClick={clearFilters}>
                                Clear All Filters
                            </button>
                        )}
                    </div>

                    {/* Results Count */}
                    <div className="products-results fade-in">
                        Showing <strong>{filtered.length}</strong> of {products.length} spices
                        {search && <span> for "<em>{search}</em>"</span>}
                    </div>

                    {/* Product Grid */}
                    <div className="products-grid">
                        {filtered.length > 0 ? (
                            filtered.map(product => (
                                <div className="product-card" key={product.id} onClick={() => setSelectedProduct(product)}>
                                    <div className="product-card__img-wrap">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="product-card__img"
                                            loading="lazy"
                                            onError={e => {
                                                e.target.onerror = null;
                                                e.target.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" fill="%23f5f5f5"><rect width="400" height="300"/><text x="200" y="150" fill="%23bbb" font-family="sans-serif" font-size="14" text-anchor="middle" dominant-baseline="middle">Image Coming Soon</text></svg>');
                                            }}
                                        />
                                        <div className="product-card__badge">{product.category}</div>
                                    </div>
                                    <div className="product-card__body">
                                        <h3 className="product-card__name">{product.name}</h3>
                                        <p className="product-card__desc">{product.description}</p>
                                        <div className="product-card__footer">
                                            <div className="product-card__price">
                                                ₹{product.price}<span className="product-card__price-unit">/kg</span>
                                            </div>
                                            <button className="btn btn--outline product-card__btn">
                                                Inquire Now →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="products-empty">
                                <span className="products-empty__icon">🔍</span>
                                <h3>No spices found</h3>
                                <p>Try adjusting your search or filters</p>
                                <button className="btn btn--outline" onClick={clearFilters}>Clear Filters</button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Spec Modal */}
            {selectedProduct && (
                <div className="product-modal-overlay" onClick={() => setSelectedProduct(null)}>
                    <div className="product-modal product-modal--wide" onClick={e => e.stopPropagation()}>
                        <button className="product-modal__close" onClick={() => setSelectedProduct(null)}>✕</button>

                        <div className="product-modal__hero">
                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                                className="product-modal__img"
                                loading="lazy"
                            />
                        </div>

                        <div className="product-modal__badge">{selectedProduct.category}</div>
                        <h2 className="product-modal__name">{selectedProduct.name}</h2>
                        <p className="product-modal__desc">{selectedProduct.description}</p>

                        <div className="product-modal__price-row">
                            <span className="product-modal__price">₹{selectedProduct.price}/kg</span>
                            <span className="product-modal__moq">MOQ: {selectedProduct.moq}</span>
                        </div>

                        <div className="spec-grid">
                            <div className="spec-item">
                                <span className="spec-item__label">Variety / Grade</span>
                                <span className="spec-item__value">{selectedProduct.variety}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-item__label">Farm Origin</span>
                                <span className="spec-item__value">{selectedProduct.origin}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-item__label">Moisture</span>
                                <span className="spec-item__value">{selectedProduct.moisture}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-item__label">HS Code</span>
                                <span className="spec-item__value spec-item__value--code">{selectedProduct.hsCode}</span>
                            </div>
                            <div className="spec-item spec-item--full">
                                <span className="spec-item__label">Export Standards</span>
                                <span className="spec-item__value">{selectedProduct.exportStandards}</span>
                            </div>
                            <div className="spec-item spec-item--full">
                                <span className="spec-item__label">Packaging Options</span>
                                <div className="spec-item__tags">
                                    {selectedProduct.packagingOptions.map((opt, i) => (
                                        <span className="spec-tag" key={i}>{opt}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/contact"
                            className="btn btn--primary"
                            style={{ marginTop: '24px', width: '100%', justifyContent: 'center' }}
                        >
                            Send Inquiry for {selectedProduct.name} →
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
