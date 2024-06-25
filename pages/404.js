import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function NotFound() {

  const router = useRouter()  

  return (
    <section className='text-neutral-800 mx-auto w-fit flex flex-col items-center'>
        <p className='text-[20rem] font-bold mx-auto'>404</p>
        <p className='text-4xl font-semibold'>Page not found</p>
        <div className='flex gap-2 items-center mt-12'>
            <button onClick={() => router.back()} className='p-4 rounded-xl text-xl bg-white border shadow-xl'>Go back</button>
            <Link className='p-4 rounded-xl text-xl gradiant shadow-xl' href='/'>Go back to main page</Link>
        </div>
    </section>
  )
}



// import { Link } from "react-router-dom";
// import error from '../../assests/error.png';
// import '../404/errorpage.css'
// const NotFound = () => {
//   return (
//     <div className="notfound">
//       <div className="notfound__wrapper">
//         <div className="notfound__text">
//           <div className="texts">
//             <h1>Ooops...</h1>
//             <h2>Page not found</h2>
//             <p>
//               The page you are looking for doesn't exist or an other error
//               occured, go back to home page
//             </p>
//           </div>
//           <Link to={`/`}>
//             <button>Go back</button>
//           </Link>
//         </div>
//         <div className="notfound__img">
//           <img src={error} alt="error" />

//           {/* <video autoPlay loop muted>
//             <source src={404-error} type="video/mp4" />
//           </video>
//           <video src={error}/> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotFound;

