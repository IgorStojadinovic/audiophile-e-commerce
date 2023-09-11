import React from 'react'
import {FiChevronRight} from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Headphones = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0 })
  }
  return (
    <>
    <h1 className='page-header'>Headphones</h1>
    <section className='px-6 mb-[120px] md:px-10'>
        
        <figure className='headphone-figure'>
            <picture className='headphone-picture'>
                <img src={require('../../assets/images/heaphone-page/xx99-mark-II-mobile.png')} />
            </picture>
            <figcaption className='headphone-fig-caption'>
                <p className='headphone-subheading'>new product</p>
                <h1 className='headphone-heading md:font-bold'>xx99 mark II headphones</h1>
                <p className='headphone-text'>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                <Link to='headphone-xx99-mark-2'>
                  <button className='btn-orange'>See product</button>
                </Link>
                
            </figcaption>
        </figure>
        <figure className='headphone-figure'>
            <picture className='headphone-picture'>
                <img src={require('../../assets/images/heaphone-page/xx-99-mark-I-mobile.png')} />
            </picture>
            <figcaption className='headphone-fig-caption'>
                <h1 className='headphone-heading md:font-bold'>XX99 Mark I Headphones</h1>
                <p className='headphone-text'>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                <Link to='headphone-xx99-mark-1'>
                  <button className='btn-orange'>See product</button>
                </Link>
               
            </figcaption>
        </figure>
        <figure className='headphone-figure'>
            <picture className='headphone-picture'>
                <img src={require('../../assets/images/heaphone-page/xx59-mobile.png')} />
            </picture>
            <figcaption className='headphone-fig-caption'>
                <h1 className='headphone-heading w-1/2 md:w-[40%] md:font-bold'>XX59 headphones</h1>
                <p className='headphone-text'>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                <Link to='headphone-xx59'>
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

export default Headphones