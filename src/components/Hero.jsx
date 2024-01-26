import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];
const Hero = () => {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl '>
          We’re changing the way people shop.
        </h1>

        <p className='mt-8 max-w-xl text-lg leading-8'>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo.
        </p>
        <div className='mt-10 '>
          <Link to='products' className='btn btn-primary '>
            Our Products
          </Link>
        </div>
      </div>
      <div className='hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box'>
        {carouselImages.map((image, index) => {
          return (
            <div key={image} className='carousel-item'>
              <img
                src={image}
                className='rounded-box h-full w-80  object-cover'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import hero1 from '../assets/hero1.webp';
// import hero2 from '../assets/hero2.webp';
// import hero3 from '../assets/hero3.webp';
// import hero4 from '../assets/hero4.webp';

// const carouselImages = [hero1, hero2, hero3, hero4];

// const Hero = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     // slidesToScroll: 1,
//   };

//   return (
//     <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
//       <div>
//         <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
//           We’re changing the way people shop.
//         </h1>

//         <p className='mt-8 max-w-xl text-lg leading-8'>
//           Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
//           cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
//           aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
//           qui lorem cupidatat commodo.
//         </p>
//         <div className='mt-10'>
//           <Link to='products' className='btn btn-primary'>
//             Our Products
//           </Link>
//         </div>
//       </div>
//       <div>
//         <Slider {...settings}>
//           {carouselImages.map((image, index) => (
//             <div key={index} className='carousel-item'>
//               <img src={image} className='rounded-box h-full w-80 object-cover' />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Hero;


























// import { Link } from 'react-router-dom';

// // import book from '../assets/book-3.png'
// import hero1 from '../assets/hero1.webp';
// import hero2 from '../assets/hero2.webp';
// import hero3 from '../assets/hero3.webp';
// import hero4 from '../assets/hero4.webp';

// const carouselImages = [hero1,hero2,hero3,hero4]


// const Hero = () => {
//   return <div className='grid lg:grid-cols-2 gap-24 items-center'>
//     <div>info</div>
//     <div className='hidden h-[28rem] lg:carousel carousel-center
//     p-4 space-x-4 bg-neutral rounded-box '>
//       {carouselImages.map((image)=>{
//         return <div key={image} className='carousel-item'>
//         <img src={image} className='rounded-box h-full 
//         w-80 object-cover'/>
//         </div>
//       })}
//     </div>

//   </div>
  
// }

// export default Hero


// const Hero = () => {
//   return (
//     <div className='grid lg:grid-cols-2 gap-24 items-center'>
//         <div>
//             <h1 className='max-w-2xl text-4xl font-bold 
//             tracking-tight
//              sm:text-6xl'>We are changing the way people live and shop</h1>
//         <p className='mt-8 max-w-xl text-lg leading-8'>Illustrate how coding contributes to solving real-world problems. Showcase inspiring stories of developers who have made a positive impact through their work, whether it's in healthcare, 
//         education, or environmental conservation.</p>
//         <div className='mt-10'>
//             <Link to='/products' className='btn btn-primary font-bold'>Our Products</Link>
//         </div>
//         </div>
//         <div className='hidden h-[28rem] 
//         lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>
//         {
//             carouselImages.map((image)=>{
//             return <div key={image} className='carousel-item'>
//                 <img src={image} className='rounded-box h-full w-80 object-cover'/>
//             </div>
//             })
//         }
//          </div>
//     </div>
//   )
// }

// export default Hero














