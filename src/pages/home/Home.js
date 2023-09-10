import React, { useEffect} from 'react'
import {FiChevronRight} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import {
  getSummary,
} from '../../store/cartSlice';

const Home = () => {
  const summary = useSelector(getSummary);
  
  useEffect(() => {
    summary
      ? (document.body.style.overflow="hidden")
      : (document.body.style.overflow="scroll");
  }, [summary]);
  return (
    <>
      <section className='hero-container'>
        <div className='hero-wapper'>
          <div className='hero-main'>
            <span className='hero-main-subheading'>New product</span>
            <h1 className='hero-main-title'>XX99 Mark II HeadphoneS</h1>
            <p className='hero-main-p'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <Link to="/headphones/headphone-xx99-mark-2">
              <button className='btn-orange'>See product</button>
            </Link>
            
          </div>
        </div>
      </section>
      <section className='products-sections'>
      <div className='product-wapper'>
        <div className='product-container'>
          <img src={require('../../assets/images/headphone-mobile.png')}/>
          <h2 className='uppercase font-semibold tracking-widest'>Headphones</h2>
          <a href='headphones'>
            <button className='btn-link mb-4'>Shop <FiChevronRight className='ml-1 hover:text-orange-600'/></button>
          </a>
        
        </div>
        <div className='product-block-element'></div>
      </div>
      <div className='product-wapper'>
        <div className='product-container'>
          <img src={require('../../assets/images/speaker-mobile.png')}/>
          <h2 className='uppercase font-semibold tracking-widest'>Speakers</h2>
          <a href='speakers'>
            <button className='btn-link mb-4'>Shop <FiChevronRight className='ml-1 hover:text-orange-600'/></button>
          </a>
        </div>
        <div className='product-block-element'></div>
      </div>
      <div className='product-wapper'>
        <div className='product-container'>
          <img src={require('../../assets/images/earphones-mobile.png')}/>
          <h2 className='uppercase font-semibold tracking-widest'>Earphones</h2>
          <a href='earphones'>
            <button className='btn-link mb-4'>Shop <FiChevronRight className='ml-1 hover:text-orange-600'/></button>
          </a>
        </div>
        <div className='product-block-element'></div>
      </div>
    </section>

      <section className='product-usp'>
        <div className='zx9-container'>
          <img src={require('../../assets/images/speaker-usp.png')} alt='zx9-speaker'/>
          <h2 className='zx9-title'>ZX9 Speaker</h2>
          <p className='zx9-paragprah'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <button className='btn-dark'>See Product</button>
          <div className='oval-group-container'>
            <div className='oval-1'>
              <div className='oval-2'>
                <div className='oval-3'>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='zx7-container'>
          <h2 className='zx7-title'>ZX7 Speaker</h2>
          <button className='btn-outline'>See Product</button>
        </div>
        
        <div className='yx1-container-image rounded-lg'>
          <img src={require('../../assets/images/yx1-mobile.png')} className='rounded-lg'/>
        </div>
        <div className='yx1-container rounded-lg'>
          <h2 className='zx7-title'>yx1 earphones</h2>
          <button className='btn-outline'>See Product</button>
        </div>
      </section>
    </>
  )
}

export default Home