import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getXX59Quantity} from '../../store/cartSlice';
import {addItem,updateQuantity} from "../../store/cartSlice";
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import {FiChevronRight} from 'react-icons/fi';

const XX59 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const quantity = useSelector(getXX59Quantity);

    const handleSubtract = () => {
        if(quantity !== 0) {
           dispatch(updateQuantity({type:'remove-xx59'}))
        }
    }

    const hanbleAdd = () => {
        dispatch(updateQuantity({type:'add-xx59'}))
    }

    const addItems = (quantity) =>{
        if (quantity !== 0) {
            const item = {name:'xx59',total:899 * quantity,defaultPrice:889,quantity:quantity}
            dispatch(addItem(item));
        }
    }
    const scrollTop = () => {
      window.scrollTo({ top: 0, left: 0 })
    }
    useEffect(() => {
      scrollTop()
    },[])
  return (
      <>
          <section className='px-6 mb-[120px]'>
              <figure className='headphone-figure-product '>
                <Link onClick={() => { navigate(-1) }} className='text-black/50 my-4'>Go Back</Link>
                  <picture className='headphone-picture-product'>
                      <img src={require('../../assets/images/products/xx59-mobile.png')} alt="xx99-mark-2-headpnones" />
                  </picture>
                  <figcaption className='headphone-fig-caption-product '>
                      <h1 className='headphone-heading w-1/2'>XX59 headphones</h1>
                      <p className='headphone-text'>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                      <p className='price'>$ 899</p>
                      <div className='add-to-cart-container'>
                          <div className='add-to-cart-wapper'>
                              <div onClick={()=>{handleSubtract()}} className='subtract-btn' >
                                  -
                              </div>
                              <div className='quantity'>
                                  {quantity}
                              </div>
                              <div onClick={()=>{hanbleAdd()}} className='add-btn'>
                                  +
                              </div>
                          </div>
                          <button onClick={()=>{addItems(quantity)}}className='btn-orange justify-self-start w-1/2'>Add to cart</button>
                      </div>
                  </figcaption>
              </figure>
          </section>
          <section className='px-6 mb-[120px]'>
              <h2 className='text-2xl uppercase font-semibold mb-6'>Features</h2>
              <p className='mb-4 text-black/50'>
              These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. 
              </p>
              <p className='text-black/50'>
              More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.
              </p>
          </section>

          <section className='px-6 mb-[120px]'>
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
            <img src={require('../../assets/images/products/xx59-promo-mobile-1.png')} className='rounded-lg' alt="promo"/>
            <img src={require('../../assets/images/products/xx59-promo-mobile-2.png')} className='rounded-lg' alt="promo"/>
            <img src={require('../../assets/images/products/xx59-promo-mobile-3.png')} className='rounded-lg' alt="promo"/>
          </section>
          <section className='px-6 mb-[120px]'>
            <h2 className='yml-title'>You may also like</h2>
            <div className="yml-grid"> 
            <figure className='yml-container'>
                <picture className='yml-picture'>
                    <img src={require("../../assets/images/sugestions/xx-99-2-mobile.png")} className='py-3 pt' alt="xx99-mark-2-headpnones"/>
                </picture>
                    <h3 className='uppercase font-semibold text-xl'>XX99 Mark II</h3>
                    <Link to="/headphones/headphone-xx99-mark-2">
                      <button className='btn-orange'>See product</button>
                    </Link>
            </figure>
            <figure className='yml-container'>
                <picture className='yml-picture'>
                    <img src={require("../../assets/images/sugestions/xx99-mobile.png")} className='py-3 pt' alt="xx59-mark-headpnones"/>
                </picture>
                    <h3 className='uppercase font-semibold text-xl'>XX99 mark I</h3>
                    <Link to="/headphones/headphone-xx99-mark-1">
                      <button className='btn-orange'>See product</button>
                    </Link>
            </figure>
            <figure className='yml-container'>
                <picture className='yml-picture'>
                    <img src={require("../../assets/images/sugestions/zx9-mobile.png")} className='py-3 pt' alt="zx9-speakers"/>
                </picture>
                    <h3 className='uppercase font-semibold text-xl'>ZX9 Speaker</h3>
                    <Link to="/speakers/speaker-zx9">
                      <button className='btn-orange'>See product</button>
                    </Link>  
            </figure>
            </div>
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

export default XX59