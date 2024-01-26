
import { useNavigate,Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";
import {useQueryClient} from '@tanstack/react-query'
export const Header = () => {
const navigate = useNavigate()
const queryClient = useQueryClient()
const dispatch=useDispatch()
const user=useSelector((state)=>state.userState.user)

const handleLogout =()=>{
    navigate('/')
    dispatch(clearCart())
    dispatch(logoutUser())
    queryClient.removeQueries()
}
  return (
   <section
       className="bg-neutral py-2 text-neutral-content">
     <div 
        className="align-element flex justify-center sm:justify-end">
      {user ? ( 
        <div className="flex gap-x-2 sm:gap-x-8 items-center">
        <p 
        className="text-xs sm:text-sm">Hello {user.username}</p>
         <button 
         className="btn btn-xs btn-outline btn-primary" 
         onClick={handleLogout}>
            logout
         </button>
    </div> 
    ) : ( 
        <div className="flex gap-x-6 justify-center items-center">
        <Link to='/login' className='link link-hover text-xs sm:text-sm'>
            Sign in /Guest
        </Link>
        <Link to='/register' className='link link-hover text-xs sm:text-sm'>
            create Account
        </Link>
    </div>
    )}
    
   </div>
   </section>
  )
}
 export default Header