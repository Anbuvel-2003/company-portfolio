import { useEffect, useRef } from "react";
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
  const router = createBrowserRouter([
    {
      path: "/company-portfolio",
      element: <Main />,
    },
    {
      path: "company-portfolio/mobileappSection",
      element: <Mobile_App />,
    },
    {
      path: "company-portfolio/webappSection",
      element: <Web_Page />,
    },
    {
      path: "company-portfolio/saasproductSection",
      element: <Saas_Page />,
    },
    {
      path: "company-portfolio/uxuiSection",
      element: <UIUX_Page />,
    },
    {
      path: "company-portfolio/testingSection",
      element: <Testing_Page />,
    },
    {
      path: "company-portfolio/ecommerceSection",
      element: <Ecommerce />,
    },
    {
      path: "company-portfolio/digitalSection",
      element: <Digital_Marketing />,
    },
    {
      path: "company-portfolio/softwareSection",
      element: <Sowtware_Page />,
    },
    {
      path: "company-portfolio/ProductSection",
      element: <Product_Section />,
    },
    {
      path: "company-portfolio/portfolio",
      element: <Portfolio_Sction />,
    },
    {
      path: "company-portfolio/Careerssection",
      element: <Careers_Section />,
    },
    {
      path: "company-portfolio/aboutUs",
      element: <AboutUs />,
    },
    {
      path: "company-portfolio/ourTeam",
      element: <OurTeam />,
    },
    {
      path: "company-portfolio/blogsection",
      element: <Blog_Section />,
    },
    {
      path: "company-portfolio/contactUs",
      element: <ContactUs />,
    },
  ]);
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <Footer_section />
    </>
  );
}

export default App;
