import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Works from "./pages/works/Works";
import Blogs from "./pages/blogs/Blogs";
import ContactUs from "./pages/contact-page/ContactUs";
import DigitalMarketing from "./pages/digital-marketing/DigitalMarketing";
import PhotographyVideo from "./pages/photography_video_page/PhotographyVideo";
import WebDesignDevelopment from "./pages/webdesign_and_development/WebDesignDevelopment";

const ScrollToTop = () => {
  // Checks Route
  const { pathname } = useLocation();

  // Scrolls page to top once the path changes 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/photography-and-videography" element={<PhotographyVideo />} />
        <Route path="/services/photography-and-videography" element={<PhotographyVideo />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/web-design-and-development" element={<WebDesignDevelopment />} />
        <Route path="/services/web-design-and-development" element={<WebDesignDevelopment />} />
        <Route path="/work" element={<Works />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
