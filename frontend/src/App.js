import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import SchedulePage from "./pages/SchedulePage";
import HistoryPage from "./pages/HistoryPage";
import TecaPage from "./pages/TecaPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/teca" element={<TecaPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
