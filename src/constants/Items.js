import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
  {
    name: "Home",
    path: "/#home",
    hashLink: true,
  },
  {
    name: "Reservations",
    path: "/reservations",
    hashLink: false,
  },
  {
    name: "Menu",
    path: "/#menu",
    hashLink: true,
  },
  {
    name: "About",
    path: "/#about",
    hashLink: true,
  },
  {
    name: "Order Online",
    path: "#",
    hashLink: false,
  },
  {
    name: "Login",
    path: "#",
    hashLink: false,
  },
];

const contacts = [
  { icon: faLocationDot, info: "123 Fake Ave, Chicago, IL 60602" },
  { icon: faPhone, info: "+1 (012) 345-6789" },
  { icon: faEnvelope, info: "info@littlelemon.com" },
];

const socials = [
  { icon: faFacebook, name: "facebook" },
  { icon: faInstagram, name: "instagram" },
  { icon: faTwitter, name: "twitter" },
  { icon: faYoutube, name: "youtube" },
];

export { navItems, contacts, socials };
