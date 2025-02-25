import "./App.css";
import "animate.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UpcomingEvents from "./components/Events";
import HomePages from "./Pages/HomePages";
import NavBar from "./common/NavBar";
import AboutUsPages from "./Pages/AboutUsPages";
import EventsPages from "./Pages/EventsPages";
import ContactPages from "./Pages/ContactPages";
import BlogPages from "./Pages/BlogPages";
import Footer from "./common/Footer";

function App() {
  return (
    <>
      <Router>

         
        <NavBar/>

        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/AboutUsPages" element={<AboutUsPages />} />
          <Route path="/EventsPages" element={<EventsPages />} />
          <Route path="/ContactPages" element={<ContactPages />} />

          <Route path="/BlogPages" element={<BlogPages />} />
          {/* <Route path="/Events" element={<UpcomingEvents />} /> */}
        </Routes>
      </Router>
      {/* <Footer/> */}
    </>
  );
}

export default App;
