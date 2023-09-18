import React from 'react'
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Speakers = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0 })
  }
  return (
    <>
      <h1 className='page-header'>Speakers</h1>
      <section className='px-6 mb-[120px] md:px-10  xl:px-40 2xl:px-80'>

        <figure className='headphone-figure'>
          <picture className='headphone-picture'>
            <img src={require('../../assets/images/speakers-page/zx-9-mobile.png')} />
          </picture>
          <figcaption className='headphone-fig-caption'>
            <p className='headphone-subheading'>new product</p>
            <h1 className='headphone-heading  md:font-bold'>ZX9 speaker</h1>
            <p className='headphone-text'>Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
            <Link to='speaker-zx9'>
              <button className='btn-orange'>See product</button>
            </Link>
          </figcaption>
        </figure>
        <figure className='headphone-figure'>
          <picture className='headphone-picture'>
            <img src={require('../../assets/images/speakers-page/zx-7-mobiole.png')} />
          </picture>
          <figcaption className='headphone-fig-caption'>
            <h1 className='headphone-heading  md:font-bold'>ZX7 SPEAKER</h1>
            <p className='headphone-text'>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
            <Link to="speaker-zx7">
              <button className='btn-orange'>See product</button>
            </Link>
          </figcaption>
        </figure>
      </section>
      <section className="products-sections">
        <div className="product-wapper">
          <div className="product-container">
            <picture>
              <img className='2xl:h-[120px] xl:h-[120px] md:h-[100px]'
                src={require("../../assets/images/products-section/product-section-headphone-mobile.png")}
                alt="footer-promo"
              />
            </picture>
            <h2 className="uppercase font-semibold tracking-widest">
              Headphones
            </h2>
            <Link
              to="/headphones"
              onClick={() => {
                scrollTop();
              }}
            >
              <button className="btn-link mb-4">
                Shop <FiChevronRight className="ml-1 hover:text-orange-600" />
              </button>
            </Link>
          </div>
          <div className="product-block-element"></div>
        </div>
        <div className="product-wapper">
          <div className="product-container">
            <picture>
              <img className='2xl:h-[120px] xl:h-[120px] md:h-[100px]'
                src={require("../../assets/images/products-section/prodcut-section-speaker-mobile.png")}
                alt="footer-promo"
              />
            </picture>

            <h2 className="uppercase font-semibold tracking-widest">
              Speakers
            </h2>
            <Link
              to="/speakers"
              onClick={() => {
                scrollTop();
              }}
            >
              <button className="btn-link mb-4">
                Shop <FiChevronRight className="ml-1 hover:text-orange-600" />
              </button>
            </Link>
          </div>
          <div className="product-block-element"></div>
        </div>
        <div className="product-wapper">
          <div className="product-container">
            <picture>
              <img className='2xl:h-[120px] xl:h-[120px] md:h-[100px]'
                src={require("../../assets/images/products-section/products-section-earphones-mobile.png")}
                alt="footer-promo"
              />
            </picture>
            <h2 className="uppercase font-semibold tracking-widest">
              Earphones
            </h2>
            <Link
              to="/earphones"
              onClick={() => {
                scrollTop();
              }}
            >
              <button className="btn-link mb-4">
                Shop <FiChevronRight className="ml-1 hover:text-orange-600" />
              </button>
            </Link>
          </div>
          <div className="product-block-element"></div>
        </div>
      </section>
    </>
  )
}

export default Speakers