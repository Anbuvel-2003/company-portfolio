import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.png";

// Dropdown component for better organization
const DropdownMenu = ({ items, isOpen, isHorizontal }) => {
  return (
    <div
      className={`absolute top-full top:full left-1/2 transform -translate-x-1/2 ${
        isHorizontal ? "w-auto min-w-[1000px]" : "w-80"
      } mt-6 !py-6 bg-white backdrop-blur-sm shadow-lg rounded-md z-50 transition-all duration-300 ease-in-out ${
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div
        className={`${
          isHorizontal
            ? "flex justify-between px-12"
            : "flex flex-col items-center"
        }`}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`relative ${
              isHorizontal ? "flex flex-col items-center w-1/4" : ""
            }`}
          >
            <div className="text-center w-full">
              <a
                href={item.path}
                className={`${
                  isHorizontal
                    ? "px-4 whitespace-nowrap"
                    : "block px-6 !py-3 mb-2"
                } uppercase text-sm font-medium tracking-wide text-black hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-400 hover:bg-clip-text transition-colors duration-200 text-center`}
              >
                {item.title}
              </a>
            </div>
            {item.subItems && (
              <div className="mt-6 flex flex-col items-center bg-transparent backdrop-blur-sm rounded-md !py-4">
                {item.subItems.map((subItem, subIdx) => (
                  <a
                    key={subIdx}
                    href={subItem.path}
                    className="block px-6 !py-2 mb-2 text-sm text-black hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-400 hover:bg-clip-text transition-colors duration-200 uppercase font-medium tracking-wide text-center"
                  >
                    {subItem.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Handle scroll effect to hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle dropdown menu
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Handle escape key to close dropdown
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  // Navigation links with dropdowns
  const navLinks = [
    {
      title: "Home",
      path: "/",
      dropdown: [
        { title: "Main Home", path: "/company-portfolio" },
        {
          title: "App Presentation",
          path: "/company-portfolio/apppresentation",
        },
        {
          title: "Digital Services",
          path: "/company-portfolio/digitalServices",
        },
        {
          title: "Product Showcase",
          path: "/company-portfolio/productShowcase",
        },
        {
          title: "Software Support",
          path: "/company-portfolio/softwareSupport",
        },
        { title: "IT Business", path: "/company-portfolio/itBusiness" },
        { title: "Tech Company", path: "/company-portfolio/techcompany" },
        { title: "Landing", path: "/company-portfolio/landing" },
      ],
    },
    {
      title: "Pages",
      path: "/",
      dropdown: [
        { title: "About Us", path: "/company-portfolio/aboutUs" },
        { title: "About Me", path: "/company-portfolio/aboutMe" },
        { title: "Our Team", path: "/company-portfolio/ourTeam" },
        { title: "Our Process", path: "/company-portfolio/ourprocess" },
        { title: "Pricing Plans", path: "/company-portfolio/pricingPlan" },
        { title: "Contact Us", path: "/company-portfolio/contactUs" },
      ],
    },
    {
      title: "Portfolio",
      path: "/portfolio",
      dropdown: [
        {
          title: "List\u00A0Types",
          path: "/portfolio/list-types",
          subItems: [
            { title: "Standard", path: "/portfolio/list-types/standard" },
            { title: "Gallery", path: "/portfolio/list-types/gallery" },
            {
              title: "Gallery Joined",
              path: "/portfolio/list-types/gallery-joined",
            },
            { title: "Masonry", path: "/portfolio/list-types/masonry" },
            {
              title: "Masonry Joined",
              path: "/portfolio/list-types/masonry-joined",
            },
            {
              title: "3 Image Slider",
              path: "/portfolio/list-types/3-image-slider",
            },
            {
              title: "Draggable Slider",
              path: "/portfolio/list-types/draggable-slider",
            },
          ],
        },
        {
          title: "Layout\u00A0Types",
          path: "/portfolio/layout-types",
          subItems: [
            {
              title: "Two Columns",
              path: "/portfolio/layout-types/two-columns",
            },
            {
              title: "Three Columns",
              path: "/portfolio/layout-types/three-columns",
            },
            {
              title: "Three Columns Wide",
              path: "/portfolio/layout-types/three-columns-wide",
            },
            {
              title: "Four Columns",
              path: "/portfolio/layout-types/four-columns",
            },
            {
              title: "Four Columns Wide",
              path: "/portfolio/layout-types/four-columns-wide",
            },
            {
              title: "Five Columns Wide",
              path: "/portfolio/layout-types/five-columns-wide",
            },
            {
              title: "Six Columns Wide",
              path: "/portfolio/layout-types/six-columns-wide",
            },
          ],
        },
        {
          title: "Single\u00A0Types",
          path: "/portfolio/single-types",
          subItems: [
            {
              title: "Small Images",
              path: "/portfolio/single-types/small-images",
            },
            { title: "Big Images", path: "/portfolio/single-types/big-images" },
            {
              title: "Small Gallery",
              path: "/portfolio/single-types/small-gallery",
            },
            {
              title: "Big Gallery",
              path: "/portfolio/single-types/big-gallery",
            },
            {
              title: "Small Slider",
              path: "/portfolio/single-types/small-slider",
            },
            { title: "Big Slider", path: "/portfolio/single-types/big-slider" },
            {
              title: "Small Masonry",
              path: "/portfolio/single-types/small-masonry",
            },
            {
              title: "Big Masonry",
              path: "/portfolio/single-types/big-masonry",
            },
          ],
        },
        {
          title: "Hover\u00A0Types",
          path: "/portfolio/hover-types",
          subItems: [
            { title: "Fade In", path: "/portfolio/hover-types/fade-in" },
            {
              title: "Info On Hover",
              path: "/portfolio/hover-types/info-on-hover",
            },
            {
              title: "Zoom On Hover",
              path: "/portfolio/hover-types/zoom-on-hover",
            },
          ],
        },
      ],
      isHorizontal: true,
    },
    { title: "Blog", path: "/blog" },
    { title: "Shop", path: "/shop" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-transparent ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="  px-4">
        <div className="flex  lg:justify-start justify-between w-[95vw]  items-center h-16">
          {/* Logo - moved significantly to the right */}
          <div className="flex-shrink-0 ml-32 pl-20 ">
            {/* <a href="/" className="text-xl font-bold text-black !ml-20">
              DEON
            </a> */}
            <img
              src={Logo}
              alt={`client-`}
              className="lg:w-[8vw] lg:h-[8vh] md:w-[6vw] md:h-[6vh] sm:h-[4vh] sm:w-[vw] h-[4vh] w-[10vw] !ml-10 contain"
            />
          </div>

          {/* Desktop Navigation - improved spacing */}
          <div
            className="hidden md:flex items-center justify-end gap-20 flex-1 pr-8"
            ref={dropdownRef}
          >
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => {
                  link.dropdown && setActiveDropdown(null);
                }}
              >
                <a
                  href={link.path}
                  className="relative group flex items-center uppercase text-sm font-medium tracking-wide text-black 
    hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-400 hover:bg-clip-text transition-all duration-700 ease-in-out"
                >
                  {link.title}
                  {link.dropdown && (
                    <span className="ml-1 text-xs inline-block text-black">
                      ▾
                    </span>
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                {/* Dropdown Menu */}
                {link.dropdown && (
                  <DropdownMenu
                    items={link.dropdown}
                    isOpen={activeDropdown === index}
                    isHorizontal={link.isHorizontal}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white rounded-b-lg shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <div key={index}>
                <div className="flex justify-between items-center">
                  <a
                    href={link.path}
                    className="block px-3 py-2 text-base font-medium text-gray-800"
                  >
                    {link.title}
                  </a>
                  {link.dropdown && (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="px-3 py-2 transition-transform duration-200"
                      aria-expanded={activeDropdown === index}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === index ? "transform rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown - Accordion style */}
                {link.dropdown && (
                  <div
                    className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
                      activeDropdown === index
                        ? "max-h-64 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {link.dropdown.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.path}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
