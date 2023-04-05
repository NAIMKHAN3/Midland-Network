import React, { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa'
import { ImCancelCircle } from 'react-icons/im'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => {
        setIsOpen(value => !value)
    }
    const navItem = 'text-lg md:ml-4 mb-1 hover:bg-neutral-100 px-5 py-1 rounden-md cursor-pointer font-semibold'
    const item = <ul className='flex md:items-center flex-col lg:flex-row md:justify-center'>
        <li><img className='w-[75px] hidden lg:block' src="/images/img-29.png" alt="" /></li>
        <li className={`${navItem}`}>Home</li>
        <li className={`${navItem}`}>About</li>
        <li className={`${navItem}`}>Services</li>
        <li className={`${navItem}`}>Downloads</li>
        <li className={`${navItem}`}>Training</li>
        <li className={`${navItem}`}>Billing</li>
        <li className={`${navItem}`}>Contact</li>
        <button className='font-semibold bg-cyan-400 rounded-full md:ml-4 mb-1 px-3 md:px-6 text-white py-1 md:py-2'>LogIn</button>
        <button className='font-semibold md:ml-4 mb-1 hover:text-indigo-500'>SignUp</button>

    </ul>
    return (
        <div className='p-4 shadow-sm border-b-[1px] w-full'>
            <div className='hidden lg:block'>

                {
                    item
                }
            </div>
            <div className='lg:hidden flex justify-center '>
                {
                    isOpen && <div className='absolute top-[65px]  bg-white rounded-md p-3'>
                        {
                            item
                        }
                    </div>
                }

            </div>
            <div className='lg:hidden flex justify-between'>
                <div><img className='w-[50px]' src="/images/img-29.png" alt="" /></div>
                {
                    isOpen ? <div><ImCancelCircle onClick={toggleIsOpen} className='text-2xl cursor-pointer' /></div> :
                        <div><FaAlignJustify onClick={toggleIsOpen} className='text-2xl cursor-pointer' /></div>
                }


            </div>
        </div>
    );
};

export default Navbar;