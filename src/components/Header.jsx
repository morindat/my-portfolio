import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import "../styles/Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Update active section based on scroll position
      const sections = ["hero", "skills", "projects", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}`}>
      <div className="container header-inner">
        <a
          href="#hero"
          className="header-logo"
          onClick={(e) => handleNavClick(e, "hero")}
        >
          <Logo width={45} height={45} />
        </a>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          <a
            href="#hero"
            className={`header-link ${activeSection === "hero" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "hero")}
          >
            Home
          </a>
          <a
            href="#skills"
            className={`header-link ${activeSection === "skills" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "skills")}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`header-link ${activeSection === "projects" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "projects")}
          >
            Projects
          </a>
          <a
            href="#about"
            className={`header-link ${activeSection === "about" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "about")}
          >
            About
          </a>
          <a
            href="#contact"
            className={`header-link ${activeSection === "contact" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Contact
          </a>
        </nav>

        {/* Desktop Social Icons */}
        <div className="header-socials">
          <a
            href="mailto:papaadennis@gmail.com"
            className="header-social-link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Papadizzo"
            target="_blank"
            rel="noopener noreferrer"
            className="header-social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/morindat"
            target="_blank"
            rel="noopener noreferrer"
            className="header-social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/justindizzo17?igsh=cnk1b21jZHdpenF1"
            target="_blank"
            rel="noopener noreferrer"
            className="header-social-link"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="header-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}>
        <nav className="mobile-menu-nav">
          <a href="#hero" className={`mobile-menu-link ${activeSection === "hero" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "hero")}>Home</a>
          <a href="#skills" className={`mobile-menu-link ${activeSection === "skills" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "skills")}>Skills</a>
          <a href="#projects" className={`mobile-menu-link ${activeSection === "projects" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "projects")}>Projects</a>
          <a href="#about" className={`mobile-menu-link ${activeSection === "about" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "about")}>About</a>
          <a href="#contact" className={`mobile-menu-link ${activeSection === "contact" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
        </nav>
        <div className="mobile-menu-socials">
          <a href="mailto:papaadennis@gmail.com" className="mobile-social-link" aria-label="Email"><FaEnvelope /></a>
          <a href="https://github.com/Papadizzo" target="_blank" rel="noopener noreferrer" className="mobile-social-link" aria-label="GitHub"><FaGithub /></a>
          <a href="https://linkedin.com/in/morindat" target="_blank" rel="noopener noreferrer" className="mobile-social-link" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://www.instagram.com/justindizzo17?igsh=cnk1b21jZHdpenF1" target="_blank" rel="noopener noreferrer" className="mobile-social-link" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;