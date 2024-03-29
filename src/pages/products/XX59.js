import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getXX59Quantity } from '../../store/cartSlice';
import { addItem, updateQuantity } from '../../store/cartSlice';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

const XX59 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quantity = useSelector(getXX59Quantity);

  const handleSubtract = () => {
    if (quantity !== 0) {
      dispatch(updateQuantity({ type: 'remove', name: 'xx59Quantity' }));
    }
  };

  const hanbleAdd = () => {
    dispatch(updateQuantity({ type: 'add', name: 'xx59Quantity' }));
  };

  const addItems = (quantity) => {
    if (quantity !== 0) {
      const item = {
        name: 'xx59',
        total: 899 * quantity,
        defaultPrice: 889,
        quantity: quantity,
        quantityKey: 'xx59Quantity',
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
      <section className='px-6 pt-6 mb-[120px] xl:px-40 2xl:px-80'>
        <Link
          onClick={() => {
            navigate(-1);
          }}
          className='text-black/50 my-4'
        >
          Go Back
        </Link>
        <figure className='indivitual-figure-product '>
          <picture className='indivitual-picture-product'>
            <img
              src={require('../../assets/images/products/xx59-mobile.png')}
              alt='xx99-mark-2-headpnones'
            />
          </picture>
          <figcaption className='indivitual-fig-caption-product '>
            <h1 className='indivitual-heading w-1/2'>XX59 headphones</h1>
            <p className='indivitual-text'>
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <p className='price'>$ 899</p>
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
                  addItems(quantity);
                }}
                className='btn-orange justify-self-start w-1/2'
              >
                Add to cart
              </button>
            </div>
          </figcaption>
        </figure>
      </section>
      <section className='px-6 mb-[120px] xl:px-40 2xl:px-80'>
        <h2 className='text-2xl uppercase font-semibold mb-6'>Features</h2>
        <p className='mb-4 text-black/50'>
          These headphones have been created from durable, high-quality
          materials tough enough to take anywhere. Its compact folding design
          fuses comfort and minimalist style making it perfect for travel.
          Flawless transmission is assured by the latest wireless technology
          engineered for audio synchronization with videos.
        </p>
        <p className='text-black/50'>
          More than a simple pair of headphones, this headset features a pair of
          built-in microphones for clear, hands-free calling when paired with a
          compatible smartphone. Controlling music and calls is also intuitive
          thanks to easy-access touch buttons on the earcups. Regardless of how
          you use the XX59 headphones, you can do so all day thanks to an
          impressive 30-hour battery life that can be rapidly recharged via
          USB-C.
        </p>
      </section>

      <section className='px-6 mb-[120px] md:flex md:justify-between md:w-[70%] xl:px-40 2xl:px-80'>
        <h2 className='text-2xl uppercase font-semibold mb-6'>In the box</h2>
        <div>
          <div className='flex mb-2'>
            <p className='mr-6 text-orange-main'>1x</p>
            <p className='text-black/50'>Headphone Unit</p>
          </div>
          <div className='flex mb-2'>
            <p className='mr-6 text-orange-main'>2x</p>
            <p className='text-black/50'>Replacment Earcups</p>
          </div>
          <div className='flex mb-2 '>
            <p className='mr-6 text-orange-main'>1x</p>
            <p className='text-black/50'>User Manual</p>
          </div>
          <div className='flex mb-2'>
            <p className='mr-6 text-orange-main'>1x</p>
            <p className='text-black/50'>3.5mm 5m Audio Cable</p>
          </div>
        </div>
      </section>
      <section className='promo'>
        <img
          src={require('../../assets/images/products/xx59-promo-mobile-1.png')}
          className='rounded-lg md:order-3 md:w-full'
          alt='promo'
        />
        <img
          src={require('../../assets/images/products/xx59-promo-mobile-2.png')}
          className='rounded-lg md:order-1 md:w-full'
          alt='promo'
        />
        <img
          src={require('../../assets/images/products/xx59-promo-mobile-3.png')}
          className='rounded-lg md:order-2 md:row-span-2 md:w-full'
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
                alt='footer-promo'
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
                srcSet={require('../../assets/images/sugestions/xx-99-2-tablet.png')}
              />
              <img
                src={require('../../assets/images/sugestions/xx-99-2-mobile.png')}
                alt='footer-promo'
              />
            </picture>
            <h3 className='uppercase font-semibold text-xl md:my-10'>
              XX99 Mark II
            </h3>
            <Link to='/headphones/headphone-xx99-mark-2'>
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
                alt='footer-promo'
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

export default XX59;
