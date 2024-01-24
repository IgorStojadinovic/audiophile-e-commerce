import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEarphoneQuantity } from '../../store/cartSlice';
import { addItem, updateQuantity } from '../../store/cartSlice';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

const YX1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quantity = useSelector(getEarphoneQuantity);

  const handleSubtract = () => {
    if (quantity !== 0) {
      dispatch(updateQuantity({ type: 'remove', name: 'yxQuantity' }));
    }
  };

  const hanbleAdd = () => {
    dispatch(updateQuantity({ type: 'add', name: 'yxQuantity' }));
  };

  const addItems = (itemName, quantity) => {
    if (itemName === 'yx1' && quantity !== 0) {
      const item = {
        name: 'yx1',
        total: 599 * quantity,
        defaultPrice: 599,
        quantity: quantity,
        quantityKey: 'yxQuantity',
      };
      dispatch(addItem(item));
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <>
      <section className='px-6 pt-6 mb-[120px] md:px-10 xl:px-40 2xl:px-80'>
        <Link
          onClick={() => {
            navigate(-1);
          }}
          className='text-black/50 '
        >
          Go Back
        </Link>
        <figure className='indivitual-figure-product '>
          <picture className='indivitual-picture-product'>
            <img
              src={require('../../assets/images/products/yx-1-mobile.png')}
              alt='xx99-mark-2-headpnones'
            />
          </picture>
          <figcaption className='indivitual-fig-caption-product '>
            <p className='indivitual-subheading-product'>new product</p>
            <h1 className='indivitual-heading mr-5'>YX1 WIRELESS EARPHONES</h1>
            <p className='indivitual-text'>
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>

            <p className='price'>$ 599</p>
            <div className='add-to-cart-container'>
              <div className='add-to-cart-wapper'>
                <div
                  onClick={() => {
                    handleSubtract();
                  }}
                  className='subtract-btn'
                >
                  -
                </div>
                <div className='quantity'>{quantity}</div>
                <div
                  onClick={() => {
                    hanbleAdd();
                  }}
                  className='add-btn'
                >
                  +
                </div>
              </div>
              <button
                onClick={() => {
                  addItems('yx1', quantity);
                }}
                className='btn-orange justify-self-start w-1/2 md:w-[45%] '
              >
                Add to cart
              </button>
            </div>
          </figcaption>
        </figure>
      </section>
      <section className='px-6 mb-[120px] md:px-10 xl:px-40 2xl:px-80'>
        <h2 className='text-2xl uppercase font-semibold mb-6'>Features</h2>
        <p className='mb-4 text-black/50'>
          Experience unrivalled stereo sound thanks to innovative acoustic
          technology. With improved ergonomics designed for full day wearing,
          these revolutionary earphones have been finely crafted to provide you
          with the perfect fit, delivering complete comfort all day long while
          enjoying exceptional noise isolation and truly immersive sound.
        </p>
        <p className='text-black/50'>
          The YX1 Wireless Earphones features customizable controls for volume,
          music, calls, and voice assistants built into both earbuds. The new
          7-hour battery life can be extended up to 28 hours with the charging
          case, giving you uninterrupted play time. Exquisite craftsmanship with
          a splash resistant design now available in an all new white and grey
          color scheme as well as the popular classic black.
        </p>
      </section>

      <section className='px-6 mb-[120px] md:px-10 md:flex md:justify-between md:w-[70%] xl:px-40 2xl:px-80'>
        <h2 className='text-2xl uppercase font-semibold mb-6'>In the box</h2>
        <div>
          <div className='flex mb-2'>
            <p className='mr-6 text-orange-main'>2x</p>
            <p className='text-black/50'>Earphone Units</p>
          </div>
          <div className='flex mb-2'>
            <p className='mr-6 text-orange-main'>6x</p>
            <p className='text-black/50'>Multi-size Earplugs</p>
          </div>
          <div className='flex mb-2 '>
            <p className='mr-6 text-orange-main'>1x</p>
            <p className='text-black/50'>User Manual</p>
          </div>
          <div className='flex mb-2'>
            <p className='mr-6 text-orange-main'>1x</p>
            <p className='text-black/50'>USB-C Charging Cable</p>
          </div>
          <div className='flex mb-2'>
            <p className='mr-6 text-orange-main'>1x</p>
            <p className='text-black/50'>Travel Pouch</p>
          </div>
        </div>
      </section>
      <section className='promo'>
        <img
          src={require('../../assets/images/products/yx-1-promo-mobile-2.png')}
          className='rounded-lg w-full md:order-3'
          alt='promo'
        />
        <img
          src={require('../../assets/images/products/yx-1-promo-moible-1.png')}
          className='rounded-lg w-full md:order-1'
          alt='promo'
        />
        <img
          src={require('../../assets/images/products/yx-1-promo-mobile-3.png')}
          className='rounded-lg w-full md:order-2 md:row-span-2'
          alt='promo'
        />
      </section>
      <section className='px-6 mb-[120px] xl:px-40 2xl:px-80'>
        <h2 className='yml-title'>You may also like</h2>
        <div className='yml-grid'>
          <figure className='yml-container'>
            <picture className='yml-picture'>
              <source
                media='(min-width: 768px)'
                srcSet={require('../../assets/images/sugestions/xx99-tablet.png')}
              />

              <img
                src={require('../../assets/images/sugestions/xx99-mobile.png')}
                alt=''
              />
            </picture>
            <h3 className='uppercase font-semibold text-xl md:my-10'>
              XX99 Mark I
            </h3>
            <Link to='/headphones/headphone-xx99-mark-1'>
              <button className='btn-orange'>See product</button>
            </Link>
          </figure>
          <figure className='yml-container'>
            <picture className='yml-picture'>
              <source
                media='(min-width: 768px)'
                srcSet={require('../../assets/images/sugestions/xx59-tablet.png')}
              />
              <img
                src={require('../../assets/images/sugestions/xx559-mobile.png')}
                alt=''
              />
            </picture>
            <h3 className='uppercase font-semibold text-xl md:my-10'>XX59</h3>
            <Link to='/headphones/headphone-xx59'>
              <button className='btn-orange'>See product</button>
            </Link>
          </figure>
          <figure className='yml-container'>
            <picture className='yml-picture'>
              <source
                media='(min-width: 768px)'
                srcSet={require('../../assets/images/sugestions/zx9-tablet.png')}
              />
              <img
                src={require('../../assets/images/sugestions/zx9-mobile.png')}
                alt=''
              />
            </picture>
            <h3 className='uppercase font-semibold text-xl md:my-10'>
              ZX9 Speaker
            </h3>
            <Link to='/speakers/speaker-zx9'>
              <button className='btn-orange'>See product</button>
            </Link>
          </figure>
        </div>
      </section>
      <section className='products-sections'>
        <div className='product-wapper'>
          <div className='product-container'>
            <picture>
              <source
                media='(min-width: 375px)'
                srcSet={require('../../assets/images/products-section/product-section-headphone-mobile.png')}
              />
              <img
                className=' xl:h-[120px] md:h-[100px]'
                src={require('../../assets/images/products-section/products-section-headphone-desktop.png')}
                alt='footer-promo'
              />
            </picture>
            <h2 className='uppercase font-semibold tracking-widest'>
              Headphones
            </h2>
            <Link
              to='/headphones'
              onClick={() => {
                scrollTop();
              }}
            >
              <button className='btn-link mb-4'>
                Shop <FiChevronRight className='ml-1 hover:text-orange-600' />
              </button>
            </Link>
          </div>
          <div className='product-block-element'></div>
        </div>
        <div className='product-wapper'>
          <div className='product-container'>
            <picture>
              <source
                media='(min-width: 375px)'
                srcSet={require('../../assets/images/products-section/prodcut-section-speaker-mobile.png')}
              />
              <img
                className=' xl:h-[120px] md:h-[100px]'
                src={require('../../assets/images/products-section/product-section-speaker-desktop.png')}
                alt='footer-promo'
              />
            </picture>

            <h2 className='uppercase font-semibold tracking-widest'>
              Speakers
            </h2>
            <Link
              to='/speakers'
              onClick={() => {
                scrollTop();
              }}
            >
              <button className='btn-link mb-4'>
                Shop <FiChevronRight className='ml-1 hover:text-orange-600' />
              </button>
            </Link>
          </div>
          <div className='product-block-element'></div>
        </div>
        <div className='product-wapper'>
          <div className='product-container'>
            <picture>
              <source
                media='(min-width: 375px)'
                srcSet={require('../../assets/images/products-section/products-section-earphones-mobile.png')}
              />

              <img
                className=' xl:h-[120px] md:h-[100px]'
                src={require('../../assets/images/products-section/yx-1-desktop.png')}
                alt='footer-promo'
              />
            </picture>
            <h2 className='uppercase font-semibold tracking-widest'>
              Earphones
            </h2>
            <Link
              to='/earphones'
              onClick={() => {
                scrollTop();
              }}
            >
              <button className='btn-link mb-4'>
                Shop <FiChevronRight className='ml-1 hover:text-orange-600' />
              </button>
            </Link>
          </div>
          <div className='product-block-element'></div>
        </div>
      </section>
    </>
  );
};

export default YX1;
