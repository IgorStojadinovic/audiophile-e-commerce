import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import {AiOutlineCheck} from 'react-icons/ai'
import {
    getCart,
    removeAll,
    getEarphoneQuantity,
    getZX9Quantity,
    getZX7Quantity,
    getXX59Quantity,
    getXX99MKIIQuantity,
    getXX99MKIQuantity,
    getSummary,
    showSummary

} from '../../store/cartSlice';
const Checkout = () => {
  
    const dispatch = useDispatch()
    const navigate = useNavigate();

    let cart = useSelector(getCart);
    let yxQuantity = useSelector(getEarphoneQuantity)
    let zx7Quantity = useSelector(getZX7Quantity);
    let zx9Quantity = useSelector(getZX9Quantity);
    let xx59Quantity = useSelector(getXX59Quantity)
    let xx99mkIIQuantity = useSelector(getXX99MKIIQuantity);
    let xx99mkIQuantity = useSelector(getXX99MKIQuantity);
    let summary = useSelector(getSummary);

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
        dispatch(showSummary())
        setIsOrdered(true) 
    }


    return (
        <section className='section-wapper'>
            <Link onClick={() => { navigate(-1) }} className='btn-back'>Go Back</Link>
                <form className='mt-4 form-container' onSubmit={handleOrder}>
                    <div className="form-input-wapper">
                    <h1 className='form-group-main-header'>Checkout</h1>
                    <h2 className='form-group-secondary-header'>Billing Details</h2>
                    <label htmlFor="name" className=' mb-2'>Name</label>
                    <input type='text' name="name" className='form-input' onChange={handleChange} required />
                    <label htmlFor="email" className='mt-4 mb-2'>Email Address</label>
                    <input type='email' name="email" className='form-input' onChange={handleChange}  required/>
                    <label htmlFor="phone" className='mt-4 mb-2'>Phone Number</label>
                    <input type='text' name="phone" className='form-input' onChange={handleChange}  required/>

                    <h2 className='form-group-secondary-header'>Shipping Info</h2>
                    <label htmlFor="address" className='mb-2'>Your Address</label>
                    <input type='text' name="address" className='form-input' onChange={handleChange}  required/>
                    <label htmlFor="zip" className='mt-4 mb-2'>ZIP Code</label>
                    <input type='text' name="zip" className='form-input' onChange={handleChange}  required/>
                    <label htmlFor="city" className='mt-4 mb-2'>City</label>
                    <input type='text' name="city" className='form-input' onChange={handleChange}  required/>
                    <label htmlFor="country" className='mt-4 mb-2'>Country</label>
                    <input type='text' name="country" className='form-input' onChange={handleChange}  required/>

                    <h2 className='form-group-secondary-header'>Payment Details</h2>
                    <div className='form-radio-wapper form-input'>
                        <input type="radio" id="e-money" name="paymenttype" value="e-Money"onChange={handleChange}  required/>
                        <p className='ml-4 font-semibold text-black'>e-Money</p>
                    </div>


                    <div className='form-radio-wapper  form-input mt-4 '>
                        <input className='peer/cash-on-delivery' type="radio" id="cash-on-delivery" name="paymenttype" value="Cash on Delivery" onChange={handleChange} />
                        <p className='ml-4 font-semibold text-black '>Cash on Delivery</p>
                    </div>
                    
                    <label htmlFor="e-money-numb" className='mt-4 mb-2'>e-Money Number</label>
                    <input type='text' name="cardnumb" className='form-input' onChange={handleChange}  required/>
                    <label htmlFor="e-money-pin" className='mt-4 mb-2'>e-Money PIN</label>
                    <input type='text' name="cardpin" className='form-input' onChange={handleChange}  required/>
                    </div>
                    {
                    <section className='form-summary-wapper' >
                        <h2 className='form-summary-header'>Summary</h2>

                        {
                            yxQuantity > 0 && <div className='form-item-wapper'>
                                <div className='form-item-image'>
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
                            xx59Quantity > 0 && <div className='form-item-wapper'>
                                <div className='form-item-image'>
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
                            xx99mkIQuantity > 0 && <div className='form-item-wapper'>
                                <div className='form-item-image'>
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
                            xx99mkIIQuantity > 0 && <div className='form-item-wapper'>
                                <div className='form-item-image'>
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
                            zx9Quantity > 0 && <div className='form-item-wapper'>
                                <div className='form-item-image'>
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
                            zx7Quantity > 0 && <div className='form-item-wapper'>
                                <div className='form-item-image'>
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
                        <div className='form-total-price'>
                            <p className='text-black/30 uppercase'>Total</p>
                            <p>${cart.length > 0 ? cart.map((item) => {
                                return item.total;
                            }).reduce((acc, curr) => acc + curr, 0).toLocaleString() : 0}</p>
                        </div>
                        <div className='form-pricing'>
                            <p className='text-black/30 uppercase'>Shipping</p>
                            <p>$50</p>
                        </div>
                        <div className='form-pricing'>
                            <p className='text-black/30 uppercase'>Vat (Included)</p>
                            <p>$1,079</p>
                        </div>
                        <div className='form-pricing'>
                            <p className='text-black/30 uppercase'>Grand Total</p>
                            <p>${cart.length > 0 ? cart.map((item) => {
                                return item.total;
                            }).reduce((acc, curr) => acc + curr + 1129, 0).toLocaleString() : 0}</p>
                        </div>
                        <button className='mt-6 shadow-none btn-orange w-full text-center'>
                            Continue & Pay
                        </button>
                    </section>
                }
                
                {
                    isOrderd && 
                    <div className='form-summary-success'>
                    <div className='form-summary-success-wapper'>
                        <div className='form-summary-success-icon'>
                            <AiOutlineCheck />
                        </div>
                        <h1 className='form-summary-success-title'> Thank you for your order</h1>
                        <p className='text-black/40 text-xs'>You will receive an email confirmation shortly</p>
                        <Link to="/" onClick={() => {dispatch(showSummary())}}>
                            <button className='btn-orange w-full mt-12'> Back to home </button></Link>
                    </div>
                </div>
                }
                </form>
        </section>

    )
}

export default Checkout