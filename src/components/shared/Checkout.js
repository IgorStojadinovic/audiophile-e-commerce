import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import {AiOutlineCheck} from 'react-icons/ai'
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
    getCartStatus,
    showCart,

} from '../../store/cartSlice';
const Checkout = () => {
    const cartStatus = useSelector(getCartStatus);
    const dispatch = useDispatch()
    const navigate = useNavigate();

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
    const [isOrderd,setIsOrdered] = useState(false);

    const [form,setForm] = useState({
        name:'',
        email:'',
        phone:'',
        address:'',
        zip:'',
        city:'',
        country:'',
        cardnumb:'',
        cardpin:'',
        paymenttype:''
    })
    
    const handleChange = e => {
        const {name,value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleOrder = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, left: 0 })
         dispatch(removeAll())
        setIsOrdered(true) 
    }

    

    return (
        <section className='px-4 py-4 bg-light-gray '>
            <Link onClick={() => { navigate(-1) }} className='text-black/50 my-4'>Go Back</Link>
                <form className='mt-4' onSubmit={handleOrder}>
                    <div className="bg-white flex flex-col px-8 py-8 rounded-lg">
                    <h1 className='text-3xl uppercase font-semibold'>Checkout</h1>
                    <h2 className='uppercase text-base font-semibold text-orange-main my-8'>Billing Details</h2>
                    <label htmlFor="name" className=' mb-2'>Name</label>
                    <input type='text' name="name" className='form-input' onChange={handleChange} required />
                    <label htmlFor="email" className='mt-4 mb-2'>Email Address</label>
                    <input type='email' name="email" className='form-input' onChange={handleChange}  required/>
                    <label htmlFor="phone" className='mt-4 mb-2'>Phone Number</label>
                    <input type='text' name="phone" className='form-input' onChange={handleChange}  required/>

                    <h2 className='uppercase text-base font-semibold text-orange-main my-8'>Shipping Info</h2>
                    <label htmlFor="address" className='mb-2'>Your Address</label>
                    <input type='text' name="address" className='form-input' onChange={handleChange}  required/>
                    <label htmlFor="zip" className='mt-4 mb-2'>ZIP Code</label>
                    <input type='text' name="zip" className='form-input' onChange={handleChange}  required/>
                    <label htmlFor="city" className='mt-4 mb-2'>City</label>
                    <input type='text' name="city" className='form-input' onChange={handleChange}  required/>
                    <label htmlFor="country" className='mt-4 mb-2'>Country</label>
                    <input type='text' name="country" className='form-input' onChange={handleChange}  required/>

                    <h2 className='uppercase text-base font-semibold text-orange-main my-8'>Payment Details</h2>
                    <div className='flex items-center border border-1 form-input'>
                        <input type="radio" id="e-money" name="paymenttype" value="e-Money"onChange={handleChange}  required/>
                        <p className='ml-4 font-semibold text-black'>e-Money</p>
                    </div>


                    <div className='flex items-center border border-1 form-input mt-4 p'>
                        <input className='peer/cash-on-delivery' type="radio" id="cash-on-delivery" name="paymenttype" value="Cash on Delivery" onChange={handleChange} />
                        <p className='ml-4 font-semibold text-black '>Cash on Delivery</p>
                    </div>
                    
                    <label htmlFor="e-money-numb" className='mt-4 mb-2'>e-Money Number</label>
                    <input type='text' name="cardnumb" className='form-input' onChange={handleChange}  required/>
                    <label htmlFor="e-money-pin" className='mt-4 mb-2'>e-Money PIN</label>
                    <input type='text' name="cardpin" className='form-input' onChange={handleChange}  required/>
                    </div>
                    {<div className=' h-full w-full mb-20'>
                    <section className='mt-8 px-8 py-8 bg-white  rounded-lg flex flex-col ' >
                        <h2 className='uppercase text-base font-semibold mb-6'>Summary</h2>

                        {
                            yxQuantity > 0 && <div className='flex justify-between items-start mt-6'>
                                <div className='bg-light-gray p-3 rounded-lg h-[64px] w-[64px] '>
                                    <img src={require('../../assets/images/earphones-page/yx1-wireless-mobile.png')} />
                                </div>
                                <div>
                                    <h1 className='text-xl font-semibold '>YX1</h1>
                                    <p className='font-semibold text-black/40'>$ 599</p>
                                </div>
                                <div className=' w-[20%] h-[40px]'>
                                    <p className='w-full text-right bg-light-gray/30 text-black/40'>
                                        x{yxQuantity}
                                    </p>
                                </div>
                            </div>
                        }

                        {
                            xx59Quantity > 0 && <div className='flex justify-between items-center mt-6'>
                                <div className='bg-light-gray p-3 rounded-lg h-[64px] w-[64px] '>
                                    <img src={require('../../assets/images/heaphone-page/xx59-mobile.png')} />
                                </div>
                                <div>
                                    <h1 className='text-xl font-semibold'>XX59</h1>
                                    <p className='font-semibold text-black/40'>$ 899</p>
                                </div>
                                <div className='w-[20%] h-[40px]'>
                                    <p className='w-full text-right text-black/40'>
                                        x{xx59Quantity}
                                    </p>
                                </div>
                            </div>
                        }

                        {
                            xx99mkIQuantity > 0 && <div className='flex justify-between items-center mt-6'>
                                <div className='bg-light-gray p-3 rounded-lg h-[64px] w-[64px] '>
                                    <img src={require('../../assets/images/heaphone-page/xx-99-mark-I-mobile.png')} />
                                </div>
                                <div>
                                    <h1 className='text-xl font-semibold'>XX99 I</h1>
                                    <p className='font-semibold text-black/40'>$ 1,750</p>
                                </div>
                                <div className='w-[20%] h-[40px]'>
                                    <p className='w-full text-right  text-black/40'>
                                        x{xx99mkIQuantity}
                                    </p>
                                </div>
                            </div>
                        }

                        {
                            xx99mkIIQuantity > 0 && <div className='flex justify-between items-center mt-6'>
                                <div className='bg-light-gray p-3 rounded-lg h-[64px] w-[64px] '>
                                    <img src={require('../../assets/images/heaphone-page/xx99-mark-II-mobile.png')} />
                                </div>
                                <div>
                                    <h1 className='text-xl font-semibold'>XX99 II</h1>
                                    <p className='font-semibold text-black/40'>$ 2,999</p>
                                </div>
                                <div className='w-[20%] h-full'>
                                    <p className='w-full  text-right text-black/40'>
                                        x{xx99mkIIQuantity}
                                    </p>
                                </div>
                            </div>
                        }

                        {
                            zx9Quantity > 0 && <div className='flex justify-between items-center mt-6'>
                                <div className='bg-light-gray p-3 rounded-lg h-[64px] w-[64px] '>
                                    <img src={require('../../assets/images/products/zx9-mobile.png')} />
                                </div>
                                <div>
                                    <h1 className='text-xl font-semibold'>ZX9</h1>
                                    <p className='font-semibold text-black/40'>$ 4,500</p>
                                </div>
                                <div className='w-[20%]'>
                                    <p className='w-full text-right text-black/40'>
                                        x{zx9Quantity}
                                    </p>
                                </div>
                            </div>
                        }

                        {
                            zx7Quantity > 0 && <div className='flex justify-between items-center mt-6'>
                                <div className='bg-light-gray p-3 rounded-lg h-[64px] w-[64px] '>
                                    <img src={require('../../assets/images/products/zx9-mobile.png')} />
                                </div>
                                <div>
                                    <h1 className='text-xl font-semibold'>ZX7</h1>
                                    <p className='font-semibold text-black/40'>$ 3,500 </p>
                                </div>
                                <div className='w-[20%]'>
                                    <p className='w-full text-right text-black/40'>
                                        x{zx7Quantity}
                                    </p>
                                </div>
                            </div>
                        }
                        <div className='flex justify-between mt-8 font-semibold'>
                            <p className='text-black/30 uppercase'>Total</p>
                            <p>${cart.length > 0 ? cart.map((item) => {
                                return item.total;
                            }).reduce((acc, curr) => acc + curr, 0).toLocaleString() : 0}</p>

                        </div>
                        <div className='flex justify-between mt-2 font-semibold'>
                            <p className='text-black/30 uppercase'>Shipping</p>
                            <p>$50</p>

                        </div>
                        <div className='flex justify-between mt-2 font-semibold'>
                            <p className='text-black/30 uppercase'>Vat (Included)</p>
                            <p>$1,079</p>

                        </div>
                        <div className='flex justify-between mt-2 font-semibold'>
                            <p className='text-black/30 uppercase'>Grand Total</p>
                            <p>${cart.length > 0 ? cart.map((item) => {
                                return item.total;
                            }).reduce((acc, curr) => acc + curr + 1129, 0).toLocaleString() : 0}</p>

                        </div>
                        <button className=' mt-6 shadow-none btn-orange w-full text-center'>
                            Continue & Pay
                        </button>
                    </section>
                </div>}
                
                {
                    isOrderd && 
                    <div className='absolute top-0 left-0 bg-black/50 h-screen'>
                    <div className='bg-white rounded-lg p-10 flex flex-col mt-[50%] mx-6 '>
                        <div className='mb-6 h-[50px] w-[50px] text-white text-xl bg-orange-main rounded-full flex justify-center items-center'>
                            <AiOutlineCheck />
                        </div>
                        <h1 className='uppercase font-semibold text-xl w-[65%] mb-6'> Thank you for your order</h1>
                        <p className='text-black/40 text-xs'>You will receive an email confirmation shortly</p>
    
                        <Link to="/">
                            <button className='btn-orange w-full mt-12'> Back to home </button></Link>
                    </div>
                </div>

                }
        
                </form>

        
           
        </section>

    )
}

export default Checkout