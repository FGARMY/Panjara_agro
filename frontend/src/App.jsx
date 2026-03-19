import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Compliance from './pages/Compliance';
import ExportDocs from './pages/ExportDocs';
import ExportServices from './pages/ExportServices';
import FarmerNetwork from './pages/FarmerNetwork';
import GlobalTrade from './pages/GlobalTrade';
import ImportServices from './pages/ImportServices';
import Infrastructure from './pages/Infrastructure';
import Leadership from './pages/Leadership';
import PackagingLogistics from './pages/PackagingLogistics';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProductionCapacity from './pages/ProductionCapacity';
import Quality from './pages/Quality';
import TermsOfService from './pages/TermsOfService';
import TradePlatforms from './pages/TradePlatforms';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
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
      </main>
      <Footer />
    </BrowserRouter>
  );
}
