import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../assets/logo-header.png";
import { navItems } from "../constants/Items";
import "../styles/header.css";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const headerRef = useRef(null);
  const navListRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      if (navListRef.current.className === "nav-bar-links expanded") {
        return;
      }
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef}>
      <nav className="container grid nav-bar">
        <HashLink className="nav-bar-logo" to="/">
          <img src={logo} alt="Little Lemon logo" />
        </HashLink>
        <button
          className="nav-bar-hamburger"
          type="button"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        <ul
          ref={navListRef}
          className={isNavExpanded ? "nav-bar-links expanded" : "nav-bar-links"}
        >
          {navItems.map((navItem) => (
            <li
              key={navItem.name}
              onClick={() => setIsNavExpanded(false)}
              className="hover-underline-animation"
            >
              {navItem.hashLink ? (
                <HashLink to={navItem.path}>{navItem.name}</HashLink>
              ) : (
                <Link to={navItem.path}>{navItem.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
