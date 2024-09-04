import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import "../styles/footer.css";
import logo from "../assets/logo-footer.png";
import {navItems, contacts, socials} from '../constants/Items';

const Footer = () => {
  return (
    <footer className="site-footer">
      <img
        className="site-footer-logo"
        src={logo}
        alt="Little Lemon"
      />
      <nav className="site-footer-nav">
        <h4>Sitemap</h4>
        <ul>
          {navItems.map((navItem, index) => (
            <li key={index}>
              <HashLink to={navItem.path}>{navItem.name}</HashLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="site-footer-contact">
        <h4>Contact us</h4>
        <address>
          {contacts.map((contact, index) => (
            <p key={index}>
              <FontAwesomeIcon icon={contact.icon} /> {contact.info}
            </p>
          ))}
        </address>
      </div>
      <div className="site-footer-social">
        <h4>Connect with us</h4>
        {socials.map((social, index) => (
          <a
            key={index}
            href={`https://www.${social.name}.com`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={social.icon} size="lg" />
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer;