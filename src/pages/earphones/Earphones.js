import React from 'react'
import {FiChevronRight} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Earphones = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0 })
  }
  return (
    <>
    <h1 className='page-header'>Earphones</h1>
    <section className='px-6 mb-[120px]'>
        
        <figure className='headphone-figure'>
            <picture className='headphone-picture'>
                <img src={require('../../assets/images/earphones-page/yx1-wireless-mobile.png')} />
            </picture>
            <figcaption className='headphone-fig-caption'>
                <p className='headphone-subheading'>new product</p>
                <h1 className='headphone-heading'>YX1 WIRELESS EARPHONES</h1>
                <p className='headphone-text'>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                <Link to="earphone-yx1">
                  <button className='btn-orange'>See product</button>
                </Link>
              
            </figcaption>
        </figure>
    </section>
    <section className='products-sections'>
        <div className='product-wapper'>
          <div className='product-container'>
            <img src={require('../../assets/images/headphone-mobile.png')} />
            <h2 className='uppercase font-semibold tracking-widest'>Headphones</h2>
            <Link to='/headphones' onClick={() => { scrollTop() }}>
              <button className='btn-link mb-4'>Shop <FiChevronRight className='ml-1 hover:text-orange-600' /></button>
            </Link>
          </div>
          <div className='product-block-element'></div>
        </div>
        <div className='product-wapper'>
          <div className='product-container'>
            <img src={require('../../assets/images/speaker-mobile.png')} />
            <h2 className='uppercase font-semibold tracking-widest'>Speakers</h2>
            <Link to='/speakers' onClick={() => { scrollTop() }}>
              <button className='btn-link mb-4'>Shop <FiChevronRight className='ml-1 hover:text-orange-600' /></button>
            </Link>
          </div>
          <div className='product-block-element'></div>
        </div>
        <div className='product-wapper'>
          <div className='product-container'>
            <img src={require('../../assets/images/earphones-mobile.png')} />
            <h2 className='uppercase font-semibold tracking-widest'>Earphones</h2>
            <Link to='/earphones' onClick={() => { scrollTop() }}>
              <button className='btn-link mb-4'>Shop <FiChevronRight className='ml-1 hover:text-orange-600' /></button>
            </Link>
          </div>
          <div className='product-block-element'></div>
        </div>
      </section>
    </>
  )
}

export default Earphones