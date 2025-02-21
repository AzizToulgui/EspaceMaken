import "./App.css"
import { Routes, Route } from "react-router-dom"
import Nav from "./components/NavComp/Nav"
import HeroSection from "./components/Hero/HeroSection"
import AboutUs from "./components/About/AboutUs"
import Sponser from "./components/Sponser/Sponser"
import NewsSection from "./components/News/NewsSection"
import BlogsCarousel from "./components/Blogs/BlogsCarousel"
import ContactUs from "./components/Contact/ContactUs"
import Footer from "./components/Footer/Footer"
import ArticlePage from "./components/News/ArticlePage"

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <div className="body">
              <Nav />
              <HeroSection />
            </div>
            <AboutUs />
            <Sponser />
            <NewsSection />
            <BlogsCarousel autoSlide={false} showButtons={true} />
            <ContactUs />
            <Footer />
          </div>
        }
      />
      <Route path="/article/:id" element={<ArticlePage/>} />
      
    </Routes>
  )
}

export default App

