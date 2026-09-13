import  { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';


const Nav=() => {

    const [isOpen,setIsOpen]=useState(false)


    return (
       <nav className='sticky top-0 bg-white shadow-md'>
            <div className='flex  items-center justify-between px-5 py-4 '>

                {/* md screen er choto hole dekhabe */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RxHamburgerMenu size={25} />
        </button>

      {/* logo er jonno */}

                <div className='text-2xl'> 
                    
                     <img src="/assets/logo-text.png"alt="" />
                </div>
          <div>
            <ul className=' hidden md:flex items-center gap-6'>
              <li className='text-pink-600'>Home</li>
              <li className="text-gray-700" >Technologies</li>
              <li className="text-gray-700">Projects </li>
              <li className="text-gray-700"> About </li>
              <li className="text-gray-700">Center</li>
            </ul>

          </div>


{/* sign (in ,up) er jonno  */}

<div className='flex items-center gap-3'>
    <button className='text-sm'>Sign In</button>
    <button className='btn-primary bg-pink-600 text-white px-6 py-2 rounded-full'>Sign Up</button>
</div>
                
</div>
     {isOpen&& (
       <div className="md:hidden px-5 pb-5">
          <ul className="flex flex-col gap-4">
            <li className="text-pink-600">Home</li>
            <li className="text-gray-700">Technologies</li>
            <li className="text-gray-700">Projects</li>
            <li className="text-gray-700">About</li>
            <li className="text-gray-700">Contact</li>
          </ul>
        </div>
)}
</nav>
    );
};

export default Nav;