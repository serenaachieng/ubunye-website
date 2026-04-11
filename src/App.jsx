import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ikanyezi from './pages/Ikanyezi';
import TeachOut from './pages/TeachOut';
import Thethani from './pages/Thethani';
import SupportUs from './pages/SupportUs';
import ImpactCalculator from './pages/ImpactCalculator';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Volunteer from './pages/Volunteer';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"                  element={<Home />} />
          <Route path="/ikanyezi"          element={<Ikanyezi />} />
          <Route path="/teachout"          element={<TeachOut />} />
          <Route path="/thethani"          element={<Thethani />} />
          <Route path="/support-us"        element={<SupportUs />} />
          <Route path="/impact-calculator" element={<ImpactCalculator />} />
          <Route path="/cart"              element={<Cart />} />
          <Route path="/checkout"          element={<Checkout />} />
          <Route path="/volunteer"         element={<Volunteer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}
