import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import Logo from "../../assets/images/navbar/audiophile 2.svg";
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";


const Footer = () => {

  const location = useLocation();
  const currentPath = location.pathname;
  const isActiveCheckout = currentPath === '/checkout';

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0 })
  }

  return (
    <>
      {!isActiveCheckout &&
        <figure className='footer-main-img'>
          <picture className='w-full xl:w-[40%]'>
            <source
              media="(min-width: 1280px)"
              srcSet={require('../../assets/images/footer-desktop.png')}
            />
            <source
              media="(min-width: 768px)"
              srcSet={require('../../assets/images/footer-tablet.png')}

            />
            <img
              srcSet={require('../../assets/images/footer-mobile.png')}
              alt="footer-promo"
              className="rounded-lg w-full"
            />
          </picture>
          <figcaption className='footer-figcaption'>
            <h2 className='footer-figcaption-title'>Bringing you the <span className='text-orange-main'>best</span> audio gear</h2>
            <p className='text-black/50'>
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
          </figcaption>
        </figure>}



      <footer className='footer-container'>
        <div className='footer-orange-line'></div>
        <img src={Logo} className='my-12' />
        <ul className='footer-links'>
          <li className='nav-link'><Link to="/" onClick={() => { scrollTop() }}>Home</Link></li>
          <li className='nav-link'><Link to="/headphones" onClick={() => { scrollTop() }}>Headphones</Link></li>
          <li className='nav-link'><Link to="/speakers" onClick={() => { scrollTop() }}>Speakers</Link></li>
          <li className='nav-link'><Link to="/earphones" onClick={() => { scrollTop() }}>Earphones</Link></li>
        </ul>
        <p className='footer-paragraph'>
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
        </p>
        <div className='footer-rights-and-social'>
          <p className='text-white/50 mb-12 md:mb-0'>
            Copyright 2021. All Rights Reserved
          </p>
          <div className='footer-social-links-container'>
            <AiFillFacebook />
            <AiOutlineTwitter />
            <AiOutlineInstagram />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer