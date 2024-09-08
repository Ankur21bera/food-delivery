import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../../Context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className="place-order">
       <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type="text" placeholder='first name' required />
          <input type="text" placeholder='Last Name' required/>
        </div>
        <input type="email" placeholder='Enter your email' />
        <input type="text" placeholder='street' />
        <div className='multi-fields'>
          <input type="text" placeholder='city' />
          <input type="text" placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='country' />
        </div>
        <input type="text" placeholder='phone' />
       </div>
       <div className='place-order-right'>
       <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fees</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
            <hr />
          </div>
          <button>Proceed To Payment</button>
        </div>
       </div>
    </form>
  )
}

export default PlaceOrder
