import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ExportServices from './pages/ExportServices';
import ImportServices from './pages/ImportServices';
import FarmerNetwork from './pages/FarmerNetwork';
import Quality from './pages/Quality';
import GlobalTrade from './pages/GlobalTrade';
import Infrastructure from './pages/Infrastructure';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/export-services" element={<ExportServices />} />
          <Route path="/import-services" element={<ImportServices />} />
          <Route path="/farmer-network" element={<FarmerNetwork />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/global-trade" element={<GlobalTrade />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
