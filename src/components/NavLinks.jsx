import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
      { id: 1, url: '/', text: 'Home' },
      { id: 2, url: 'about', text: 'About' },
      { id: 3, url: 'products', text: 'Products' },
      { id: 4, url: 'cart', text: 'Cart' },
      { id: 5, url: 'checkout', text: 'Checkout' },
      { id: 6, url: 'orders', text: 'Orders' },
    ];

const NavLinks = () => {
  const user =useSelector((state)=>state.userState.user)
  return (
    <>
      {links.map((link)=>{
        const {id,url,text}=link
        if((url === 'checkout' || url === 'order') && !user) return null
        return <li key={id}>
          <NavLink className='capitalize' to={url}>
            {text}
          </NavLink>
        </li>
      })}
    </>
  )
}

export default NavLinks







// import { NavLink } from "react-router-dom";

// const links = [
//     { id: 1, url: '/', text: 'Home' },
//     { id: 2, url: 'about', text: 'About' },
//     { id: 3, url: 'products', text: 'Products' },
//     { id: 4, url: 'cart', text: 'Cart' },
//     { id: 5, url: 'checkout', text: 'Checkout' },
//     { id: 6, url: 'orders', text: 'Orders' },
//   ];
  


// const NavLinks = () => {
//   return (
//     <ul  className="flex space-x-4">
//         {links.map((link)=>{
//             const {id,url,text}= link
//             return <li key={id}>
//         <NavLink className='capitalize' to={url}>{text}</NavLink>
//             </li>
//         })}
//     </ul>
//   )
// }



// export default NavLinks

