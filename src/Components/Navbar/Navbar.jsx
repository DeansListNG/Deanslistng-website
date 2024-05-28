import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {
        
    const [sticky, setSticky] = useState(false);
    
    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
    },[]);


    const[mobileMenu, setMobileMenu] = useState(false)
    const toogleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
       < img src={logo} alt="" className='logo' />
       <ul className={mobileMenu ? '':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-360} duration={500}>Get Started</Link></li>
        <li><Link to='about' smooth={true} offset={-160} duration={500}>About Us</Link></li>
        <li><Link to='services' smooth={true} offset={-300} duration={500}>Services</Link></li>
        <li><Link to='contact' smooth={true} offset={-255} duration={500}>Contact Us</Link></li>
        <a href="https://form.jotform.com/241470897454365" target='_blan
        '><li><button className='btn' >Join Us!</button> </li></a>
        
       </ul>
       <img src={menu_icon} alt="" className='menu-icon' onClick={toogleMenu}/>
    </nav>
  )
}

export default Navbar