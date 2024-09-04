import React from 'react'
import logo from '../images/logo192.png'

const Footer = () => {
  return (
    <footer>
        <img  src={logo} alt='logo'/>
        <h2>Doormat Navigation</h2>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Menu</a></li>
            <li><a href='#'>Reservations</a></li>
            <li><a href='#'>Order Online</a></li>
            <li><a href='#'>Login</a></li>
        </ul>
        <h2>Contact</h2>
        <ul>
            <li>Adress</li>
            <li>Phone number</li>
            <li>Email</li>
        </ul>
        <h2>Social media Links</h2>
        <ul>
            <li><a href='#'>Instagram</a></li>
            <li><a href='#'>Facebook</a></li>
            <li><a href='#'>Youtube</a></li>
        </ul>
    </footer>
  )
}

export default Footer