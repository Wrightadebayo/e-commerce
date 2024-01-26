import {useSelector } from 'react-redux';
import { CheckOutForm, SectionTitle, CartTotals } from '../components';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { store } from './../store';

export const loader=(store)=>()=>{
  const user = store.getState().userState.user

  if(!user){
    toast.warn('you must login to checkout')
    return redirect ('/login')
  }
  return null
}
const Checkout = () => {
  const cartTotal = useSelector((state)=>state.cartState.cartTotal)
   if(cartTotal === 0) {
    return <SectionTitle text='Your cart is empty' />;
    } 
    loader(store)
   return (
    <>
    <SectionTitle text ='place your order'/>
    <div 
      className='mt-8 grid gap-8 md:grid-cols-2 items-start'>
        <CheckOutForm />
        <CartTotals />
      </div>
      </>
       
  )
}

export default Checkout