// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// pages & components
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component
import Home from './pages/Home';
import AboutUs from './pages/aboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </div>
        <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
