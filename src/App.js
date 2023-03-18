import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import ProductsList from './Components/ProductsList'
import Footer from './Components/Footer'
import About from './Components/About'
import ContactUs from './Components/ContactUs'
import ProductDetails from './Components/ProductDetails';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Slider />
            <ProductsList />

          </>
        } />
        <Route path='about' element={<About />} />
        <Route path='ContactUs' element={<ContactUs />} />
        <Route path='product/:productId' element={<ProductDetails />} />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
