import { useEffect, useRef, useState } from "react";
import "./App.css";
import Footer_section from "./component/footer";
import NavBar from "./component/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LandingPage from "./pages/homePage/landingPage";
import AppPresentation from "./pages/homePage/appPresentation";
import DigitalServices from "./pages/homePage/digitalServices";
import ProductShowcase from "./pages/homePage/productShowcase";
import SoftwareSupport from "./pages/homePage/softwareSupport";
import Techcompany from "./pages/homePage/techCompany";
import Main from "./pages/homePage/main/main";
import ItBusiness from "./pages/homePage/itBusiness";
import AboutMe from "./pages/pages/aboutMe";
import AboutUs from "./pages/pages/aboutUs";
import ContactUs from "./pages/pages/contactUs";
import Ourprocess from "./pages/pages/ourProcess";
import OurTeam from "./pages/pages/ourTeam";
import PricingPlan from "./pages/pages/pricingPlan";
import Mobile_App from "./pages/services/mobile_Page";
import Web_Page from "./pages/services/web_Page";
import UIUX_Page from "./pages/services/uiux_Page";
import Saas_Page from "./pages/services/saas_Page";
import Testing_Page from "./pages/services/testing_Page";
import Ecommerce from "./pages/services/ecommerce_Page";
import Digital_Marketing from "./pages/services/digital_Page";
import Sowtware_Page from "./pages/services/software_Page";
import Product_Section from "./pages/products";
import Portfolio_Sction from "./pages/portfolio";
import Careers_Section from "./pages/pages/careers";
import Blog_Section from "./pages/pages/blog";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const router = createBrowserRouter([
    {
      path: "/test",
      element: <Main />,
    },
    {
      path: "/test/mobileappSection",
      element: <Mobile_App />,
    },
    {
      path: "/test/webappSection",
      element: <Web_Page />,
    },
    {
      path: "/test/saasproductSection",
      element: <Saas_Page />,
    },
    {
      path: "/test/uxuiSection",
      element: <UIUX_Page />,
    },
    {
      path: "/test/testingSection",
      element: <Testing_Page />,
    },
    {
      path: "/test/ecommerceSection",
      element: <Ecommerce />,
    },
    {
      path: "/test/digitalSection",
      element: <Digital_Marketing />,
    },
    {
      path: "/test/softwareSection",
      element: <Sowtware_Page />,
    },
    {
      path: "/test/ProductSection",
      element: <Product_Section />,
    },
    {
      path: "/test/portfolio",
      element: <Portfolio_Sction />,
    },
    {
      path: "/test/Careerssection",
      element: <Careers_Section />,
    },
    {
      path: "/test/aboutUs",
      element: <AboutUs />,
    },
    {
      path: "/test/ourTeam",
      element: <OurTeam />,
    },
    {
      path: "/test/blogsection",
      element: <Blog_Section />,
    },
    {
      path: "/test/contactUs",
      element: <ContactUs />,
    },
  ]);
  return (
    <div>
      <NavBar />
      <div className="relative">
        <RouterProvider router={router} />
        <Footer_section />
        {/* <div className="absolute cursor-pointer right-10 bottom-10 " onClick={()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' })}}
        > 
        <h2 className="bg-amber-200 transform -rotate-90 origin-left">Back To Top</h2>
        <span class="block w-14 h-0.5 bg-white transform -rotate-90 origin-left mb-2 mx-auto md:mx-0 transition-all duration-500 group-hover:w-0 group-hover:opacity-0"></span>
      </div> */}
        {showTopBtn && (
          <div
            onClick={scrollToTop}
            className="fixed right-10 bottom-50 cursor-pointer !grid items-center transform -rotate-90 origin-bottom-right group z-50"
          >
            {/* Text first */}
            <span className="text-xs text-[#8c8c8c] tracking-widest font-medium uppercase mb-2">
              <span className="w-14 h-0.5 bg-[#8c8c8c] transition-all duration-500 group-hover:w-0 group-hover:opacity-0"></span>
              Back to Top
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
