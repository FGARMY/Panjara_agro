import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BulkQuotation from './components/BulkQuotation';
import WhatsAppButton from './components/WhatsAppButton';

/* ── Eagerly loaded (above-the-fold, always needed) ─── */
import Home from './pages/Home';

/* ── Lazy-loaded pages (code-split into separate chunks) ─── */
const Products          = lazy(() => import('./pages/Products'));
const About             = lazy(() => import('./pages/About'));
const Contact           = lazy(() => import('./pages/Contact'));
const Compliance        = lazy(() => import('./pages/Compliance'));
const ExportDocs        = lazy(() => import('./pages/ExportDocs'));
const ExportServices    = lazy(() => import('./pages/ExportServices'));
const FarmerNetwork     = lazy(() => import('./pages/FarmerNetwork'));
const GlobalTrade       = lazy(() => import('./pages/GlobalTrade'));
const ImportServices    = lazy(() => import('./pages/ImportServices'));
const Infrastructure    = lazy(() => import('./pages/Infrastructure'));
const Leadership        = lazy(() => import('./pages/Leadership'));
const PackagingLogistics = lazy(() => import('./pages/PackagingLogistics'));
const PrivacyPolicy     = lazy(() => import('./pages/PrivacyPolicy'));
const ProductionCapacity = lazy(() => import('./pages/ProductionCapacity'));
const Quality           = lazy(() => import('./pages/Quality'));
const TermsOfService    = lazy(() => import('./pages/TermsOfService'));
const TradePlatforms    = lazy(() => import('./pages/TradePlatforms'));

/* ── Minimal loading fallback ─── */
function PageLoader() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      minHeight: '60vh', color: '#888', fontFamily: 'Inter, sans-serif'
    }}>
      Loading…
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/export-docs" element={<ExportDocs />} />
            <Route path="/export-services" element={<ExportServices />} />
            <Route path="/farmer-network" element={<FarmerNetwork />} />
            <Route path="/global-trade" element={<GlobalTrade />} />
            <Route path="/import-services" element={<ImportServices />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/packaging-logistics" element={<PackagingLogistics />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/production-capacity" element={<ProductionCapacity />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/trade-platforms" element={<TradePlatforms />} />
          </Routes>
        </Suspense>
      </main>
      <BulkQuotation />
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}
