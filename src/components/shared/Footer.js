import React from 'react'
import { useLocation,Link } from 'react-router-dom';
import Logo from "../../assets/images/navbar/audiophile 2.svg";
import {AiFillFacebook,AiOutlineTwitter,AiOutlineInstagram} from "react-icons/ai";
import footerMobile from "../../assets/images/footer-mobile.png";
import footerTablet from "../../assets/images/footer-tablet.png";
import footerDesktop from "../../assets/images/footer-desktop.png"

const Footer = () => {

  const location = useLocation();
  const currentPath = location.pathname;
  const isActiveCheckout= currentPath === '/checkout';
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0 })
  }
  return (
    <>
    {!isActiveCheckout && 
    <figure className='flex flex-col  justify-center  items-center rounded-lg mb-32 px-6 text-center mt-32 md:flex-col md:px-10 xl:flex-row-reverse xl:px-40'>
        <picture className='w-full xl:w-[40%]'>
          {/* Desktop image */}
          <source
            media="(min-width: 1280px)"
            srcSet={footerDesktop}
          />
          {/* Tablet image */}
          <source
            media="(min-width: 768px)"
            srcSet={footerTablet}
            
          />
          {/* Mobile image */}
          <img
            src={footerMobile}
            alt="footer-promo"
            className="rounded-lg w-full"
          />
        </picture>

        <figcaption className='xl:w-[60%] lg:[w-75%] lg:px-40 lg:text-left'>
          <h2 className='uppercase text-3xl font-semibold mt-10 mb-8 mx-2 md:mx-40 lg:mx-0 lg:mr-32 xl:mr-0'>Bringing you the <span className='text-orange-main'>best</span> audio gear</h2>
          <p className='text-black/50'>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>

        </figcaption>
      </figure> }
     
      
   
    <footer className='bg-black flex flex-col justify-center items-center px-6 md:px-10  md:items-start xl:px-40 '>
      
      <div className='h-[4px] bg-orange-main w-[100px]'></div>
      <img src={Logo} className='my-12'/>
      <ul className='text-white uppercase font-semibold text-center h-[148px] flex flex-col justify-between md:flex-row md:w-[55%] md:h-[50px]'>
        <li><Link to="/" onClick={() => {scrollTop()}}>Home</Link></li>
        <li><Link to="/headphones" onClick={() => {scrollTop()}}>Headphones</Link></li>
        <li><Link to="/speakers" onClick={() => {scrollTop()}}>Speakers</Link></li>
        <li><Link to="/earphones" onClick={() => {scrollTop()}}>Earphones</Link></li>
      </ul>
      <p className='text-white/50 text-center my-12 md:text-left xl:w-[45%]'>
      Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
      </p>
      <div className='flex flex-col items-center w-full md:flex-row md:justify-between md:mb-11'>
        <p className='text-white/50 mb-12 md:mb-0'>
        Copyright 2021. All Rights Reserved
        </p>
        <div className='text-white text-3xl w-[105px] flex justify-between mb-8 md:mb-0 '>
          <AiFillFacebook/>
          <AiOutlineTwitter/>
          <AiOutlineInstagram/>
        </div>
      </div>
      
    </footer>
  </>
  )
}

export default Footer