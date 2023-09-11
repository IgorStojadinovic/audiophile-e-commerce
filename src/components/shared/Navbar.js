import React, { useState } from 'react'
import { useLocation,Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { showCart,getCartStatus,getCart} from '../../store/cartSlice';
import MenuIcon from "../../assets/images/navbar/menu-icon.svg"
import Logo from "../../assets/images/navbar/audiophile 2.svg";
import Cart from "../../assets/images/navbar/cart.svg";
import {FiChevronRight} from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const dispatch = useDispatch()
  
  const [showMenu,setShowMenu] = useState(false)

  const cartStatus = useSelector(getCartStatus);
  const cart = useSelector(getCart);


  const isActiveHome = currentPath === '/';
  const isActiveHeadpnones= currentPath === '/headphones';
  const isActiveSpeakers = currentPath === '/speakers';
  const isActiveEarphones = currentPath === '/graphic-design';
   
  return (
    <>
    {isActiveHome ?
    <nav className="navbar-absolute">
        <ul className='nav-list-absolute'>
          <li className='nav-list-item' onClick={() => {setShowMenu(!showMenu)}}><img src={MenuIcon} alt="menu" /></li>
          <li className='nav-list-item'><img src={Logo} alt="logo" /></li>
          <li onClick={() => (dispatch(showCart()))} className='z-40'>
            <img src={Cart} alt="cart-icon" />  
          </li>
          {(cartStatus && cart.length > 0) && <div className='absolute right-5 top-7'>
          <span className="relative flex h-3 w-3 z-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-main ">  </span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-main"></span>
            </span>
          </div>}
        </ul>
      </nav> :
       <nav className="navbar">
       <ul className='nav-list'>
         <li className='nav-list-item' onClick={() => {setShowMenu(!showMenu)}}><img src={MenuIcon} alt="menu" /></li>
         <li className='nav-list-item'><img src={Logo} alt="logo" /></li>
         <li onClick={() => (dispatch(showCart()))} className='z-40'>
           <img src={Cart} alt="cart-icon" />  
         </li>
         {(cartStatus && cart.length > 0) && <div className='absolute right-5 top-7'>
         <span className="relative flex h-3 w-3 z-0">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-main ">  </span>
             <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-main"></span>
           </span>
         </div>}
       </ul>
     </nav>
       }
    <div className= {showMenu ?' z-[50] absolute transition ease-in-out delay-150  translate-x-[-1000px] w-full top-[145px] md:top-[200px]  h-[2000px]' : " z-[50] absolute transition ease-in-out delay-150  translate-x-0  w-full top-[145px] md:top-[200px] bg-black/50 h-[2000px]"}>
    <section className='products-sections bg-white pt-10 md:mt-0'>
      <Link to="headphones" onClick={() => { setShowMenu(!showMenu)}}>
        <div className='product-wapper'>
          <div className='product-container'>
            <img src={require('../../assets/images/headphone-mobile.png')} alt="headphone-icon"/>
            <h2 className='uppercase font-semibold tracking-widest'>Headphones</h2>
              <button className='btn-link mb-4 '>Shop <FiChevronRight className='ml-1 hover:text-orange-600'/></button>
          </div>
          <div className='product-block-element'></div>
        </div>
        </Link>
        <Link to="speakers" onClick={() => { setShowMenu(!showMenu)}}>
          <div className='product-wapper'>
            <div className='product-container'>
              <img src={require('../../assets/images/speaker-mobile.png')} alt="speaker-icon"/>
              <h2 className='uppercase font-semibold tracking-widest'>Speakers</h2>
                <button className='btn-link mb-4 '>Shop <FiChevronRight className='ml-1 hover:text-orange-600'/></button>
            </div>
            <div className='product-block-element'></div>
          </div>
        </Link>
        <Link to="earphones"onClick={() => { setShowMenu(!showMenu)}} >
        <div className='product-wapper'>
          <div className='product-container'>
            <img src={require('../../assets/images/earphones-mobile.png')} alt='eaphones-icon'/>
            <h2 className='uppercase font-semibold tracking-widest'>Earphones</h2>
              <button className='btn-link mb-4 '>Shop <FiChevronRight className='ml-1 hover:text-orange-600'/></button>
          </div>
          <div className='product-block-element'></div>
        </div>
        </Link>
      </section>
      </div>
    </>
  )
}

export default Navbar