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
      path: "company-portfolio/apppresentation",
      element: <AppPresentation />,
    },
    {
      path: "company-portfolio/digitalServices",
      element: <DigitalServices />,
    },
    {
      path: "company-portfolio/productShowcase",
      element: <ProductShowcase />,
    },
    {
      path: "company-portfolio/softwareSupport",
      element: <SoftwareSupport />,
    },
    {
      path: "company-portfolio/itBusiness",
      element: <ItBusiness />,
    },
    {
      path: "company-portfolio/techcompany",
      element: <Techcompany />,
    },
    {
      path: "company-portfolio/landing",
      element: <LandingPage />,
    },
    {
      path: "company-portfolio/aboutMe",
      element: <AboutMe />,
    },
    {
      path: "company-portfolio/aboutUs",
      element: <AboutUs />,
    },
    {
      path: "company-portfolio/contactUs",
      element: <ContactUs />,
    },
    {
      path: "company-portfolio/ourprocess",
      element: <Ourprocess />,
    },
    {
      path: "company-portfolio/ourTeam",
      element: <OurTeam />,
    },
    {
      path: "company-portfolio/pricingPlan",
      element: <PricingPlan />,
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
