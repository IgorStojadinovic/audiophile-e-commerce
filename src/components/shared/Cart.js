import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import {
  getCart,
  removeAll,
  updateQuantity,
  getEarphoneQuantity,
  getZX9Quantity,
  addItem,
  getZX7Quantity,
  getXX59Quantity,
  getXX99MKIIQuantity,
  getXX99MKIQuantity,
  getShowCart,
  showCart,

} from '../../store/cartSlice';
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {

  const dispatch = useDispatch();

  let cart = useSelector(getCart);
  let displayCart = useSelector(getShowCart);
  let yxQuantity = useSelector(getEarphoneQuantity)
  let zx7Quantity = useSelector(getZX7Quantity);
  let zx9Quantity = useSelector(getZX9Quantity);
  let xx59Quantity = useSelector(getXX59Quantity)
  let xx99mkIIQuantity = useSelector(getXX99MKIIQuantity);
  let xx99mkIQuantity = useSelector(getXX99MKIQuantity);

  const [showEarphones, setShowEarphoens] = useState(false);
  const [showXX59, setShowXX59] = useState(false);
  const [showZX9, setShowZX9] = useState(false);
  const [showZX7, setShowZX7] = useState(false);
  const [showXXMARKII, setShowXXMARKII] = useState(false);
  const [showXXMARKI, setShowXXMARKI] = useState(false);

  
  useEffect(() => {
    if (cart.length) {
      cart.map((item) => {
        if (item.name === 'yx1') {
          setShowEarphoens(true)
        }
        if (item.name === 'xx59') {
          setShowXX59(true)
        }
        if (item.name === 'zx9') {
          setShowZX9(true)
        }
        if (item.name === 'zx7') {
          setShowZX7(true)
        }
        if (item.name === 'xx99mkII') {
          setShowXXMARKII(true)
        }
        if (item.name === 'xx99mkII') {
          setShowXXMARKII(true)
        }
        if (item.name === 'xx99mkI') {
          setShowXXMARKI(true)
        }

      })
    }
  }, [cart, yxQuantity])

  return (
    <>{displayCart && <div className='cart-bark-overlay'>
      <section className= 'cart-container' >
        <div onClick={() => { dispatch(showCart()); }} className='cart-close-btn'>
          <AiOutlineClose size={15} />
        </div>
        <div className='flex justify-between items-center mb-8'>
          <p className='font-semibold'>CART {cart.length ? <>( {cart.length} )</> : ""}</p>
          <a className="hover:cursor-pointer" onClick={() => { dispatch(removeAll()) }}>Remove all</a>
        </div>
        {(showEarphones && yxQuantity > 0) && <div className='flex justify-between items-center mt-6'>
          <div className='bg-light-gray p-3 rounded-lg h-[64px] w-[64px] '>
            <img src={require('../../assets/images/earphones-page/yx1-wireless-mobile.png')} />
          </div>
          <div>
            <h1 className='text-xl font-semibold'>YX1</h1>
            <p className='font-semibold text-black/40'>$ 599</p>
          </div>
          <div className='add-to-cart-container w-[40%] h-[40px] shadow-none'>
            <div className='add-to-cart-wapper w-full '>
              <div onClick={() => { dispatch(updateQuantity({ type: 'remove-yx1', defaultPrice: 599, name: 'yx1' })) }} className='subtract-btn' >
                -
              </div>
              <div className='quantity'>
                {yxQuantity}
              </div>
              <div onClick={() => { dispatch(updateQuantity({ type: 'add-yx1', defaultPrice: 599, name: 'yx1' })) }} className='add-btn'>
                +
              </div>
            </div>
          </div>
        </div>}
        {(showXX59 && xx59Quantity > 0) && <div className='flex justify-between items-center  mt-6'>
          <div className='bg-light-gray p-3 rounded-lg h-[64px] w-[64px]'>
            <img src={require('../../assets/images/heaphone-page/xx59-mobile.png')} />
          </div>
          <div>
            <h1 className='text-xl font-semibold'>XX59</h1>
            <p className='font-semibold text-black/40'>$ 899</p>
          </div>
          <div className='add-to-cart-container w-[40%] h-[40px] shadow-none'>
            <div className='add-to-cart-wapper w-full '>
              <div onClick={() => { dispatch(updateQuantity({ type: 'remove-xx59', defaultPrice: 899, name: 'xx59' })) }} className='subtract-btn' >
                -
              </div>
              <div className='quantity'>
                {xx59Quantity}
              </div>
              <div onClick={() => { dispatch(updateQuantity({ type: 'add-xx59', defaultPrice: 899, name: 'xx59' })) }} className='add-btn'>
                +
              </div>
            </div>
          </div>
        </div>}

        {(showXXMARKI && xx99mkIQuantity > 0) && <div className='flex justify-between items-center  mt-6'>
          <div className='bg-light-gray p-3 rounded-lg h-[64px] w-[64px]'>
            <img src={require('../../assets/images/heaphone-page/xx-99-mark-I-mobile.png')} />
          </div>
          <div>
            <h1 className='text-xl font-semibold'>XX99 I</h1>
            <p className='font-semibold text-black/40'>$ 1,750</p>
          </div>
          <div className='add-to-cart-container w-[40%] h-[40px] shadow-none'>
            <div className='add-to-cart-wapper w-full '>
              <div onClick={() => { dispatch(updateQuantity({ type: 'remove-markI', defaultPrice: 1750, name: 'xx99mkI' })) }} className='subtract-btn' >
                -
              </div>
              <div className='quantity'>
                {xx99mkIQuantity}
              </div>
              <div onClick={() => { dispatch(updateQuantity({ type: 'add-markI', defaultPrice: 1750, name: 'xx99mkI' })) }} className='add-btn'>
                +
              </div>
            </div>
          </div>
        </div>}

        {(showXXMARKII && xx99mkIIQuantity > 0) && <div className='flex justify-between items-center mt-6'>
          <div className='bg-light-gray p-3 rounded-lg h-[64px] w-[64px] '>
            <img src={require('../../assets/images/heaphone-page/xx99-mark-II-mobile.png')} />
          </div>
          <div>
            <h1 className='text-xl font-semibold'>XX99 II</h1>
            <p className='font-semibold text-black/40'>$ 2,999</p>
          </div>
          <div className='add-to-cart-container w-[40%] h-[40px] shadow-none'>
            <div className='add-to-cart-wapper w-full '>
              <div onClick={() => { dispatch(updateQuantity({ type: 'remove-markII', defaultPrice: 2999, name: 'xx99mkII' })) }} className='subtract-btn' >
                -
              </div>
              <div className='quantity'>
                {xx99mkIIQuantity}
              </div>
              <div onClick={() => { dispatch(updateQuantity({ type: 'add-markII', defaultPrice: 2999, name: 'xx99mkII' })); addItem('xx99mkII', xx99mkIIQuantity) }} className='add-btn'>
                +
              </div>
            </div>
          </div>
        </div>}


        {(showZX9 && zx9Quantity > 0) && <div className='flex justify-between items-center mt-6'>
          <div className='bg-light-gray p-3 rounded-lg h-[64px] w-[64px] '>
            <img src={require('../../assets/images/products/zx9-mobile.png')} />
          </div>
          <div>
            <h1 className='text-xl font-semibold'>ZX9</h1>
            <p className='font-semibold text-black/40'>$ 4,500</p>
          </div>
          <div className='add-to-cart-container w-[40%] h-[40px] shadow-none'>
            <div className='add-to-cart-wapper w-full '>
              <div onClick={() => { dispatch(updateQuantity({ type: 'remove-zx9', defaultPrice: 4500, name: 'zx9' })) }} className='subtract-btn' >
                -
              </div>
              <div className='quantity'>
                {zx9Quantity}
              </div>
              <div onClick={() => { dispatch(updateQuantity({ type: 'add-zx9', defaultPrice: 4500, name: 'zx9' })) }} className='add-btn'>
                +
              </div>
            </div>
          </div>
        </div>}

        {(showZX7 && zx7Quantity > 0) && <div className='flex justify-between items-center mt-6'>
          <div className='bg-light-gray p-3 rounded-lg h-[64px] w-[64px] '>
            <img src={require('../../assets/images/products/zx9-mobile.png')} />
          </div>
          <div>
            <h1 className='text-xl font-semibold'>ZX7</h1>
            <p className='font-semibold text-black/40'>$ 3,500 </p>
          </div>
          <div className='add-to-cart-container w-[40%] h-[40px] shadow-none'>
            <div className='add-to-cart-wapper w-full '>
              <div onClick={() => { dispatch(updateQuantity({ type: 'remove-zx7', defaultPrice: 3500, name: 'zx7' })) }} className='subtract-btn' >
                -
              </div>
              <div className='quantity'>
                {zx7Quantity}
              </div>
              <div onClick={() => { dispatch(updateQuantity({ type: 'add-zx7', defaultPrice: 3500, name: 'zx7' })) }} className='add-btn'>
                +
              </div>
            </div>
          </div>
        </div>}
        <div className='flex justify-between mt-8 font-semibold'>
          <p className='text-black/30 uppercase'>Total</p>
          <p>${cart.length > 0 ? cart.map((item) => {
            return item.total;
          }).reduce((acc, curr) => acc + curr, 0).toLocaleString() : 0}</p>
        </div>
        {cart.length > 0 ?
          <Link to="checkout" onClick={() => { dispatch(showCart()) }}>
            <button className=' mt-6 shadow-none btn-orange w-full   text-center  '>
              Checkout
            </button>
          </Link> : <button className='btn-orange-disabled mt-6 w-full text-center py-4 '>
            Checkout
          </button>}
      </section>
    </div>}
    </>

  )
}

export default Cart