import React from 'react'
import { useLocation,Link } from 'react-router-dom';
import Logo from "../../assets/images/navbar/audiophile 2.svg";
import {AiFillFacebook,AiOutlineTwitter,AiOutlineInstagram} from "react-icons/ai";




const Footer = () => {

  const location = useLocation();
  const currentPath = location.pathname;
  const isActiveCheckout= currentPath === '/checkout';
  
  return (
    <>
    {!isActiveCheckout && <figure className='flex flex-col  justify-center  items-center rounded-lg mb-32 px-6 text-center mt-32'>
        <picture>
          <img src={require('../../assets/images/footer-img-mobile.png')}  className='rounded-lg'/>
        </picture>
        <figcaption>
          <h2 className='uppercase text-3xl font-semibold mt-10 mb-8 mx-2'>Bringing you the <span className='text-orange-main'>best</span> audio gear</h2>
          <p className='text-black/50'>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>

        </figcaption>
      </figure> }
     
      
   
    <footer className='bg-black flex flex-col justify-center items-center px-6'>
    <div className='h-[4px] bg-orange-main w-[100px]'></div>
    <img src={Logo} className='my-12'/>
    <ul className='text-white uppercase font-semibold text-center h-[148px] flex flex-col justify-between '>
      <li><a>Home</a></li>
      <li><a>Headphones</a></li>
      <li><a>Speakers</a></li>
      <li><a>Earphones</a></li>
    </ul>
    <p className='text-white/50 text-center my-12'>
    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
    </p>
    <p className='text-white/50 mb-12'>
    Copyright 2021. All Rights Reserved
    </p>
    <div className='text-white text-3xl w-[105px] flex justify-between mb-8 '>
      <AiFillFacebook/>
      <AiOutlineTwitter/>
      <AiOutlineInstagram/>
    </div>
    </footer>
  </>
  )
}

export default Footer