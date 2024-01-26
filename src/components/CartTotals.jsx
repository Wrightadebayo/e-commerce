import { useSelector } from 'react-redux'
import { formatPrice } from '../utils'

const CartTotals = () => {
const {cartTotal,shipping,tax,orderTotal}= useSelector((state)=> state.cartState)
  return (
    <div className='card bg-base-200'>
      <div className='card-body'>
        {/* subtotal */}
        <p className='flex justify-between 
        text-xs border-b border-base-300 pb-2'>
          <span>subtotal</span>
          <span className='font-medium'>{formatPrice(cartTotal)}</span>
        </p>
        {/* subtotal */}
        <p className='flex justify-between 
        text-xs border-b border-base-300 pb-2'>
          <span>Shipping</span>
          <span className='font-medium'>{formatPrice(shipping)}</span>
        </p>
        
        {/* subtotal */}
        <p className='flex justify-between 
        text-xs border-b border-base-300 pb-2'>
          <span>tax</span>
          <span className='font-medium'>{formatPrice(tax)}</span>
        </p>
        <p className='flex justify-between 
        text-xs border-b border-base-300 pb-2'>
          <span>orderTotal</span>
          <span className='font-medium'>{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  )
}

export default CartTotals
