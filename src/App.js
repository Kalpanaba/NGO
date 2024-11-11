import './App.css';
import 'animate.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BannerCarousel from './components/BannerCarousel';
import Mission from './components/Mission';
import Categories from './components/Categories';
import FounderMessage from './components/FounderMessage';
import Categoriey from './components/CategoriesIcons';
import Footer from './components/Footer';
import ImageGallery from './components/ImageGallery';
import FoundationIntro from './components/FoundationIntro';
import Aboutus from './components/Aboutus';
import ContactInfo from './components/ContactInfo';
import Blog from './components/blog'
import UpcomingEvents from './components/Events';

function App() {
  return (
    <Router>
      <div className="App">

        {/* Navigation Links */}

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/Contact" element={ <ContactInfo />}/>
          <Route path='/Blog' element ={<Blog/>}/>
          <Route  path='/Events' element={<UpcomingEvents/>} />
        </Routes>
      </div>
    </Router>
  );
}

// Home component definition
const Home = () => (
  <div className="h-screen overflow-y-scroll">
    <Header />
    <BannerCarousel />
    <Mission />
    <Categoriey />
    <Categories />
    <section className="py-8 mt-6 mb-6">
      <FounderMessage />
    </section>
    <FoundationIntro />
    <ImageGallery />
    <Footer />
  </div>
);

export default App;
